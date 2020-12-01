/*
Agora inverta o lado do triângulo. Por exemplo:
*/

const n = 5;
let asterix = '';
let spaces = '';

for (let indexLine = 0; indexLine < n; indexLine += 1) {
    asterix += '*';
    spaces = '';

    for (let indexColumn = indexLine; indexColumn < n; indexColumn += 1) {
        spaces += ' ';
    }
    console.log(spaces, asterix);
}