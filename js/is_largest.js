console.log("is_largest")

let num1 = prompt( "Ingresa un numero" )
let num2 = prompt( "Ingresa un número" )
let num3 = prompt( "Ingresa un número" )

if(num1 > num2){
    if(num1 > num3){
        console.log(`El número mayor es ${num1}`)
        window.alert(`El número mayor es ${num1}`)
    } else{
        console.log(`El número mayor es ${num3}`)
        window.alert(`El número mayor es ${num3}`)
    }
} else {
    if(num2 > num3){
        console.log(`El número mayor es ${num2}`)
        window.alert(`El número mayor es ${num2}`)
    } else {
        console.log (`El número mayor es ${num3}`)
        window.alert(`El número mayor es ${num3}`)
    }
}   