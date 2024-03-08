// Se va a crear una función para validar que se esten ingresando valores numéricos - PARTE DEL PASO 3
function validarNumeros(value){
    // Primero comprobar si el valor recibido es un número
    if(isNaN(value)){
        return false;
    }
    // Comprobar si es una cadena vacía
    if(value===""){
        return false;
    }
    return true;
}

// Programa para comparar 2 valores
// Definición de variables y solicitud al usuario para captura de un número a través del prompt - PASO 1
var numero1 = parseFloat(prompt('Introduce el primer número:'));
var numero2 = parseFloat(prompt('Introduce el segundo número:'));

/*
// Validar si los valores ingresados son iguales o menores que 0 (CERO) - SE DEJA COMENTADO PORQUE LA VALIDACION CORRECTA
SE HARÁ CON UNA FUNCIÓN.

if (numero1<=0 || numero2<=0){
    alert("LOS DOS VALORES SON MENORES O IGUALES A CERO")
}
*/`
`
// Impresión en consola - Solo para comprobar que se esta un dato
// Si la consola nos imprime un NaN en alguna o ambas variables quiere decir que el usuario capturo un valor no numérico  
console.log(numero1);
console.log(numero2);

// PASO 3 - VALIDACIÓN DE LOS VALORES INGRESADOS POR EL PROMPT
if(!validarNumeros(numero1) || !validarNumeros(numero2)){
    alert("Introduciste un valor no numérico. Por favor, vuelve a ingresarlos");
}

while (numero1<=0 || numero2<=0){
    alert("Los dos valores inglresados son menores o iguales a CERO");
    numero1 = parseFloat(prompt('Introduce el primer número:'));
    numero2 = parseFloat(prompt('Introduce el segundo número:'));
} 


// Se establece una condición para comparar si los números son iguales - PASO 2 evaluación de las variables
if(numero1==numero2) {
    alert('LOS NÚMEROS SON IGUALES');
    // console.log('LOS NÚMEROS SON IGUALES'); SOLO PARA COMPROBAR QUE IMPRIME EN CONSOLA pero se deja comentado
}else if (numero1>numero2){
    alert('El numero mayor es: ' + numero1 + "\nEl numero menor es: " + numero2);
}else if (numero2>numero1){
    alert('El numero mayor es: ' + numero2 + "\nEl numero menor es: " + numero1);
}else {
    alert('INGRESA NÚMEROS CORRECTOS');
}