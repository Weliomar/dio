// Exercicio numero 2 - Calculo do IMC 

let peso = 64;
let altura = 1.64;

let imc2 = peso / (altura * altura);
//outra forma de fazer a formula acima
let imc = peso / Math.pow(altura, 2); //Declarei outra variavel imc2 e no final coloquei um Meth.pow

console.log('IMC é igual ',imc.toFixed(2));

if (imc === 0) {
    console.log('Erro no peso')
}
else if(imc < 18.5){
    console.log('Abaixo do peso')
}
else if(imc > 18.5 && imc < 25){
    console.log('Peso normal')
}
else if(imc > 25 && imc < 30){
    console.log('Acima do peso')
}
else if(imc > 30 && imc < 40){
    console.log('Obeso')
}
else if(imc > 40){
    console.log('Obsesidade Grave')
}