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
        Schema::create('muestras', function (Blueprint $table) {
            $table->id();
            $table->date('fecha');
            $table->string('codigo');
            $table->string('organo')->nullable();
            $table->text('descripcion_calidad');
            $table->unsignedBigInteger('id_calidad');
            $table->unsignedBigInteger('id_tipo_naturaleza');
            $table->unsignedBigInteger('id_formato');
            $table->unsignedBigInteger('id_sede');
            $table->unsignedBigInteger('id_user');
            $table->timestamps();

            $table->foreign('id_calidad')->references('id')->on('calidades');
            $table->foreign('id_formato')->references('id')->on('formatos');
            $table->foreign('id_user')->references('id')->on('users');
            $table->foreign('id_tipo_naturaleza')->references('id')->on('tipo_naturalezas');
            $table->foreign('id_sede')->references('id')->on('sedes');
        });
    }

    public function down()
    {
        Schema::dropIfExists('muestras');
    }
};
