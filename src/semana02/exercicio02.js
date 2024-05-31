let pessoas = [
    { nome: 'Alice', idade: 17 },
    { nome: 'Bob', idade: 22 },
    { nome: 'Charlie', idade: 16 },
    { nome: 'David', idade: 19 }
    ];

function filtrarAdultos(pessoas) {
    return pessoas.filter((pessoa) => pessoa.idade >=18)
    .map((pessoa)=> pessoa.nome)
    }
    
   
    console.log(filtrarAdultos(pessoas)); 


    /***********************/
    //OUTRAS FORMAS!!!!! 
    /********************** */

    function filtrarFor(pessoas) {
        let nomesAdultos = [];
        for (let i = 0; i < pessoas.length; i++) {
          if (pessoas[i].idade >= 18) {
            nomesAdultos.push(pessoas[i].nome);
          }
        }
        return nomesAdultos;
      }

      function filtrarReduce(pessoas) {
        return pessoas.reduce((nomes, pessoa) => {
          if (pessoa.idade >= 18) {
            nomes.push(pessoa.nome);
          }
          return nomes;
        }, []);
      }
