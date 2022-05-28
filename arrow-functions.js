

function retorno (a, b){
    if(a > b){
        return a
    } else {
        return b
    }

    // a > b ? a : b

}

// arrow functions --> funciones flecha

// sintaxis u

/*
const suma = (a, b) => {

    return a + b
    // sentencias
}


//SRING REVERSE//

const strReversed = (str) => {
    for (i = str.length -1 ; i <= 0; i++ ){
        strReversed += str[i]

    }
    return strReversed

}
console.log( strReversed("Hola"))
*/

/*
* Funcion que pida al usuario los grados Centigrados en su localidad
* Convertirlos a grados fahrenheit
* Arrojar un alert con el resultado
* -> convertTemp(25) -> La temperatura es de 77 ºF
* -> convertTemp() -> 'Faltan datos'


function ConverterGrados (){
   let gradosUser = prompt("Grados de tu localidad")
   if(gradosUser === null){
       console.log("No ingresaste información")
   } else{
       console.log(parseInt(gradosUser))
   }
   window.alert((gradosUser * 1.8) + 32)
}

const grados = (a) => {
    let temperatura = parseInt(prompt("Digitraliza la tamperatura actual"))
    let fah = (temperatura * 1.8) +32
    return fah
}
console.log(grados)

/**
 * Funcion que imprima las tablas del 1 al 10
 

 const tablas = () => {
    for(i =0; i <= 10; i++){
        for(j=0; i <= 10; i++){
           console.log(`${i} x ${j} = ${i * j}`)
        } 
    }

}

/*


// Arrow fuunction
// Pedir al usuario una cadena de texto
// Verificar si esa oracion es un palindromo
// isPalindrome('hola') -> No es un palindromo
// isPalindrome('oso') -> SI es un palindromo

// anita lava la tina
// oso
// seres

// funcion de retorno
//const isPalindrome = ( str ) => {
    // sentencias
    
//

const isPalindrome = () => {
    let oration = prompt("Ingresa una oración")
    let reversed = ''
    for (i = oration.length -1; i >= 0; i-- ){
        reversed += oration[i]
    }
    if (oration === reversed){
        console.log('si es un palindromo')
    } else{
        console.log('no es un palindromo')
    }

}

//let arrMultiple = [1,2,4, 'México', 'Perú', 'España', 3]
/**
 * Escribir una funcion que
 * Filtrar solo las ciudades
 * filterCities( [1,2,4, 'México', 'Perú', 'España', 3] )
 * -> ['México', 'Perú', 'España']
 *  .filter()
 *  .forEach()
 */


let arrMultiple = [1,2,4, "México", "Perú", "España", 3]
/*
let soloPaises = arrMultiple.filter((currentValue, index, soloPaises) => {
    if(typeof currentValue === "string"){
        return currentValue
    }
})
console.log(soloPaises)


*/
let result = []
arrMultiple.forEach((value) => {
    if(typeof value === "string"){
        result.push(value)
    }

})

console.log(result)




