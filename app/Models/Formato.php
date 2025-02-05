<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Formato extends Model
{
    use HasFactory;
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
