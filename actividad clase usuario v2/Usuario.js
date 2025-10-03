export default class Usuario {
  nombre;
  email;
  edad;
  #pin=1234;

  constructor(nombre, email, edad, pin) {
    this.nombre = nombre;
    this.email = email;
    this.edad = edad;
  }

  static crear(nombre, email, edad, pin) {
    return new Usuario(nombre, email, edad, pin);
  }
  cambiarPin(pinActual, pinNuevo) {
    if (this.#pin === pinActual) {
      this.#pin = pinNuevo;
      return true;
    } else {
      return false;
    }
  }
}
