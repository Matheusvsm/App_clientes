-- Parte 1: criando tabela com email, nome e telefone:

CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100),
    telefone VARCHAR(15)
);

-- Parte 2: Alterando tabela para receber as coordenadas x e y:

ALTER TABLE clientes
ADD COLUMN x FLOAT NOT NULL,
ADD COLUMN y FLOAT NOT NULL;
