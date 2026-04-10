let numeros =[], num, Suma=0;

num = parseInt(prompt('Escriba un numero. \n Para terminar digite el numero 0 (cero)'));
while (num != 0){
    numeros.push(num);
    num = parseInt(prompt('Escriba un numero. \n Para terminar digite el numero 0 (cero)'));
}
console.log(numeros.length);
console.log(numeros);
console.log('Orden ascendente');
console.log(numeros.sort((a,b)=>(a - b)));
console.log('Ordena de forma descendente');
console.log(numeros.sort((a,b) => (b-a)));

console.log('Suma los elementos del array números')
for (let n of numeros) {
    Suma += n;
}
console.log(Suma);

console.log('Toma el elemento y elevarlo al cuadrado y guardar en otro array')
let numerosCuadrado = numeros.map(num => Math.pow(num,2));
console.log('Números elevado al cuadrado: \n', numerosCuadrado)


