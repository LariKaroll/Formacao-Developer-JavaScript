/*Faça um program para calcular o valor de uma viagem 

Você tera 5 variaveis. Sendo elas: 

1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustivel que está no seu carro;
4 - Gasto médio do combustivel do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar está viagem
*/ 

const precoEtanol = 4.44;
const precoGasolina = 5.08;
const tipoCombustivel = 'gasolina';
const gastoKmCarro = 12;
const distaciaKM = 1200;

const gastoMedio = distaciaKM/gastoKmCarro;

if(tipoCombustivel === 'etanol'){
    let valorTotal = gastoKmCarro*precoEtanol;
    console.log(`Você gastará por andar ${gastoKmCarro.toFixed(2)}, R$${valorTotal}`);
}else{
    let valorTotal = gastoKmCarro*precoGasolina;
    console.log(`Você gastará por andar ${gastoKmCarro}KM, R$${valorTotal.toFixed(2)}`);
}