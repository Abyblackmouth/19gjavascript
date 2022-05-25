// Ejercicios

/**
 * Ejercicio 1
 * Escribir un programa de arroje la suma de los multiplos de 3, 5 o 7 que hay entre 1 y 100
 * Resolver con For, While y do While
 */

function sumaMultiplos() {
    let num1 = 3
    let num2 = 5
    let num3 = 7
    let sumaN1 = 0
    let sumaN2 = 0
    let sumaN3 = 0
    let sumaTotal = 0

    for (let i = 1; i <= 100; i++) {
        if (i % num1 === 0) {
            sumaN1 += i
        }
        if (i % num2 === 0) {
            sumaN2 += i
        }
        if (i % num3 === 0) {
            sumaN3 += i
        }
    }
    sumaTotal = sumaN1 + sumaN2 + sumaN3
    console.log(sumaTotal)
}



/**
 * Ejercicio 2
 * Pedir el usuario 1 numero entre 1 y 100
 * sumar todos los numeros entre el 1 y este numero
 * Mandar un alert con el  total
 * Resolver con For, While y do While
 * p.ej. 5
 * ->  15
 */



function sumaNumeros() {

    let num = parseInt(prompt("ingresa un numero"))
    let suma = 0

    if (num < 1 && num > 100) {
        for (let i = 1; i <= num; i++) {
            suma += i
        }
    }

    window.alert(suma)

}


/**
 * Ejercicio 3
 * pedir una oracion al usuario
 * Contar las letras "a" y "e" y espacios,
 * Resolver con For, While y do While
 * 
 * p.ej. 'hola kodErs'
 * ->  A -> 1 
 * ->  E -> 1
 * ->  Espacios -> 1 
 */

function ConteoCaracteres() {
    let strMin = prompt("Ingresa una frase").toLowerCase()
    let contadorA = 0
    let contadorE = 0
    let contadorEspacios = 0

    for (let i = 0; i < strMin; i++) {
        if (strMin[i] === "a") {
            contadorA++
        }
        if (strMin[i] === "e") {
            contadorE++
        }
        if (strMin[i] === " ") {
            contadorEspacios++
        }

    }
    console.log()

}








/**
 * Ejercicio 4
 * Estudiar acerca del tema Funciones
 * ¿Qué son?
 * Parametros y argumentos de una funcion
 * Parametros de una funcion
 * Parametros opcionales
 * Parametros por defecto (default)
 * 
 * Referencias
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
 * https://www.programiz.com/javascript/function
 * 
 */