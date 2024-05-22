const calcularImpostoRenda = require("./calculo_imposto_renda");
const calcularInss = require("./calculo_inss");
const calcularLiquido = require("./calculo_salario_liquido");



let inssFinal = calcularInss(salarioBruto)
let impostoFinal = calcularImpostoRenda(salarioBruto)
let liquidoFinal = calcularLiquido(salarioBruto, inssFinal, impostoFinal)

console.log(calcularInss(1450.00))

console.log(calcularImpostoRenda(1450.00))

console.log(calcularLiquido(salarioBruto, inss, imposto));

console.log(inssFinal)
console.log(impostoFinal)
console.log(liquidoFinal)

