<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Imagen extends Model
{
    use HasFactory;
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
