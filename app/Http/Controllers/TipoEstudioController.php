<?php

namespace App\Http\Controllers;

use App\Models\Tipo_estudio;
use Illuminate\Http\Request;

class TipoEstudioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tipo_estudio = Tipo_estudio::all();

        return response()->json($tipo_estudio, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
