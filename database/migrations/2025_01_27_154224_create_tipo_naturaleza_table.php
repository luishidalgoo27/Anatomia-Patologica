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
        Schema::create('tipo_naturaleza', function (Blueprint $table) {
            $table->id();
            $table->string('codigo');
            $table->string('Nombre');
            $table->timestamps();

        });
    }

    public function down()
    {
        Schema::dropIfExists('tipo_naturaleza');
    }
};
