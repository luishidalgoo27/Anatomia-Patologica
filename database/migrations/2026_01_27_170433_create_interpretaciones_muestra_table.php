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
        Schema::create('interpretacion_muestra', function (Blueprint $table) {
            $table->id();
            $table->text('descripcion');
            $table->unsignedBigInteger('id_muestra'); 
            $table->unsignedBigInteger('id_interpretacion'); 
            $table->timestamps();
        
            $table->foreign('id_muestra')->references('id')->on('muestras');
            $table->foreign('id_interpretacion')->references('id')->on('interpretaciones');
        
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
