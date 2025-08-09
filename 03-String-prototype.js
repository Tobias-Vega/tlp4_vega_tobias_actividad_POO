String.prototype.concatenarPalabra = function (palabra) {
  return `${this} ${palabra}`
}

const saludo = 'Hola';

console.log(saludo.concatenarPalabra('Mundo'));
