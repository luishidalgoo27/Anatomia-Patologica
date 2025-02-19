<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Muestra;
use Barryvdh\DomPDF\Facade\PDF;
use Illuminate\Http\Request;

class MuestraController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function validateMuestra(Request $request)
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
    }

    public function index(Request $request)
    {   
        $muestras = Muestra::with(['calidad','formato','tipoNaturaleza'])
        ->where('id_user', $request->id_user)
        ->get();

        return response()->json($muestras, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
    try{
        $this->validateMuestra($request);
        
        Muestra::create([
            'descripcion_calidad' => $request->descripcion_calidad,
            'fecha' => $request->fecha,
            'codigo' => $request->codigo,
            'id_calidad' => $request->id_calidad,
            'id_tipo_naturaleza' => $request->id_tipo_naturaleza,
            'organo' => $request->organo,
            'id_formato' => $request->id_formato,
            'id_user' => $request->id_user,
            'id_sede' => $request->id_sede,
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
    public function update(Request $request)
    {
        $this->validateMuestra($request);

        $idMuestra = $request->id;
        $muestra = Muestra::where('id', $idMuestra);

        $muestra->update([
            'descripcion_calidad' => $request->descripcion_calidad,
            'fecha' => $request->fecha,
            'codigo' => $request->codigo,
            'id_calidad' => $request->id_calidad,
            'id_tipo_naturaleza' => $request->id_tipo_naturaleza,
            'organo' => $request->organo,
            'id_formato' => $request->id_formato
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

    public function descargarPDF($id)
    {
        $muestras = Muestra::with(['calidad', 'tipoNaturaleza', 'formato'])->findOrFail($id);
    
        $pdf = PDF::loadView('pdf.muestra', ['muestras'=>$muestras]);
    
        return $pdf->stream('muestra_' . $muestras->codigo . '.pdf');
    }
}
