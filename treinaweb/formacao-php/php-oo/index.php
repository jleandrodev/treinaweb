<?php

require_once "src/classes/Produto.php";
require_once "src/classes/Cliente.php";

$prod1 = new Produto;

$prod1->titulo = "Skol";
//$prod1->descricao = "Cerveja brasileira";
$prod1->preco = 2.50;


var_dump($prod1);

$cli = new Cliente;

$cli->nome = "John";
$cli->idade = 30;
$cli->endereco = "São Paulo";
$cli->telefone = "(11)99999-9999";

$cli->comprar();