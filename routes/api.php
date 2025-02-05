<?php

use App\Http\Controllers\CalidadController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\SedeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\FormatoController;
use App\Http\Controllers\MuestraController;
use App\Http\Controllers\NaturalezaController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TipoEstudioController;

Route::get('/users', [UserController::class, 'index']);
Route::post('/addUser', [UserController::class, 'store']);
Route::patch('/updateUser', [UserController::class, 'update']);
Route::delete('/deleteUser', [UserController::class, 'destroy']);

/* LLamadas API de Muestras */
Route::get('/muestras', [MuestraController::class, 'index']);
Route::post('/addMuestra', [MuestraController::class, 'store']);
Route::patch('/updateMuestra', [MuestraController::class, 'update']);
Route::delete('/deleteMuestra', [MuestraController::class, 'destroy']);

Route::get('/formato', [FormatoController::class, 'index']);
Route::get('/tipoEstudio', [TipoEstudioController::class, 'index']);
Route::get('/naturaleza', [NaturalezaController::class, 'index']);
Route::get('/calidad', [CalidadController::class, 'index']);
/* Route::get('/apiSede', [SedeController::class, 'index']); */

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
