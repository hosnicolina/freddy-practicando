// crea una funcion que con una lista de estudiante dada recupere solo los estudiantes que tiene hijos

let estudiantes = [
{
    nombre: 'Hosni',
    apellido: 'Colina',
    hijos: 2,
    promedio: 8.7,
    direccion: 'los alacranes',
    edad: 30, 
    carrera: 'programacion'
},
{
    nombre: 'Freddy',
    apellido: 'Estevez',
    hijos: 1,
    promedio: 9.7,
    direccion: 'orinoco',
    edad: 22, 
    carrera: 'programacion'
},
{
    nombre: 'Ramon',
    apellido: 'Colina',
    hijos: 0,
    promedio: 10,
    direccion: 'orinoco',
    edad: 29, 
    carrera: 'programacion'
}
]

// primero recives array
// segundo en cada iteracion objetos
// vas a tener que verificar por clave de hijos

 
function filtrar(listaDeEstudiante) {
    
    let estudianteConHijos = []

    for (let i = 0; i < listaDeEstudiante.length; i++) {
        if (listaDeEstudiante[i].hijos !== 0) {
            estudianteConHijos.push(listaDeEstudiante[i])
        }
    }

    return estudianteConHijos
}

console.log(filtrar(estudiantes))

let frutas  = []

let mangos = ['mangos','mangos', 'pera']

for (let i = 0; i < mangos.length; i++) {
    if (mangos[i] === 'mangos') {
        frutas.push(mangos[i])
    }
}

console.log(frutas)