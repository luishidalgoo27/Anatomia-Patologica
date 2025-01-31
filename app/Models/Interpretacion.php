<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Interpretacion extends Model
{
    protected $table = 'interpretaciones';

    protected $primary = "id";
    protected $fillable = ['texto', 'id_tipo_estudios'];

    public function tipoEstudio()
    {
        return $this->belongsTo(Tipo_estudio::class, 'id_tipo_estudios');
    }

    public function muestras()
    {
        return $this->hasMany(Interpretacion_muestra::class, 'id_interpretacion');
    }
}
