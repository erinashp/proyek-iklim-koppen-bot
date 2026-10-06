<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('challenge_questions', function (Blueprint $table) {
            $table->id();

            $table->unsignedInteger('number');

            $table->text('question');

            $table->text('option_a');
            $table->text('option_b');
            $table->text('option_c');
            $table->text('option_d');
            $table->text('option_e');

            $table->string('image')->nullable();

            $table->string('correct_answer', 1);

            $table->timestamps();

            $table->unique('number');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('challenge_questions');
    }
};