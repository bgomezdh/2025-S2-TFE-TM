let URL = "https://randomuser.me/api";



// recuperar elementos del DOM
let fotoPerfil = document.querySelector(".fotoPerfil");
let genero = document.querySelector(".genero");
let telefono = document.querySelector(".telefono");
let email = document.querySelector(".email");


fetch(URL)
.then(function(res) {
    return res.json();
})
.then(function(data) {
    console.log(data.results[0]);

    let elemento = data.results[0];

    fotoPerfil.src = elemento.picture.large
    genero.innerText = elemento.gender;
    telefono.innerText = elemento.phone
    email.innerText = elemento.email


}).catch(function(err) {
    console.log(err);
    
});



