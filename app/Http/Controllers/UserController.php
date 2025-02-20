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
    public function validateUser(Request $request){
        $request->validate([
            /* 'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:8',
            'id_sede' => 'required' */
        ]);
    }

    public function index()
    {
        $users = User::all();
        return response()->json($users, 200);
    }  

    public function store(Request $request)
    {
        try {
            $this->validateUser($request);

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => bcrypt($request->password), // Bycript para pasar contra encriptada
                'id_sede' => $request->id_sede,
                'rol' => false,
                'imagen' => "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PEg0QEA8NDw0WEA4PEQ4PDQ8ODRARFhEYFhgRFxUYHykgGBolGxUVIjEhJSsrOi4uFx8zOD8uNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALQAtAMBIgACEQEDEQH/xAAcAAEBAQADAQEBAAAAAAAAAAAAAgEFBgcIBAP/xAA7EAACAgEBBAYFCwMFAAAAAAAAAQIRAwQFBhIhEzFBUXGBBxQiYaEkMkJSU3KRkqKxwYKT0RYjM2Jj/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APSQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARmyxhGU5yUYJW5PkkjqO1d8Hzjp40vtZq2/eo9nmB3E/jl1WOEoQlOEZyvhi5JOVdx5s9t6q79YzX991+HUfj1Gonkk5TlKcn9KTtgek6nb+kxtqWaDfdC8nl7Nn5v8AVWj+0l/bn/g85sywPUtNtvS5Pm58d90nwN+UqOQTPHLP06TaWfD/AMeWcPcpez+V8mB60DhN29dqc0bzPTyjVqWPInk8JRja/Y5sAAAAAAAAAAAAAAAAAAAOH3nngjiUs/FKKdxxKTisk65J12I86z5nOTlUY31RiqjFdyXccpvXtT1jNJJ/7ULhDuffLzfwSOFsCrJsxslsCrMbJbMsCnIlsmzLA/pDI4u4txfem0zlNJvNrMVVmlNfVyVk+L5/E4azLA7/ALF31hkahqIxxSbpZI30Xmnzj48/I7ceTbuZc/TRhgWOU5dcMnDwSS507/g9Yi3StU6Vq7p9wGgAAAAAAAAAAAABxe8uueDT5Zp1Nrgj7pS5X5K35HKHW9/l8mj18s0G/wAsl/IHnrZjZNmWBVmWTZlgVZlk2ZYG2ZZlktgVZlktmNgf30uplinDJB1OMlJP3pnseztZHPixZY/NnFSrufavJ2vI8Y08FOcIuXCnKMXKr4U3V12nr2wNl+qYlh6R5EpSlFuPDSfPhq322/MDkgAAAAAAAAAAAAA4PfPHxaTP3ro5fhNX8GznD8O3MPHp9THteHJXiotr4geQ2ZZNmWBVmWS2S2BdktktmWBTZlk2Y2BVmWQ2Y2B/SCbaS620l4nux4lsNKWp0ifU9RgT8HkR7aAAAAAAAAAAAAAADre+22cmlx41j4eLI5xcpLiqKSul5nZDqHpKxXgwz7syX5oS/wAAeeNktk2ZYFWZZLZjYFNmNkWZYFNmWTZjYFWY2Q2ZYH99LqZYp48ka44TjONq1xRdr4o9i3T2rPV6aGXIorJxTjLhVRbT60vCjxWz1r0cRrRY335MrX5q/gDtAAAAAAAAAAAAAAcHvppel0eoS64pZV/Q7f6bOcIzY1OMoS5xlFxa9zVMDwlyMbP6a7TSw5MmKaalGUou1XU+s/O2BVmWS5GNgU2Y5EWZYFNmNktmNgU2Y5EWY2Bat8lzfVS6z3Td7QerabT4X86MFxffftS/U2eTbjbP9Y1mCLVwg+mn4Q5r9XCvM9qAAAAAAAAAAAAAAAAA4LevYGLV4sj4PlMYSeKceUm0rUH3pv8Ac8bbPoE8T3w0S0+s1OOPzeLpIruU0pV5XXkBxNktktmWBTZjZDkY2BTZjkTZLYFtnI7tbPWq1WmwtNwlNcaTr2I+1Ln2ckzimzvvol2dxZc+pa9mEFii+zjlzdeCX6gO77v7sabQPLLD0jlOk5ZJKTjFfRVJcjmgAAAAAAAAAAAAAAAATPJGPW0vFpAUeM+kOXy/Ve7oUv7MD1Ham8Wj0seLLnx3zShFqeRvuUVzPGt5NpR1Wpz54KUYTknFSripRS514Ace2ZZLkS2BbZLkTZjYFNmNkNmNgU5Hv27WzIaTTYMMOyKlKX1pyVyl+Pwo+fXI+jtn5oTx45QlGceGNSjJSj1d6A/QAAAAAAAAAAAOJ2nvJotNay6jGpL6EW8mTwcY215nW9d6TNNG+hw5ssuxz4cUH775v4Ad6OJ2vvHo9JfTZoqf2Ufby/lXV50eWbY3312ptdJ0ON/Qw3Dl75fOf4nWnIDvW3/SLmy3DSxenh9pKpZn4dkfj4nSc2eU25TlKc3zcpScpPxbP4tmNgW2TZLkS2BbZjZDZjYFNmORDZjkBTZjZDkY2BTkfo0O0s+nlxYc2XFLvhNxvxrrXifjbMbA9Y3M9IsZqWLX5IQmknDUcPDGf/WSSpP39X8990W0cGdXhzYcq/8APJCf7M+aHIRyOLTTaa6mnTQH1CD552fvntLT1wavM19XK1mjXdU7ryOz7N9LeojS1GmxZV9bFKWKfjTtP4Aevg6lsb0i7N1LUXllp8j+jqEoK/vpuP4tHbIyTSaaaatNO013gaAAPnFsxslslsC2yXIlslyAtslslslsC2zGyHIlyAtyJciWzGwKbMbIcjHICmzHIhyJcgLcjHIhyJbAtyJciHIxyAtslyIciXIC3I7FuxvtrNntLHPpNPfPT5W3jrt4e2D8POzrDkS5AfQey/SVszNjjPJm9XydUsWWMnKL9zimmvf+wPnviAHPtmNgASY2ABJjZgAwxs0AS2S2ABhLYAEtkmgCWybMAGNktmgCWyWwAJsxgAYAAP/Z" // Set default image if null
            ]);

            return response()->json(['message' => 'Usuario creado correctamente', 'user' => $user], 201);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error al crear el usuario', 'message' => $e->getMessage()], 500);
        }
    }

    public function update(Request $request)
    {
        $user = User::find($request->id);

        if (!$user) {
            return response()->json(['message' => 'Usuario no encontrado'], 404);
        }
        // Actualizar solo los campos enviados
        $user->update([
            "name" => $request->name,
            "email" => $request->email,
            "imagen" => $request->imagen ?? '../../assets/img/user2-160x160.jpg', // Set default image if null
        ]);
        
        if ($request->filled('password')) $user->password = bcrypt($request->password);
        
        $user->save();

        return response()->json(['message' => 'Usuario actualizado correctamente', 'user' => $user], 200);
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