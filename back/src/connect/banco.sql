create database projetoacademia;

use projetoacademia;

create table alunos(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nomecompleto VARCHAR(100) NOT NULL,
    cpf INT(11) NOT NULL,
    rg INT(9) NOT NULL,
    telefone INT(11) NOT NULL,
    endereco VARCHAR(200) NOT NULL,
    bairro VARCHAR(100),
    cidade varchar(100),
    Planodaacademia varchar(4)
);

create table estoque(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(100) NOT NULL,
    funcionando VARCHAR(100) NOT NULL
);