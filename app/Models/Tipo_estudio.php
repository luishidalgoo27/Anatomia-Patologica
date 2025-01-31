<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tipo_estudio extends Model
{
    protected $table = 'tipo_estudios';

    protected $primary = "id";
    protected $fillable = [
        'nombre'
    ];

    public function calidades()
    {
        return $this->hasMany(Calidad::class, 'id_tipo_estudio');
    }

    public function interpretaciones()
    {
        return $this->hasMany(Interpretacion::class, 'id_tipo_estudios');
    }

}
