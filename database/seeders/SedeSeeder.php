<?php

namespace Database\Seeders;

use App\Models\Sede;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class SedeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $sedes = [
                ['codigo' => 'A', 'nombre' => 'Albacete'],
                ['codigo' => 'AL', 'nombre' => 'Alicante'],
                ['codigo' => 'ALII', 'nombre' => 'Alicante II'],
                ['codigo' => 'I', 'nombre' => 'Almería'],
                ['codigo' => 'C', 'nombre' => 'Córdoba'],
                ['codigo' => 'L', 'nombre' => 'Leganés'],
                ['codigo' => 'G', 'nombre' => 'Granada'],
                ['codigo' => 'H', 'nombre' => 'Huelva'],
                ['codigo' => 'J', 'nombre' => 'Jerez'],
                ['codigo' => 'M', 'nombre' => 'Madrid'],
                ['codigo' => 'MG', 'nombre' => 'Málaga'],
                ['codigo' => 'MU', 'nombre' => 'Murcia'],
                ['codigo' => 'S', 'nombre' => 'Sevilla'],
                ['codigo' => 'V', 'nombre' => 'Valencia'],
                ['codigo' => 'Z', 'nombre' => 'Zaragoza'],
            ];
            
            foreach ($sedes as $sede) {
                Sede::create($sede);
            }
    }
}
