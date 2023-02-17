/*
4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;
*/
const x = 10;
for (let i = 0; i < 40; i++) {
    const resultX = x+i;
    if(resultX %2 === 0){
        console.log(`Numeros Pares = ${resultX}`);
    }else{
        console.log(`Numeros Impar = ${resultX}`);
    }
}