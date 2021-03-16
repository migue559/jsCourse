var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    numLibros:31
}
var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    numLibros:21
}
var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    numLibros:321
}
var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    numLibros:421
}
var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    numLibros:281
}
var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    numLibros:721
}
var personas = [sacha,alan,martin,dario,vicky,paula]
/*
for (i=0; i<personas.length; i++){
    persona= personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} mts`)
}
*/

//filtrar array

var isTall = (person) =>  person.altura >1.79

var personasAltas = personas.filter(isTall)
var personasAltas2 = personas.filter(function  (persona) {
    return persona.altura >1.69
})

//console.log(personasAltas)
//console.log(personasAltas2)

const cms = (person) =>{
    return {
        ...person,
        altura : person.altura *100
    }
    
}

const cms2 = (person) =>({
        ...person,
        altura : person.altura *100
    })
//map    
//modificar objetos en array 
var personasCms = personas.map(cms)
var personasCms2 = personas.map(cms2)
console.log(personasCms)
console.log(personasCms2)

//reduce


var acumulator=0
for (i=0; i< personas.length;i++){
    acumulator= acumulator + personas[i].numLibros
}
console.log(`numero de libros total ${acumulator}`)



const reducer= (acu, person)=>{
    return acu+=person.numLibros
}

var totalLibros = personas.reduce(reducer, 0)
console.log(`numero de libros total ${totalLibros}`)
