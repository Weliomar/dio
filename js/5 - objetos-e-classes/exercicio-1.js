class Carros{
    marca;
    cor;
    gastoMedioCombustivelPorKm;

    constructor(marca, cor, gastoMedioCombustivelPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioCombustivelPorKm = gastoMedioCombustivelPorKm;
    }

    calcularGasto(distanciaKm, valorCombustivel) {
        const valorGasto = distanciaKm * this.gastoMedioCombustivelPorKm  * valorCombustivel;
        return console.log(`O valor do combustivel é ${valorCombustivel} a distancia é ${distanciaKm}KM e o valor gasto é ${valorGasto}`);
    }
}

const celta = new Carros('Ford', 'vermelho', 1/12);
celta.calcularGasto(70,5);

const gol = new Carros('Wolks', 'branco', 1/10)
gol.calcularGasto(70,5);


/*
1) 
Crie uma classe para representar carros. 
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.

Crie um método que dê a quantidade de quilômetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.

*/