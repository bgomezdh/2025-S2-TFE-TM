const edadMin = 18;
const edadAcompanante = 16;

let nombre = prompt("Ingrese su nombre");

let edad = prompt("Ingrese su edad");

if (edad >= edadMin) {
  alert("Bienvenido a la bresh");
} else if(edad < edadMin && edad >= edadAcompanante){
    alert("Ingresar con un Acompañante")
}else {
  alert("No puedes ingresar a la bresh");
}
