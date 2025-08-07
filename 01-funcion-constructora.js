const CuentaBancariaPrototype = {
  depositar(monto) {
    this.saldoInicial += monto;
    console.log()
  },
  extraer(monto) {
    if (this.saldoInicial > monto) {
      this.saldoInicial -= monto;
    } else {
      console.log("Fondos insuficientes")
    }
  },
  consultarSaldo() {
    console.log(`Saldo actual: ${this.saldoInicial}`);
  }
}

function CuentaBancaria(titular, saldoInicial) {
  this.titulartitular = titular;
  this.saldoInicial = saldoInicial;
}

Object.assign(CuentaBancaria.prototype, CuentaBancariaPrototype);

const cuenta = new CuentaBancaria('Juan', 1000);

cuenta.depositar(1000);
cuenta.consultarSaldo();

cuenta.extraer(1500);

cuenta.consultarSaldo();

cuenta.extraer(1000);