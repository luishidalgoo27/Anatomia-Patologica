<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return response()->json($users, 200);
        //return view('users');
    }  

    public function store(Request $request)
{
    $request->validate([
        'email' => 'required|email|unique:users,email',
        'password' => 'required|min:8'
    ]);

    try {
        $user = User::create([
            'email' => $request->email,
            'password' => bcrypt($request->password) // Asegúrate de encriptar la contraseña
        ]);

        return response()->json(['message' => 'Usuario creado correctamente', 'user' => $user], 201);
    } catch (\Exception $e) {
        return response()->json(['error' => 'Error al crear el usuario', 'message' => $e->getMessage()], 500);
    }
}
}
