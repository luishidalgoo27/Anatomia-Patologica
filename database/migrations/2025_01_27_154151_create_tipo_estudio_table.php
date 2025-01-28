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
        Schema::create('tipo_estudio', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->unsignedBigInteger('Id_Calidad');
            $table->timestamps();

            $table->foreign('Id_Calidad')->references('id')->on('calidades');
        });
    }

    public function down()
    {
        Schema::dropIfExists('tipo_estudio');
    }
};
