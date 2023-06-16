<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SiteController extends Controller
{
    public function index()
    {
        return view('home');
    }
    public function services()
    {
        echo "Serviços";
    }
    public function service(int $id)
    {
        echo "Verificando o serviço com id $id";
    }

    public function saudacao(string $nome = 'Treinaweb')
    {
        return view('saudacao', ['nome' => $nome]);
    }
}
