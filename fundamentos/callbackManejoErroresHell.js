//callback

const API_POKEMON = 'https://pokeapi.co/api/v2/'
const POKEMON_URL = 'pokemon/:nombre'
const options = {crossDomain:true}

// desde jquery $ permite hacer un request
/*
function getPokemon(pokemon, callback){
    const urlPokemon =  `${API_POKEMON}${POKEMON_URL.replace(':nombre', pokemon)}`
    $.get(urlPokemon,options, callback).fail(function(){
        console.log(`No se puede obtener el poke ${pokemon}`)
    })
}

getPokemon('obstagoon', function(poke){
        console.log(`Hola yo soy ${poke.name}`)
    getPokemon('mew',function(poke){
            console.log(`Hola yo soy ${poke.name}`)
        getPokemon('abomasnow',function(poke){
                console.log(`Hola yo soy ${poke.name}`)
            getPokemon('hoppip',function(poke){
                    console.log(`Hola yo soy ${poke.name}`)
                getPokemon('drilbur',function(poke){
                    console.log(`Hola yo soy ${poke.name}`)
                })
            })
        })
    })
})    

*/
//promesas
//inicia en pending
//se resuelve fullfing  .then(val=>....)
//error reject
//puden ser sincronas   .catch(err=>...)


//Ejemplo de promesa

function getPokemonPromesa(pokemon){
    return new Promise((resolve, reject) =>{
        const urlPokemon =  `${API_POKEMON}${POKEMON_URL.replace(':nombre', pokemon)}`
        $.get(urlPokemon,options, function (data){
            resolve(data)
        })
        .fail( () => reject(pokemon))
    }
        )    
}

function onError(pokeString){
    console.log(`Hubo un errore al apbtejer al pokemon ${pokeString}`)
}

//getPokemonPromesa('obstagoon')
//.then(function (poke){
    //console.log(`Hola yo soy ${poke.name}`)
//})
//.catch(    onError  )


//ejemplo de promesas encadenadas


//getPokemonPromesa('sableye')
//.then(function (poke){
    //console.log(`Hola yo soy ${poke.name}`)
    //return getPokemonPromesa('mew')
//})
//.then(function (poke){
    //console.log(`Hola yo soy ${poke.name}`)
    //return getPokemonPromesa('hoppip')
//})
//.then(function (poke){
    //console.log(`Hola yo soy ${poke.name}`)  
//})
//.catch(    onError  )


//multiples promesas en paralelo

///var misPokemon = ['obstagoon','sableye','hoppip','mew','abomasnow','drilbur']

//var promesas = misPokemon.map(function(mipoke){
    //return getPokemonPromesa(mipoke)
//} )


////var promesas = misPokemon.map( mipoke =>   getPokemonPromesa(mipoke) )

////Promise.all(promesas)
////.then(poke=> console.log(poke))
////.catch(onError)

// lo ultimo en asincronismo asic await   ### no lo soportan todos los navegadores ###  chrome sip

async function getMyTeam(){
    var misPokemon = ['obstagoon','sableye','hoppip','mew','abomasnow','drilbur']
    var promesas = misPokemon.map( mipoke =>   getPokemonPromesa(mipoke) )
    try{
        var myTeam = await Promise.all(promesas)
        console.log(myTeam)

    }
    catch(mipoke){
        onError(mipoke)

    }


}

getMyTeam()