const metodoOriginal = String.prototype.toUpperCase;

String.prototype.toUpperCase = function() {
  return `ESTO ESTÁ PROHIBIDO`;
}

console.log('Hola'.toUpperCase());

String.prototype.toUpperCase = metodoOriginal;

console.log('Hola'.toUpperCase());