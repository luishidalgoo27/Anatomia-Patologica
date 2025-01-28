<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('interpretaciones', function (Blueprint $table) {
            $table->id();
            $table->text('texto');
            $table->unsignedBigInteger('id_tipo_estudios');
            $table->timestamps();

            $table->foreign('id_tipo_estudios')->references('id')->on('tipo_estudios');
        });
    }

    public function down()
    {
        Schema::dropIfExists('interpretaciones');
    }
};
