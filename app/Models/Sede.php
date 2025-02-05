<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sede extends Model
{
    use HasFactory;

    protected $table = 'sedes';

    protected $primary = "id";
    protected $fillable = [
        'codigo', 
        'nombre'
    ];

  //  public function usuarios()
    //{
      //  return $this->hasMany(User::class, 'id_sede');
    //}

//    public function muestras()
//    {
//        return $this->hasMany(Muestra::class, 'id_sede');
//    }
}
