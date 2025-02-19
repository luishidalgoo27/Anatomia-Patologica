<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ApiTokenController extends Controller
{
    public function index()
    {
        $token = DB::table('personal_access_tokens')->get();
        dd($token);
        return response()->json($token, 200);
    }
}
