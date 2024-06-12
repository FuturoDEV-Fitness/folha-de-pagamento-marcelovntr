--[M2S04] - Ex. 05 - Joins

SELECT p.pedido_id, c.cliente_id, c.nome, c.cidade, c.idade
FROM pedidos p 
INNER JOIN clientes c ON p.cliente_id = c.cliente_id;


------------------------

SELECT c.nome, p.pedido_id
FROM clientes c
LEFT JOIN pedidos p ON c.cliente_id = p.cliente_id

------------------------

SELECT p.produto_id, p.nome_produto, ip.pedido_id, ip.quantidade
FROM itens_pedidos ip
RIGHT JOIN produtos p ON ip.produto_id = p.produto_id

------------------------

SELECT cliente_id, nome, cidade, idade
FROM clientes
WHERE cidade = 'São Paulo'

UNION

SELECT cliente_id, nome, cidade, idade
FROM clientes
WHERE cidade = 'Rio de Janeiro';