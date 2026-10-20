<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ChallengeQuestion extends Model
{
    protected $fillable = [
        'number',
        'question',
        'option_a',
        'option_b',
        'option_c',
        'option_d',
        'option_e',
        'image',
        'correct_answer',
    ];

    protected $casts = [
        'number' => 'integer',
    ];
}
