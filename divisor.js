// Solciitar al usuario que ingrese un número
let numero = parseInt(prompt("Introduce un número; "));

// Recorrer los número desde el 1 hasta el numero ingresado
for (let i=1; i<=numero; i++){
    if(numero%i ===0){
        console.log("Divisor: "+ i);
    }
}
