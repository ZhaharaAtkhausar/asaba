<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAktivaTetapsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('aktiva_tetaps', function (Blueprint $table) {
            $table->bigIncrements('id_aktiva_tetap');
            $table->unsignedBigInteger('koperasi_id');
            $table->double('tanah')->default('0');
            $table->double('tanah2')->default('0');
            $table->double('bangunan')->default('0');
            $table->double('bangunan2')->default('0');
            $table->double('kendaraan')->default('0');
            $table->double('kendaraan2')->default('0');
            $table->double('inv_perkap')->default('0');
            $table->double('inv_perkap2')->default('0');
            $table->double('akm_peny')->default('0');
            $table->double('akm_peny2')->default('0');
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
        Schema::dropIfExists('aktiva_tetaps');
    }
}
