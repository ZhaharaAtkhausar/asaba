<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePendapatanLainsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pendapatan_lains', function (Blueprint $table) {
            $table->bigIncrements('id_pendapatan_lain');
            $table->unsignedBigInteger('koperasi_id');
            $table->double('pendapatan_deviden')->default('0');
            $table->double('pendapatan_deviden2')->default('0');
            $table->double('pendapatan_sewa')->default('0');
            $table->double('pendapatan_sewa2')->default('0');
            $table->double('pendapatan_lain')->default('0');
            $table->double('pendapatan_lain2')->default('0');
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
        Schema::dropIfExists('pendapatan_lains');
    }
}
