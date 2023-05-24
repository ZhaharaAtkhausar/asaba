<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePendapatanNonanggotasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pendapatan_nonanggotas', function (Blueprint $table) {
            $table->bigIncrements('id_pendapatan_nonanggota');
            $table->unsignedBigInteger('koperasi_id');
            $table->double('jasa_pinjaman_non')->default('0');
            $table->double('jasa_pinjaman_non2')->default('0');
            $table->double('administrasi')->default('0');
            $table->double('administrasi2')->default('0');
            $table->double('provisi')->default('0');
            $table->double('provisi2')->default('0');
            $table->double('jasa_pelayanan')->default('0');
            $table->double('jasa_pelayanan2')->default('0');
            $table->double('penjualan')->default('0');
            $table->double('penjualan2')->default('0');
            $table->double('beban_penjualan')->default('0');
            $table->double('beban_penjualan2')->default('0');
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
        Schema::dropIfExists('pendapatan_nonanggotas');
    }
}
