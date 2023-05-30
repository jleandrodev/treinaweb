<?php

require_once "src/classes/Cliente.php";

$cli = new Cliente;

$cli->nome = "John";
$cli->idade = 30;
$cli->endereco = "São Paulo";
$cli->telefone = "(11)99999-9999";

$cli->comprar();