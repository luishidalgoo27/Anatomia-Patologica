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
        Schema::create('muestra', function (Blueprint $table) {
            $table->id();
            $table->date('Fecha');
            $table->string('codigo');
            $table->string('Organo')->nullable();
            $table->text('DescripcionCalidad');
            $table->unsignedBigInteger('Id_Calidad');
            $table->unsignedBigInteger('Id_Tipo_naturaleza');
            $table->unsignedBigInteger('Id_Formato');
            $table->unsignedBigInteger('Id_Sede');
            $table->unsignedBigInteger('Id_Usuario');
            $table->timestamps();

            $table->foreign('Id_Calidad')->references('id')->on('calidades');
            $table->foreign('Id_Formato')->references('id')->on('formatos');
            $table->foreign('Id_Usuario')->references('id')->on('usuarios');
            $table->foreign('Id_Tipo_naturaleza')->references('id')->on('tipo_naturaleza');
            $table->foreign('Id_Sede')->references('id')->on('sede');
        });
    }

    public function down()
    {
        Schema::dropIfExists('muestra');
    }
};
