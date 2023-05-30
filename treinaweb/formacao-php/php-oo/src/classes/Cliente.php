<?php

class Cliente
{
    //declarações
    public string $nome;

    public int $idade;

    public string $endereco;

    public string $telefone;

    public function comprar(): void
    {
        echo "{$this->nome} realizou uma compra.";
    }
}

