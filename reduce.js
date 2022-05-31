

//EJERCICIO EN CLASE 1//
/*
crea un array con nombres de personas
--> devuelve la primera letra de cada elemento
*/

let  nombres  = ['Ernesto','Abraham','Rodrigo','Breez','Lenny']

const iniciales = (arr) => {
    let inicial = arr.reduce( (recipiente,nombre,index,arr)=>{
        return recipiente + nombre.charAt(0) 
       
    },'')

    return inicial
}

console.log(iniciales(nombres))

//EJERCICIO EN CLASE 2//

/* 
funcion con .reduce()
getDoubleNumbers ( [4, 7, 9])
--> [8, 14, 18]
*/


/*
const getDoubleNumbers = (arr) => {

    let dubleNumbersArr = []

    arr.reduce((recipiente, elemento, index, arr) => {
        dubleNumbersArr == arr.reduce ((recipiente, elemento, index, arr) => {
            recipiente.push(elemento * 2)
            return recipiente

        }, [] )

        return dubleNumbersArr
    }
}
*/