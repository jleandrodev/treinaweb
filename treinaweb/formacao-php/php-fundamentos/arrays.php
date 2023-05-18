<?php

$linguagens = ["PHP", "Java", "JavaScript"];

echo $linguagens[0];

$linguagens2 = array("PHP", "Java", "JavaScript");

echo "<br>";

echo $linguagens2[0];

echo "<br>";

$curso = ["PHP", 7.4, true];

$curso = [
  "nome" => "PHP",
  "versao" => 7.4,
  "status" => true
];

echo "<br>";
echo $curso["nome"];
echo "<br>";
echo $curso["versao"];
echo "<br>";
echo $curso["status"];

$linguagens[3] = "Python";

echo "<br>";
var_dump($linguagens);