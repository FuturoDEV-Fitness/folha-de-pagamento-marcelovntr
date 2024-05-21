function calcularInss(salarioBruto) {
  let inss = 0;
  const tetoInss = 908.85

  if (salarioBruto <= 1412) {
    inss = salarioBruto * (7.5 / 100);
  } else if (salarioBruto > 1412 && salarioBruto <= 2666.68) {
    inss = salarioBruto * (9 / 100);
  } else if (salarioBruto > 2666.68 && salarioBruto <= 4000.03) {
    inss = salarioBruto * (12 / 100);
  } else if (salarioBruto > 4000.03 && salarioBruto <= 7786.02) {
    inss = salarioBruto * (14 / 100);
  }

  if(inss >= tetoInss) inss = tetoInss
  return inss;
}

module.exports = calcularInss;