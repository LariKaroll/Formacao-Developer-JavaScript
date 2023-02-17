/*Faça um programa para calcular o valor de uma viagem.

voce tera 3 variaveis. Sendo elas:
- 1 preço do combustivel;
- 2 gasto medio de combustivel do carro por KM;
- 3 distancia em KM da viagem;

Imprima no console o valor que sera gasto para realizar esta viagem */

function valorMedio(distaciaKM, kmPorLitro) {
    return distaciaKM/kmPorLitro;
}
function valorTotal(litrosGasto,precoCombustivel) {
    return litrosGasto*precoCombustivel;
}

(function(){
    const precoCombustivel = 4.29;
    const kmPorLitro = 12;
    const distanciaKm = 1208;

    const litrosGasto = valorMedio(distanciaKm,kmPorLitro) ;
    const gastoCombustivel = valorTotal(litrosGasto,precoCombustivel);

    console.log(`${litrosGasto.toFixed(1)}L`);
    console.log(`R$${gastoCombustivel.toFixed(2)}`);  
})();
