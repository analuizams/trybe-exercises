/* let a =10;
let b = 2;

console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));

REFATORADO:
*/

function sum(num1, num2) {
    return (num1 + num2);
}

console.log('Soma: ' + sum(10, 2));

function subtraction(num1, num2) {
    return (num1 - num2);
}

console.log('Subtração: ' + subtraction(10, 2));

function multiplication(num1, num2) {
    return (num1 * num2);
}

console.log('Multiplicação: ' + multiplication(10, 2));

function division(num1, num2) {
    return (num1 / num2);
}

console.log('Divisão: ' + division(10, 2));

function modulus(num1, num2) {
    return (num1 % num2);
}

console.log('Módulo: ' + modulus(10, 2));
