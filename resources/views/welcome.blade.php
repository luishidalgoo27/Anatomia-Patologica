<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="shortcut icon" href="{{asset('media/favicon.png')}}" type="image/x-icon">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home</title> 
    @viteReactRefresh
    @vite(['resources/js/app.js'])
  </head>
  <body> 
    <div id="root"></div>
  </body>
</html>