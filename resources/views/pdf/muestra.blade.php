<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Informe de la Muestra {{ $muestras->codigo }}</title>
    <style>
        body { font-family: Arial, sans-serif; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid black; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
    </style>
</head>
<body>
    <h1>Informe de la Muestra {{ $muestras->codigo }}</h1>
    <p><strong>Fecha:</strong> {{ $muestras->fecha }}</p>
    <p><strong>Órgano:</strong> {{ $muestras->organo ?? 'N/A' }}</p>
    <p><strong>Descripción de Calidad:</strong> {{ $muestras->descripcion_calidad }}</p>

    <h2>Detalles Adicionales</h2>
    <table>
        <tr>
            <th>Calidad</th>
            <td>{{ $muestras->calidad->nombre ?? 'N/A' }}</td>
        </tr>
        <tr>
            <th>Tipo de Naturaleza</th>
            <td>{{ $muestras->tipoNaturaleza->nombre ?? 'N/A' }}</td>
        </tr>
        <tr>
            <th>Formato</th>
            <td>{{ $muestras->formato->nombre ?? 'N/A' }}</td>
        </tr>
    </table>
</body>
</html>
