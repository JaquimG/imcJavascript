const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    if(!peso && !altura){
        setResultado('Peso e altura inválidos',false);
        return;
    }
    if(!peso){
        setResultado('Peso inválido', false);
        return;
    }
    if(!altura){
        setResultado('Altura inválida', false);
        return;
    }
    const imc = getIMC(peso,altura);
    const nivel = retornaNivel(imc);
    const msg = 'Seu IMC é ' + imc + ', ' + nivel;
    setResultado(msg, true);
    
});

function retornaNivel(imc){
    const nivel = ['você está muito abaixo do peso', 'você está abaixo do peso ideal', 'você está em um peso considerado normal', 
    'você está acima do peso', 'você está com obesidade grau I', 'você está com obesidade grau II', 'você está com obesidade grau III'];

    if(imc < 17){
        return nivel[0];
    }
    if(imc >= 17 && imc < 18.49){
        return nivel[1];
    }
    if(imc >= 18.49 && imc < 24.99){
        return nivel[2];
    }
    if(imc >= 24.99 && imc < 29.99){
        return nivel[3];
    }
    if(imc >= 29.99 && imc < 34.99){
        return nivel[4];
    }
    if(imc >= 34.99 && imc < 39.99){
        return nivel[5];
    }
    if(imc >= 40){
        return nivel[6];
    }
}

function getIMC(peso, altura) {
   const imc = peso / altura**2;
   return imc.toFixed(2); 
}

function criaParagrafo(){
    const paragrafo = document.createElement('p');
    return paragrafo;
}
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaParagrafo();
    
    if (isValid) {
        p.classList.add('pV');
    }else{
        p.classList.add('pI');
    }
    
    p.innerHTML = msg;
    resultado.appendChild(p);

}