class CuentaBancaria {

  #saldo;

  constructor(titular, saldoInicial){

    if (saldoInicial < 0) {
      return 'El saldo no puede ser negativo';
    }
    this.#saldo = saldoInicial;
    this.titular = titular;
  }

  getSaldo() {
    return this.#saldo;
  }

  setSaldo(nuevoSaldo) {
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

console.log(cuenta.getSaldo());
cuenta.depositar(700);
console.log(cuenta.getSaldo())
cuenta.setSaldo(2000);
cuenta.setSaldo(-1000)
cuenta.extraer(500);
console.log(cuenta.getSaldo());