/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class cars{
    color;
    marca;
    gastoPorLitro;

    constructor(color,marca,gastoPorLitro){
        this.color = color;
        this.marca = marca;
        this.gastoPorLitro = gastoPorLitro;
    }
    descrever(){
        console.log(`o carro da cor ${this.color}, marca ${this.marca}, gastando por litro ${this.gastoPorLitro}L `);
    }
}

const car1 = new cars('Red','Fiat',12);
const car2 = new cars('White','BMW',10);
const car3 = new cars('Black','Mercedes',8);
const car4 = new cars('Gray','Honda',15);

function gastoMedio(car1,distanciaKM){
    return distanciaKM/car1.gastoPorLitro;
}

function valorTotalGasosa(consumoMedio,valorGasosa) {
        return consumoMedio*valorGasosa;
    }
(function(){
    const valorGasosa = 5.08;
    const distanciaKM = 1200;
    
    const consumoMedio = gastoMedio(car1,distanciaKM);
    const valorTotal = valorTotalGasosa(consumoMedio,valorGasosa);

    console.log(`Você consumirar ${consumoMedio}L, e gastará R$${valorTotal} com `);
    car1.descrever();
    // car2.descrever();
    // car3.descrever();
    // car4.descrever();
})();

