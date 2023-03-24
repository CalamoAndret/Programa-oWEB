/*Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Cálamo Andret - 2110383 
DATA: 16/03/2023*/

function bubbleSort(arr) {
  const len = arr.length;
  let swapped = false;

  do {
    swapped = false;

    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

/*Para utilizar essa função, basta chamá-la passando um array como argumento, por exemplo:*/
const array = [5, 3, 8, 4, 2];
const sortedArray = bubbleSort(array);
console.log(sortedArray); // [2, 3, 4, 5, 8]


