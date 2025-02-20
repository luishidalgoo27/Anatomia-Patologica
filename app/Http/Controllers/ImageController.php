<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Imagen;
use App\Models\Muestra;
use Illuminate\Http\Request;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;

class ImageController extends Controller
{
    public function index()
    {  
        $imagenes = Imagen::all();
        return response()->json($imagenes, 200);
    }
    

    public function upload(Request $request)
    {
        // Validar que haya una imagen
        /* $request->validate([
            'image' => 'required|image|mimes:jpg,jpeg,png,gif|max:2048',
        ]); */
        $idUltimaMuestra = Muestra::latest()->first();
        
        if($idUltimaMuestra){
            Imagen::create([
                'ruta' => $request->ruta,
                'id_muestra' => $idUltimaMuestra->id
            ]);

        }

        // Retornar la URL de la imagen subida
        return response()->json(['message' => 'Se ha subido correctamente', 201]);
    }

    public function uploadLogo(Request $request)
    {
        // Validar que haya una imagen
        $request->validate([
            'image' => 'required|image|mimes:jpg,jpeg,png,gif|max:2048',
        ]);
        
        // Subir la imagen a Cloudinary
        $uploadedFileUrl = Cloudinary::upload($request->file('image')->getRealPath())->getSecurePath();
        
        User::where('id', $request->id);

        // Retornar la URL de la imagen subida
        return response()->json(['url' => $uploadedFileUrl]);
    }
}
