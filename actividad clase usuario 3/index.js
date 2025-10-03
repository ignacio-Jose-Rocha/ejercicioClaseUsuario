import Usuario from "./Usuario.js";

const usuarioPrueba = Usuario.crear("Juan", "juan@gmail.com", 25);

document.getElementById("pinForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const oldPin = parseInt(document.getElementById("oldPin").value);
  const newPin = parseInt(document.getElementById("newPin").value);
  const newPin2 = parseInt(document.getElementById("newPin2").value);
  if (newPin !== newPin2) {
    alert("Error: Los nuevos pin no coinciden");
    return;
  }
  const exito = usuarioPrueba.cambiarPin(oldPin, newPin);
  if (exito) {
    alert("pin cambiado con exito");
  } else {
    alert("Error: El pin actual ingresado es incorrecto");
  }
}
);
