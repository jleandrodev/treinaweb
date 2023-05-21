<?php

error_reporting(E_ALL);

// notice

$divisor = 0;


try {
  if ($divisor == 0) {
    throw new Exception("Não é possível dividir por zero", 1);
  }
  $valor = 100 / $divisor;

} catch(\Throwable $th) {
  echo $th->getMessage();
}


