/*Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Cálamo Andret - 2110383 
DATA: 16/03/2023*/

function contarPalavras(string) {
    const palavras = string.trim().split(/\s+/);
    return palavras.length;
  }

/*Para utilizar essa função, basta chamá-la passando uma string como argumento, por exemplo:*/  

const string = 'Olá, mundo! Esta é uma string de exemplo.';
const resultado = contarPalavras(string);
console.log(resultado); // 7

/*Nessa implementação, a função contarPalavras recebe uma string como argumento e retorna o número de palavras presentes na string. 
Para contar as palavras, a função utiliza os métodos trim() e split() da string. O método trim() remove os espaços em branco no início e no final da string, 
enquanto o método split(/\s+/) divide a string em um array de substrings usando um ou mais espaços em branco como delimitador. Em seguida, 
a função retorna o comprimento do array de palavras resultante, que é o número de palavras na string.*/