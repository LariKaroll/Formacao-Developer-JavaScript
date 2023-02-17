/*
1) Crie um programa que dado um número imprima a sua tabuada.
*/

const numero = 4;
const resutado = 0;

for (let i = 0; i < 11; i++) {
    const tabuada = numero*(i);
    console.log(`${numero} X ${i} = ${tabuada}`);
}