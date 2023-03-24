/*Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Cálamo Andret - 2110383 
DATA: 16/03/2023*/

function inverterString(string) {
    let novaString = '';
  
    for (let i = string.length - 1; i >= 0; i--) {
      novaString += string[i];
    }
  
    return novaString;
  }

/*Para utilizar essa função, basta chamá-la passando uma string como argumento, por exemplo:*/  

const string = 'Olá, mundo!';
const resultado = inverterString(string);
console.log(resultado); // '!odnum ,álO'

/*Nessa implementação, a função inverterString recebe uma string como argumento e retorna uma nova string com os caracteres invertidos. 
Para inverter a string, a função utiliza um loop for que itera a partir do último caractere até o primeiro, concatenando cada caractere à nova string. 
O loop começa no índice string.length - 1, que é o índice do último caractere da string, e vai decrementando até o índice 0, que é o índice do primeiro caractere da string. 
A nova string é inicializada como uma string vazia e vai sendo concatenada com os caracteres invertidos a cada iteração do loop. 
Ao final do loop, a nova string é retornada com os caracteres invertidos.*/
