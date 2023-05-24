<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Kecamatan;
use App\Models\Desa;

class KecamatanController extends Controller
{
    public function getKec()
    {
        $kecamatan = Kecamatan::all();

        return response()->json($kecamatan);
    }

    public function getDesa()
    {
        $desa = Desa::join('kecamatans' , 'desas.kecamatan_id' , '=' , 'kecamatans.id_kecamatan')->get();
        $desa->makeHidden(['updated_at', 'created_at' , 'id_kecamatan']);

        return response()->json($desa);
    }
}
