/*
5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4]
*/

const notas = [2, 7, 3, 0, 10, 4];
let soma=0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma+=nota;
}

function classificacaoNotas(mediaNotas){
    if(mediaNotas<=5){
        return `Recuperação com a nota = ${mediaNotas.toFixed(1)}`;
    }else if(mediaNotas>5){
        return `Aprovado com a nota = ${mediaNotas.toFixed(1)}`;
    }
}

(function(){
    const mediaNotas = soma/notas.length;
    const notaFinal = classificacaoNotas(mediaNotas);

    console.log(notaFinal);
})();