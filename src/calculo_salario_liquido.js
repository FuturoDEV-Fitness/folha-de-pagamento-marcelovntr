

function calcularLiquido(salarioBruto, inssFinal, impostoFinal) {
  salarioLiquido = salarioBruto - (inssFinal + impostoFinal);

  return salarioLiquido;
}

module.exports = calcularLiquido;
