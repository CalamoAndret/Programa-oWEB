/*Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Cálamo Andret - 2110383 
DATA: 16/03/2023*/

function fatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * fatorial(numero - 1);
    }
  }

/*Para utilizar essa função, basta chamá-la passando um número como argumento, por exemplo:*/  

const numero = 5;
const resultado = fatorial(numero);
console.log(resultado); // 120

/*Nessa implementação, a função fatorial recebe um número como argumento e retorna o fatorial desse número. 
O fatorial é definido como o produto de todos os números inteiros positivos menores ou iguais ao número fornecido. 
O algoritmo utiliza recursão para calcular o fatorial. Se o número fornecido for igual a 0 ou 1, a função retorna 1, pois o fatorial de 0 e 1 é 1. 
Caso contrário, a função chama a si mesma passando como argumento o número diminuído em 1, e multiplica o número pelo resultado dessa chamada recursiva. 
O algoritmo continua chamando a si mesmo até que o número seja igual a 0 ou 1, e então retorna o resultado final.*/

  