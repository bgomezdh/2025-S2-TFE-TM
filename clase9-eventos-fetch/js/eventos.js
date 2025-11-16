//Recuperar #darkMode y body.
let darkMode = document.querySelector("#darkMode");
let body = document.querySelector("body");

// quiero poner el fondo en oscuro 
darkMode.addEventListener("click", function(e) {

    const comparador = "Modo Oscuro";
    if (darkMode.innerText == comparador) {
        body.style.backgroundColor = "#2d3a56";
        darkMode.innerText = "Modo Claro";
    } else {
        body.style.backgroundColor = "#f6f7fb";
        darkMode.innerText = "Modo Oscuro";
    }

})
