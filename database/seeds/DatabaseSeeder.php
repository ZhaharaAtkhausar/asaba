<?php

use Database\Seeders\PermissionSeeder;
use Database\Seeders\RolePermissionSeeder;
use Database\Seeders\RoleSeeder;
use Database\Seeders\UserSeeder;
use Database\Seeders\KecamatanSeeder;
use Illuminate\Database\Seeder;
use App\Models\Koperasi;
use App\Models\Kecamatan;
use App\Models\Desa;
use App\Models\TataKelola;
use App\Models\ProfilResiko;
use App\Models\BentukKoperasi;
use App\Models\KelKoperasi;
use App\Models\SektorUsaha;
use App\Models\JenisKoperasi;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            RoleSeeder::class,
            PermissionSeeder::class,
            UserSeeder::class,
            RolePermissionSeeder::class,
        ]);
        
        DB::table('bahan_baku_lancars')->insert([
            [
                'id' => 1, 
                "nama"             => "Gula",
                "harga"            => 10000
            ],
            [
                'id' => 2, 
                "nama"             => "Tepung Tapioka",
                "harga"            => 25000
            ],
            [
                'id' => 3, 
                "nama"             => "Coklat Batangan",
                "harga"            => 35000
            ],
        ]);

        DB::table('bahan_baku_tetaps')->insert([
            [
                'id' => 1, 
                "nama"             => "Kemasan",
                "harga"            => 500
            ],
        ]);
    }
}
