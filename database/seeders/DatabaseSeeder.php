<?php

namespace Database\Seeders;

use App\Models\Sede;
use App\Models\Tipo_naturaleza;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        
        $this->call([
            FormatoSeeder::class,
            SedeSeeder::class,
            Tipo_naturalezaSeeder::class,
            Tipo_estudioSeeder::class,
            CalidadSeeder::class,
            InterpretacionSeeder::class
        ]);
        

  
    }
}
