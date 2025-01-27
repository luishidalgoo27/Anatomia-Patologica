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
            $table->text('descripcion');
            $table->unsignedBigInteger('muestra_id'); 
            $table->unsignedBigInteger('interpretacion_id'); 
            $table->timestamps();
        
            $table->foreign('muestra_id')->references('id')->on('muestra')->onDelete('cascade');
            $table->foreign('interpretacion_id')->references('id')->on('interpretacion')->onDelete('cascade');
        
            $table->primary(['muestra_id', 'interpretacion_id']);
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
