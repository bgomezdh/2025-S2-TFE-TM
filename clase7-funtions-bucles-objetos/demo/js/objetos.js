
let profe = {
    nombre: "Brian",
    apellido: "Gomez",
    dni: 42324342,
    pelisFav: ["titanic", "R y F 2"],
    mensaje: function(){
        return "A el profe " + this.nombre + " le gusta la pelicula de " + this.pelisFav[1];
    },
    guardarPelicula: function(nombrePelicula){
        this.pelisFav.push(nombrePelicula);
        console.log("Se guardó la pelicula.");
        return console.log(this.pelisFav);
        
    }
};

profe.guardarPelicula("Cars 2");




