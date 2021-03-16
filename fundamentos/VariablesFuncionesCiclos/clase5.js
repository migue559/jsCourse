//Objetos
var persona = {
    nombre:'Miguel Angel',
    apPaterno:'Cruz',
    apMaterno:'Almanza',
    edad :33,
    cantante:false,
    matematico:true,
    barrendero:true,
    surfista:false,
    peso:73

}

//for 
const AUMENTOPESO=.200
const BAJOPESO=.200

//function upWeight (person){
    //return person.peso+=AUMENTOPESO
//}
//function downWeight (person){
    //return person.peso-=BAJOPESO
//}

var upWeight = (person) => person.peso+=AUMENTOPESO
var downWeight = (person) => person.peso-=BAJOPESO

//console.log(`al inicio del año ${persona.nombre} pesa :${persona.peso} kgs`)
//for (var i=1; i<=365;i++){
    //var aleatorio = Math.random()
    //if (aleatorio <.25){
        //upWeight(persona)                
    //}else if (aleatorio < .5){
        //downWeight(persona)
//
    //}
//}
//console.log(`al final del año ${persona.nombre} pesa :${persona.peso.toFixed(2)} kgs`)



//while
var eatAlot = () => Math.random() < .25
var makeSport = () => Math.random() < .45


const META= persona.peso -5
var dias = 0

//console.log(`caso while , al inicio del año ${persona.nombre} pesa :${persona.peso} kgs, meta: ${META}`)
//while (persona.peso > META){
    ////debugger
    //if (eatAlot()){
        //upWeight(persona)
    //}
    //if (makeSport()){
        //downWeight(persona)
    //}
    //dias+=1    
//}
//console.log(`el numero de dias para que ${persona.nombre} llegara a su meta fue ${dias} `)



var veces=0
//do while
var llovia = () => Math.random() < .27
do{
    veces++
}while(!llovia())
if (veces===1){
    var numero_de_veces='vez'
}else{
    var numero_de_veces='veces'
}
console.log(`fui a ver si llovia ${veces} ${numero_de_veces}`)