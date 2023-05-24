<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfilResikosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profil_resikos', function (Blueprint $table) {
            $table->bigIncrements('id_profil_resiko');
            $table->unsignedBigInteger('koperasi_id');
            $table->tinyInteger('ro_a1');
            $table->tinyInteger('ro_a2');
            $table->tinyInteger('ro_a3');
            $table->tinyInteger('ro_a4');
            $table->tinyInteger('ro_b1');
            $table->tinyInteger('ro_b2');
            $table->tinyInteger('ro_b3');
            $table->tinyInteger('ro_b4');
            $table->tinyInteger('rk_a1');
            $table->tinyInteger('rk_a2');
            $table->tinyInteger('rk_a3');
            $table->tinyInteger('rk_a4');
            $table->tinyInteger('rk_b1');
            $table->tinyInteger('rk_b2');
            $table->tinyInteger('rk_b3');
            $table->tinyInteger('rk_b4');
            $table->tinyInteger('rl_a1');
            $table->tinyInteger('rl_a2');
            $table->tinyInteger('rl_a3');
            $table->tinyInteger('rl_a4');
            $table->tinyInteger('rl_a5');
            $table->tinyInteger('kpmro_a1');
            $table->tinyInteger('kpmro_a2');
            $table->tinyInteger('kpmro_a3');
            $table->tinyInteger('kpmro_a4');
            $table->tinyInteger('kpmro_b1');
            $table->tinyInteger('kpmro_b2');
            $table->tinyInteger('kpmro_b3');
            $table->tinyInteger('kpmro_c1');
            $table->tinyInteger('kpmro_c2');
            $table->tinyInteger('kpmro_c3');
            $table->tinyInteger('kpmro_c4');
            $table->tinyInteger('kpmrk_a1');
            $table->tinyInteger('kpmrk_a2');
            $table->tinyInteger('kpmrk_a3');
            $table->tinyInteger('kpmrk_a4');
            $table->tinyInteger('kpmrk_b1');
            $table->tinyInteger('kpmrk_b2');
            $table->tinyInteger('kpmrk_b3');
            $table->tinyInteger('kpmrk_b4');
            $table->tinyInteger('kpmrk_c1');
            $table->tinyInteger('kpmrk_c2');
            $table->tinyInteger('kpmrk_c3');
            $table->tinyInteger('kpmrk_c4');
            $table->tinyInteger('kpmrl_a1');
            $table->tinyInteger('kpmrl_a2');
            $table->tinyInteger('kpmrl_a3');
            $table->tinyInteger('kpmrl_a4');
            $table->tinyInteger('kpmrl_b1');
            $table->tinyInteger('kpmrl_b2');
            $table->tinyInteger('kpmrl_b3');
            $table->tinyInteger('kpmrl_b4');
            $table->tinyInteger('kpmrl_b5');
            $table->tinyInteger('kpmrl_c1');
            $table->tinyInteger('kpmrl_c2');
            $table->tinyInteger('kpmrl_c3');
            $table->tinyInteger('kpmrl_c4');
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
        Schema::dropIfExists('profil_resikos');
    }
}
