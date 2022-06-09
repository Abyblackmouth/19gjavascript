
const printUsers = (arrObjs) => {

}

const primerPeticion = new XMLHttpRequest()
let users =[]

primerPeticion.onload =(data) => {
    if(data.target.status ===200) {
        let responseJSON = JSON.parse(data.responseText)
        users = responseJSON
        print(users)
    }
}

primerPeticion.open("GET", "https://jsonplaceholder.typicode.com/posts", false)
primerPeticion.send()