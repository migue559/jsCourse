//callback

const API_POKEMON = 'https://pokeapi.co/api/v2/'
const POKEMON_URL = 'pokemon/:nombre'




// desde jquery $ permite hacer un request

const options = {crossDomain:true}
const onPokeResponse1=function(poke){
    //console.log(arguments)
    console.log(`Hola yo soy ${poke.name}`)
    }



function getPokemon1(pokemon){
    const urlPokemon =  `${API_POKEMON}${POKEMON_URL.replace(':nombre', pokemon)}`
    $.get(urlPokemon,options, onPokeResponse1 )
    }


// asincronismo no hay un orden de respuesta, las respuestas del server es aleatoria segun llega la respuesta f5  para ver los resultados
//getPokemon1('obstagoon')    
//getPokemon1('mew')    
//getPokemon1('abomasnow')    
//getPokemon1('hoppip')    
//getPokemon1('drilbur')    


//ejemplo de callback, asi obtenemos el orden que queremos , pero esta feo, culerisimo xD  "callback hell"

function getPokemon(pokemon, callback){
    const urlPokemon =  `${API_POKEMON}${POKEMON_URL.replace(':nombre', pokemon)}`
    $.get(urlPokemon,options, function(poke){
        console.log(`Hola yo soy ${poke.name}`)        
        if (callback){
            callback()
        }
    })
}


getPokemon('obstagoon', function(){
    getPokemon('mew',function(){
        getPokemon('abomasnow',function(){
            getPokemon('hoppip',function(){
                getPokemon('drilbur',function(){
                })
            })
        })
    })
})    