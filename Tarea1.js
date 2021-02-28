
/* 
Nombre: Jorge Lagos A
Email: jor.lagos.1988@gmail.com
*/


/* Ejercicio 1 */

function valorParImpar(numero) {
    var esParImpar = '';
    if( (numero % 2) == 0) {
        esParImpar = 'es par'.toUpperCase();
    } else {
        esParImpar = 'es impar'.toUpperCase();
    }

    return numero + ' ' + esParImpar;
}


/* Ejercicio 2 */

function posicionLetra(letra) {
    var cadena = 'abcdefghijklmnñopqrstuvwxyz';
    var posicion = cadena.indexOf(letra);

    return 'La letra ' + letra + ' se encuentra en la posición ' + posicion;
}


/* Ejercicio 3 */

function valorConIVA(valor) {
    var iva = 0.19;
    var calculo = valor + (valor * iva);

    return 'El precio con impuesto es de $' + calculo;
}


/* Ejercicio 4 */

function nuevoDado(nombre) {
    return function() {
        var caraDado = Math.floor(Math.random() * 6) + 1;

        return nombre + ' tiró un dado y salió ' + caraDado
    }
}


/* Ejercicio 5 */

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

Persona.prototype.guardarEnLocalStorage = function () {
    localStorage.setItem('Nombre', this.nombre);
    localStorage.setItem('Edad', this.edad);
}

Persona.prototype.guardarEnSessionStorage = function() {
    sessionStorage.setItem('Nombre', this.nombre);
    sessionStorage.setItem('Edad', this.edad);
}
