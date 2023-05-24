<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBebanPerkoperasiansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('beban_perkoperasians', function (Blueprint $table) {
            $table->bigIncrements('id_beban_perkoperasian');
            $table->unsignedBigInteger('koperasi_id');
            $table->double('beban_pengawas')->default('0');
            $table->double('beban_pengawas2')->default('0');
            $table->double('beban_pembinaan')->default('0');
            $table->double('beban_pembinaan2')->default('0');
            $table->double('beban_rapat')->default('0');
            $table->double('beban_rapat2')->default('0');
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
        Schema::dropIfExists('beban_perkoperasians');
    }
}
