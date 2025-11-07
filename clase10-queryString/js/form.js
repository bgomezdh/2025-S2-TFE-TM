//Recuperar #pelicula y form
let pelicula = document.querySelector("#pelicula");
let form = document.querySelector("form");

// enviar el form si tiene mas de 2 caracteres
form.addEventListener("submit", function(e) {
    e.preventDefault();

    let longitudPelicula = pelicula.value.length;

    if (longitudPelicula >= 3) {
        form.submit()
    } else {
        alert("Necesitas 3 o mas caracteres");
        pelicula.style.color = "red";
    }

})