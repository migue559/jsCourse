//Objetos

var persona = {
    nombre:'Miguel Angel',
    apPaterno:'Cruz',
    apMaterno:'Almanza',
    edad :33
}


var persona2 = {
    nombre:'Adriana',
    apPaterno:'X',
    apMaterno:'Y',
    edad :31
}

console.log(persona.nombre)
console.log(persona2.nombre)
function printNameMayus(person) {    
    console.log(person.nombre.toUpperCase())
}
function printNameMayus2({nombre}) {    
    console.log(nombre.toUpperCase())
}

printNameMayus(persona)
printNameMayus2(persona)
printNameMayus(persona2)
printNameMayus2(persona2)
printNameMayus2({nombre:'KaKalt'})