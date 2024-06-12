--[M2S04] - Ex. 04 - Consultas com Filtros e Agrupamentos

select * from clientes
where nome like 'A%'

------------------------

SELECT SUM(valor)
FROM pedidos
WHERE cliente_id IS NOT NULL
GROUP BY cliente_id

------------------------

select avg(idade) from clientes where cidade = 'São Paulo'
select avg(idade) from clientes where cidade = 'Florianópolis'
--(etc.)

SELECT cidade, AVG(idade)
FROM clientes
GROUP BY cidade
ORDER BY cidade;