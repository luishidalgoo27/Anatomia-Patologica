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
        Schema::create('calidades', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->unsignedBigInteger('id_tipo_estudio');
            $table->timestamps();

            $table->foreign('id_tipo_estudio')->references('id')->on('tipo_estudios');

        });
    }


    public function down()
    {
        Schema::dropIfExists('calidades');
    }

};
