// funciones bloques de codigo encasuladas
let numero = 12
let numero2 = 13
let num1 = 65

// funciones
function sumar(num1, num2) {
    // scope
    return num1 + num2
}

// fucniones anonimas
let restar = function (num1, num2) {
    return num1 - num2
}

// arrow function => funciones de flecha

let multiplicar = (num1 , num2) =>  num1 * num2;

let is_player = player => player === 'player'

console.log(multiplicar(12,45))
console.log(is_player('player'))

