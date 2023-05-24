<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAgunansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('agunans', function (Blueprint $table) {
            $table->bigIncrements('id_agunan');
            $table->unsignedBigInteger('koperasi_id');
            $table->double('agunan_pkl')->default('0');
            $table->double('agunan_pkl2')->default('0');
            $table->double('agunan_pdr')->default('0');
            $table->double('agunan_pdr2')->default('0');
            $table->double('agunan_macet')->default('0');
            $table->double('agunan_macet2')->default('0');
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
        Schema::dropIfExists('agunans');
    }
}
