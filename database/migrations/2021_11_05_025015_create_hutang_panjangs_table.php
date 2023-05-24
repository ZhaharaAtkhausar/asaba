<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHutangPanjangsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hutang_panjangs', function (Blueprint $table) {
            $table->bigIncrements('id_hutang_panjang');
            $table->unsignedBigInteger('koperasi_id');
            $table->double('hutang_bank_panjang')->default('0');
            $table->double('hutang_bank_panjang2')->default('0');
            $table->double('hutang_koplain')->default('0');
            $table->double('hutang_koplain2')->default('0');
            $table->double('pasiva')->default('0');
            $table->double('pasiva2')->default('0');
            $table->double('simpanan_berjangka')->default('0');
            $table->double('simpanan_berjangka2')->default('0');
            $table->double('titipan_dana_panjang')->default('0');
            $table->double('titipan_dana_panjang2')->default('0');
            $table->double('hutang_lpdb_panjang')->default('0');
            $table->double('hutang_lpdb_panjang2')->default('0');
            $table->double('hutang_sewa_panjang')->default('0');
            $table->double('hutang_sewa_panjang2')->default('0');
            $table->double('hutang_lain')->default('0');
            $table->double('hutang_lain2')->default('0');
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
        Schema::dropIfExists('hutang_panjangs');
    }
}
