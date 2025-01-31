<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Imagen extends Model
{
    protected $table = 'imagenes';

    protected $primary = "id";
    protected $fillable = [
        'ruta',
        'zoom', 
        'id_muestra'
    ];

    public function muestra()
    {
        return $this->belongsTo(Muestra::class, 'id_muestra');
    }
}
