<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Informe área de citodiagnóstico</title>
    <link rel="shortcut icon" href="{{ public_path('favicon.ico') }}" />
    <style>

        *{
            color: #021f4b;
        }
        body {
            font-family: sans-serif;
            margin: 20px;
        }
        h1 {
            font-size: 22px;
            margin: 5px 0;
        }
        .titulo {
            border-bottom: 1px solid #021f4b;
            text-align: center;
            font-size: 18px;
            margin-top: 30px;
            margin-bottom: 10px;
            padding-bottom: 5px;
        }
        .info {
            margin-bottom: 15px;
        }
        .interpretacion {
            margin-bottom: 20px;
        }
        .interpretacion h3 {
            margin: 5px 0;
            font-size: 16px;
            font-weight: bold;
        }
        .interpretacion p {
            margin: 5px 0;
        }
    </style>
</head>
<body>

    <header>
        <table width="100%">
            <tr>
                <td style="text-align: left;">
                    <img src="{{ public_path('imagenes/logo.jpg') }}" alt="Davante Logo" width="250px">
                </td>
                <td style="text-align: right;">
                    <h1>Informe área de citodiagnóstico</h1>
                </td>
            </tr>
        </table>
    </header>

    <div class="info">
        <p><strong>Profesional:</strong> 
            
        </p>
        <p><strong>Muestra:</strong> {{ $muestras->codigo }}</p>
        <p><strong>Fecha:</strong> {{ $muestras->fecha }}</p>
    </div>

    <div class="titulo">DETALLES DE LA MUESTRA</div>
    <div class="info">
        <table width="100%">
            <tr>
                <td width="80%" style="text-align: left;">
                    <strong>Naturaleza de la Muestra:</strong> 
                </td>
                <td style="text-align: left;">
                    {{ $muestras->tipoNaturaleza->nombre }}
                </td>
            </tr>
            <tr>
                <td width="80%" style="text-align: left;">
                    <strong>Órgano:</strong>
                </td>
                <td style="text-align: left;">
                    {{ $muestras->organo }}
                </td>
            </tr>
            <tr>
                <td width="80%" style="text-align: left;">
                    <strong>Recibido en:</strong>
                </td>
                <td style="text-align: left;">
                    {{ $muestras->formato->nombre }} 
                </td>
            </tr>
            <tr>
                <td colspan="2" width="80%" style="text-align: left;">
                    <strong>Calidad:</strong>
                </td>
            </tr>
            <tr>
                <td colspan="2" style="text-align: left;">
                    {{ $muestras->calidad->nombre }}
                </td>
            </tr>
            <tr>
                <td colspan="2" width="80%" style="text-align: left;">
                    <strong>Descripción:</strong>
                </td>
            </tr>
            <tr>
                <td colspan="2" style="text-align: left;">
                    {{ $muestras->descripcion_calidad }}
                </td>
            </tr>
        </table>
        
    </div>

    <div class="titulo">INTERPRETACIONES</div>
    @foreach($muestras->interpretaciones as $interpretacionMuestra)
        <div class="interpretacion">
            <h3>Interpretación:</h3>
            <p>{{ $interpretacionMuestra->interpretacion->texto }} </p>
            
            <h3>Descripción:</h3>
            <p>{{ $interpretacionMuestra->descripcion }}</p>
        </div>
    @endforeach

    <footer  style="position: fixed; bottom: 0; left: 0; width: 100%;">
        <div style="text-align: center;">
            <img src="{{ public_path('imagenes/logo.jpg') }}" alt="Davante Logo" width="220px">
        </div>
    </footer>

</body>
</html>
