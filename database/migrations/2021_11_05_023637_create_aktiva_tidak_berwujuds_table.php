<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAktivaTidakBerwujudsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('aktiva_tidak_berwujuds', function (Blueprint $table) {
            $table->bigIncrements('id_aktiva_tdk_berwujud');
            $table->unsignedBigInteger('koperasi_id');
            $table->double('aktiva_tdk_berwujud')->default('0');
            $table->double('aktiva_tdk_berwujud2')->default('0');
            $table->timestamps();

            $table->foreign('koperasi_id')->references('id')->on('koperasis')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('aktiva_tidak_berwujuds');
    }
}
