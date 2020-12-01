/*
Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1]; .
Valor esperado no retorno da função: 4 .
*/

function biggerNum(numbers) {
    let biggerNumKey = 0;
    for (let key in numbers) {
        if (numbers[biggerNumKey] < numbers[key]) {
            biggerNumKey = key;
        }
    }
    return biggerNumKey;
}

console.log(biggerNum([2, 3, 6, 7, 10, 1]));