--[M2S04] - Ex. 02 - Inserção, Atualização e Exclusão de Dados

INSERT INTO clientes (nome, cidade, idade)
VALUES ('Lucas Lima', 'Salvador', 29)

------------------------------------------
UPDATE clientes SET cidade = 'Fortaleza' where cliente_id = 3

-----------------------------------------
DELETE FROM itens_pedidos
WHERE pedido_id IN (SELECT pedido_id FROM pedidos WHERE valor < 150.000);

-----------------------------------------
DELETE from pedidos where valor < 150.000