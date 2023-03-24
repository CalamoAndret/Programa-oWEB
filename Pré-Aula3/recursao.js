/*Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Cálamo Andret - 2110383 
DATA: 16/03/2023*/

function fatorialRecursivo(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * fatorialRecursivo(numero - 1);
    }
  }

/*Para utilizar essa função, basta chamá-la passando um número como argumento, por exemplo:*/  

  const numero = 5;
  const resultado = fatorialRecursivo(numero);
  console.log(resultado); // 120

/*Nessa implementação, a função fatorialRecursivo recebe um número como argumento e calcula o fatorial desse número usando recursão. 
A recursão é realizada enquanto o número não for igual a 0 ou 1. Em cada chamada recursiva, a função multiplica o número pelo resultado da chamada recursiva com o número decrementado em 1. No final, a função retorna o valor do fatorial.*/  
  