

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
    return total;
  }, {});
}

console.log(agruparPorCategoria(produtos));
