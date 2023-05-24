<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBebanNonanggotasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('beban_nonanggotas', function (Blueprint $table) {
            $table->bigIncrements('id_beban_nonanggota');
            $table->unsignedBigInteger('koperasi_id');
            $table->double('jasa_simpanan')->default('0');
            $table->double('jasa_simpanan2')->default('0');
            $table->double('simpanan_nonberjangka')->default('0');
            $table->double('simpanan_nonberjangka2')->default('0');
            $table->double('jasa_hutang_bank')->default('0');
            $table->double('jasa_hutang_bank2')->default('0');
            $table->double('pinjaman_lpdb')->default('0');
            $table->double('pinjaman_lpdb2')->default('0');
            $table->double('modal_penyertaan')->default('0');
            $table->double('modal_penyertaan2')->default('0');
            $table->double('pihak_ketiga')->default('0');
            $table->double('pihak_ketiga2')->default('0');
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
        Schema::dropIfExists('beban_nonanggotas');
    }
}
