<?php

namespace Database\Seeders;

use App\Models\Tipo_naturaleza;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Tipo_naturalezaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $naturalezas = [
            ['codigo' => 'B', 'nombre' => 'Biopsias'],
            ['codigo' => 'BV', 'nombre' => 'Biopsias Veterinarias'],
            ['codigo' => 'CB', 'nombre' => 'Cavidad Bucal'],
            ['codigo' => 'CV', 'nombre' => 'Citología Vaginal'],
            ['codigo' => 'EX', 'nombre' => 'Extensión Sanguínea'],
            ['codigo' => 'O', 'nombre' => 'Orinas'],
            ['codigo' => 'E', 'nombre' => 'Esputos'],
            ['codigo' => 'ES', 'nombre' => 'Semen'],
            ['codigo' => 'I', 'nombre' => 'Improntas'],
            ['codigo' => 'F', 'nombre' => 'Frotis']
        ];
        
        foreach ($naturalezas as $naturaleza) {
            Tipo_naturaleza::create($naturaleza);
        }
        
    }
}
