<?php

declare(strict_types=1);

require_once "src/classes/Cliente.php";

$cliente = new Cliente;

$cliente->nome = "John";
$cliente->idade = 30;
$cliente->endereco = "Rua dos bobos numero zero";
$cliente->telefone = "44-9999-8888";

var_dump($cliente);