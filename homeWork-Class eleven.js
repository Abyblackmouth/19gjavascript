
// Ejercicio
/**
 * Del siguiente objeto
 * Realizar una función que 
 * 1. Calcule el numero de empleados
 * 2. Obtenga el total a pagar
 * employesAndTotal( { 'Albert': 50000, 'jorge': 50000 })
 * -> Son 3 empleados y el total es 100000
 */


/*

 let salarios = {
    'juan': 30000,
    'Albert': 50000,
    'jorge': 50000
}

const employesAndTotal = ( obj ) => {
    let suma = 0
    let container = 0

    for(elemento in obj){
        suma += obj(elemento)
        container ++
    }
    return console.log(` Son ${container} empleados y el total de salarios es ${employesAndTotal}`)



}

*/


/**
 * Ejercicio 2.
 * Dado un objeto inicial, hacer los siguientes puntos 
 * 
 * 1. Agregar el lenguaje 'Go' a la lista de lenguajes
 * 2. Cambiar el nivel a 4
 * 3. Eliminar la propiedad avatar
 * 4. Agregar una nueva propiedad de edad y poner el valor de 30
 * 5. Imprimir en consola todos los lenguajes dominados
 * 6. Clonar el objeto en uno nuevo
 * 7. Imprimir en consola el nuevo objeto
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */


/*

let koder = {
    languages: ["JavaScript", "Python", "Ruby"],
    isMentor: true,
    level: 3,
    avatar: "https://picsum.photos/200/300"
}

*/


/**
 * Estudiar los metodos de objetos
 * https://www.w3schools.com/js/js_object_methods.asp
 * https://www.digitalocean.com/community/tutorials/how-to-use-object-methods-in-javascript
 * https://www.programiz.com/javascript/library/object/assign
 * 
 */


/*
El método Object.freeze() congela un objeto, 
es decir: impide que se le agreguen nuevas propiedades; 
--impide que se puedan eliminar las propiedades ya existentes; 
--impide que dichas propiedades, o su capacidad de enumeración, 
configuración, o escritura, puedan ser modificadas; 
--impide también que se pueda modificar su prototipo. 
----> El método devuelve el objeto recibido.

SINTAXIS:

Object.freeze(obj)
obj    ------> El objeto a congelar.


*/



  const koder = {
    name: "Abraham Covarrubias",
    edad: 33,
    Origin: "Monterrey, Nuevo Léon",
    generation: 19,
    bootcamp: "JavaScript",
    horario: ["7pm a 9pm"],
    isActive: true
}

Object.freeze(koder)

koder.edad = 18
koder.name = "Hector Covarrubias"

console.log(koder.edad)
console.log(koder.name)
  
  