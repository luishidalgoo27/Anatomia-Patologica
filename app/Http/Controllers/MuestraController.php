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
        'descripcion_calidad' => 'required',
        'fecha' => 'required',
        'codigo' => 'required',
        'id_calidad' => 'required',
        'id_tipo_naturaleza' => 'required',
        'organo' => 'required|nullable',
        'id_formato' => 'required'
    ]);

    try{
        Muestra::create([
            'descripcion_calidad' => $request->descripcion_calidad,
            'fecha' => $request->fecha,
            'codigo' => $request->codigo,
            'id_calidad' => $request->id_calidad,
            'id_tipo_naturaleza' => $request->id_tipo_naturaleza,
            'organo' => $request->organo,
            'id_formato' => $request->id_formato,
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
            'id_tipo_naturaleza' => $request->id_tipo_naturaleza,
            'fecha' => $request->fecha,
            'id_formato' => $request->id_formato,
            'organo' => $request->organo,
            'id_calidad' => $request->id_calidad,
            'descripcion_calidad' => $request->descripcion_calidad,
            /* 'id_sede' => $request->centro, */
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
