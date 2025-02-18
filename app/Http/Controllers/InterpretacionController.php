<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Interpretacion;
use App\Models\Interpretacion_muestra;

class InterpretacionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $interpretaciones = Interpretacion_muestra::where('id_muestra', $request->id);
        return response()->json($interpretaciones, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
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
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
