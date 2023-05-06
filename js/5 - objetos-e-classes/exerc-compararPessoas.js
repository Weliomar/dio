class Pessoa {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2022 - idade;
    }
   
}

function compararPessoas(pessoa1, pessoa2){
    if(pessoa1.idade > pessoa2.idade){
        console.log(`${pessoa1.nome} é mais velho(a) que ${pessoa2.nome}`)
    }else if (pessoa2.idade > pessoa1.idade){
        console.log(`${pessoa2.nome} é mais velho(a) que a ${pessoa1.nome}`)
    } else {
        console.log(`${pessoa1.nome} e ${pessoa2.nome} tem a mesma idade.`)
    }
}

const weliomar = new Pessoa('weliomar', 31);
const anna = new Pessoa('anna', 26); 

compararPessoas(weliomar, anna)