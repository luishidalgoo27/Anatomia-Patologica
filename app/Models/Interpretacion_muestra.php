<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Interpretacion_muestra extends Model
{
    use HasFactory;
    protected $table = 'interpretacion_muestra';

    protected $primary = "id";
    protected $fillable = [
        'descripcion', 
        'id_muestra', 
        'id_interpretacion'];

    public function muestra()
    {
        return $this->belongsTo(Muestra::class, 'id_muestra');
    }

    public function interpretacion()
    {
        return $this->belongsTo(Interpretacion::class, 'id_interpretacion');
    }
}
