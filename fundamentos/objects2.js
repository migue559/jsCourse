//prototipos
// esto sigue siendo un protoypo pero desde emac 2015 se utilza esta sintaxis para la herencia de prototipos OMG!!!!!

class Persona {
    constructor(nombre,apellido,altura){
    this.nombre=nombre
    this.apellido=apellido
    this.altura=altura
    }
    saludar(func){
        var {nombre, apellido} =this
        //var nombre=this.nombre
        //var apellido=this.apellido    
        console.log(`Hola me llamo ${nombre}, ${apellido}`)
        if (func){
            func(nombre,apellido)
        }

    }
    esAlto(){
        if (this.altura >1.70){
        console.log(`Hola me llamo ${this.nombre}, ${this.apellido} y soy re alto loco`)
        }
    }
}

var person = new Persona('miguel', 'cruz',1.79)
var person2 = new Persona('jose', 'cruz',1.66)
var person3 = new Persona('Lalo', 'cruz',1.8)

class Desarrollador  extends Persona{
    //constructor(nombre,apellido,altura,tiempo){
    super(nombre,apellido,altura){}
    //this.tiempoDesarrollando=tiempo    
    //}
    saludar(func){
        console.log(`Hola me llamo ${this.nombre}, ${this.apellido} y soy un sesarrollador/a`)
        if (func){
            func(this.nombre,this.apellido, true)
        }
    }
}



function respondeSaludo(nombre, apellido, esDev) {
    console.log(`Hola ${nombre} ${apellido}`)
    if (esDev){
        console.log(`No sabia que eras Desarrollador/a`)

    }
}




var desarrollador = new Desarrollador('jose', 'cruz',1.66)




person.saludar()
person3.saludar(respondeSaludo)
desarrollador.saludar(respondeSaludo)