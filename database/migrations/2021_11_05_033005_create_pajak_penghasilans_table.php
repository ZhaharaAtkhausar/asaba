<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePajakPenghasilansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pajak_penghasilans', function (Blueprint $table) {
            $table->bigIncrements('id_pajak_penghasilan');
            $table->unsignedBigInteger('koperasi_id');
            $table->double('pajak_penghasilan')->default('0');
            $table->double('pajak_penghasilan2')->default('0');
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
        Schema::dropIfExists('pajak_penghasilans');
    }
}
