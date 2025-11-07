let URL_PROV = "https://apis.datos.gob.ar/georef/api/v2.0/provincias";

let lista = document.querySelector(".lista");

fetch(URL_PROV)
.then(function(res) {
    return res.json();
})
.then(function(data) {

    let contenido = "";

    for (let i = 0; i < data.provincias.length; i++) {
        const element = data.provincias[i];

        
        contenido +=  `<li>${element.nombre}</li>`;
        
    }

    lista.innerHTML = contenido;
    
})
.catch(function(errores) {
    console.log(errores);
    
});




