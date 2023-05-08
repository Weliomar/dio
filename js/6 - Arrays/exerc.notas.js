
const notas = []; //Uma lista que sera add as notas das provas.

//Notas que serao add na lista acima
notas.push(10);
notas.push(10);
notas.push(10);
//notas.push(2);
//notas.push(5);
//notas.push(8);
//notas.push(8);

//console.log(notas.length); // soma a quantidade de elementos enviado para a lista. 

let soma = 0; 

for (let i = 0; i < notas.length; i++) {
    //console.log(notas[i]);
    
    const nota = notas[i];
    soma = soma + nota;

    }
    console.log(notas.length);
    console.log(soma);

    const media = soma / notas.length;
    console.log('A media  é ', media);
    



//const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4]
 //Obtém ou define o comprimento da matriz. Este é um número um acima do índice mais alto na matriz.
//console.log(soma / notas);


