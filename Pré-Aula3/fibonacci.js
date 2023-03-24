/*Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Cálamo Andret - 2110383 
DATA: 16/03/2023*/

function fibonacci(numero) {
    const serie = [0, 1];
  
    for (let i = 2; i <= numero; i++) {
      const proximoNumero = serie[i - 1] + serie[i - 2];
      if (proximoNumero <= numero) {
        serie.push(proximoNumero);
      } else {
        break;
      }
    }
  
    return serie;
  }

/*Para utilizar essa função, basta chamá-la passando um número como argumento, por exemplo*/  

const numero = 100;
const resultado = fibonacci(numero);
console.log(resultado); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

/*Nessa implementação, a função fibonacci recebe um número como argumento e retorna uma série de Fibonacci até esse número. 
A série de Fibonacci é uma sequência de números em que cada número é a soma dos dois números anteriores na sequência, começando com 0 e 1. 
Para gerar a série até o número fornecido, a função utiliza um loop for que itera a partir do terceiro número da sequência (índice 2). 
A cada iteração, a função calcula o próximo número da sequência somando os dois números anteriores e verifica se esse número é menor ou igual ao número fornecido. 
Se for, adiciona o número à série. Se não, o loop é interrompido e a série é retornada.*/
