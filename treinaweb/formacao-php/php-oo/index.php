<?php

require_once "src/classes/Produto.php";

$prod1 = new Produto;

$prod1->titulo = "Skol";
$prod1->descricao = "Cerveja brasileira";
$prod1->preco = 2.50;


var_dump($prod1);