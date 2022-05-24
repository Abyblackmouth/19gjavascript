 /* sentences
}
while(){}
while(expresion){
    // sentences
}
do{
    // sentences
}while()
} while(expresion)
*/


for(let i = 1; i <= 10; i++){
// sentencias
// console.log('5 x '+ i)
console.log(` 5 x ${i} = ${5*i} `)
} 



// 'hola koders'
// '01234567891'
// '12345678901'
// imprimir cada palabra del string

let str1 = 'Hola Koder'
let fin1 = str1.length
let counter = 1
while(counter <= 10) {
console.log(` 5 x ${counter} = ${ 5 * counter } `)
counter++
}


// for(let i = 0; i < fin; i++){
//     console.log(str[i])
// } 
do {
console.log(counter)
// console.log(` 5 x ${counter} = ${ 5 * counter } `)
counter++
} while(counter <= 10)

// "Hola Koder"
// Imprimir en consola cada una de las vocales
// ciclos y condicionales


for(let i = 0; i < fin; i++){
let caracter = str[i]
// console.log(caracter)
if(
    caracter == 'a' || 
    caracter == 'e' || 
    caracter == 'i' || 
    caracter == 'o' || 
    caracter == 'u'
){
    console.log(caracter)
}
} 

// "Hola Koder"
// Imprimir en consola cada una de las consonantes
// ciclos y condicionales
/**
* 
* Imprimir cada caracter de un string
* 
*/ 

let str = 'Hola Koder'
let fin = str.length - 1

// Solucion for
for(let i = 0; i < fin; i++){
let caracter = str[i]
// console.log(caracter)
if(
    caracter !== 'a' && 
    caracter !== 'e' && 
    caracter !== 'i' && 
    caracter !== 'o' && 
    caracter !== 'u' &&
    caracter !== ' ' 
){
    console.log(caracter)
}
console.log(str[i])
} 

// solucion while
let counter2 = 0
while(counter2 <= fin) {
console.log( str[counter2] )
counter2++
}

counter2 = 0
do {
// console.log(counter2)
let letra = str[counter2]
console.log( letra )
counter2++
} while(counter2 <= fin)


/**
* 'Hola Koder'
* -> 'redok aloh'
* Imprimir el string invertido
* 
* 
*/ 

let counterReverse = fin
let ReversedStr = ''
while(counterReverse >= 0) {
 console.log( str[counterReverse] )
 ReversedStr += str[counterReverse]
 counterReverse--
}

console.log(ReversedStr)

/**
* 'oaoe'
* Imprimir en consola cada una de las vocales
* 
*/ 


/**
* 'HlKdr'
* Imprimir en consola cada una de las consonantes
* 
*/ 
