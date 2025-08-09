class CuentaBancaria {

  #saldo;

  constructor(titular, saldoInicial){

    if (saldoInicial < 0) {
      return 'El saldo no puede ser negativo';
    }
    this.#saldo = saldoInicial;
    this.titular = titular;
  }

  get saldo() {
    return this.#saldo;
  }

  set saldo(nuevoSaldo) {
    if (nuevoSaldo >= 0) {
      this.#saldo = nuevoSaldo;
      console.log(`Nuevo saldo: ${this.#saldo}`)
    } else {
      console.log('El saldo no puede ser negativo');
    }
  }

  depositar(monto) {
    this.#saldo += monto;
    console.log(`Se ha depositado $${monto}`);
  }

  extraer(monto) {
    if (this.#saldo >= monto) {
      this.#saldo -= monto;
      console.log(`Se ha retirado $${monto}`)
    } else {
      console.log('Fondos insuficientes')
    }
  }
}

const cuenta = new CuentaBancaria('Juan', 1000);

console.log(cuenta.saldo);
cuenta.depositar(700);
console.log(cuenta.saldo)
cuenta.saldo = 2000;
cuenta.extraer(500);
console.log(cuenta.saldo);