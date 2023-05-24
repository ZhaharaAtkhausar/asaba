<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBebanUsahasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('beban_usahas', function (Blueprint $table) {
            $table->bigIncrements('id_beban_usaha');
            $table->unsignedBigInteger('koperasi_id');
            $table->double('biaya_penyisihan')->default('0');
            $table->double('biaya_penyisihan2')->default('0');
            $table->double('biaya_bunga')->default('0');
            $table->double('biaya_bunga2')->default('0');
            $table->double('honor_karyawan')->default('0');
            $table->double('honor_karyawan2')->default('0');
            $table->double('biaya_perkap')->default('0');
            $table->double('biaya_perkap2')->default('0');
            $table->double('biaya_asuransi')->default('0');
            $table->double('biaya_asuransi2')->default('0');
            $table->double('biaya_listrik')->default('0');
            $table->double('biaya_listrik2')->default('0');
            $table->double('biaya_penyusutan')->default('0');
            $table->double('biaya_penyusutan2')->default('0');
            $table->double('biaya_lain')->default('0');
            $table->double('biaya_lain2')->default('0');
            $table->double('biaya_pemeliharaan')->default('0');
            $table->double('biaya_pemeliharaan2')->default('0');
            $table->double('biaya_promosi')->default('0');
            $table->double('biaya_promosi2')->default('0');
            $table->double('biaya_akomodasi')->default('0');
            $table->double('biaya_akomodasi2')->default('0');
            $table->double('biaya_transportasi')->default('0');
            $table->double('biaya_transportasi2')->default('0');
            $table->double('biaya_administrasi')->default('0');
            $table->double('biaya_administrasi2')->default('0');
            $table->double('biaya_pajak')->default('0');
            $table->double('biaya_pajak2')->default('0');
            $table->double('biaya_sewa')->default('0');
            $table->double('biaya_sewa2')->default('0');
            $table->double('biaya_operasional')->default('0');
            $table->double('biaya_operasional2')->default('0');
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
        Schema::dropIfExists('beban_usahas');
    }
}
