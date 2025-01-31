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
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id();
            $table->string('email');
            $table->unsignedBigInteger('id_sede');
            $table->timestamps();

            $table->foreign('id_sede')->references('id')->on('sedes');
        });
    }

    public function down()
    {
        Schema::dropIfExists('usuarios');
    }
};
