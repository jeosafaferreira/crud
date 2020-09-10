<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;

class dog extends Model
{
    protected $fillable = [
        'raca', 'nome'
    ];
}
