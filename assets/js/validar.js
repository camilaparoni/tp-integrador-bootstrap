
function validarNombre(event) {
    var nombre = document.getElementById("nombre").value;
    var mensajeError = document.getElementById("mensajeError");

    // Verificar si el campo está vacío
    if (nombre === "") {
      mensajeError.innerHTML = "Este campo no puede estar vacío.";
      event.preventDefault(); // Evitar el comportamiento por defecto (envío del formulario)
    } else {
      // Verificar si el campo contiene números
      if (/\d/.test(nombre)) { //busca números decimales en el nombre, si hay entra y da error
        mensajeError.innerHTML = "Este campo no puede contener números.";
        event.preventDefault(); // Evitar el comportamiento por defecto (envío del formulario)
      }
    }
 //}
 
}
function validarApellido(event) {
    var apellido = document.getElementById('apellido').value;
    var mensajeErrorApellido = document.getElementById('mensajeErrorApellido');

    // Verificar si el campo está vacío
    if (apellido === "") {
      mensajeErrorApellido.innerHTML = "Este campo no puede estar vacío.";
      event.preventDefault(); // Evitar el comportamiento por defecto (envío del formulario)
    } else {
      // Verificar si el campo contiene números
      if (/\d/.test(apellido)) {
        mensajeErrorApellido.innerHTML = "Este campo no puede contener números.";
        event.preventDefault(); // Evitar el comportamiento por defecto (envío del formulario)
      }
    }
  }



function validarEmail(event) {
    var email = document.getElementById('correo').value;
    var mensajeErrorEmail = document.getElementById('mensajeErrorEmail');
    if (email === "") {
      mensajeErrorEmail.innerHTML = "Este campo no puede estar vacío.";
      event.preventDefault(); // Evitar el comportamiento por defecto (envío del formulario)
    } else {
      if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
        mensajeErrorEmail.innerHTML = "El correo electrónico no es válido.";
        event.preventDefault();
      }
    }
  }



function borrarMensajeError() {
  var mensajeError = document.getElementById("mensajeError");
  mensajeError.innerHTML = ""; // Borra el mensaje de error
}
function borrarMensajeErrorApellido() {
  var mensajeErrorApellido = document.getElementById("mensajeErrorApellido");
  mensajeErrorApellido.innerHTML = ""; // Borra el mensaje de error
}

function borrarMensajeErrorEmail() {
  var mensajeErrorEmail = document.getElementById("mensajeErrorEmail");
  mensajeErrorEmail.innerHTML = ""; // Borra el mensaje de error
}








