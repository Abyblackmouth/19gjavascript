/*
 * Dado un array de objetos koders
 * Imprimir en consola, todos los nombres de cada koder
 * 
 * 'jorge luis Camarillo tiene 30 años y es de la generacion 6'
 * 'Erik Gutierrez tiene 30 años y es de la generacion 16'
 * ....
 * 
 */

 let koders =  [
    {
        name: 'jorge luis',
        lastName: 'Camarillo',
        age: 30,
        generation: 6,
        modulos: ['js','node js', 'cloud'],
    },
    {
        name: 'Erik',
        lastName: 'Gutierrez',
        age: 20,
        generation: 15,
        modulos: ['js'],
    },
    {
        name: 'Sara',
        lastName: 'Reveles',
        age: 24,
        generation: 12,
        modulos: ['js'],
    }
]




koders.forEach((obj, index, arrayObj) => {
    console.log(obj)  //imprimir todo el objeto
    console.log(obj.age)  // imrimir solo la edad
    console.log(obj.modulos[0]) // imprimir el modulo 1

    console.log(`   
    ${obj.name} ${obj.lastName} 
    tiene ${obj.age} años y es 
    de la generación ${obj.generation}
    `)
})


/**
 * Del mismo array de koders
 * Obtener la suma de todas las edades
 * 
 */

//con forEach
let totalAge = 0
koders.forEach((obj, index, arrayObj) =>{
    totalAge = totalAge + obj.age
})

console.log(totalAge)




/**
 * Del objeto library
 * 1. Obtener el numero de libros que se estan leyendo
 * 2. Obtener una lista de todos los autores
 * 3. Obtener una lista de todos los Libros
 * 
 */
 let library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];


let totalReading = library.reduce((acc, libro) => {
    return libro.readingStatus ? total += 1 : total

}, 0 )

console.log(totalReading)


let authors = library.map((cv) => {
    return cv.author
})

let books = library.map((books) => {
    return books.title
})

console.log(books)

