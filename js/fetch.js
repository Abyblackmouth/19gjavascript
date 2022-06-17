//POST

let newKoder = {
    age: "32",
    biography: "Lorem ipsum",
    bootcamp: "Js",
    name: "Francisco"
}

fetch( 'https://koders19gjs-default-rtdb.firebaseio.com/koders/.json', {
    method: 'POST',
    body: JSON.stringify(newKoder),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(( response)=> {
    return response.json()
})
.then( (finalResponse) => {
    console.log(finalResponse)
})
.catch( (err) => {
    console.log(error)
})