// recuperar info de session
let data = sessionStorage.getItem("data")

// convertir los datos en OBJ  
let dataObj = JSON.parse(data)

console.log(dataObj);

// recuperar elementos del DOM saludo, mensaj y la lista de los links
let saludo = document.querySelector(".saludo");
let mensaje = document.querySelector(".mensaje");
let lista = document.querySelector(".lista");

// preguntar si los datos existen
if (dataObj) {
  //Modificar textos en el DOM 
saludo.innerText = `Hola ${dataObj.email}`;
mensaje.innerText = `Bienvenido a nuestra plataforma`;

//Modificar HTML en el DOM 
lista.innerHTML = ` <li><a href="./perfil.html">Mi perfil</a></li>
                    <li><a href="./login.html">Logout</a></li>`;

} else {
  alert("No se pudo guardar los datos correctamente")
}

 


  



 

  // Si no hay datos guardados, alerta

