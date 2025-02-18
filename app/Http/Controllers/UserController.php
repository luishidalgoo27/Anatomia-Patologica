<?php

namespace App\Http\Controllers;

use App\Models\User;
use Cloudinary\Asset\Image;
use Illuminate\Http\Request;
use Cloudinary\Transformation\Format;
use Cloudinary\Transformation\Resize;
use Cloudinary\Transformation\Delivery;

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
        'name' => 'required',
        'email' => 'required|email|unique:users,email',
        'password' => 'required|min:8'
    ]);

    try {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password) // Bycript para pasar contra encriptada
        ]);

        return response()->json(['message' => 'Usuario creado correctamente', 'user' => $user], 201);
    } catch (\Exception $e) {
        return response()->json(['error' => 'Error al crear el usuario', 'message' => $e->getMessage()], 500);
    }
}

public function update(Request $request)
{
    $idUser = $request->input('id');
    $user = User::where('id', $idUser);
    
    $user->update([
        'email' => $request->email
    ]);
  
    return response()->json(['message' => 'Usuario actualizado correctamente', 'user' => $user], 201);
}

public function destroy(Request $request)
{
    $idUser = $request->input('id');
    $user = User::where('id', $idUser);

    if($user){
        $user->delete();
    }

    return response()->json(['message' => 'Usuario eliminado correctamente', 'user' => $user], 201);
}

public function subirImagen(Request $request){

    $image = $request->file('image');
    /* dd($image->getRealPath()); */
    $publicIdImagen = cloudinary()->upload($image->getRealPath(), [
        'folder' => 'prueba'
        ])->getPublicId();
        
    $url_image = (new Image($publicIdImagen))
    ->resize(Resize::scale()->width(250))
    ->delivery(Delivery::quality(35))
    ->delivery(Delivery::format(
        Format::auto()
    ));

}


}
