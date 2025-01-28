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
        Schema::create('usuario', function (Blueprint $table) {
            $table->id();
            $table->string('email');
            $table->unsignedBigInteger('Id_Sede');
            $table->timestamps();

            $table->foreign('Id_Sede')->references('id')->on('sede');
        });
    }

    public function down()
    {
        Schema::dropIfExists('usuario');
    }
};
