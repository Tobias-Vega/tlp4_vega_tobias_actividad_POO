const cuentaBancariaPrototype = {
  depositar(monto) {
    this.saldoInicial += monto;
    console.log(`Se ha depositado $${monto}`);
  },

  extraer(monto) {
    if (this.saldoInicial >= monto) {
      this.saldoInicial -= monto;
      console.log(`Se ha retirado $${monto}`)
    } else {
      console.log('Fondos insuficientes')
    }
  },

  consultarSaldo() {
    console.log(`Saldo actual: ${this.saldoInicial}`)
  }
}

function CuentaBancaria(titular, saldoInicial) {
  this.titular = titular;
  this.saldoInicial = saldoInicial;
}

Object.assign(CuentaBancaria.prototype, cuentaBancariaPrototype);

const cuenta = new CuentaBancaria('Juan', 1000);

cuenta.consultarSaldo();
cuenta.depositar(1000);
cuenta.consultarSaldo();
cuenta.extraer(500);
cuenta.consultarSaldo();
cuenta.extraer(2000);