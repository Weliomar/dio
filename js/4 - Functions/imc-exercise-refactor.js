// Refatorar o calculo do IMC utilizando funções.

//Main
(function (){
    const imc = calcularImc(64, 1.64);
    console.log('IMC é igual',imc.toFixed(2),'e', resultadoImc(imc));
}())

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function resultadoImc(imc) {
    if (imc === 0) {
        return 'Erro no peso'
    } else if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc > 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc > 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc > 30 && imc < 40) {
        return 'Obeso';
    } else if (imc > 40) {
        return 'Obsesidade Grave';
    }
}