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

    public function __construct(string $nome, string $telefone, int $idade)
    {
        $this->nome = $nome;
        $this->telefone = $telefone;
        $this->idade = $idade;
    }

    public function __destruct()
    {
        echo "O Obj foi destruido";
    }

    public function __get(string $name)
    {
        return "$name não existe";
    }

    public function __set(string $name, $value)
    {
        if ($name === "cpf") {
            $this->cpf = \str_replace('.', '', $value);
        } else {
            $this->$name = $value;
        }
    }
}

