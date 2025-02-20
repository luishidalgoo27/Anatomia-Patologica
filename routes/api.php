<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\SedeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\CalidadController;
use App\Http\Controllers\FormatoController;
use App\Http\Controllers\MuestraController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\ApiTokenController;
use App\Http\Controllers\NaturalezaController;
use App\Http\Controllers\TipoEstudioController;
use App\Http\Controllers\InterpretacionController;

Route::get('/sede', [SedeController::class, 'index']);
Route::post('/register', [AuthController::class, 'createUser']);
Route::post('/login', [AuthController::class, 'loginUser']);

Route::get('/descargarMuestra', [MuestraController::class, 'descargarPDF']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::get('/users', [UserController::class, 'index']);
    Route::post('/users', [UserController::class, 'store']);
    Route::patch('/users', [UserController::class, 'update']);
    Route::delete('/users', [UserController::class, 'destroy']);
    
    /* LLamadas API de Muestras */
    Route::get('/muestra', [MuestraController::class, 'index']);
    Route::post('/muestra', [MuestraController::class, 'store']);
    Route::patch('/muestra', [MuestraController::class, 'update']);
    Route::delete('/muestra', [MuestraController::class, 'destroy']);
    
    Route::get('/formato', [FormatoController::class, 'index']);
    Route::get('/tipoEstudio', [TipoEstudioController::class, 'index']);
    Route::get('/naturaleza', [NaturalezaController::class, 'index']);
    Route::get('/calidad', [CalidadController::class, 'index']);
    
    Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
    
    Route::get('/token', [ApiTokenController::class, 'index']);
    
    // Rutas Interpretacion
    Route::get('/allInterpretaciones', [InterpretacionController::class, 'indexAll']);
    Route::get('/mostrarinterpretaciones', [InterpretacionController::class, 'showInterpretaciones']);
    Route::get('/interpretacion', [InterpretacionController::class, 'index']);
    Route::post('/interpretacion', [InterpretacionController::class, 'store']);
    Route::patch('/interpretacion', [InterpretacionController::class, 'update']);
    Route::delete('/interpretacion', [InterpretacionController::class, 'destroy']);

    // Rutas de imagenes
    Route::get('/imagenes', [ImageController::class, 'index']);
});