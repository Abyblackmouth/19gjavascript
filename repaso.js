//METODOS ARRAY//

const suma = (a, b) =>  {  //declaracion de la función
    let total = a + b  //sentencias
    return total

}

suma()  // invocar sin argumentos
suma (2,3) // invocar con argumentos




//metodos que reciben callbak

/*
arr.map(callback) 
arr.forEach(callback)
arr.filtrer(callback)
*/

//ejemplo sintaxis con callback

/*
array.map ( function (cv, index, array) {})
*/
/*
const doubleNumber = (numbertToIncrement) =>{
    let total = numbertToIncrement * 2
    return total
}

let totalFuncion = doubleNumber ( 1000)
console.log(totalFuncion)

let multiArray = [100 , 1000, 10, 2,4]
/*

/**
 * Escribir una funcion, Que dado una array de numeros y strings, 
 * retorne un array con solo los que son de tipo string
 * filterArray([1, 2, "a", "b"]) 
 * -> ["a", "b"]
 * 
 * Implementar soluciones con
 * .forEach()
 * .filter()
 * .reduce()
 *
*/

/*
let arrayElements = [1, 2, "a", "b"]
let aux = []
const filterArray = (arr) =>{
    arr.forEach((item) => {
        if (typeof item === "string"){
            aux.push(item)
        }     
    })

    return aux

}

console.log(filterArray(arrayElements))
console.log(aux)
*/


let arrayElements = [1, 2, "a", "b"]

const filterArray = (arr) =>{

    let aux = arr.filter((cv, index) =>{
       
        if (typeof cv === "string"){
           return cv
        } 

    } )

    return aux
    
}


let resultado = filterArray(arrayElements)
console.log(filterArray(arrayElements))
console.log(resultado)


/*

let arrayElements = [1, 2, "a", "b"]

const filterArray = (arr) =>{

    let aux = arr.reduce((acc, cv) =>{
       

        if (typeof cv === "string"){
            acc.push(cv)
           return acc
        } 

    }, [])

    return aux
    
}

console.log(filterArray(arrayElements))

*/




