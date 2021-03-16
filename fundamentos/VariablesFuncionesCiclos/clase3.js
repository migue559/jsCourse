//Objetos
var persona = {
    nombre:'Miguel Angel',
    apPaterno:'Cruz',
    apMaterno:'Almanza',
    edad :33
}
function grettings(person){
    console.log(`Hola mi nombre es ${person.nombre} y mi edad es ${person.edad}`)
}
grettings(persona)
function cumpleanios(person){
    return {
        ...person,
        edad:person.edad+2
    }
}
// comparaciones
x=4, y='4'
resultComparacion =  x==y   //true
resultComparacion2 =  x===y  //false  usar esta por convencion y seguridad ddel codigo
//con objetos
var persona2 = {
    nombre:'Miguel Angel',
    apPaterno:'Cruz',
    apMaterno:'Almanza',
    edad :33
}
var persona3 = persona
resultComparacion3 =  persona==persona2   //   false
resultComparacion4 =  persona2===persona3  // false
resultComparacion5 =  persona===persona3  // true   porque comparten el mismo apuntador de memoria ram solo por eso esos objetos son iguales
//condicionales

