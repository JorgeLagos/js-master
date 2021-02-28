
/* 
Nombre: Jorge Lagos A
Email: jor.lagos.1988@gmail.com
*/


/* Ejercicio 1 */

function eliminarMascota(mascotaAEliminar) {
    indiceEliminar = this.mascotas.indexOf(mascotaAEliminar);
    this.mascotas.splice(indiceEliminar, 1);
    return this.mascotas;
}

function eliminarUltimaMascota() {
    this.mascotas.splice(-1);
    return this.mascotas;
}

function agregarMascota(mascotaAAgregar) {
    this.mascotas.push(mascotaAAgregar);
    return this.mascotas;
}

function contadorMascotas() {
    var contadorOS = 0;
    this.mascotas.forEach(function(mascota, indiceMascota, arrayCompleto) {
        if (mascota.endsWith('os')) {
            contadorOS++;
        }
    });
    return `En el arreglo hay ${contadorOS} mascotas que terminan con 'os'`;
}

var mascota = {
    mascotas: ['perros', 'gatos', 'canarios', 'pez', 'serpiente'],
    eliminarMascota,
    eliminarUltimaMascota,
    agregarMascota,
    contadorMascotas
}


/* Ejercicio 2 */

const trabajador = {
    nombre: 'Jhon Smith',
    cargo: 'QA',
    empresa: {
        ubicacion: {
            comuna: 'Santiago',
            puesto: 'nº 24',
        },
        datos: {
            nombre: 'ACME',
        },
        clientes: ['Facebook', 'Google'],
    },
    gustos: ['comer', 'ver televisión', 'dormir'],
    hijos: null,
}

const {
    nombre,
    cargo,
    empresa,
    gustos: [primerGusto, ...otrosGustos],
    hijos
} = trabajador;

const {
    ubicacion: { comuna: comunaEmpresa, puesto: puestoEmpresa },
    datos: { nombre: nombreEmpresa },
    clientes: [primerCliente, segundoCliente]
} = empresa;

let verifyChildren = hijos === null ? `tiene ${hijos} hijos`: `no tiene hijos`;

const descripcionTrabajador1 = function(trabajador) {
    return `El trabajador (${nombre}) trabaja en (${nombreEmpresa}) con cargo (${cargo}) y le gusta (${primerGusto}) y (${otrosGustos.length}) más, (${verifyChildren})`;
}

const descripcionTrabajador2 = function(trabajador) {
    return `El trabajador (${nombre}) va a su trabajo en (${comunaEmpresa}), es (${cargo}), en el puesto (${puestoEmpresa}), trabaja con (${primerCliente}) y (${segundoCliente})`;
}
