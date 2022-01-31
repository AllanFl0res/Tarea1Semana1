//Tarea1  Allan_Flores #61911499

let ObjetoEstudiante1 = {
    id:"9871",
    nombre: "Andres Merlo",
    nota: 80,
    estado: "Aprobado",

}

let ObjetoEstudiante2 = {
    id:"9872",
    nombre: "Juan Briones",
    nota: 76,
    estado: 'Aprobado',
}

let ObjetoEstudiante3 = {
    id:"9873",
    nombre: "Mario Cardona",
    nota: 59,
    estado: 'Reprobado',
}


let arrayEsta = [
     {
         id: '9871', nombre: 'Pedro', nota: 80, estado: "Aprobado"
     },
     ObjetoEstudiante1
]



arrayEsta.push(ObjetoEstudiante3)
arrayEsta.push(55)

let resultadoFiltro = arrayEsta.find(estudiante => estudiante.estado === 'Reprobado')

console.log(resultadoFiltro)