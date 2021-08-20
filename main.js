// Variables
// var variable global;
// let declara una sola vez;
nombre = 'Fredy';
var edad = 12;

// declarar una vez
let cadena = 'Hosni';
// contante se puede declara una vez y no supuede cambiar el tipo
const objeto = {
  nombre: 'Freddy',
  hermano: 'Santi',
};

let numero = 25;
let numero2 = 30;

// pero no se recomienda
let elamordemivida = '';
// snakecase
let el_amor_de_mi_vida = '';
// camelCase este mas usado
let elAmorDeMiVida = '';

// operadores matematicos
// sumar restar dividir multiplicar

// console.log('suma', numero + numero2);
// console.log('resta', numero - numero2)
// console.log('multiplicacion', numero * numero2)
// console.log('divicion', numero / numero2);

// console.log('Resto', 4 % 2);

// operadores logicos
// mayor que >
// console.log(edad > 18);
// menor que
// console.log(edad < 15);
// igual == ===
// == comprueba el valor pero no tipo
// console.log(edad == '18');
// === comprueba el tipo como el valor interno
// console.log(edad === '18');
// mayor igual que >=
// console.log(edad >= 18);
// menor igual que
// console.log(edad <= 18);
let orientation = 'hetero';
// y o and && ambos lados deben ser true
// console.log('Bar gay',edad >= 18 && orientation === 'gay')
// o or || uno de los lados tiene que ser true

let color = 'white';

// console.log('Bar rasista', edad >= 18 || color === 'white')

// operadores de asignacion

let num1 = 10;

// operadores de asigancion de suma ++
let num2 = ++num1;
// console.log(num2)

let num3 = --num2;
// console.log(num3)

// codicionales
// comprobar la edad

let mayor = 60;

if (mayor >= 18 && mayor < 50) {
  // console.log('Puedes Pasar')
} else if (mayor >= 50 && mayor < 59) {
  // console.log('ve directo a la zona vip')
} else if (mayor >= 60) {
  // console.log('ve directo a la zona vip pa mas viejo')
} else {
  // console.log('No puedes pasar')
}

// practica 1
// vas a declara variables
// nombre string
// edad  numero
// hermanos string
// edad de tu hermano menor numero

// practica 2
// comprovar si eres mayor de edad he imprimir por cosola tu edad

// practica 3
// comprobar si tu hemano menor es mayor de 2 a#os he imprimir por cosola su nombre y edad

let miNombre = 'Freddy';
let miEdad = 21;
let misHermanos = {
  hermano1: 'keilly',
  hermano2: 'santiago',
};
let edadDeSantiago = 1;

if (miEdad >= 18) {
  console.log('Tienes ' + miEdad + ' puedes pasar');
} else {
  console.log('menor de edad');
}

if (edadDeSantiago >= 2) {
  console.log('bebe grande');
} else {
  console.log('bebe pequeno');
}

// Escribe la siguientes Variables
// nombre de un Bar
// edad permitida 21
// solo para mujeres que cumplan la edad permitida

let persona = {
  nombre: 'Fox',
  edad: 35,
  sexo: 'H',
};

// && y >= && persona.sexo === 'M'

let bar = 'oasis';
let edadMinima = 18;

let fernanda = {
  nombre: 'fernanda',
  edad: 21,
  sexo: 'F',
};

if (fernanda.edad >= edadMinima && fernanda.sexo === 'F') {
  console.log('bienvenidad al bar ' + bar);
} else {
  console.log('No puedes pasar!');
}

if (persona.edad >= edadMinima && persona.sexo === 'F') {
  console.log('Bienvenido al bar ' + bar);
} else {
  console.log('No puedes pasar');
}


// crea un programa que verifique si un estudiante cursa las materias de matematica o fisica
// felicidades, despidete de tu vuda social
// vive y se feliz
let estudiante = {
    nombre: 'Estevez',
    materia: 'Fisica'
}
if (estudiante.materia === 'Matematica'|| estudiante.materia === 'Fisica') { 
    console.log('felicidades, despidete de tu vuda social')
}else { console.log("vive y se feliz")

}
let estudiante2 = {
    nombre: 'Francisco',
    materia: 'Biologia'
}
if (estudiante2.materia === 'Matematicas'||estudiante2.materia === 'Fisica') {
    console.log("felicidades, despidete de tu vuda social")

}else { console.log("vive y se feliz")

}

let = estudiante3 = {
    nombre: 'Melanie',
    materia: 'Artistica'
}

if (estudiante3.materia === "Matematicas" ||estudiante3.materia === "Fisica") {
    console.log("felicidades, despidete de tu vuda social")

}else { console.log("vive y se feliz")

}