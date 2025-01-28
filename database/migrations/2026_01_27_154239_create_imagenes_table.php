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
        Schema::create('imagenes', function (Blueprint $table) {
            $table->id();
            $table->string('ruta');
            $table->float('zoom');
            $table->unsignedBigInteger('id_muestra');
            $table->timestamps();

            $table->foreign('id_muestra')->references('id')->on('muestras');

        });
    }

    public function down()
    {
        Schema::dropIfExists('imagenes');
    }
};
