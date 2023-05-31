<?php

require_once "../autoload/autoload.php";

$cli = new Cliente("John", "44 99999-8888", 30);

$cli->cpf = "789.456.123.12"; 

echo $cli->rua;

var_dump($cli);
