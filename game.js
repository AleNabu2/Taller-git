//Juego de adivinar el numero 🎈🎈🎈

let numero = Math.floor(Math.random()*10)+1;
let leer = require('prompt-sync')();

let intento;

do {
    intento = parseInt(leer("Adivina el numero que esta entre 1 y 10: "));

    if (intento === numero){
        console.log("Adivinaste, eres muy intuitivo!🤩");

    } else if (Math.abs(intento-numero)<=2){
        console.log("Caliente🔥");

    } else {
        console.log("Frio ❄");

    }
    
} while (intento !==numero);