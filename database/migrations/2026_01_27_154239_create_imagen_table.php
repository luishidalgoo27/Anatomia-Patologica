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
        Schema::create('imagen', function (Blueprint $table) {
            $table->id();
            $table->string('Ruta');
            $table->float('zoom');
            $table->unsignedBigInteger('Id_Muestra');
            $table->timestamps();

            $table->foreign('Id_Muestra')->references('id')->on('muestra');

        });
    }

    public function down()
    {
        Schema::dropIfExists('imagen');
    }
};
