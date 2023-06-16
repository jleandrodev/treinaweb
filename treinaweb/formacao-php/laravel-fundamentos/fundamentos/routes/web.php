<?php

use App\Http\Controllers\SiteController;
use App\Models\Client;
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

Route::get('/', [SiteController::class, 'index']);

Route::get('/services', [SiteController::class, 'services']);

Route::get('/service/{id}', [SiteController::class, 'service']);

Route::get('/saudacao/{id}', [SiteController::class, 'saudacao']);

Route::get('/clients', function () {
    dd(Client::get());
});
