<?php

namespace App\Http\Controllers;

use App\Models\Muestra;
use Exception;
use Illuminate\Http\Request;

class MuestraController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $muestras = Muestra::all();
        return response()->json($muestras, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
    $request->validate([
        'codigo' => 'required',
        'naturaleza' => 'required',
        'fecha' => 'required',
        'formato' => 'required',
        'organo' => 'required',
        'centro' => 'required',
        'calidad' => 'required',
        'descripcioncalidad' => 'required',
    ]);

    try{
        Muestra::create([
            'codigo' => $request->codigo,
            'id_tipo_naturaleza' => $request->naturaleza,
            'fecha' => $request->fecha,
            'if_formato' => $request->formato,
            'organo' => $request->organo,
            'id_sede' => $request->centro,
            'id_calidad' => $request->calidad,
            'descripcion_calidad' => $request->descripcioncalidad,

        ]);

        return response()->json('La muestra se ha creado correctamente', 201);
    }
    catch(\Exception $e)
    {
        return response()->json(['error','Ha ocurrido un error al crear la muestra','message' => $e->getMessage(), 500]);      
    }

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $idMuestra = $request->input('id');
        $muestra = Muestra::where('id', $idMuestra);

        $muestra->update([
            'codigo' => $request->codigo,
            'id_tipo_naturaleza' => $request->naturaleza,
            'fecha' => $request->fecha,
            'if_formato' => $request->formato,
            'organo' => $request->organo,
            'id_sede' => $request->centro,
            'id_calidad' => $request->calidad,
            'descripcion_calidad' => $request->descripcioncalidad,
        ]);

        return response()->json(['message' => 'Muestra actualizada correctamente', 'muestra' => $muestra], 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $idMuestra = $request->input('id');
        $muestra = Muestra::where('id', $idMuestra);

        if($muestra){
            $muestra->delete();
        }

        return response()->json(['message' => 'Muestra eliminada correctamente', 'muestra' => $muestra], 201);
    }
}
