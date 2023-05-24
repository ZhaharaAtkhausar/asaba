<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAktivaLancarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('aktiva_lancars', function (Blueprint $table) {
            $table->bigIncrements('id_aktiva_lancar');
            $table->unsignedBigInteger('koperasi_id');
            $table->double('kas')->default('0');
            $table->double('kas2')->default('0');
            $table->double('giro')->default('0');
            $table->double('giro2')->default('0');
            $table->double('tabungan')->default('0');
            $table->double('tabungan2')->default('0');
            $table->double('deposito')->default('0');
            $table->double('deposito2')->default('0');
            $table->double('simpanan_sukarela')->default('0');
            $table->double('simpanan_sukarela2')->default('0');
            $table->double('simpanan_berjangka_koplain')->default('0');
            $table->double('simpanan_berjangka_koplain2')->default('0');
            $table->double('surat_berharga')->default('0');
            $table->double('surat_berharga2')->default('0');
            $table->double('piutang_dagang')->default('0');
            $table->double('piutang_dagang2')->default('0');
            $table->double('piutang_anggota')->default('0');
            $table->double('piutang_anggota2')->default('0');
            $table->double('piutang_calon')->default('0');
            $table->double('piutang_calon2')->default('0');
            $table->double('piutang_koplain')->default('0');
            $table->double('piutang_koplain2')->default('0');
            $table->double('piutang_bunga')->default('0');
            $table->double('piutang_bunga2')->default('0');
            $table->double('piutang_lain')->default('0');
            $table->double('piutang_lain2')->default('0');
            $table->double('penyisihan_pinjaman')->default('0');
            $table->double('penyisihan_pinjaman2')->default('0');
            $table->double('premi_asuransi')->default('0');
            $table->double('premi_asuransi2')->default('0');
            $table->double('perkap_kantor')->default('0');
            $table->double('perkap_kantor2')->default('0');
            $table->double('beban_dimuka')->default('0');
            $table->double('beban_dimuka2')->default('0');
            $table->double('pendapatan_aknditerima')->default('0');
            $table->double('pendapatan_aknditerima2')->default('0');
            $table->double('barang_dagang')->default('0');
            $table->double('barang_dagang2')->default('0');
            $table->double('lainnya')->default('0');
            $table->double('lainnya2')->default('0');
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
        Schema::dropIfExists('aktiva_lancars');
    }
}
