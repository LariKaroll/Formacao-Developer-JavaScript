/*
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
    */ 

    const nota1 = 6.6;
    const nota2 = 2.0;
    const nota3 = 5.0;
    const mediaNota = (nota1+nota2+nota3)/3;

    if(mediaNota < 5){
        console.log(`Sua nota foi de ${mediaNota.toFixed(1)} então você está reprovado!!`);
    }else if(mediaNota >= 5 && mediaNota <= 7 ){
        console.log(`Sua nota foi de ${mediaNota.toFixed(1)} então você esta de recuperação!!`);
    }else if(mediaNota > 7){
        console.log(`Sua nota foi de ${mediaNota.toFixed(1)} então esta aprovado!!`);
    }
    