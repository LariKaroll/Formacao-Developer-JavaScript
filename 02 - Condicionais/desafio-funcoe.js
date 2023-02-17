/*Faça um program para calcular o valor de uma viagem 

Você tera 5 variaveis. Sendo elas: 

1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustivel que está no seu carro;
4 - Gasto médio do combustivel do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar está viagem
*/ 

function mediaKM(kmPorLitro,distanciaKM) {
    return kmPorLitro/distanciaKM;
}
function classificacaoTotal(gastoMedio,tipoCombustivel,precoEtanol,precoGasolina){
    if(tipoCombustivel === 'gasolina'){
        return gastoMedio*precoGasolina;
    }else if(tipoCombustivel === 'etanol'){
        return gastoMedio*precoEtanol;
    }
}
(function(){
    const precoEtanol = 4.44;
    const precoGasolina = 5.08;
    const tipoCombustivel = 'gasolina';
    const gastoKmCarro = 12;
    const distaciaKM = 1200;

    const gastoMedio = mediaKM(distaciaKM,gastoKmCarro);
    const valorTotal = classificacaoTotal(gastoMedio,tipoCombustivel,precoEtanol,precoGasolina)


    console.log(`${gastoMedio}L`);
    console.log(`R$${valorTotal}`);
})();
