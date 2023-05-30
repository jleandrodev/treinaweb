<?php

function carregar(string $nomeClasse)
{
    $caminho = __DIR__ . "/../src/classes/$nomeClasse.php";
    
    if (file_exists($caminho)) 
    {
        require $caminho;
    }

}

spl_autoload_register("carregar");