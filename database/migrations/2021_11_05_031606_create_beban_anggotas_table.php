<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBebanAnggotasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('beban_anggotas', function (Blueprint $table) {
            $table->bigIncrements('id_beban_anggota');
            $table->unsignedBigInteger('koperasi_id');
            $table->double('simpanan_anggota')->default('0');
            $table->double('simpanan_anggota2')->default('0');
            $table->double('simpanan_berjangka_anggota')->default('0');
            $table->double('simpanan_berjangka_anggota2')->default('0');
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
        Schema::dropIfExists('beban_anggotas');
    }
}
