/*
3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".
*/

const nomes = ['Vanessa','Felipe','Lucas','Miguel','Veronica','Larissa'];

for (let i = 0; i < nomes.length; i++) {
    const nomeC = nomes[i];
    if(nomeC == 'V'){
        console.log(nomeC);
    }
}