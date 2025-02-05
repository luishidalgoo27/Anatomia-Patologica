<?php

namespace Database\Seeders;

use App\Models\Formato;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class FormatoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $formatos = [
            ['codigo' => 'F', 'nombre' => 'Fresco'],
            ['codigo' => 'FO', 'nombre' => 'Formol'],
            ['codigo' => 'E', 'nombre' => 'Etanol 70']
        ];
        
        foreach ($formatos as $formato) {
            Formato::create($formato);
        }
    }
}
