<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/






Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    
    Route::resource('category', 'CategoryController');
    Route::resource('product', 'ProductController');

    Route::post('user','AuthController@update_user');
});

Route::get('products', 'PublicApiController@products');
Route::get('products/{slug}', 'PublicApiController@product_details');
