
/*
(function () {
   console.log(escreverNome());
}())

function escreverNome() {
    return 'Weliomar Ferreira'   
}
*/

/*
function escreverNome(nome) {
    console.log('Meu nome é ' + nome)
}

escreverNome('vitor');
escreverNome('Weliomar')
*/

function incrementarJuros(valor, percentualDeJuros) {
    const incremento = (percentualDeJuros / 100) * valor;
    return valor + incremento;
}

console.log(incrementarJuros(100,10));

