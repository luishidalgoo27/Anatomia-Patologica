<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <title>Home</title>

    @viteReactRefresh
    @vite(['resources/js/app.js', 'resources/css/app.css']) 
    
  </head>
  <form method="POST" enctype="multipart/form-data" action="{{route('upload')}}">
    @csrf
    <label for="imagenes">Imagenes de la muestra</label>
    <input name="image" type="file" />
    <input type="submit" value="upload">
  </form>
  <body class="hold-transition sidebar-mini">
    <div class="wrapper" id="root">

    </div>
  </body>
</html>
