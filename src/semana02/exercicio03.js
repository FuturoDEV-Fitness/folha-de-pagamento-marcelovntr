

let produtos = [
  { categoria: "eletrônicos", preco: 99.99 },
  { categoria: "livros", preco: 19.99 },
  { categoria: "eletrônicos", preco: 199.99 },
  { categoria: "livros", preco: 29.99 },
  { categoria: "roupas", preco: 49.99 },
];

function agruparPorCategoria(produtos) {
  return produtos.reduce((total, produto) => {
    if (!total[produto.categoria]) {
      total[produto.categoria] = 0;
      
    }
    total[produto.categoria] += produto.preco;
    console.log(total[produto.categoria], [produto.preco])
    return total;
  }, {});//<-- total
}

/*
Explicação

    reduce: O método reduce é usado para iterar sobre o array de produtos, acumulando os resultados em um objeto (acc).
    Inicialização do acumulador: O acumulador (acc) é inicializado como um objeto vazio ({}).
    Verificação da categoria: Para cada produto, verificamos se a categoria do produto já existe no acumulador. Se não existir, inicializamos com 0.
    Acumulação do preço: Adicionamos o preço do produto à categoria correspondente no acumulador.
    Retorno do acumulador: No final, retornamos o objeto acumulador, que contém as categorias como chaves e os preços totais como valores.

*/

console.log(agruparPorCategoria(produtos));
