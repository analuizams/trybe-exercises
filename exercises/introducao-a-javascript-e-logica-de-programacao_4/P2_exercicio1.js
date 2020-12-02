/*
Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome("arara") ;
Retorno esperado: true
verificaPalindrome("desenvolvimento") ;
Retorno esperado: false
*/

function verifyPalindrome(word) {
    let arrayLetras = word
    let isPalindrome = true
    for (let index in arrayLetras) {
        if arrayLetras[index] != word[word.lenght -1] {
            isPalindrome = false;
        }
    }
    return isPalindrome;    
}

console.log(verifyPalindrome(arara))


/*if word[0] === word[word.leght -1] &&
    word[1] === word[word.leght -2] &&
    word[2] === word[word.leght -3] &&
    word[3] === word[word.leght -4] {
        console.log(true)
    } else {
        console.log(false)
    }
    