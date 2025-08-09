class CuentaBancaria {

  titular;
  #saldoInicial;
  

  constructor(titular, saldoInicial){
    this.#saldoInicial = saldoInicial;
    this.titular = titular;
  }

  get saldo() {
    return `Saldo actual: ${this.#saldoInicial}`;
  }

  set saldo(nuevoSaldo) {
    if (nuevoSaldo < 0) {
      console.log('El saldo no puede ser negativo');
      return;
    } else {
      this.#saldoInicial = nuevoSaldo;
      return;
    }
  }
}

const cuenta = new CuentaBancaria('Juan', 1000);

console.log(cuenta.saldo);