<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTataKelolasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tata_kelolas', function (Blueprint $table) {
            $table->bigIncrements('id_tata_kelola');
            $table->unsignedBigInteger('koperasi_id');
            $table->tinyInteger('pk_1a');
            $table->tinyInteger('pk_1b');
            $table->tinyInteger('pk_1c');
            $table->tinyInteger('pk_1d');
            $table->tinyInteger('pk_2a');
            $table->tinyInteger('pk_2b');
            $table->tinyInteger('pk_2c');
            $table->tinyInteger('pk_2d');
            $table->tinyInteger('pk_2e');
            $table->tinyInteger('pk_3a');
            $table->tinyInteger('pk_3b');
            $table->tinyInteger('pk_3c');
            $table->tinyInteger('pk_4a');
            $table->tinyInteger('pk_4b');
            $table->tinyInteger('pk_4c');
            $table->tinyInteger('pk_4d');
            $table->tinyInteger('pk_5a');
            $table->tinyInteger('pk_5b');
            $table->tinyInteger('pk_5c');
            $table->tinyInteger('pk_5d');
            $table->tinyInteger('pk_6a');
            $table->tinyInteger('pk_6b');
            $table->tinyInteger('pk_6c');
            $table->tinyInteger('pk_6d');
            $table->tinyInteger('pk_7a');
            $table->tinyInteger('pk_7b');
            $table->tinyInteger('pk_7c');
            $table->tinyInteger('pk_7d');
            $table->tinyInteger('pk_21a');
            $table->tinyInteger('pk_21b');
            $table->tinyInteger('pk_21c');
            $table->tinyInteger('pk_22a');
            $table->tinyInteger('pk_22b');
            $table->tinyInteger('pk_22c');
            $table->tinyInteger('pk_23a');
            $table->tinyInteger('pk_23b');
            $table->tinyInteger('pk_23c');
            $table->tinyInteger('pk_23d');
            $table->tinyInteger('pk_23e');
            $table->tinyInteger('pk_23f');
            $table->tinyInteger('pk_23g');
            $table->tinyInteger('pk_23h');
            $table->tinyInteger('pk_23i');
            $table->tinyInteger('pk_23j');
            $table->tinyInteger('pk_23k');
            $table->tinyInteger('pk_23l');
            $table->tinyInteger('pk_23m');
            $table->tinyInteger('pk_23n');
            $table->tinyInteger('pk_23o');
            $table->tinyInteger('pk_23p');
            $table->tinyInteger('pk_23q');
            $table->tinyInteger('pk_24a');
            $table->tinyInteger('pk_24b');
            $table->tinyInteger('pk_24c');
            $table->tinyInteger('pk_24d');
            $table->tinyInteger('pk_25a');
            $table->tinyInteger('pk_25b');
            $table->tinyInteger('pk_25c');
            $table->tinyInteger('pk_31a');
            $table->tinyInteger('pk_31b');
            $table->tinyInteger('pk_31c');
            $table->tinyInteger('pk_32a');
            $table->tinyInteger('pk_32b');
            $table->tinyInteger('pk_32c');
            $table->tinyInteger('pk_32d');
            $table->tinyInteger('pk_33a');
            $table->tinyInteger('pk_33b');
            $table->tinyInteger('pk_33c');
            $table->tinyInteger('pk_33d');
            $table->tinyInteger('pk_34a');
            $table->tinyInteger('pk_34b');
            $table->tinyInteger('pk_34c');
            $table->tinyInteger('pk_34d');
            $table->tinyInteger('pk_35a');
            $table->tinyInteger('pk_35b');
            $table->tinyInteger('pk_35c');
            $table->tinyInteger('pk_35d');
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
        Schema::dropIfExists('tata_kelolas');
    }
}
