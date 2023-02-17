/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/ 

class pessoas{
    nome;
    peso;
    altura;
    IMC;

    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.IMC = peso/(Math.pow(altura,2));
    }
    
    descrever(IMC){
        console.log(`Meu IMC = ${this.IMC}`);
    if(this.IMC < 18.5){
        console.log (`Você está a baixo do peso, com a média de ${this.IMC.toFixed(1)}`);
    }else if (this.IMC >= 18.5 && this.IMC < 25) {
        console.log (`Você está com peso normal, com a média de ${this.IMC.toFixed(1)}`);
    }else if(this.imc >= 25 && this.IMC < 30){
        console.log (`Você está acima do peso, com a média de ${this.IMC.toFixed(1)}`);
    }else if(this.imc >= 30 && this.IMC < 40){
        console.log (`Você está obeso, com a média de ${this.IMC.toFixed(1)}`);
    }else if(this.IMC >= 40 ){
        console.log (`Você está com obesidade grave, com a média de ${this.IMC.toFixed(1)}`);
    }
    }

}

const José = new pessoas('José', 70, 1.75,);

José.descrever();