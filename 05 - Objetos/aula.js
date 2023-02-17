// dinamico

// função dentro de um objeto se chama metodo

const pessoa ={
    nome: 'Larissa Karoline',
    idade:18,

    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

const atributo = 'idade';
// anotaçao de coleção
console.log(pessoa['nome']);

//pessoa.nome = 'Marcos';
//pessoa.idade = 30;

//pessoa.descrever();
// posso add mais valores
//lari.altura= 1.7;

// posso remover um valor
// delete lari.nome;


// console.log(lari.nome);
// console.log(lari.idade);
// console.log(lari);