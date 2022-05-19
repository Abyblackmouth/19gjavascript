console.log("condicionales file")



if( 2 === "2" ){
    console.log("Son iguales")
} else if ( 3 === "3" ) {
    console.log("son iguales 3")
} else {
    console.log("Por defecto")
}


//CONDICIONALES BOLEANOS//

let numero = 2
if( numero % 2 === 0){
    console.log(" es par")
} else {
    console.log("es impar")
}

numero % 2 === 0 ? console.log("es par") : console.log ("es impar")


let esPar = numero % 2 === 0 && numero < 100 ? true : false

console.log(`El numero ${numero} es ${esPar === true ? "par" : "impar" }`)


//SENTENCIA SWITCH//

let age = parseInt ( prompt("Cual wes tu edad? ") )
let isAge = age >= 18 ? true : false
switch (age) {
    case 17:
        console.log("Eres menor de edad")
        break;
    case 18:
        console.log("Eres mayor de edad")
        break;
    

}




