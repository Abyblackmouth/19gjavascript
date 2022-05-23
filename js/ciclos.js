// ciclos

/*
for(inicio; fin; aumento/decremento){

}


while
do{}
*/

// str empieza desde 0
// leng empieza desde 1

for( let i = 0; i <= 10; i++ ){
    console.log(`5 x ${i} = ${5*i}`)
}

let str = "Hola Koders!"
let fin = str.length - 1

for(let i = 0; i <= fin; i++ ){
    console.log(str[i])

}

//EJERCICIO//

//"Hola Koder"
// Imprimir en consola cada una de las vocales
// ciclos y condicnionales
//
// 0
// a
// o
// e

for( let i = 0; i < fin; i++ ){
     let caracter = str[i]

    if (
        caracter == "a" ||
        caracter == "b" ||
        caracter == "i" ||
        caracter == "o" ||
        caracter == "u"
    ){
        console.log(caracter)
    }
}


//imprimir solo las vocales

for( let i = 0; i < fin; i++ ){
    let caracter = str[i]

   if(
       caracter !== "a" &&
       caracter !== "b" &&
       caracter !== "i" &&
       caracter !== "o" &&
       caracter !== "u"
   ){
       console.log(caracter)
   }
}

