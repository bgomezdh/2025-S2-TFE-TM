// funciones
function describirse(apellido, edad){
    let nombre = "brian " + apellido;
    let prof = "Ingeniero y Profesor";

    return "El usuario es: " + nombre + " y el es " + prof + " y tiene " + edad + " años";
}

let mensaje = describirse("Gomez", 31);

console.log(mensaje);

// expresadas



let despedirse = function(nombre, apellido){
    return `Nos vemos ${nombre} ${apellido}`;
    return "Nos vemos " + nombre + " " + apellido;
};

console.log(despedirse("Carlos", "Andrade"));
