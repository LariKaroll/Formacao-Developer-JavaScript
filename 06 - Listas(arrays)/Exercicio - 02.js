/*
    2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.
*/
const x = [];

x.push(1);
x.push(2);
x.push(3);
x.push(4);
x.push(5);
x.push(6);
x.push(7);
x.push(8);
x.push(9);

for (let i = 0; i < x.length; i++) {
    const numeros = x[i];
    if(numeros %2 === 0){
        console.log(`Numeros Par = ${numeros}`);
    }else{
        console.log(`Numeros Impar = ${numeros}`);
    }
}