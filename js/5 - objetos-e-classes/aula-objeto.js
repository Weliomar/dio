//Objeto: Ja utilizamos o objeto mas nao sabemos por exemplo: console // é um objeto

// estavamos atribuindo valor de forma literal, exemplo. 
/*
const numero = 10;
const meuNome = 'weliomar';

// Agora como objeto 

//objeto cadastro
const cadastro = {
    nome: 'Weliomar Ferreira',
    idade: 31,
    trabalho: 'Analista de sistema'
};

//Pode ser alterado do lado de fora valores do objeto cadastro 
    cadastro.altura = 1.64; // adicionando valor
    delete cadastro.trabalho // deletando algum valor do objeto cadastro

console.log(cadastro.nome);
console.log(cadastro.idade);
console.log(cadastro);
*/
/*
    Objeto é uma coleção dinamica de chave e valor. 
    Uma FUNCTION dentro de um OBJETO é um METODO. 
*/


//2º exemplo 
const pessoa = {
    nome: 'Weliomar Ferreira',
    idade: 31,
    trabalho: 'Analista de sistema',

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

//pessoa.nome = 'Anna';
//pessoa.idade = 26;

pessoa.descrever();

pessoa.descrever = function () {
    console.log(`Meu nome é ${this.nome}`)
}

pessoa.descrever();
