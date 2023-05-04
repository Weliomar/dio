let precoEtanol = 3;
let preçoGasolina = 5.79;
let TipoCombustivel = 'Etanol';
let kmPorLitro = 10;
let distanciaKmViagem = 100;

if(TipoCombustivel === 'Gasolina'){
    console.log('O total da viagem é R$',preçoGasolina / kmPorLitro * distanciaKmViagem,'Reais') 
}else{
    console.log('O total da viagem é R$',precoEtanol / kmPorLitro * distanciaKmViagem,'Reais') 
}