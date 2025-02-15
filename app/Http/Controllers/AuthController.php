<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function validateUser(Request $req)
    {
        $req->validate([
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);
    }

    public function register(Request $request)
    {
       $validator = Validator::make($request->all(), [
        'email' => 'required|email|unique:users,email',
        'password' => 'required|min:8',
        'id_sede' => 'required|exists:sedes,id'
    ], [
        'email.unique' => 'El correo ya esta en uso'
    ]);

       if ($validator->fails()) {
        return response()->json(['message' => $validator->errors()], 400);
        }

        // Crear el nuevo usuario
        $user = User::create([
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'id_sede' => $request->id_sede
        ]);

        // Crear el token de acceso para el nuevo usuario
        $token = $user->createToken('YourAppName')->plainTextToken;

        // Retornar la respuesta con el token
        return response()->json(['message' => 'User created successfully', 'token' => $token]);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (!Auth::attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return response()->json(['message' => 'Login Succesful', 'user' => Auth::user()]);
    
    }


    public function logout(Request $request)
    {
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['message' => 'Sesión cerrada correctamente']);
    }
}
