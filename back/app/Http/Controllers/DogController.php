<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\dog;

class DogController extends Controller
{

    public function index()
    {
        return Dog::all();
    }


    public function store(Request $request)
    {
        Dog::create($request->all());
    }


    public function show($id)
    {
        return Dog::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $dog = Dog::findOrFail($id);
        $dog->update($request->all());
    }

    public function destroy($id)
    {
        Dog::destroy($id);
    }
}
