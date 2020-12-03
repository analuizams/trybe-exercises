/*
Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda .
*/

function longerName(names) {
    let longerName = names[0]
    for (let index in names) {
        if (longerName.length < names[index].length) {
            longerName = names[index];
        }
    }
    return longerName
}

console.log(longerName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
