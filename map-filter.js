// dara el siguiente array crea una funcion que filtre todas las frutas rojas

let frutas = [
  { nombre: 'fresa', color: 'rojo' },
  { nombre: 'kiwi', color: 'verde' },
  { nombre: 'pumarosa', color: 'rojo' },
  { nombre: 'cereza', color: 'rojo' },
  { nombre: 'naranja', color: 'naranja' },
];

// funciones iteradoras
// Array.filter(e => e.tipo === tipo)
// crea un nuevo array con los elemnto que cumplan esa condicion

let frutasRojas = frutas.filter((elemento) => elemento.color === 'rojo');

console.log(frutasRojas);

let comidaDelDia = [
  {
    tipo: 'desayuno',
    comida: '',
  },
  {
    tipo: 'almuerzo',
    comida: '',
  },
  {
    tipo: 'cena',
    comida: '',
  },
];

function asignar(comida) {
  if (comida.tipo === 'desayuno') {
    comida.comida = 'arepas';
  } else if (comida.tipo === 'almuerzo') {
    comida.comida = 'pasta';
  } else {
    comida.comida = 'empanadas';
  }
  return comida;
}

let comidaLista = comidaDelDia.map((elemento) => asignar(elemento));

// devuelve el un nuevo array modificado

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let tablaDelDos = numeros.map((elemento) => elemento * 2);

console.log(comidaLista);

// Array.forEach

let tablaDelTres = [];

numeros.forEach((elemento) => {
  tablaDelTres.push(elemento * 3);
});

console.log(tablaDelTres);

// has 2 funciones una que devuelva los animales terreste y otra que devuelva a los animales marinos
let animales = [
  {
    tipo: 'terrestre',
    nombre: 'elefante',
  },
  {
    tipo: 'marino',
    nombre: 'camaron',
  },
  {
    tipo: 'marino',
    nombre: 'ballena',
  },
  {
    tipo: 'terrestre',
    nombre: 'leon',
  },
];

function animalesT(animales) {
  return animales.filter((elemento) => elemento.tipo === 'terrestre');
}
console.log(animalesT(animales));

function animalesM(animales) {
  return animales.filter((elemento) => elemento.tipo === 'marino');
}

console.log(animalesM(animales));


// crea una funcion usando Array.map para asignar una beca a los estudiante con mas de 1 hijo
let estudiantes = [
    {
    nombre: 'Hosni',
    apellido: 'Colina',
    hijos: 2,
    promedio: 8.7,
    direccion: 'los alacranes',
    edad: 30, 
    carrera: 'programacion',
    beca: false
},
{
    nombre: 'Freddy',
    apellido: 'Estevez',
    hijos: 1,
    promedio: 9.7,
    direccion: 'orinoco',
    edad: 22, 
    carrera: 'programacion',
    beca: false
},
{
    nombre: 'Juan',
    apellido: 'Cardozo',
    hijos: 3,
    promedio: 9.7,
    direccion: 'orinoco',
    edad: 22, 
    carrera: 'programacion',
    beca: false
},
{
    nombre: 'Leo',
    apellido: 'Colina',
    hijos: 0,
    promedio: 9.7,
    direccion: 'orinoco',
    edad: 22, 
    carrera: 'programacion',
    beca: false
},
]

function estudiantesConMasDeUnHijo(estudiantes) {
    return estudiantes.map(estudiante =>{
        if (estudiante.hijos > 1){
            estudiante.beca = true;
        }
        return estudiante
    })
        
}

console.log(estudiantesConMasDeUnHijo(estudiantes))

