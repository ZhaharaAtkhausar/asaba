<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHutangPendeksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hutang_pendeks', function (Blueprint $table) {
            $table->bigIncrements('id_hutang_pendek');
            $table->unsignedBigInteger('koperasi_id');
            $table->double('tabungan_anggota')->default('0');
            $table->double('tabungan_anggota2')->default('0');
            $table->double('tabungan_nonanggota')->default('0');
            $table->double('tabungan_nonanggota2')->default('0');
            $table->double('simpanan_bjkanggota')->default('0');
            $table->double('simpanan_bjkanggota2')->default('0');
            $table->double('simpanan_bjkcalon')->default('0');
            $table->double('simpanan_bjkcalon2')->default('0');
            $table->double('hutang_bank')->default('0');
            $table->double('hutang_bank2')->default('0');
            $table->double('hutang_lpdb')->default('0');
            $table->double('hutang_lpdb2')->default('0');
            $table->double('hutang_pajak')->default('0');
            $table->double('hutang_pajak2')->default('0');
            $table->double('beban_hrsdibayar')->default('0');
            $table->double('beban_hrsdibayar2')->default('0');
            $table->double('pendapatan_dimuka')->default('0');
            $table->double('pendapatan_dimuka2')->default('0');
            $table->double('hutang_biaya')->default('0');
            $table->double('hutang_biaya2')->default('0');
            $table->double('dana_bagian')->default('0');
            $table->double('dana_bagian2')->default('0');
            $table->double('titipan_dana')->default('0');
            $table->double('titipan_dana2')->default('0');
            $table->double('titipan_jaminan')->default('0');
            $table->double('titipan_jaminan2')->default('0');
            $table->double('titipan_zakat')->default('0');
            $table->double('titipan_zakat2')->default('0');
            $table->double('hutang_sewa')->default('0');
            $table->double('hutang_sewa2')->default('0');
            $table->double('kewajiban_lain')->default('0');
            $table->double('kewajiban_lain2')->default('0');
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
        Schema::dropIfExists('hutang_pendeks');
    }
}
