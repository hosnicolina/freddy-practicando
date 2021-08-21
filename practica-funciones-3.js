// crea un ciclo que recorra las comidas del dia y asigna una comida

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

//comidaDelDia[0].comida = 'Empanadas'

if (comidaDelDia[0].tipo === 'desayuno') {
    
}

console.log(comidaDelDia[0])


function comidas(comidas) {
    for (let i = 0; i < comidas.length; i++) {
        asignar(comidas[i])
    }
    return comidas
}

function asignar(comida){
    if (comida.tipo === "desayuno"){
        comida.comida = "arepas"
    }else if (comida.tipo === "almuerzo") {
        comida.comida = 'pasta'
    }else {
        comida.comida = 'empanadas'
    }
}

console.log(comidas(comidaDelDia))