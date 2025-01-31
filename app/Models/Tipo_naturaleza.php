<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tipo_naturaleza extends Model
{
    protected $table = 'tipo_naturalezas';

    protected $primary = "id";
    protected $fillable = [
        'codigo', 
        'nombre'
    ];

    public function muestras()
    {
        return $this->hasMany(Muestra::class, 'id_tipo_naturaleza');
    }
}
