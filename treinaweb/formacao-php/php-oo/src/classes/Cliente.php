<?php

class Cliente
{
    //declarações
    public $nome;

    public $idade;

    public $endereco;

    public $telefone;

    public function comprar()
    {
        echo "{$this->nome} realizou uma compra.";
    }
}

