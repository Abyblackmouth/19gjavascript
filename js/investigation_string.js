/*
*******STRING CONCAT******
El concat es un metodo que une dos o mas cadenas y devuelve una nueva cadena
-Concatena los argumentos de tipo texto
-SINTAXIS: string.concat(string1, string2, ..., stringX)   ----> VALOR DE RETORNO
*/

let txt1 = "Hector";
let txt2 = "Abraham ";
let txt3 = "Covarrubias ";
let txt4 = "Martinez"
let result = txt1.concat(" ", txt2, " ", txt3, " ", txt4);
console.log(result)