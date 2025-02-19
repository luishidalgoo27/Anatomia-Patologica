<?php

namespace App\Http\Controllers;

use App\Models\Imagen;
use Illuminate\Http\Request;

class ImagenController extends Controller
{
    public function subirImagen(Request $request)
    {
        $request->validate([
            'imagenes' => 'required|array',
        ]);
        
        foreach ($request->imagenes as $imagen) {
            $nuevaImagen = new Imagen([
                'url' => $imagen['url'],
                'public_id' => $imagen['public_id']
            ]);
            $nuevaImagen->save();
        }
        
    }
}
