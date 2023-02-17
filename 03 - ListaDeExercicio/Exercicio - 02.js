/*
    2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsesidade Grave;
*/

const peso = 70;
const altura = 1.7;

const resultImc = peso/(Math.pow(altura,2));

if(resultImc < 18.5){
    console.log(`Você está a baixo do peso, com a média de ${resultImc.toFixed(1)}`);
}else if (resultImc >= 18.5 && resultImc < 25) {
    console.log(`Você está com peso normal, com a média de ${resultImc.toFixed(1)}`);
}else if(resultImc >= 25 && resultImc < 30){
    console.log(`Você está acima do peso, com a média de ${resultImc.toFixed(1)}`);
}else if(resultImc >= 30 && resultImc < 40){
    console.log(`Você está obeso, com a média de ${resultImc.toFixed(1)}`);
}else if(resultImc >= 40 ){
    console.log(`Você está com obesidade grave, com a média de ${resultImc.toFixed(1)}`);
}
    
