function calcularIMC(peso,altura) {
    return  peso/Math.pow(altura,2);
}

function classificacaoIMC(imc) {
    if(imc < 18.5){
        return 'Você está a baixo do peso, com a média de ' +imc.toFixed(1);
}else if (imc >= 18.5 && imc < 25) {
    return 'Você está com peso normal, com a média de ' +imc.toFixed(1);
}else if(imc >= 25 && imc < 30){
    return 'Você está acima do peso, com a média de ' +imc.toFixed(1);
}else if(imc >= 30 && imc < 40){
    return 'Você está obeso, com a média de ' +imc.toFixed(1);
}else if(imc >= 40 ){
    return 'Você está com obesidade grave, com a média de ' +imc.toFixed(1);
}
}

(function(){
const peso = 70;
const altura = 1.7;
const imc = calcularIMC(peso,altura);
console.log(classificacaoIMC(imc))
})();






