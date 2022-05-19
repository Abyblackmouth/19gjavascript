
/* 
Pedir al usuario 2 numeros ( a y b)
comprobar si "a" es mayor o menor que "b"
Imprimir en consola el resultado
*/


let a = prompt ("Ingresa el primer valor:")
let b = prompt ("Ingresa el segundo valor:")


a = parseInt(a)
b = parseInt(b)

if( a > b) {
    console.log (a + "es mayor que" + b )
} else{
    console.log ( a + " es menor que " + b )
}
