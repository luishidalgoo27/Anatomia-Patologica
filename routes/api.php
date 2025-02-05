<?php
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Foundation\Application;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;

Route::get('/users', [UserController::class, 'index']);
Route::post('/addUser', [UserController::class, 'store']);
Route::patch('/updateUser', [UserController::class, 'update']);
Route::delete('/deleteUser', [UserController::class, 'destroy']);

/* LLamadas API de Muestras */



Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
