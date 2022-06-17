// SOLICITAR HTTP REQUEST AL NAVEGADOR//
// SOLICITAR APERTURA DE LA BASE DE DATROS DE FAREBASE Y COMPROBACION DE RESPUESTA DE LA BASE DE DATOS
// MAQUETA, PROCESO DE EDITAR EL POST
//
// CONCTAR LA MAQUETA CON LA BASE DE DATOS




let btnEditar = document.getElementById('editKoder')
btnEnviar.addEventListener('click', () => {

    // OBTENER LOS CAMBIOS
    let name = document.getElementById('nombre').value
    let age = document.getElementById('edad').value
    let biography = document.getElementById('biografia').value
    let bootcamp = document.getElementById('bootcamp').value

    //FORMAR EL NUEVO KODER
    let newKoder = {
        name: name,
        age: age,
        biography: biography,
        bootcamp: bootcamp
    }

    console.log(newKoder)
    //})

    //CREAR EL OBJETO//

    let idKoder = window.location.search.substring(10)
    console.log(idKoder)


    // HACER EL
    const httpXHR = new XMLHttpRequest()

    httpXHR.open('PATCH', 'https://devgen19-b545b-default-rtdb.firebaseio.com/users.json', true)
    console.log(httpXHR)

    httpXHR.onload = (response) => {
        if (response.target.status >= 200 && response.target.status <= 399) {
            let responseFirebase = JSON.parse(response.target.response)
            console.log(responseFirebase)
            alert(`Koder registrado exitosamente con el id ${responseFirebase.name} `)
        }
    }


    // enviar 
    // texto plano NOtacion de JSON
    // console.log(JSON.stringify(newKoder))
    httpXHR.send(JSON.stringify(newKoder))

})


const ajaxXHR = (callback, url, method = 'GET', obj = {}) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open(method, `https://koders19gjs-default-rtdb.firebaseio.com${url}`, true)
    xhttp.onload = function (data) {
        if (data.target.status >= 200 && data.target.status <= 399) {
            let response = JSON.parse(data.target.response)
            callback(response)
        }
    }
    if (method === 'GET' || method === 'DELETE') {
        xhttp.send()
    } else {
        xhttp.send(JSON.stringify(obj))
    }
}


// Update Koder
//console.log('SU codigo para editar un koder aquí')

