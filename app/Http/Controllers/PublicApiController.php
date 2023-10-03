<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class PublicApiController extends Controller
{
    public function products(){
        $products = Product::latest()->paginate(20);
     return response()->json($products, 200,);

    }
}
