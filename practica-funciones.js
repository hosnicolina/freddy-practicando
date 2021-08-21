// crea un funcion que se encargue de dividir 2 numeros.
let numero1 = 5
let numero2 = 3

let estudiante = {
    nombre: 'Hosni',
    apellido: 'Colina',
    hijos: 1,
    promedio: 8.7,
    direccion: 'los alacranes',
    edad: 30, 
    carrera: 'programacion'
}

let estudiante2 = {
    nombre: 'Freddy',
    apellido: 'Estevez',
    hijos: 1,
    promedio: 9.7,
    direccion: 'orinoco',
    edad: 22, 
    carrera: 'programacion'
}

function imprimirEstudiante(estudiante) {
    let {
        nombre,
        apellido,
        hijos,
        promedio,
        direccion,
        edad,
        carrera,
    } = estudiante
    // template string
    return `El estudiando ${nombre} ${apellido}, tiene un promedio de ${promedio}, y tiene un total de ${hijos} hijos, a la edad de ${edad}, y estudia ${carrera}`
}



function operacionD (numero1, numero2) {
    return numero1 / numero2;
}

function sumar(a,b){
    return a + b
}

function calcularElAreaDeUnTriangulo(constates){
    // base * alura / 2

    return constates.base * constates.altura / constates.constante;

}

let triangulo1 = {constante:2,altura:30, base:30}

console.log(calcularElAreaDeUnTriangulo(triangulo1))
console.log(calcularElAreaDeUnTriangulo({altura:30,constante:30, base:30}))

console.log(sumar(48,954))

console.log(imprimirEstudiante(estudiante2))

let freddy = {
    nombre: 'Freddy',
    hermano: 'Santi'
}

let fruta = ['mango', 'pi#a']

let { nombre: mayor, hermano: menor } = freddy;

let [mango, pina] = fruta

console.log(mango, pina)
console.log(mayor, menor)