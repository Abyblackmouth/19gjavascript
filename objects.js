// CREAR UN OBJETO//

let koder = {
    name: "Abraham Covarrubias",
    edad: 33,
    Origin: "Monterrey, Nuevo Léon",
    generation: 19,
    bootcamp: "JavaScript",
    horario: ["7pm a 9pm"],
    isActive: true
}

console.log(
    `Mi nombre es ${koder.name} tengo la edad de ${koder.edad} años, 
    vivo en ${koder.Origin}. Estoy ${koder.isActive ? "activo" : "inactivo"} 
    en el bootcamp ${koder.bootcamp} generación ${koder.generation} 
    en horario de ${koder.horario[0]}`
)


// CREAR ATRIBUTOS FUERA DE UN OBJETO//
let koderAsing = {}

koderAsing.name = "Abraham Covarrubias"
koderAsing.edad = 33
koderAsing.origin = "Monterrey, NMuevo León"
koderAsing.generation = 19
koderAsing.bootcamp ="JavaScript"
koderAsing.horario = ["7pm a 9pm"]
koderAsing.isActive = true

console.log(
    `Mi nombre es ${koderAsing.name} tengo la edad de ${koderAsing.edad} años, 
    vivo en ${koderAsing.origin}. Estoy ${koderAsing.isActive ? "activo" : "inactivo"} 
    en el bootcamp ${koderAsing.bootcamp} generación ${koderAsing.generation} 
    en horario de ${koderAsing.horario[0]}`
)

// CETEAR VALORES DE UN OBJETO//

koderAsing.name = ["Héctor Covarrubias"]
koderAsing.edad = [29]
koderAsing.origin = "Monterrey, NMuevo León"
koderAsing.generation = 19
koderAsing.bootcamp ="JavaScript"
koderAsing.horario = ["7pm a 9pm"]
koderAsing.isActive = true

console.log(koderAsing.name)



//iTERANDO OBJETOS//

let salarios = {
    "Jorge" : "20000",
    "lenny" : "30000",
    "Kike" : "50000",
    "Ernesto": "70000",
}

/**
 * Ejercicio 1:
 * Calcular el total de salarios
 * -> 95000
 */

let sumaSalario = 0
for (elemento in salarios) {
    let val = parseInt(salarios[elemento])
    sumaSalario += val

}
console.log(sumaSalario)


/**
 * Ejercicio 2:
 * Pasar el ejercicio 1 a función flecha
 * Debe recibir 1 parametro 
 * Objeto de salarios
 */

const totalSalario = (objSalarios) =>{
    let sumaSalario = 0
    
    for (elemento in objSalarios) {
        let val = parseInt(objSalarios[elemento])
        sumaSalario += val
        
    
    }
    return sumaSalario
    
}

console.log(totalSalario(salarios))




/**
 * Ejercicio 3:
 * Escribir una funcion que reciba un parametro
 * Verificar si el parametro es un objeto
 * o si es un array
 * p.ej.  
 * ·> isAnObjectOrArray( [1,2,3] )
 * -> 'Es un array'
 * ·> isAnObjectOrArray( {key:'value'} )
 * -> 'Es un Objeto'
 * ·> isAnObjectOrArray( 'Hola mundo' )
 * -> 'No es un array ni un objeto'
 * 
 * 
 * @params {Object}, [Array] ,'string' - Estructura que se quiere validar
 * @return 'String' - mensaje de respuesta
 * 
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 * 
 */

 const isAnObjectOrArray = (element) => {
     let str = " "
      if (typeof element === "array"){
          str = "es un array"
      } 

}




