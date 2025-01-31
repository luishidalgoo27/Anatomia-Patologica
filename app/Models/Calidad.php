<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Calidad extends Model
{
    protected $table = "calidades";

    protected $primary = "id";
    protected $fillable = [
        'nombre',
        'id_tipo_estudio'
    ];

    public function tipoEstudio()
    {
        return $this->belongsTo(Tipo_estudio::class, 'id_tipo_estudio');
    }
   
}
