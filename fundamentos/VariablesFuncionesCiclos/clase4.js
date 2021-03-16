//Objetos
var persona = {
    nombre:'Miguel Angel',
    apPaterno:'Cruz',
    apMaterno:'Almanza',
    edad :33,
    cantante:false,
    matematico:true,
    barrendero:true,
    surfista:false
}

function printPrifession(persona){
    console.log(`${persona.nombre} es :`)
    if (persona.cantante){
        console.log(`contante`)}
        if (persona.matematico){
            console.log(`matematico`)}
            if (persona.barrendero){
                console.log(`barrendero`)}
                if (persona.surfista){
                    console.log(`surfista`)}

}

printPrifession(persona)

const MAYOREDAD=18

function printAdult(persona){
    if (persona.edad >=MAYOREDAD){
        console.log(`${persona.nombre} es : mayor de edad`)
    }else{
        console.log(`${persona.nombre} es : menor de edad`)
        
    }
}
printAdult(persona)

// funciones  variable

var printAdultvar = function (persona){
    if (persona.edad >=MAYOREDAD){
        console.log(`${persona.nombre} es : mayor de edad`)
    }else{
        console.log(`${persona.nombre} es : menor de edad`)
        
    }
}
printAdultvar(persona)
// funciones  arrow

//var printAdultvar =  (persona) =>{    return persona.edad >=MAYOREDAD}  // ambos casos funcionan
var printAdultvar2 =  persona =>  persona.edad >=MAYOREDAD
printAdultvar2(persona)


var printAdultvar3 =  ({edad}) =>  edad >=MAYOREDAD
printAdultvar3(persona)