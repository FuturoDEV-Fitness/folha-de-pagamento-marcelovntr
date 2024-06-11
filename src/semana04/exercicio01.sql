--[M2S04] - Ex. 01 - Criação de Tabelas

CREATE TABLE categorias(
	categoria_id serial primary key,
	nome_categoria varchar(50)
	
)
---------------------------------
---------------------------------
ALTER TABLE produtos
add column categoria_id int

--------------------------------

ALTER TABLE categorias
add column produto_id int

--------------------------------

ALTER TABLE categorias
add constraint fk_produto_id
foreign key (produto_id) references produtos (produto_id)
--------------------------------

DROP TABLE categorias
