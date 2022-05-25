// FUNCIONES

// invertir una cadena
/*
let strUser = prompt("Dame una palabra", "str").toLowerCase()
let strReversed =""

for(i = strUser.length -1; i >= 0; i--){
    console.log(strUser[i])
}


console.log(strReversed)
*/

/*
function ReversedStr(){
    //sentencias
    let strUser = prompt("Dame una palabra", "str").toLocaleUpperCase()
    let strReversed = ""
    for ( i =strUser.length -1; i >= 0; i--){
        strReversed += strUser[i]
    }
  
    console.log(strReversed)


}

function getNumber(){
    let numeroTemporal = parseInt(prompt("Dame un numero"))
    return numeroTemporal
}
*/




//EJERCICIO EN CLASE//
    // Realiza una funcion
    // Que pida al usuario 3 numeros
    // retorne la suma de esos 3 numeros
    // los 3 numeros deben pasarse como parametros

function valores (v1,v2,v3){
    return v1 + v2 + v3
}

let v1 = parseInt(prompt("ingresa un valor"))
let v2 = parseInt(prompt("ingresa un valor"))
let v3 = parseInt(prompt("ingresa un valor"))

let suma = valores (v1, v2, v3)
window.alert(suma)

    


