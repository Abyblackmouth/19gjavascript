//ENCERNDER UN SERVIDOR

const { setServers } = require("dns")
const http = require("http")

const server = http.createServer((request, response)=>{
    //Escribiendo
    response.write("Hola desde mi servidor, hola mundo")

    //Acabar
    response.end()

})

//Listening
  // 1- PORT
  // 2- CALLBACK
server.listen(8080,()=>{
    console.log("Mi servidor está escuchando")
})

//Estructura de datos

