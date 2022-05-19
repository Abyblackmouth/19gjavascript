console.log("weather")

let user = prompt("Escoge una opción: a) SOLEADO , b) LLUVIOSO, c) NEVANDO,  d) NUBLADO")

if (user === "a") {
    let soleado = prompt("¿Cual es la temperatura?")
    soleado = (soleado * 1.8) + 32
    window.alert(`El clima es soleado y la tempeatura es de ${soleado} ° Farentheit `)

} else if (user === "b") {
    let lluvioso = prompt("¿Cual es la temperatura?")
    lluvioso = (lluvioso * 1.8) + 32
    window.alert(`El clima es lluvioso y la tempeatura es de ${lluvioso} ° Farentheit `)

} else if (user === "c") {
    let nevando = promt("¿Cual es la temperatura?")
    nevando = (nevando * 1.8) + 32
    window.alert(`El clima es nevando y la tempeatura es de ${nevando} ° Farentheit `)

} else if (user === "d") {
    let nublado = prompt("¿Cual es la temperatura?")
    nublado = (nublado * 1.8) + 32
    window.alert(`El clima está nublado y la tempeatura es de ${nublado} ° Farentheit `)
} else {
    console.log("No ingresó informacion correcta")
    window.alert("No ingresó informacion correcta")
}

