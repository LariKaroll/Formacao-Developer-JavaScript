/*
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/ 

function calculoMedia(nota1,nota2,nota3) {
    return (nota1+nota2+nota3)/3;
}

function classificacaoNotas(valorMedio) {
    if(valorMedio<=5){
        return 'reprovado';
    }else if(valorMedio>5&&valorMedio<=7){
        return 'recuperação';
    }else if(valorMedio>7){
        return 'pasou de semestre';
    }
}
(function () {
    let nota1 = 5.5;
    let nota2 = 10;
    let nota3 = 7.5;
    let valorMedio = calculoMedia(nota1,nota2,nota3);

    console.log(valorMedio.toFixed(1));
    console.log(classificacaoNotas(valorMedio));
})();

