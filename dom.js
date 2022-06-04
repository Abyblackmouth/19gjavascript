/**
 * Ejercicio
 * 1. A nuestro elemento ul agregar clase 'lista' y id 'lista'
 * 2. Quitar a todos los elementos de la lista la clase item
 * 3. Todos los elementos de la lista, agregar la clase  'list__item'
 */
// eliminar atributos 
// element.removeAttribute(attrName)
// document.querySelector('.title').removeAttribute('id')
//titulo.removeAttribute('id')


// Selecccionar el elemento a cambiar
const listWrap = document.querySelector("ul")
const allOptions = document.querySelectorAll (".item")

listWrap.setAttribute("id", "lista")
listWrap.setAttribute("class", "lista")

allOptions.forEach((item) => {
    item.removeAttribute ("class")
})

allOptions.forEach((item) => {
    item.setAttribute("class", "list__item")
})

console.log(allOptions)


// cear lista 

/*
let listaDos = document.createElement("ul")
let item1 = document.createElement("li")
let body = document.querySelector("body")

item1.textContent = "item 1"
listaDos.appendChild(item1)
console.log(listaDos)
body.appendChild(listaDos)

*/

// crear lista de forma dinamica

const listaTres = document.createElement("ul")
for(i = 1; i <= 10; i++){
    let item = document.createElement("li")
    item.textContenT = `${i}`
    listaTres.appendChild(listaTres)
}

let body = document.querySelector("body")
body.appendChild(listaTres)