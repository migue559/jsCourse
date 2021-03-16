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


const horoscopos = {
    aries: '21 marzo - 19 abril',
    tauro: '20 abril - 20 mayo',
    geminis: '21 mayo - 20 junio',
    cancer: '21 junio - 22 julio',
    leo: '23 julio - 22 agosto',
    virgo: '23 agosto - 22 septiembre',
    libra:'23 septiembre - 22 octubre',
    escorpion: '23 octubre - 21 noviembre',
    sagitario: '22 noviembre - 21 diciembre',
    capricornio: '22 diciember - 19 enero',
    acuario: '20 enero - 18 febrero',
    piscis: '19 febrero - 20 marzo'
};


//PROMPT captura datos usuario

var signo= prompt('¿Cual es tu signo?')
console.log(`signo es: ${signo}`)

//SWITCH


switch(signo){
    
    case 'aries':
        console.log(`eres un pelotudo +: ${signo}`)
    break
    case 'tauro':
        console.log(`eres un pelotudo +: ${signo}`)
    break
    case 'geminis':
        case 'géminis':
        console.log(`eres la pistolota +: ${signo}`)
    break
    case 'cancer':
        console.log(`eres un pelotudo +: ${signo}`)
    break
    case 'leo':
        console.log(`eres un pelotudo +: ${signo}`)
    break
    case 'virgo':
        console.log(`eres un pelotudo +: ${signo}`)
    break
    case 'libra':
        console.log(`eres un pelotudo +: ${signo}`)
    break
    case 'escorpion':
        console.log(`eres un pelotudo +: ${signo}`)
    break
    case 'sagitario':
        console.log(`eres un pelotudo +: ${signo}`)
    break
    case 'capricornio':
        console.log(`eres un pelotudo +: ${signo}`)
    break
    case 'acuario':
        console.log(`eres un pelotudo +: ${signo}`)
    break
    case 'piscis':
        console.log(`eres un pelotudo +: ${signo}`)
        break
    default:
        console.log(`Tu no existes pelotudo +: ${signo}`)
        break

   
}