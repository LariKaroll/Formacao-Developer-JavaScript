
const notas=[];

notas.push(10);
notas.push(4);
notas.push(8);
notas.push(7);
notas.push(5);
notas.push(9);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma += nota;
}

const media = soma/notas.length;
console.log(media.toFixed(1));





// const alunos = ['João','Vitor','Marina'];

// alunos.push('Larissa');

// alunos[4] = 'Vini';

// console.log(alunos);

// console.log(alunos.pop());

// console.log(alunos);

// console.log(alunos.shift());

// console.log(alunos);