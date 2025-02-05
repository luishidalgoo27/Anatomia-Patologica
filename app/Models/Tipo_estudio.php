<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Tipo_estudio extends Model
{
    use HasFactory;
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
