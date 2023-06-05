<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SiteController extends Controller
{
    public function index()
    {
        echo "Home";
    }
    public function services()
    {
        echo "Serviços";
    }
    public function service(int $id)
    {
        echo "Verificando o serviço com id $id";
    }
}
