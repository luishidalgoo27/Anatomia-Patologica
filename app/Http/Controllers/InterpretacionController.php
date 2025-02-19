<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use App\Models\Interpretacion;
use App\Http\Controllers\Controller;
use App\Models\Interpretacion_muestra;

class InterpretacionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function indexAll()
    {
        $interpretaciones = Interpretacion_muestra::all();
        return response()->json($interpretaciones, 200);
    }

    public function index(Request $request)
    {
        $idMuestra = $request->id;
        $interpretaciones = Interpretacion_muestra::where('id_muestra', $idMuestra)->get();
        return response()->json($interpretaciones, 200);
    }

    public function validateInterpretacion(Request $request){
        $request->validate([
            'descripcion' => 'required',
            'id_interpretacion' => 'required'
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {   
        try
        {
            $this->validateInterpretacion($request);

            Interpretacion_muestra::create([
                'descripcion' => $request->descripcion,
                'id_muestra' => $request->id_muestra,
                'id_interpretacion' => $request->id_interpretacion
            ]);

            return response()->json('La interpretacion se ha creado correctamente', 201);
        }
        catch(Exception $e)
        {
            return response()->json(['error','Ha ocurrido un error al crear la muestra','message' => $e->getMessage(), 500]);      
        }
    }

    /**
     * Display the specified resource.
     */
    public function showInterpretaciones()
    {  
        $interpretaciones = Interpretacion::all();
        return response()->json($interpretaciones, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $this->validateInterpretacion($request);

        $interpretacion = Interpretacion_muestra::where('id', $request->id);
        $interpretacion->update([
            'id_interpretacion' => $request->id_interpretacion,
            'descripcion' => $request->descripcion
        ]);
        return response()->json(['message' => 'Muestra actualizada correctamente', 'interpretacion' => $interpretacion], 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $interpretacion = Interpretacion_muestra::where('id', $request->id);
        $interpretacion->delete();

        return response()->json(['message', 'La interpretacion se ha eliminado correctamente', 'interpretacion' => $interpretacion],201);
    }
}
