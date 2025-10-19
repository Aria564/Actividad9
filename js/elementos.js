let boton  = document.getElementById("guardar");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let fecha = document.getElementById("fecha");

export function getFechaNumber() {
    const valor = fecha?.value;
    if (!valor) return null;

    if (fecha.type === 'date') {
        const convertir = new Date(valor).getTime();
        return Number.isNaN(convertir) ? null : convertir;
    }

    const numero = Number(valor);
    return Number.isNaN(numero) ? null : numero;
}

export let datos =  {
    boton,
    nombre,
    apellido,
    fecha
};