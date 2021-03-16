//prototipos

function Persona (nombre,apellido, altura){
    this.nombre=nombre
    this.apellido=apellido
    this.altura=altura
}
Persona.prototype.saludar = function (){
    console.log(`Hola me llamo ${this.nombre}, ${this.apellido}`)
}
Persona.prototype.esAlto = function (){
    if (this.altura >1.70){
        console.log(`Hola me llamo ${this.nombre}, ${this.apellido} y soy re alto loco`)
    }
}
Persona.prototype.esAltoValida = () =>  this.altura >1.70  //siempre regresa false porque this en este caso es Window

var person = new Persona('miguel', 'cruz',1.79)
var person2 = new Persona('jose', 'cruz',1.66)
var person3 = new Persona('Lalo', 'cruz',1.8)
person.esAltoValida()  // no sirve porque this.altua toma el valor de window , *pendiente por revisar *******1
person2.esAltoValida()
person3.esAltoValida()
//JS no soporta la herencia como en otros lenguajes, no hay clases hay prototipos
//herencia de prototipos
//formaVieja
function Desarrollador (nombre, apellido){
	this.nombre=nombre
	this.apellido=apellido
}


function heredaDe (hijo, padre) {
	var fn = function (){}
	fn.prototype = padre.prototype;
	hijo.prototype = new fn
	hijo.prototype.constructor = hijo	
}
heredaDe(Desarrollador,Persona)

var person2Desa = new Desarrollador('jose', 'cruz',1.66)

Desarrollador.prototype.saludar = function (){
    console.log(`Hola me llamo ${this.nombre}, ${this.apellido} y soy un sesarrollador/a`)
}
