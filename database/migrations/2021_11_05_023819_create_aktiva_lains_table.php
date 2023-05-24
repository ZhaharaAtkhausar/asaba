<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAktivaLainsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('aktiva_lains', function (Blueprint $table) {
            $table->bigIncrements('id_aktiva_lain');
            $table->unsignedBigInteger('koperasi_id');
            $table->double('beban_ditangguhkan')->default('0');
            $table->double('beban_ditangguhkan2')->default('0');
            $table->double('amortisasi_beban')->default('0');
            $table->double('amortisasi_beban2')->default('0');
            $table->double('agunan_diambil')->default('0');
            $table->double('agunan_diambil2')->default('0');
            $table->double('beban_praoperasional')->default('0');
            $table->double('beban_praoperasional2')->default('0');
            $table->double('amortisasi_biaya')->default('0');
            $table->double('amortisasi_biaya2')->default('0');
            $table->double('lain')->default('0');
            $table->double('lain2')->default('0');
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
        Schema::dropIfExists('aktiva_lains');
    }
}
