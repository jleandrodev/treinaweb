<?php

require_once "../autoload/autoload.php";

$cli = new Cliente("John", "44 99999-8888", 30);

$cli->cpf = "789.456.123.12"; 


$cli->alterar("JL", 29);

$cli(true);

$cliSerializado = serialize($cli);

echo "<br>" . $cliSerializado . "<br>";

$cli2 = unserialize($cliSerializado);

var_dump($cli, $cli2);
