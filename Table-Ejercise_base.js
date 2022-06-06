
/**
 * Dado un arreglo de koders
 * 1. Generar una lista con la clase koders
 * 2. Agregar a cada koder en esa lista
 * 3. A todos los koders agregarles la clase 'item koder'
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
        modulos: ['Node'], 
    },
    {
        name: 'Sara',
        lastName: 'Reveles',
        age: 24,
        generation: 12,
        modulos: ['js'], 
    }
]

let tbody = document.querySelector("tbody") //seleccionar la etiqueta tabla
koders.forEach((koder, index, arr) =>{  // se crea un forEach para identar el contenido del objeto
    
    console.log(koder.name) //solo para vislizacion
    console.log(koder.age) // solo se agrega para vislizacion
    console.log(koder.generation) // solo se agrega para visualizacion

    let tr = document.createElement("tr")  // crear elemento    

    let tdName = document.createElement("td") // crear elemento
    tdName.textContent = koder.name //manda llamar parametro del objeto
    tr.appendChild(tdName)


    let tdAge = document.createElement("td") // crear elemento
    tdAge.textContent = koder.age //manda llamar parametro del objeto
    tr.appendChild(tdAge)


    let tdGen = document.createElement("td") // crear elemento
    tdGen.textContent = koder.generation //manda llamar parametro del objeto
    tr.appendChild(tdGen)

    console.log(tr)

})

