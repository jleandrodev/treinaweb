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

    public function __call(string $name, array $arguments)
    {
        if ($name === 'alterar') {
            $this->nome = $arguments[0];
            $this->idade = $arguments[1];
        }
    }

    public function __invoke(bool $status)
    {
        $this->status = $status;
    }

    public function __sleep() : array
    {
        return ["nome", "idade"];
    }

    public function __wakeup() : void
    {
        $this->tipo = "Serializado";
    }


}

