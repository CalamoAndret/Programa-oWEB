/*Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Cálamo Andret - 2110383 
DATA: 16/03/2023*/

function calcularMedia(numeros) {
    const soma = numeros.reduce((total, numero) => total + numero, 0);
    const media = soma / numeros.length;
    return media;
  }

/*Para utilizar essa função, basta chamá-la passando um array de números como argumento, por exemplo:*/  

const numeros = [5, 10, 15, 20];
const resultado = calcularMedia(numeros);
console.log(resultado); // 12.5

/*Nessa implementação, a função calcularMedia recebe um array de números como argumento e retorna a média desses números. Para calcular a média, 
a função utiliza o método reduce() do array para somar todos os números e depois divide a soma pelo comprimento do array. 
O método reduce() recebe uma função de callback que é executada para cada elemento do array e acumula o resultado em uma variável chamada total. 
Essa função de callback recebe dois argumentos: o primeiro é o valor acumulado até o momento 
(ou o valor inicial passado como segundo argumento para o método reduce(), no caso 0), e o segundo é o valor do elemento atual do array. 
No final do método reduce(), a variável total contém a soma de todos os números. Em seguida, a função calcula a média dividindo a soma pelo comprimento do array e retorna o resultado.*/
