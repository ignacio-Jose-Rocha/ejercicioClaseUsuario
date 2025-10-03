import Usuario from "./Usuario.js";

const usuarioPrueba = Usuario.crear("Juan", "juan@gmail.com", 25, 1234);

console.log(usuarioPrueba);
console.log(usuarioPrueba.nombre);