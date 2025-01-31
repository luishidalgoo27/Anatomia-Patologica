<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Formato extends Model
{
    protected $table = 'formatos';

    protected $primary = "id";
    protected $fillable = [
        'nombre', 
        'codigo'
    ];

    public function muestras()
    {
        return $this->hasMany(Muestra::class, 'id_formato');
    }
}
