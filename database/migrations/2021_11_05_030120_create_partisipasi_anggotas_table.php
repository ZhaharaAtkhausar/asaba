<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePartisipasiAnggotasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('partisipasi_anggotas', function (Blueprint $table) {
            $table->bigIncrements('id_partisipasi_anggota');
            $table->unsignedBigInteger('koperasi_id');
            $table->double('jasa_pinjaman')->default('0');
            $table->double('jasa_pinjaman2')->default('0');
            $table->double('administrasi_anggota')->default('0');
            $table->double('administrasi_anggota2')->default('0');
            $table->double('provisi_anggota')->default('0');
            $table->double('provisi_anggota2')->default('0');
            $table->double('pelayanan_lain')->default('0');
            $table->double('pelayanan_lain2')->default('0');
            $table->double('penjualan_anggota')->default('0');
            $table->double('penjualan_anggota2')->default('0');
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
        Schema::dropIfExists('partisipasi_anggotas');
    }
}
