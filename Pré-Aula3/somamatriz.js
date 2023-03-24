/*Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Cálamo Andret - 2110383 
DATA: 16/03/2023*/

function somarMatriz(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        soma += matriz[i][j];
      }
    }
    return soma;
  }

/*Para utilizar essa função, basta chamá-la passando uma matriz como argumento, por exemplo:*/  

  const matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  const resultado = somarMatriz(matriz);
  console.log(resultado); // 45

/*Nessa implementação, a função somarMatriz recebe uma matriz como argumento e retorna a soma de todos os números na matriz. 
A função utiliza dois loops for para percorrer a matriz e somar os valores de cada elemento. 
A variável soma é inicializada como zero e acumula a soma de todos os elementos da matriz. No final, a função retorna o valor da variável soma.*/
  
  