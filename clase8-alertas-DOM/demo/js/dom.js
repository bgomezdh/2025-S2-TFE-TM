const titulo = document.querySelector("#titulo");
const subtitulo = document.querySelector("h2");
const parrafo = document.querySelector(".parrafo");
const messi = document.querySelector(".messi");


titulo.innerText = "Hola brian como andas?";
titulo.style.color = "red";
titulo.style.backgroundColor = "#00805a";

subtitulo.innerHTML += ` desde <abbr title="Digital House">DH</abbr>`;

parrafo.style.fontSize = "45px";

messi.src = "./img/messi2.jpg"

