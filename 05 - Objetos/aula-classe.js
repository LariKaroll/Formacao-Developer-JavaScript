class pessoa{
    nome;
    idade;
    anoDeNascimento;

    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`); 
    }
}

function compararPessoas(p1,p2) {
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    }else if(p1.idade < p2.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    }else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const vitor = new pessoa('Vitor',25);
const lari = new pessoa('Larissa',18);

compararPessoas(lari, vitor);




// classe e uma definição de como teria que ser

// const Lari = new pessoa('Larissa', 18);

// const renan = new pessoa('Renan', 30);

// renan.descrever();
// Lari.descrever();

// console.log(Lari);