// Declarar variables
let numero1, numero2;

do{
    numero1 = parseFloat(prompt("Introduce el primer número: "));
}while(isNaN(numero1)||numero1<0);

do{
    numero2 = parseFloat(prompt("Introduce el segundo número: "));
}while(isNaN(numero2)||numero2<0);

// Las operaciones

let suma = numero1+numero2;
let resta = numero1-numero2;
let multiplicacion = numero1*numero2;
let division = numero1/numero2;

// Variables con los resultados para mostrar en el HTML, Prompt y consola

let resultado = `La suma es: ${suma} <br>
La resta es: ${resta} <br>
La multiplicación es es: ${multiplicacion} <br>
La división es: ${division} <br>`;

let resultadoCMD = `La suma es: ${suma} \n
La resta es: ${resta} \n
La multiplicación es es: ${multiplicacion} \n
La división es: ${division}\n`;

// Imprimir en HTML, prompt y consola
document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);