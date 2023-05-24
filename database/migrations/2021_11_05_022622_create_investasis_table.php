<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvestasisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('investasis', function (Blueprint $table) {
            $table->bigIncrements('id_invjp');
            $table->unsignedBigInteger('koperasi_id');
            $table->double('tabungan_berjangka')->default('0');
            $table->double('tabungan_berjangka2')->default('0');
            $table->double('surat_berharga_panjang')->default('0');
            $table->double('surat_berharga_panjang2')->default('0');
            $table->double('simpanan_lain')->default('0');
            $table->double('simpanan_lain2')->default('0');
            $table->double('penyertaan_koplain')->default('0');
            $table->double('penyertaan_koplain2')->default('0');
            $table->double('penyertaan_lemkeulain')->default('0');
            $table->double('penyertaan_lemkeulain2')->default('0');
            $table->double('inv_jplain')->default('0');
            $table->double('inv_jplain2')->default('0');
            $table->double('properti_inv')->default('0');
            $table->double('properti_inv2')->default('0');
            $table->double('akm_peny_prop')->default('0');
            $table->double('akm_peny_prop2')->default('0');
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
        Schema::dropIfExists('investasis');
    }
}
