//Solução do desafio.
/* 
//Solução pessoal 

let valorCombustivel = 5.79 // 5 reais o litro
let gastoMedioKm = 12 // 10 km por litro
let distanciaKm = 1580  // ponto A ao ponto B - 50 km

// Se 1 litro é igual 10 km, 5 litros = 50 km

console.log('O total da viagem é R$',valorCombustivel / gastoMedioKm * distanciaKm,'Reais') 
*/

//Solução do professor
let valorCombustivel = 3; // 5 reais o litro
let gastoMedioKm = 12; // 10 km por litro
let distanciaKm = 1580;  // ponto A ao ponto B - 50 km

//let valorGasto = distanciaKm / gastoMedioKm * valorCombustivel;
let valorGasto =  distanciaKm / gastoMedioKm * valorCombustivel;
//let valorGasto = litrosConsumidos * valorCombustivel;
console.log(valorGasto.toFixed(2)); 
//toFixed retorna uma string com o valor de casas decimais após o ponto decimal, nesse exemplo 2 -> Ao inves de vir um numero 762.3499999999999 ira retornar um numero 762.35