const calcularImpostoRenda = require("./calculo_imposto_renda");
const calcularInss = require("./calculo_inss");
const calcularLiquido = require("./calculo_salario_liquido");

const readline = require("readline");
const input = readline.createInterface(process.stdin, process.stdout);


const PdfDocument = require("pdfkit");
const fs = require("fs");

nome = "";
cpf = "";
mes = 0;
salarioBruto = 0;

input.question("Qual o nome do funcionário?", (nomeIn) => {
  nome = nomeIn;

  input.question("Qual o CPF?", (cpfIn) => {
    cpf = cpfIn;

    input.question("Qual o mês em questão?", (mesIn) => {
      mes = mesIn;

      input.question("Qual o salário bruto? ", (salarioBrutoIn) => {
        salarioBruto = parseFloat(salarioBrutoIn);

        let inssFinal = calcularInss(salarioBruto);
        let impostoFinal = calcularImpostoRenda(salarioBruto);
        let liquidoFinal = calcularLiquido(
          salarioBruto,
          inssFinal,
          impostoFinal
        );

        // console.log(calcularInss(1450.0));

        // console.log(calcularImpostoRenda(1450.0));

        // console.log(calcularLiquido(salarioBruto, inss, imposto));

        console.log(inssFinal);
        console.log(impostoFinal);
        console.log(liquidoFinal);

        console.log("--Folha de Pagamento--");
        console.log(`Nome: ${nome}`);
        console.log(`CPF: ${cpf}`);
        console.log("Salário Bruto: ", salarioBruto);
        console.log(`INSS: ${inssFinal}`);
        console.log(`Imposto de Renda: ${impostoFinal}`);
        console.log(`Salário Líquido: ${liquidoFinal}`);

        input.question("Deseja gerar documento em PDF?", (opcao) => {
          if (opcao.toLowerCase() === "sim") {
            const doc = new PdfDocument();
            doc.pipe(fs.createWriteStream("valores.pdf"));
            doc.fontSize(12);

            doc.text("--Folha de Pagamento--");
            doc.text(`Nome: ${nome}`);
            doc.text(`CPF: ${cpf}`);
            doc.text('---//---')
            doc.text("Salário Bruto: ", salarioBruto);
            doc.text('---//---')
            doc.text(`INSS: ${inssFinal}`);
            doc.text(`Imposto de Renda: ${impostoFinal}`);
            doc.text('---//---')
            doc.text(`Salário Líquido: ${liquidoFinal}`);

            doc.end();
            input.close();
          }
        
        input.close();
      });
    });
  });
});
});