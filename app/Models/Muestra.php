<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Muestra extends Model
{
    use HasFactory;
    protected $table = 'muestras';

    protected $primary = "id";
    protected $fillable = [
        'fecha', 
        'codigo', 
        'organo', 
        'descripcion_calidad', 
        'id_calidad', 
        'id_tipo_naturaleza', 
        'id_formato',
        'id_sede'
        //'id_user'
    ];

    public function calidad()
    {
        return $this->belongsTo(Calidad::class, 'id_calidad');
    }

    public function formato()
    {
        return $this->belongsTo(Formato::class, 'id_formato');
    }

   # public function usuario()
    #{
     #   return $this->belongsTo(User::class, 'id_usuario');
    #}

    public function tipoNaturaleza()
    {
        return $this->belongsTo(Tipo_naturaleza::class, 'id_tipo_naturaleza');
    }

    //public function sede()
    //{
      //  return $this->belongsTo(Sede::class, 'id_sede');
    //}

    public function imagenes()
    {
        return $this->hasMany(Imagen::class, 'id_muestra');
    }

    public function interpretaciones()
    {
        return $this->hasMany(Interpretacion_muestra::class, 'id_muestra');
    }
}
