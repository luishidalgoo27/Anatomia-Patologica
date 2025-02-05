<?php

namespace Database\Seeders;

use App\Models\Tipo_estudio;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Tipo_estudioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $estudios = [
            ['codigo'=>'C','nombre' => 'Estudio Citológico Cérvico-Vaginal'],
            ['codigo'=>'H','nombre' => 'Estudio Hematológico completo'],
            ['codigo'=>'U','nombre' => 'Estudio Microscópico y químico de orina'],
            ['codigo'=>'E','nombre' => 'Estudio Citológico de Esputo'],
            ['codigo'=>'B','nombre' => 'Estudio Citológico Bucal']
        ];
        
        foreach ($estudios as $estudio) {
            Tipo_estudio::create($estudio);
        }
    }
}
