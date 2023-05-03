/*
    Faça um programa para calcular o valor de uma viagem.
    
    voce tera 3 variaveis. Sendo elas:
        - Preço do combustivel
        - Gasto medio de combustivel do carro por KM
        - Distancia em KM da viagem
*/

let valorCombustivel = 5 // 5 reais o litro
let gastoMedioKm = 10 // 10 km por litro
let distanciaKm = 100  // ponto A ao ponto B - 50 km

// Se 1 litro é igual 10 km, 5 litros = 50 km

console.log('O total da viagem é R$',valorCombustivel / gastoMedioKm * distanciaKm,'Reais') 