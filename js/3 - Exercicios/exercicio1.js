/*
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e sua classificação conforme a tabela abaixo.

        Média = (nota 1 + nota 2 + nota 3) / 3;

            Classificação:
                - Média menor que 5, reprovação;
                - Média entre 5 e 7, recuperação;
                - Média acima de 7, passou de semestre;
*/

//Variaveis
let nota1 = 10, nota2 = 10, nota3 = 10, media;

//calculos para media
media = (nota1 + nota2 + nota3) / 3;

//retorno da resposta na tela
//console.log(media.toFixed(2))

media.toFixed(2);
if(media < 5){
    console.log('Sua nota é', media.toFixed(2),'Reprovado.');
} 
else if(media > 5 && media <= 7 ){
    console.log('Sua nota é', media.toFixed(2),'Recuperação.');

} else if(media > 7){
    console.log('Sua nota é', media.toFixed(2),'Aprovado, passou de semestre.');
}else{
    console.log('Nota invalida');
}