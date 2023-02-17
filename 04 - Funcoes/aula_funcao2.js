function escrevaMeuNome(nome){
    return `Meu nome é ${nome} `;
}

function maiorIdade(idade){
    if(idade<18){
        console.log(`${escrevaMeuNome('Larissa')}e tenho ${idade} anos, e sou menor de idade`);
    }else if(idade >=18){
        console.log(`${escrevaMeuNome('Larissa')}e tenho ${idade} anos, e sou maior de idade`);
    }
}

maiorIdade(20);