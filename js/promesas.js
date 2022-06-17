//EJERCICIO PROMESA 
//Generar el proceso de inscripción
// tomar como referencia 3 pasos

// Conocer kodemia
// Inscribirse
// Tomar primera clase

const conocerKodemia = ()=>{
  return  new Promise ((resolve,reject)=>{
        setTimeout( () => {
            resolve('Conociendo Kodemia')
            // reject('sin contestar')
        }, 2000 )  
    })
}

const inscribirse = ()=>{
   return new Promise ((resolve,reject)=>{
        setTimeout( () => {
            resolve('enviar documentación')
            // reject('información incompleta')
        }, 2000 )  
    })
}

const tomarPrimeraClase = ()=>{
     return new Promise ((resolve,reject)=>{
        setTimeout( () => {
            resolve('comienza las clases')
            // reject('no tomar clases')
        }, 2000 )  
    })
}

conocerKodemia()
.then(response =>{
    console.log(response)
    return inscribirse()
})
.then(response => {
    console.log(response)
    return tomarPrimeraClase()
})
.then( response =>{
    console.log(response)
})
.catch((error)=> {
    console.log(error)
    alert('Algo salio mal con tu inscripción ', error)
})




//FETCH


