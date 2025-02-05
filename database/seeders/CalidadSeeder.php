<?php

namespace Database\Seeders;

use App\Models\Calidad;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CalidadSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $calidades = [
                ['id_tipo_estudio' => 1, 'nombre' => 'Toma válida para examen.'],
                ['id_tipo_estudio' => 1, 'nombre' => 'Toma válida para examen aunque limitada por ausencia de células endocervicales / zona de transición.'],
                ['id_tipo_estudio' => 1, 'nombre' => 'Toma válida para examen aunque limitada por hemorragia.'],
                ['id_tipo_estudio' => 1, 'nombre' => 'Toma válida para examen aunque limitada por escasez de células.'],
                ['id_tipo_estudio' => 1, 'nombre' => 'Toma válida para examen aunque limitada por intensa citolisis.'],
                ['id_tipo_estudio' => 1, 'nombre' => 'Toma válida para examen aunque limitada por ausencia total de células representativas.'],
                ['id_tipo_estudio' => 1, 'nombre' => 'Toma no valorable por desecación.'],
                ['id_tipo_estudio' => 1, 'nombre' => 'Toma no valorable por ausencia total de células epiteliales y elementos representativos.'], 
                ['id_tipo_estudio' => 1, 'nombre' => 'Toma no valorable por desintegración celular severa.'], 
                
                ['id_tipo_estudio' => 2, 'nombre' => 'Muestra válida para examen.'],
                ['id_tipo_estudio' => 2, 'nombre' => 'Muestra válida para examen aunque limitada por lipemia.'],
                ['id_tipo_estudio' => 2, 'nombre' => 'Muestra válida para examen aunque limitada por hemólisis.'],
                ['id_tipo_estudio' => 2, 'nombre' => 'Muestra válida para examen aunque limitada por aglutinación.'],
                ['id_tipo_estudio' => 2, 'nombre' => 'Muestra válida para examen aunque limitada por coagulación.'],
                ['id_tipo_estudio' => 2, 'nombre' => 'Muestra válida para examen aunque limitada por interferencias en la coagulación.'],
                ['id_tipo_estudio' => 2, 'nombre' => 'Muestra no valorable por desnaturalización de proteínas.'],
                ['id_tipo_estudio' => 2, 'nombre' => 'Muestra no valorable por contaminación bacteriana.'],
                ['id_tipo_estudio' => 2, 'nombre' => 'Muestra no valorable por alta degradación de proteínas.'],
                
                ['id_tipo_estudio' => 3, 'nombre' => 'Muestra válida para examen.'],
                ['id_tipo_estudio' => 3, 'nombre' => 'Muestra válida para examen aunque limitada por turbidez.'],
                ['id_tipo_estudio' => 3, 'nombre' => 'Muestra válida para examen aunque limitada por coloración anormal.'],
                ['id_tipo_estudio' => 3, 'nombre' => 'Muestra válida para examen aunque limitada por contaminación fecal.'],
                ['id_tipo_estudio' => 3, 'nombre' => 'Muestra válida para examen aunque limitada por preservación inadecuada.'],
                ['id_tipo_estudio' => 3, 'nombre' => 'Muestra válida para examen aunque limitada por volumen insuficiente.'],
                ['id_tipo_estudio' => 3, 'nombre' => 'Muestra no valorable por deterioro.'],
                ['id_tipo_estudio' => 3, 'nombre' => 'Muestra no valorable por contaminación con agentes externos.'],
                ['id_tipo_estudio' => 3, 'nombre' => 'Muestra no valorable por contaminación extrema con sustancias externas.'],
                
                ['id_tipo_estudio' => 4, 'nombre' => 'Muestra válida para examen.'],
                ['id_tipo_estudio' => 4, 'nombre' => 'Muestra válida para examen aunque limitada por volumen insuficiente.'],
                ['id_tipo_estudio' => 4, 'nombre' => 'Muestra válida para examen aunque limitada por presencia de sangre.'],
                ['id_tipo_estudio' => 4, 'nombre' => 'Muestra válida para examen aunque limitada por contaminación con saliva.'],
                ['id_tipo_estudio' => 4, 'nombre' => 'Muestra válida para examen aunque limitada por contaminación con secreciones nasales.'],
                ['id_tipo_estudio' => 4, 'nombre' => 'Muestra válida para examen aunque limitada por presencia de alimentos.'],
                ['id_tipo_estudio' => 4, 'nombre' => 'Muestra no valorable por descomposición.'],
                ['id_tipo_estudio' => 4, 'nombre' => 'Muestra no valorable por descomposición celular avanzada.'],
                ['id_tipo_estudio' => 4, 'nombre' => 'Muestra no valorable por alteraciones químicas incompatibles con el análisis.'],
                
                ['id_tipo_estudio' => 5, 'nombre' => 'Muestra válida para examen.'],
                ['id_tipo_estudio' => 5, 'nombre' => 'Muestra válida para examen aunque limitada por cantidad insuficiente de células.'],
                ['id_tipo_estudio' => 5, 'nombre' => 'Muestra válida para examen aunque limitada por presencia de sangre.'],
                ['id_tipo_estudio' => 5, 'nombre' => 'Muestra válida para examen aunque limitada por contaminación con alimentos.'],
                ['id_tipo_estudio' => 5, 'nombre' => 'Muestra válida para examen aunque limitada por contaminación con saliva.'],
                ['id_tipo_estudio' => 5, 'nombre' => 'Muestra válida para examen aunque limitada por alta contaminación con residuos.'],
                ['id_tipo_estudio' => 5, 'nombre' => 'Muestra no valorable por deshidratación.'],
                ['id_tipo_estudio' => 5, 'nombre' => 'Muestra no valorable por contaminación con microorganismos.'],
                ['id_tipo_estudio' => 5, 'nombre' => 'Muestra no valorable por sobrecrecimiento de microorganismos contaminantes.']
        ];
        
        
        foreach ($calidades as $calidad) {
            Calidad::create($calidad);
        }
    }
}
