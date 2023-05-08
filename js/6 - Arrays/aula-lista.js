const alunos = ['joao', 'maria', 'Feijao'];

// Inserir mais um item na lista 
alunos.push('Weliomar')  // inserindo um item na ultima posição
alunos[4] = 'Arroz' ; // inserindo um item numa posição escolhida 

console.log(alunos)

console.log(alunos.pop()); // Pop remove o ultimo elemento de uma matriz e o retorna, ou seja, eu ainda posso utilizar esse item. 
console.log(alunos)

console.log(alunos.shift()); // shift - Remove o primeiro elemento de uma matriz e o retorna. Se o array estiver vazio, retorna indefinido e o array não é modificado.
console.log(alunos); 


// Outro exemplo;

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(7);
notas.push(6);


console.log(notas.length);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4]
 //Obtém ou define o comprimento da matriz. Este é um número um acima do índice mais alto na matriz.
console.log(soma / notas.length);


for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}