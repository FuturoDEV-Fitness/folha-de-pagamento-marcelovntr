

function calcularLiquido(salarioBruto) {
  salarioLiquido = salarioBruto - (inssFinal + impostoFinal);

  return salarioLiquido;
}

module.exports = calcularLiquido;
