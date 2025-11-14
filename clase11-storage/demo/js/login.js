// Recurar el form
let form = document.querySelector("form");

//agregarle un evento al form
form.addEventListener("submit", function(e){
  e.preventDefault();

  //recupero los valores de los campos del form
  let email = this.email.value;
  let password = this.password.value;

  //convertir Info a Objeto
  let userObj = {
    email: email,
    password: password
  }

    //convertir a STRING
   let userString = JSON.stringify(userObj)

   // Guardar en sessionStorage
   sessionStorage.setItem("data", userString);
   
  // Redirigir al perfil

  this.submit()


})


  


  





  



