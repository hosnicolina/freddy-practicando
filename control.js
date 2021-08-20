// control de flujo
// guardar cualquier tipo de dato primitivo
let frutas = ['mango', 'lechoza', 'pi#a'];
// propiedades de los arreglos

// contar
//console.log(frutas.length);

// agregar

let lista = [];

//console.log('lista',lista.length)

lista.push('Arroz');
lista.push('Pasta');
lista.push('Leche');
// agregar al principio
lista.unshift('Mantequilla');

// eliminar el ultimo objeto de la lista

//lista.pop();

// eliminar un tramo

//lista.splice(1,1);
//console.log(lista)

// Objetos arreglo clave valor, que puede guardar cualquier tipo de datos primitivo y no primitivo

let persona = {
  nombre: 'Hosni Colina',
  colorDeOjos: 'Marron',
  altura: '182',
};

//console.log(persona.nombre)

persona.telefono = '04148547521';
persona.nombre = 'Messi';

//console.log(persona)
//console.log(Object.values(persona))
//console.log(Object.keys(persona).length)

// loop

// for
//    indice    condicion          incrementador

let estudiantes = [
  { nombre: 'Fredy', edad: 21 },
  { nombre: 'Luis', edad: 14 },
  { nombre: 'Enrique', edad: 32 },
];

// for (let i = 0; i < estudiantes.length; i++) {
//     const estudiante = estudiantes[i];
//     if (estudiante.edad >= 18) {
//         console.log('Eres Mayor de edad bienvenido')
//     }else{
//         console.log('No Puede pasar')
//     }
// }

let colores = ['azul', 'amarillo', 'rojo', 'verde', 'naranja'];

// for(let i = 0; i < colores.length; i++) {
//     console.log('Que Bonito es el color ' + colores[i])
// }

// escribir un array de nombre minimo 5 en imprimirlos por consolo uno a uno

let nombres = ['Camila', 'Esteban', 'Jesus', 'Gilber', 'Elvis', 'Antonio'];
//console.log(nombres);

// for (let i = 0; i < nombres.length; i++) {
//   console.log(nombres[i]);
// }

let personas = [
  { nombre: 'Luis', edad: 25, sexo: 'M' },
  { nombre: 'Jesus', edad: 26, sexo: 'M' },
  { nombre: 'Dani', edad: 16, sexo: 'F' },
  { nombre: 'Asley', edad: 17, sexo: 'F' },
  { nombre: 'Dari', edad: 18, sexo: 'F' },
  { nombre: 'Fredy', edad: 21, sexo: 'M' },
  { nombre: 'leonardo', edad: 41, sexo: 'M' },
  { nombre: 'Hilda', edad: 55, sexo: 'F' },
];

// vas a escribir un programa que verifique si tiene la edad para pasar a un bar
// segun su sexo lo saludo como Hola Chico u Hola Chicha
// si es menor de edad le diga que no puede pasar y cuantos a#os le falta
// si es mayoe de 40 le dija cuanto le falta para los 60

// let edadPermitida = 18;
// for (let i = 0; i < personas.length; i++) {
//   let edad = personas[i].edad;
//   let mayorYMujer = edad >= 18 && edad <= 39 && personas[i].sexo === 'F';
//   let mayorYHombre = edad >= 18 && edad <= 39 && personas[i].sexo === 'M';
//   let mayor40 = edad >= 40;

//   if (mayorYHombre) {
//     console.log(' Hola chico, puedes pasar');
//   } else if (mayorYMujer) {
//     console.log(' Hola chica, puedes pasar');
//   } else if (mayor40) {
//     console.log('Eres mayor de 40, te faltan ', 60 - edad, ' para los 60');
//   } else {
//     let diferenciaDeEdad = edadPermitida - edad;
//     console.log(
//       'No tienes la edad para pasar te faltan ' + diferenciaDeEdad + ' a#os'
//     );
//   }
// }

// crea un programa que envie  a los animales a su entorno
// si es tipo mamifero o felino va a la selva
// si es tipo crustaseo o cetaceo va al oceano

let animales = [
  {
    tipo: 'mamifero',
    nombre: 'elefante',
  },
  {
    tipo: 'crustaseo',
    nombre: 'camaron',
  },
  {
    tipo: 'cetaceo',
    nombre: 'ballena',
  },
  {
    tipo: 'felino',
    nombre: 'leon',
  },
];

for (let i = 0; i < animales.length; i++) {
  if (animales[i].tipo === 'mamifero' || animales[i].tipo === 'felino') {
    console.log('Tu puedes ir a la selva');
  } else if (animales[i].tipo === 'cetaceo' || animales[i].tipo === 'crustaseo') {
    console.log('Perteneces al oceano');
  } else {
    console.log('no pasa nada');
  }
}
