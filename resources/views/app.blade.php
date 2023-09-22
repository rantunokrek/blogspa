<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Laravel</title>

  <link rel="stylesheet" href="{{asset('css/app.css')}}">
    </head>
    <body>
    <div id="app">
        <app-header></app-header>
        <router-view></router-view>
    </div>
<script src="{{asset('js/app.js')}}"></script>
    </body>
</html>
