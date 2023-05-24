<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKoperasisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('koperasis', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('nik')->unique();
            $table->string('nama')->nullable();
            $table->string('no_badan_hukum')->nullable();
            $table->date('tgl_badan_hukum')->nullable();
            $table->string('telp')->nullable();
            $table->string('data_tahun_buku')->nullable();
            $table->text('alamat')->nullable();
            $table->string('kabupaten')->nullable();
            $table->string('provinsi')->nullable();
            $table->string('ketua')->nullable();
            $table->string('telp_ketua')->nullable();
            $table->string('sekretaris')->nullable();
            $table->string('telp_sekretaris')->nullable();
            $table->string('bendahara')->nullable();
            $table->string('telp_bendahara')->nullable();
            $table->bigInteger('anggota_pria')->nullable();
            $table->bigInteger('anggota_wanita')->nullable();
            $table->bigInteger('anggota_total')->nullable();
            $table->date('rat')->nullable();
            $table->double('modal_sendiri')->nullable();
            $table->double('modal_luar')->nullable();
            $table->double('asset')->nullable();
            $table->double('volume_usaha')->nullable();
            $table->double('modal_total')->nullable();
            $table->double('shu')->nullable();
            $table->string('keaktifan')->nullable();
            $table->unsignedBigInteger('desa_id')->nullable();
            $table->unsignedBigInteger('kecamatan_id')->nullable();
            $table->unsignedBigInteger('jenis_id')->nullable();
            $table->unsignedBigInteger('bentuk_id')->nullable();
            $table->unsignedBigInteger('kel_id')->nullable();
            $table->unsignedBigInteger('sektor_id')->nullable();
            $table->timestamps();

            $table->foreign('desa_id')->references('id_desa')->on('desas')->onDelete('cascade');
            $table->foreign('kecamatan_id')->references('id_kecamatan')->on('kecamatans')->onDelete('cascade');
            $table->foreign('jenis_id')->references('id_jenis_koperasi')->on('jenis_koperasis')->onDelete('cascade');
            $table->foreign('bentuk_id')->references('id_bentuk_koperasi')->on('bentuk_koperasis')->onDelete('cascade');
            $table->foreign('kel_id')->references('id_kel_koperasi')->on('kel_koperasis')->onDelete('cascade');
            $table->foreign('sektor_id')->references('id_sektor_usaha')->on('sektor_usahas')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('koperasis');
    }
}
