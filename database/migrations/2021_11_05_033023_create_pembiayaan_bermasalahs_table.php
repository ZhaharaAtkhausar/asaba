<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePembiayaanBermasalahsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pembiayaan_bermasalahs', function (Blueprint $table) {
            $table->bigIncrements('id_pembiayaan_bermasalah');
            $table->unsignedBigInteger('koperasi_id');
            $table->double('pkl')->default('0');
            $table->double('pkl2')->default('0');
            $table->double('pdr')->default('0');
            $table->double('pdr2')->default('0');
            $table->double('macet')->default('0');
            $table->double('macet2')->default('0');
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
        Schema::dropIfExists('pembiayaan_bermasalahs');
    }
}
