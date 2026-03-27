// //realizar un programa  que permita calcular el tiempo (hh:mm:ss), un segundo después de un tiempo dado 

// // declaración de variables 
// let tiempo, hr, mn, sg, partes;
// //ingreso de datos
// tiempo = prompt("Digite la hora (hh:mm:ss)")

// //proceso
// partes = tiempo.split(":");

// hr = parseInt(partes[0]);
// mn = parseInt(partes[1]);
// sg = parseInt(partes[2]);

// if (hr == 23 && mn == 59 && sg == 59){
//     hr = 0; mn = 0; sg = 0;
// }
// else{
//     if(mn == 59 && sg == 59){
//         hr += 1, mn = 0; sg =0;
//     }
//     else{
//         if(sg == 59){
//             mn ++; sg=0;
//         }else{
//             sg= sg + 1;
//         }
//     }
// }
// //SALIDA 
// document.writeln("\n la hora, un segundo después, es: " + hr + ":" + mn + ":" + sg);

// leer un numero de mes y determinar si tiene 28,29,30 o 31 dias

// // declaro la variable
// let mes;

// //Ingreso de datos
// mes = parseInt(prompt("Digite un número entre 1 y 12"));
// switch (mes) {
//     case 2:
//         document.writeln('Este mes tiene maximo 28 días');
//         break;
//     case 4|| 6|| 9|| 11:
//         document.writeln('Este mes tiene maximo 30 días');
//         break;
//     default:
//         document.writeln('Este mes tiene 31 días');
//         break;
// }

//EJERCICIO 1 
// Leer un número entero positivo de ocho cifras. 
// * Sumar las dos del centro. Indique el resultado.
// * Multiplicar los dos dígitos de los extremos entre sí. Indique el resultado.
// * Sustraer la segunda de la séptima cifra. Indique el resultado.
// * Elevar el dígito número 3 a la potencia del sexto dígito.
// Ejemplo: Se lee el número 12345678.
// Resultado:
// a. Suma: 9 (4 + 5)
// b. Multiplicación: 8 (1 * 8)
// c. Resta: 5 (7 – 2)
// d. Potencia: 729 (3 ^ 6)

// 1. Pedimos el número al usuario 
let numEntrada = prompt("Introduce un número entero de 8 cifras:");

// 2. Validación: Mientras no tenga 8 caracteres o no sea un número, volver a pedir
while (numEntrada.length !== 8 || isNaN(numEntrada)) {
    numEntrada = prompt("Error. Por favor, introduce exactamente 8 números:");
}

// 3. Procesamiento de datos (Convertimos a String explícitamente por seguridad)
const s = numEntrada.toString();

// a. Sumar las dos del centro (posiciones 4 y 5 -> índices 3 y 4)
const sumaCentro = Number(s[3]) + Number(s[4]);

// b. Multiplicar los extremos (posiciones 1 y 8 -> índices 0 y 7)
const multiExtremos = Number(s[0]) * Number(s[7]);

// c. Sustraer la segunda de la séptima cifra (índice 6 menos índice 1)
const resta = Number(s[6]) - Number(s[1]);

// d. Elevar el dígito 3 a la potencia del dígito 6 (índice 2 elevado al 5)
const potencia = Math.pow(Number(s[2]), Number(s[5]));

//4. Mostrar resultados usando document.writeln
document.writeln("<pre>"); // Usamos <pre> para que respete los saltos de línea y espacios
document.writeln("<h2>Resultados para el número: " + numEntrada + "</h2>");
document.writeln("-----------------------------------------");
document.writeln("a. Suma de las cifras centrales: " + sumaCentro);
document.writeln("b. Multiplicación de los extremos: " + multiExtremos);
document.writeln("c. Resta (Septima - Segunda cifra):       " + resta);
document.writeln("d. Potencia (tercera ^ Sesta):          " + potencia);
document.writeln("-----------------------------------------");
document.writeln("</pre>");


//EJERCICIO 2:Diseñe un aplicativo que muestre las temperaturas en tres (3) escalas conocidas (Celsius, Kelvin, Fahrenheit), y que además visualice los valores equivalentes en las otras escalas.

// 1. Pedimos la temperatura al usuario (asumimos que introduce Celsius)
let entrada3 = prompt("Introduce la temperatura en grados Celsius (°C):");

// 2. Validación: Mientras no sea un número o esté vacío, volver a pedir
while (isNaN(entrada3) || entrada3 === "" || entrada3 === null) {
    entrada3 = prompt("Error. Por favor, introduce un valor numérico válido:");
}

// Convertimos la entrada a número flotante
const celsius = parseFloat(entrada3);

// 3. Procesamiento de datos (Cálculo de equivalencias)
const fahrenheit = (celsius * 1.8) + 32;
const kelvin = celsius + 273.15;

// 4. Visualización en el local usando document.writeln
document.writeln("<div style='font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; border: 1px solid #ddd; border-radius: 10px; max-width: 400px; margin: 20px auto; background-color: #fcfcfc;'>");
document.writeln("<h2 style='color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px;'>Conversor de Temperatura</h2>");

document.writeln("<p style='font-size: 1.1em;'>Para un valor de <strong>" + celsius + " °C</strong>, las equivalencias son:</p>");

document.writeln("<ul>");
document.writeln("<li><strong>Escala Celsius:</strong> " + celsius.toFixed(2) + " °C</li>");
document.writeln("<li><strong>Escala Fahrenheit:</strong> " + fahrenheit.toFixed(2) + " °F</li>");
document.writeln("<li><strong>Escala Kelvin:</strong> " + kelvin.toFixed(2) + " K</li>");
document.writeln("</ul>");

document.writeln("<hr style='border: 0; border-top: 1px solid #eee;'>");
document.writeln("<button onclick='location.reload()' style='background-color: #3498db; color: white; border: none; padding: 10px 15px; border-radius: 5px; cursor: pointer; width: 100%;'>Calcular otra temperatura</button>");
document.writeln("</div>");


//EJERCICIO 3
//Diseñe un algoritmo que muestre por pantalla las medidas de longitud en tres (3) unidades conocidas (Kilómetros, Millas y Metros), y que además visualice los valores equivalentes en las otras unidades. Ejemplo: 1 Milla equivale a 1.6093 km o 1609.34 metros.

// 1. Pedimos la cantidad al usuario
let entrada = prompt("Introduce la longitud a convertir (ej: 5):");

// 2. Validación: Asegurar que sea un número válido y no esté vacío
while (isNaN(entrada) || entrada === "" || entrada === null) {
    entrada = prompt("Error. Por favor, introduce un número válido para la distancia:");
}

const valor = parseFloat(entrada);

// 3. Procesamiento: Definimos las constantes de conversión (Base: 1 Milla)
// 1 Milla = 1.60934 Kilómetros
// 1 Milla = 1609.34 Metros
const MILLA_A_KM = 1.60934;
const MILLA_A_METROS = 1609.34;

// 4. Generar la visualización directamente en el local
document.writeln("<div style='font-family: Segoe UI, sans-serif; max-width: 500px; margin: 30px auto; padding: 20px; border-radius: 15px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); background-color: #f0f4f8;'>");
document.writeln("<h2 style='color: #2c3e50; text-align: center; border-bottom: 2px solid #95a5a6;'>Conversor de Unidades de Longitud</h2>");

// --- CASO 1: Si la entrada fuera en Millas ---
document.writeln("<section style='margin-bottom: 20px;'>");
document.writeln("<h4 style='color: #2980b9;'>Si el valor ingresado (" + valor + ") son Millas:</h4>");
document.writeln("<ul>");
document.writeln("<li><strong>Kilómetros:</strong> " + (valor * MILLA_A_KM).toFixed(4) + " km</li>");
document.writeln("<li><strong>Metros:</strong> " + (valor * MILLA_A_METROS).toFixed(2) + " m</li>");
document.writeln("</ul></section>");

// --- CASO 2: Si la entrada fuera en Kilómetros ---
document.writeln("<section style='margin-bottom: 20px;'>");
document.writeln("<h4 style='color: #27ae60;'>Si el valor ingresado (" + valor + ") son Kilómetros:</h4>");
document.writeln("<ul>");
document.writeln("<li><strong>Millas:</strong> " + (valor / MILLA_A_KM).toFixed(4) + " mi</li>");
document.writeln("<li><strong>Metros:</strong> " + (valor * 1000).toFixed(2) + " m</li>");
document.writeln("</ul></section>");

// --- CASO 3: Si la entrada fuera en Metros ---
document.writeln("<section style='margin-bottom: 20px;'>");
document.writeln("<h4 style='color: #8e44ad;'>Si el valor ingresado (" + valor + ") son Metros:</h4>");
document.writeln("<ul>");
document.writeln("<li><strong>Kilómetros:</strong> " + (valor / 1000).toFixed(4) + " km</li>");
document.writeln("<li><strong>Millas:</strong> " + (valor / MILLA_A_METROS).toFixed(4) + " mi</li>");
document.writeln("</ul></section>");

document.writeln("<button onclick='location.reload()' style='width: 100%; padding: 10px; background: #34495e; color: white; border: none; border-radius: 5px; cursor: pointer;'>Nueva Conversión</button>");
document.writeln("</div>");