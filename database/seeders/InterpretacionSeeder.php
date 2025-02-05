<?php

namespace Database\Seeders;

use App\Models\Interpretacion;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class InterpretacionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $interpretaciones = [
            
                // Interpretación - Estudio Citológico Cérvico-Vaginal (C)
                ['id_tipo_estudios' => 1, 'texto' => 'Predominio de células epiteliales escamosas superficiales.'],
                ['id_tipo_estudios' => 1, 'texto' => 'Predominio de células epiteliales escamosas intermedias.'],
                ['id_tipo_estudios' => 1, 'texto' => 'Predominio de células epiteliales escamosas parabasales.'],
                ['id_tipo_estudios' => 1, 'texto' => 'Polinucleares neutrófilos.'],
                ['id_tipo_estudios' => 1, 'texto' => 'Hematíes.'],
                ['id_tipo_estudios' => 1, 'texto' => 'Células endocervicales en exocervix.'],
                ['id_tipo_estudios' => 1, 'texto' => 'Células metaplásicas en exocérvix.'],
                ['id_tipo_estudios' => 1, 'texto' => 'Células metaplásicas inmaduras.'],
                ['id_tipo_estudios' => 1, 'texto' => 'Células reactivas.'],
                ['id_tipo_estudios' => 1, 'texto' => 'Células endometriales en mujer ≥ de 40 años.'],
                ['id_tipo_estudios' => 1, 'texto' => 'Alteraciones celulares sugerentes con HPV.'],
                ['id_tipo_estudios' => 1, 'texto' => 'Alteraciones celulares sugerentes de Herpes.'],
                ['id_tipo_estudios' => 1, 'texto' => 'Células neoplásicas.'],
                ['id_tipo_estudios' => 1, 'texto' => 'Células superficiales e intermedias con cambios atípicos.'],
                ['id_tipo_estudios' => 1, 'texto' => 'Células intermedias y parabasales con algunos cambios atípicos.'],
                ['id_tipo_estudios' => 1, 'texto' => 'Células parabasales con algunos cambios atípicos.'],
                ['id_tipo_estudios' => 1, 'texto' => 'Células escamosas de significado incierto.'],
                ['id_tipo_estudios' => 1, 'texto' => 'Células epiteliales glandulares de significado incierto.'],
                ['id_tipo_estudios' => 1, 'texto' => 'Estructuras micóticas correspondientes a Candida albicans.'],
                ['id_tipo_estudios' => 1, 'texto' => 'Estructuras micóticas correspondientes a Candida glabrata.'],
                ['id_tipo_estudios' => 1, 'texto' => 'Estructuras bacterianas con disposición característica de actinomyces.'],
                ['id_tipo_estudios' => 1, 'texto' => 'Estructuras bacterianas correspondientes a Gardnerella vaginalis.'],
                ['id_tipo_estudios' => 1, 'texto' => 'Estructuras bacterianas de naturaleza cocácea.'],
                ['id_tipo_estudios' => 1, 'texto' => 'Estructuras bacterianas sugerentes de Leptothrix.'],
                ['id_tipo_estudios' => 1, 'texto' => 'Estructuras correspondientes a Trichomonas vaginalis.'],
                ['id_tipo_estudios' => 1, 'texto' => 'Células histiocitarias multinucleadas.'],
                ['id_tipo_estudios' => 1, 'texto' => 'Células epiteliales de tipo escamoso con intensos cambios atípicos.'],
                ['id_tipo_estudios' => 1, 'texto' => 'Presencia de epitelio endometrial sin cambios atípicos.'],
                ['id_tipo_estudios' => 1, 'texto' => 'Células epiteliales de apariencia glandular con núcleos amplios e irregulares.'],
            
                // Interpretación - Estudio Hematológico Completo (H)
                ['id_tipo_estudios' => 2, 'texto' => 'Predominio de eritrocitos normocíticos normocrómicos.'],
                ['id_tipo_estudios' => 2, 'texto' => 'Predominio de eritrocitos microcíticos hipocrómicos.'],
                ['id_tipo_estudios' => 2, 'texto' => 'Presencia de esferocitos.'],
                ['id_tipo_estudios' => 2, 'texto' => 'Presencia de dianocitos (células en forma de lágrima).'],
                ['id_tipo_estudios' => 2, 'texto' => 'Leucocitos con predominio de neutrófilos.'],
                ['id_tipo_estudios' => 2, 'texto' => 'Leucocitos con predominio de linfocitos.'],
                ['id_tipo_estudios' => 2, 'texto' => 'Presencia de células blásticas.'],
                ['id_tipo_estudios' => 2, 'texto' => 'Presencia de eosinófilos aumentados.'],
                ['id_tipo_estudios' => 2, 'texto' => 'Presencia de basófilos aumentados.'],
                ['id_tipo_estudios' => 2, 'texto' => 'Trombocitosis (aumento de plaquetas).'],
                ['id_tipo_estudios' => 2, 'texto' => 'Trombocitopenia (disminución de plaquetas).'],
                ['id_tipo_estudios' => 2, 'texto' => 'Anomalías en la morfología plaquetaria.'],
                ['id_tipo_estudios' => 2, 'texto' => 'Presencia de células atípicas sugestivas de neoplasia.'],
                ['id_tipo_estudios' => 2, 'texto' => 'Presencia de células inmaduras del linaje mieloide.'],
                ['id_tipo_estudios' => 2, 'texto' => 'Presencia de células inmaduras del linaje linfático.'],
                ['id_tipo_estudios' => 2, 'texto' => 'Anisocitosis (variabilidad en el tamaño de los eritrocitos).'],
                ['id_tipo_estudios' => 2, 'texto' => 'Poiquilocitosis (variabilidad en la forma de los eritrocitos).'],
                ['id_tipo_estudios' => 2, 'texto' => 'Presencia de cuerpos de Howell-Jolly.'],
                ['id_tipo_estudios' => 2, 'texto' => 'Células con inclusiones de hierro (cuerpos de Pappenheimer).'],
                ['id_tipo_estudios' => 2, 'texto' => 'Presencia de parásitos intraeritrocitarios.'],
                
                // Interpretación - Estudio Microscópico y Químico de Orina (U)
                ['id_tipo_estudios' => 3, 'texto' => 'pH normal.'],
                ['id_tipo_estudios' => 3, 'texto' => 'pH elevado.'],
                ['id_tipo_estudios' => 3, 'texto' => 'pH reducido.'],
                ['id_tipo_estudios' => 3, 'texto' => 'Presencia de proteínas.'],
                ['id_tipo_estudios' => 3, 'texto' => 'Negativo para proteínas.'],
                ['id_tipo_estudios' => 3, 'texto' => 'Glucosa presente.'],
                ['id_tipo_estudios' => 3, 'texto' => 'Negativo para la glucosa.'],
                ['id_tipo_estudios' => 3, 'texto' => 'Cetonas detectadas.'],
                ['id_tipo_estudios' => 3, 'texto' => 'Negativo para cetonas.'],
                ['id_tipo_estudios' => 3, 'texto' => 'Hemoglobina presente.'],
                ['id_tipo_estudios' => 3, 'texto' => 'Negativo para hemoglobina.'],
                ['id_tipo_estudios' => 3, 'texto' => 'Bilirrubina detectada.'],
                ['id_tipo_estudios' => 3, 'texto' => 'Negativo para bilirrubina.'],
                ['id_tipo_estudios' => 3, 'texto' => 'Urobilinógeno normal.'],
                ['id_tipo_estudios' => 3, 'texto' => 'Urobilinógeno elevado.'],
                ['id_tipo_estudios' => 3, 'texto' => 'Presencia de nitritos.'],
                ['id_tipo_estudios' => 3, 'texto' => 'Negativo para nitritos.'],
                ['id_tipo_estudios' => 3, 'texto' => 'Presencia de leucocitos.'],
                ['id_tipo_estudios' => 3, 'texto' => 'Ausencia de leucocitos.'],
                ['id_tipo_estudios' => 3, 'texto' => 'Presencia de eritrocitos.'],
                ['id_tipo_estudios' => 3, 'texto' => 'Ausencia de eritrocitos.'],
                ['id_tipo_estudios' => 3, 'texto' => 'Células epiteliales.'],
                ['id_tipo_estudios' => 3, 'texto' => 'Cilindros hialinos.'],
                ['id_tipo_estudios' => 3, 'texto' => 'Cilindros granulosos.'],
                ['id_tipo_estudios' => 3, 'texto' => 'Cristales (oxalato de calcio, ácido úrico, etc.).'],
                ['id_tipo_estudios' => 3, 'texto' => 'Bacterias.'],
                ['id_tipo_estudios' => 3, 'texto' => 'Levaduras.'],
                ['id_tipo_estudios' => 3, 'texto' => 'Parásitos.'],
            
                // Interpretación - Estudio Citológico de Esputo (E)
                ['id_tipo_estudios' => 4, 'texto' => 'Presencia de células epiteliales escamosas.'],
                ['id_tipo_estudios' => 4, 'texto' => 'Presencia de células epiteliales columnares.'],
                ['id_tipo_estudios' => 4, 'texto' => 'Presencia de células inflamatorias (neutrófilos, linfocitos, eosinófilos, macrófagos).'],
                ['id_tipo_estudios' => 4, 'texto' => 'Presencia de células metaplásicas.'],
                ['id_tipo_estudios' => 4, 'texto' => 'Presencia de células malignas.'],
                ['id_tipo_estudios' => 4, 'texto' => 'Presencia de células atípicas sugestivas de neoplasia.'],
                ['id_tipo_estudios' => 4, 'texto' => 'Presencia de microorganismos (bacterias, hongos, micobacterias).'],
                ['id_tipo_estudios' => 4, 'texto' => 'Presencia de células sanguíneas (eritrocitos, plaquetas).'],
                ['id_tipo_estudios' => 4, 'texto' => 'Presencia de material mucoso o mucopurulento.'],
                ['id_tipo_estudios' => 4, 'texto' => 'Presencia de cristales (de colesterol, calcio, etc.).'],
                ['id_tipo_estudios' => 4, 'texto' => 'Ausencia de células significativas para el análisis.'],
            
                // Interpretación - Estudio Citológico Bucal (B)
                ['id_tipo_estudios' => 5, 'texto' => 'Presencia de células epiteliales escamosas.'],
                ['id_tipo_estudios' => 5, 'texto' => 'Presencia de células epiteliales cilíndricas.'],
                ['id_tipo_estudios' => 5, 'texto' => 'Presencia de células inflamatorias (neutrófilos, linfocitos, macrófagos).'],
                ['id_tipo_estudios' => 5, 'texto' => 'Presencia de células glandulares.'],
                ['id_tipo_estudios' => 5, 'texto' => 'Presencia de células metaplásicas.'],
                ['id_tipo_estudios' => 5, 'texto' => 'Presencia de células atípicas sugestivas de neoplasia.'],
                ['id_tipo_estudios' => 5, 'texto' => 'Presencia de microorganismos (bacterias, hongos, levaduras).'],
                ['id_tipo_estudios' => 5, 'texto' => 'Presencia de células anormales con cambios citológicos.'],
                ['id_tipo_estudios' => 5, 'texto' => 'Ausencia de células significativas para el análisis.']
                
                
            
            
        ];
        
        foreach ($interpretaciones as $interpretacion) {
            Interpretacion::create($interpretacion);
        }
    }
}
