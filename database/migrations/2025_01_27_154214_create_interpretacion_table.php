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
        Schema::create('interpretacion', function (Blueprint $table) {
            $table->id();
            $table->text('texto');
            $table->unsignedBigInteger('Id_tipo_estudio');
            $table->timestamps();

            $table->foreign('Id_tipo_estudio')->references('id')->on('tipo_estudio');
        });
    }

    public function down()
    {
        Schema::dropIfExists('interpretacion');
    }
};
