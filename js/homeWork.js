/*
EJERCICIO 2
    Pedir al usuario usuario un numero entre 1 y 10
    Imprimir la tabla de multiplicar de ese número
*/

let num = parseInt(prompt("Ingresa un numero del 1 al 10"))
if (num <= 10) {

    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${i * num}`)
    }

} else {
    window.alert("Numero invalido")
}


/*
 EJERCICIO 3
    Pedir al usuario una oracion
    Imprimir un string con todas las vocales
    Imprimir un string con todas las consonantes
    p.ej. "Hola mundo"
    Consonantes -> hlmnd
    Vocales -> oauo
 */

let str = prompt("introduce una oración")
let vocales = ""

let strMin = str.toLowerCase()
for( let i = 0; i < strMin.length; i ++){
    if(strMin [i]=="a" || strMin[i]=="e" || strMin [i]=="i" || strMin[i] == "o" || strMin[i]=="u"){
        vocales = vocales + strMin[i]
    }
}
console.log(vocales)

let consonantes = str.replace(/[aeiou" "]/gi,"");
console.log(consonantes)



/*
EJERCICIO 4vowels
    Pedir al usuario un numero entre 10 y 100
    Imprimir todos los numeros pares que existenm entre 1 y ese numero
    p.ej. 12 -> 2,4,6,8,10,12
    */

let numUser = parseInt(prompt("Ingrese numero entre 10 y 100"))
let n = 2
let numConcanete =""

if (numUser >=10 && numUser <= 100){
    while (n <=numUser){

        numConcanete += [n,""]
        n +=2
    }
    console.log(numConcanete)
}else{
    console.log("Numero fuera de rango")

}

/*
EJERCICIO 5
    Pedir el usuario una palabra
    Invertir esa palabra e imprimirla en consola
    p.ej. 'Hola' -> 'aloh'
    */

let imputWord = prompt("Indica la palabra que será invertida")
let reversedWord = ""

if(imputWord.length > 0){
    console.log(`Palabra ingresada ${imputWord}`);

    for (let i = imputWord.length -1; i >= 0; i--){
        reversedWord += imputWord[i].toLowerCase();
    }
    console.log(`${imputWord} -> ${reversedWord}`);
}






