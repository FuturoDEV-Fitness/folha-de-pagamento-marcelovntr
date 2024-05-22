function calcularImpostoRenda(salarioBruto){

let imposto = 0;

    if (salarioBruto <= 2112.00) {
        imposto = 0
      } else if (salarioBruto > 2112.00 && salarioBruto <= 2826.65) {
        imposto = salarioBruto * (7.5 / 100); //158,40
        if(imposto > 158,40){
            imposto = 158,40
        }
      } else if (salarioBruto > 2826.65 && salarioBruto <= 3751.05) {
        imposto = salarioBruto * (15 / 100);
        if(imposto > 370,40){
            imposto = 370,40
        }
      } else if (salarioBruto > 3751.05 && salarioBruto <= 4664.68) {
        imposto = salarioBruto * (22.5 / 100);
        if(imposto > 651,73){
            imposto = 651,73
        }
      }else if (salarioBruto > 4664.68){
        imposto = salarioBruto * (27.5 / 100);
        if(imposto > 884,96){
            imposto = 884,96
        }
    }
      
      return imposto;
    }


module.exports = calcularImpostoRenda;