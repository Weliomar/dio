/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e controlada pelo calculado adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

let valorProduto = 1000; 
let formaPagamento = 'dividido maior que duas vezes'; // tipos de pagamentos: debito, dinheiro, duas vezes, divididoMaisDuasVezes
let valorDesconto, valorFinal,valorJuros;

console.log('Valor da etiqueta é', valorProduto)

if (formaPagamento === 'debito'){
    console.log('Pagamento no debito, desconto de', valorDesconto = valorProduto * 10/100,'Reais')
    console.log('Valor a pagar é',valorProduto - valorDesconto, 'Reais' )
}
else if (formaPagamento === 'dinheiro') {
    console.log('Pagamento no Dinheiro, desconto de', valorDesconto = valorProduto * 15/100,'Reais')
    console.log('Valor a pagar é',valorProduto - valorDesconto, 'Reais' )
} 
else if (formaPagamento === 'duas vezes'){
    console.log('Pagamento dividido em duas vezes, o valor a pagar é', valorProduto,'Reais')
}
else if (formaPagamento === 'dividido maior que duas vezes') {
    console.log('Pagamento dividido maior que duas vezes, juros de', valorJuros = valorProduto * 10/100,'Reais')
    console.log('Valor a pagar é',valorProduto + valorJuros, 'Reais' )

    /*
        155 x 10/100 = 15,5 > 155 + 15,5 = 170,50
        Ou então, é possível para fazer direto 155 + 10%.
    */
}

/* 
Exemplo: 

Valor sem desconto (V): R$ 125,00
Porcentagem de desconto (%): 15%

Valor descontado (Vd): ?
Valor final (Vf): ?

125 x 15/100 (ou 0,15) = 18,75
> 125 – 18,75 = 106,25

*/