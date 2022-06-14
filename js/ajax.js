//CREATE
const createUser =  ( objUser ) => {
    console.log(JSON.stringify(objUser))
    const xhttp = new XMLHttpRequest()
    xhttp.open( "POST","https://devgen19-b545b-default-rtdb.firebaseio.com/.json", true)
    xhttp.onload = function(data) {
      console.log(data)
        if(data.target.status >= 200 && data.target.status <= 399){
            console.log(data.target.response)
        }
    }
    xhttp.send( JSON.stringify(objUser) )
  }

  
  let user ={
    name: "Abraham",
    lastName: "Covarrubias",
    age: 33
}


//UPDATE

const updatexhrPUT =(userUpdated) =>{
const updatexhr = new XMLHttpRequest()
updatexhr.open(
    "PATCH",
    "https://devgen19-b545b-default-rtdb.firebaseio.com/.json",
    true
)

updatexhr.onload=(response) =>{
    if(response,target.status >= 200 && response.target.status <= 399){
        console.log(response.target)
        console.log(response.target.response)

    }
  }
  updatexhr.send(JSON.stringify(userUpdated))
}

//DELETE



const deleteUser  = ( idUser ) => {
    const deletexhr = new XMLHttpRequest()
    deletexhr.open(
      'DELETE', 
      `https://koders19gjs-default-rtdb.firebaseio.com/users/${idUser}.json`, 
      true
    )
    deletexhr.onload = (response) => {
      if(response.target.status >= 200 && response.target.status <= 399){
        console.log(response.target)
        console.log(response.target.response)
      }
    }
    deletexhr.send()
  }
  
  // deleteUser( '-N4AG_csrBrUna8FJtRJ') 