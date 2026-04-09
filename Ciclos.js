//let n, w, dw,moneda, suma=0; /*variables*/
/*for(n=1; n<=10; n++){ //Operaciones Aritmeticas
document.getElementById("contenedor").innerHTML  += n + ". ciclo for básico <br>";
}

w = 1; //expresion inicial
while(w <=10){
document.getElementById("contenedor").innerHTML  += w + ". ciclo while básico <br>" //sentencia
w++; //incremento
}

dw =1;
do{ //expresón inicial
    document.getElementById("contenedor").innerHTML  += dw + ". el ciclo do{;}while(); <br>"//sentencia
    dw++; //incremento
}while (dw<=10);//condicion*/

/* operacion  productoria
for(n=1; n<=10; n++){ //contador
    suma += n;  //acumulador
    document.getElementById("contenedor").innerHTML  += "<br> Valor parcial:" + suma;
}
document.getElementById("contenedor").innerHTML  += "<br> Valor final:" + suma;

multiplicación =1;
for(n=1; n<=10; n++){ //contador
    multiplicación *= n;  //acumulador
    document.getElementById("contenedor").innerHTML  += "<br> Valor parcial:" + multiplicación;
}
document.getElementById("contenedor").innerHTML  += "<br> Valor final:" + multiplicación;*/


//OPERACIONES PRODUCTORIAS ALCANCÍA

/*document.getElementById("contenedor").innerHTML = "ALCANCÍA <br><br>";

w = parseInt(prompt("Cantidad de monedas"));
for(n=1; n<=w; n++){
moneda = parseInt(prompt("Valor de la moneda" + n));
suma += moneda;
}
document.getElementById("contenedor").innerHTML  += "<br> VALOR AHORRADO:" + suma;*/

//Realizar un  programa que permita pedir 50 números naturales  y determine e impima cuantos son pares, cuantos impares, positivos, negativos.

/*let num, par=0,impar=0, pos=0, neg=0, n, cero=0; 

for(n=1; n<=50; n++){
    num= parseInt(prompt("Número " + n + ":"));
    if(num % 2 == 0){
        par++;}
        else {impar++;}
    if(num>0){pos++;}
    else{
        if(num<0){
            neg++;
        }
        else{
            cero++;
        }
    }
}
document.getElementById("contenedor").innerHTML += "<br> Los números positivos son: " + pos;
document.getElementById("contenedor").innerHTML += "<br> Los números negativos son: " + neg;
document.getElementById("contenedor").innerHTML += "<br> Los números pares son: " + par;
document.getElementById("contenedor").innerHTML += "<br> Los números impares son: " + impar;
document.getElementById("contenedor").innerHTML += "<br> Los números ceros son: " + cero;*/

// Hacer un programa que clasifique 400 personas según el deporte que practica. Los deportes son: Ajedrez, Atletismo, fútbol, Gimnasia, Natación

let aj=0, at=0, fu=0, gm=0, nt=0, n, num;

/*document.getElementById("contenedor").innerHTML += "1. Ajedrez <br>";
document.getElementById("contenedor").innerHTML += "2. Atletismo <br>";
document.getElementById("contenedor").innerHTML += "3. Futbol <br>";
document.getElementById("contenedor").innerHTML += "4. Gimnasia <br>";
document.getElementById("contenedor").innerHTML += "5. Natación<br>";

document.getElementById("contenedor").innerHTML += "Dijite un número entre 1 y 5, para el deporte que practica <br>";*/
for(n=1; n<=10; n++){
    do{
    num= parseInt(prompt("Encuestado #" + n + "\n\n" +
            "1. Ajedrez\n" +
            "2. Atletismo\n" +
            "3. Futbol\n" +
            "4. Gimnasia\n" +
            "5. Natación\n\n" +
            "Digite un número entre 1 y 5:"));
            // DETECTOR DE ERRORES:
        // Si el usuario ingresa algo que no es un número (NaN) o está fuera de rango
        if (isNaN(num) || num < 1 || num > 5) {
            alert("Entrada no válida. Por favor, ingresa solo números del 1 al 5.");
        }
    }while (isNaN(num) || num < 1 || num > 5);
    switch (num){
        case 1: aj++; break;
        case 2: at++; break;
        case 3: fu++; break;
        case 4: gm++; break;
        case 5: nt++; break;
        
    }
}

document.getElementById("contenedor").innerHTML += "<h3>Resumen de la encuesta:</h3>";
document.getElementById("contenedor").innerHTML += "<br> Ajedrez: " + aj;
document.getElementById("contenedor").innerHTML += "<br> Atletismo: " + at;
document.getElementById("contenedor").innerHTML += "<br> Futbol: " + fu;
document.getElementById("contenedor").innerHTML += "<br> Gimnasia: " + gm;
document.getElementById("contenedor").innerHTML += "<br> Natación: " + nt;
