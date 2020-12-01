/*
Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6 .
*/

function smallerNum(numbers) {
    let smallerNumKey = 0;
    for (let key in numbers) {
        if (numbers[smallerNumKey] > numbers[key]) {
            smallerNumKey = key;
        }
    }
    return smallerNumKey;
}

console.log(smallerNum([2, 4, 6, 7, 10, 0, -3]));
