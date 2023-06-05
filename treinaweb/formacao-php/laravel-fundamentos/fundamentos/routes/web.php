<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    echo "Home";
});

Route::get('/services', function () {
    echo "Serviços";
});

Route::get('/service/{id}', function (int $id) {
    echo "Verificando o serviço com id $id";
});
