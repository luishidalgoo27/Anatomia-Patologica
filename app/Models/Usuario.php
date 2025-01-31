<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    protected $table = 'usuarios';

    protected $primary = "id";
    protected $fillable = [
        'email', 
        'id_Sede'
    ];

    public function sede()
    {
        return $this->belongsTo(Sede::class, 'id_Sede');
    }

    public function muestras()
    {
        return $this->hasMany(Muestra::class, 'id_usuario');
    }

}
