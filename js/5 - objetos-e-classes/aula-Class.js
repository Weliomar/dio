

class Pessoa {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

const pessoa1 = new Pessoa( 'Weliomar1', 31);
//pessoa1.nome = 'Weliomar'
//pessoa1.idade = 31;

const pessoa2 = new Pessoa('anna', 26);
//pessoa2.nome = 'anna';
//pessoa2.idade = 26; 

console.log(pessoa1);
console.log(pessoa2);

//puxando da function dentro da classe
pessoa1.descrever();
pessoa2.descrever();


const vitor = new Pessoa('Vitor', 26)

console.log(vitor)