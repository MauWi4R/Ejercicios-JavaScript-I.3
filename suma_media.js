// Establecer las variables para almacenar el valor de suma y la media
let suma = 0;
let media = 0;

// Se establece un contador

let contador = 0;

// Ciclo o bucle para solicitar números al usuario
while(true){
    var numero = parseInt(prompt('Ingresa un número y si quieres detener la solcitud de números ingresa un númeor NEGATIVO: '));
    // Si el número es NEGATIVO, se termina el ciclo
    if(isNaN(numero)){
        numero=0;
    }
    if (numero>=0){
        suma += numero;
        contador++;
    }else {
        break;
    }
}

console.log("Suma es igual a: ", suma);
console.log("Contador es igual a: ", contador);

// Se calcula la media

media=suma/contador;
alert("la suma de los números introducidos es: "+ suma +"\nLa media de los números introducidos es: "+ media);