<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEkuitasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ekuitas', function (Blueprint $table) {
            $table->bigIncrements('id_ekuitas');
            $table->unsignedBigInteger('koperasi_id');
            $table->double('simpanan_pokok')->default('0');
            $table->double('simpanan_pokok2')->default('0');
            $table->double('simpanan_wajib')->default('0');
            $table->double('simpanan_wajib2')->default('0');
            $table->double('modal_penyetaraan')->default('0');
            $table->double('modal_penyetaraan2')->default('0');
            $table->double('modal_penyertaan')->default('0');
            $table->double('modal_penyertaan2')->default('0');
            $table->double('modal_sumbangan')->default('0');
            $table->double('modal_sumbangan2')->default('0');
            $table->double('cadangan_umum')->default('0');
            $table->double('cadangan_umum2')->default('0');
            $table->double('cadangan_tujuan')->default('0');
            $table->double('cadangan_tujuan2')->default('0');
            $table->double('shu_sebelum')->default('0');
            $table->double('shu_sebelum2')->default('0');
            $table->double('shu_berjalan')->default('0');
            $table->double('shu_berjalan2')->default('0');
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
        Schema::dropIfExists('ekuitas');
    }
}
