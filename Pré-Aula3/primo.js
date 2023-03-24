/*Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Cálamo Andret - 2110383 
DATA: 16/03/2023*/

function verificarPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
  
    return true;
  }

/*Para utilizar essa função, basta chamá-la passando um número como argumento, por exemplo:*/
  
const numero = 17;
const resultado = verificarPrimo(numero);
console.log(resultado); // true

/*Nessa implementação, a função verificarPrimo recebe um número como argumento e retorna true se o número for primo, e false caso contrário. 
Para verificar se o número é primo, a função começa verificando se o número é menor ou igual a 1, pois esses números não são primos. 
Em seguida, utiliza um loop for que itera a partir do número 2 até a raiz quadrada do número fornecido, 
verificando se o número é divisível por algum número entre 2 e a raiz quadrada do número. 
Se o número for divisível por algum desses números, não é primo e a função retorna false. 
Se o loop terminar sem encontrar um número pelo qual o número seja divisível, a função retorna true, indicando que o número é primo.*/
