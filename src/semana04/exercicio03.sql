--[M2S04] - Ex. 03 - Consultas Simples

SELECT nome, cliente_id from clientes where cidade = 'São Paulo'

------------------------------------------

SELECT pedido_id from pedidos ORDER BY data_pedido desc

------------------------------------------
SELECT * FROM clientes where idade between 25 and 35