<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ChallengeQuestion extends Model
{
    protected $fillable = [
        'question',
        'option_a',
        'option_b',
        'option_c',
        'option_d',
        'option_e',
        'image',
        'correct_answer',
        'order',
    ];

    protected $casts = [
        'number' => 'integer',
    ];
}