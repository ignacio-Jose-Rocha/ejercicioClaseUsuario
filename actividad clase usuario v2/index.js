import Usuario from "./Usuario.js";

const usuarioPrueba = Usuario.crear("Juan", "juan@gmail.com", 25, 1234);

console.log(usuarioPrueba);
console.log(usuarioPrueba.nombre);

const exito = usuarioPrueba.cambiarPin(1234, 5678);
console.log("Cambio de pin:", exito);

const fallo = usuarioPrueba.cambiarPin(1234, 9999);
console.log("Cambio de pin incorrecto:", fallo);