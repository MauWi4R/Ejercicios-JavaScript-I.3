// Se definen variables
var numero1;
var numero2;

// Vamos a usar el control de DO-WHILE
do{
    numero1 = parseInt(prompt('Introduce un número de inicio: '));
}while(isNaN(numero1) || numero1<=0);

do{
    numero2 = parseInt(prompt('Introduce un número de fin: '));
}while(isNaN(numero2) || numero2<=0);

console.log(numero1);
console.log(numero2);

// Imprimir en el documento HTML con la etiquet h1
document.write("<h1>Los números entre " + numero1 + " y " + numero2 + "son: </h1>");

// Bucle para imprimir los números
for (let i=numero1; i<= numero2; i++){
    document.write(i+" ");
}

// Imprimir en consola los número impares entre el numero1 y numero2
let c=numero1;
while(c<=numero2){
    if(c%2 !==0){
        console.log(c);
    }
    c++;
}