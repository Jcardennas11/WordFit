function boton(){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debe registrase primero",
       footer:"Ve al icono de registro que esta en la ezquina superior derecha"
      });
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    if (username === 'Johan' && password === 'cardennas') {
        Swal.fire({
  icon: "success",
  title: "Incio de sesion exitoso",
  showConfirmButton: false,
  timer: 1500
});
    } else {
        Swal.fire({
  icon: "error",
  title: "Lo lamento",
  text: "Usuario o contraseña incorrectos",
});
    }
  }