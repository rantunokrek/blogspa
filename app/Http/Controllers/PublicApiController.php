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


    public function product_details($slug){
        $product = Product::with('category')->where('slug', $slug)->first();
    

      if ($product) {
       return response()->json($product, 200);
      }else{
        return response()->json('Product not Found!', 404);
      }
    }
}
