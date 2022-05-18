
console.log("Hola Koders")
let Koders = "Abraham"

console.log( "Hola ", Koders)

//Formularios (prompt//

let nombreKoder = window.prompt("Dame tu nombre")
console.log(nombreKoder)

if(nombreKoder === null){
    console.log("Nombre vacio")
} else{
    console.log(nombreKoder)
}

//pedir al usuario los grados celsius en su localidad
// C to F
// celsius * 9/5 + 32
// calcular los F

let gradosUser = prompt("Grados de tu localidad")
if(gradosUser === null){
    console.log("No ingresaste información")
} else{
    console.log(parseInt(gradosUser))
}
console.log((gradosUser * 1.8) + 32)
