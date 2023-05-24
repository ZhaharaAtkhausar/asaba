<?php

namespace App\Http\Controllers;

use App\Models\BahanBakuLancar;
use Illuminate\Http\Request;
use App\Http\Requests\StoreBahanBakuLancarRequest;
use App\Http\Requests\UpdateBahanBakuLancarRequest;
use DB;
use DataTables;
use Auth;

class BahanBakuLancarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $bahan_baku_lancar = BahanBakuLancar::all();
        $idx = 1;

        return view('bahan_baku_lancar.list', compact('bahan_baku_lancar', 'idx'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreBahanBakuLancarRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        BahanBakuLancar::create($request->all());

        return redirect('bahan-baku-lancar')
            ->with('success','Product created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\BahanBakuLancar  $bahanBakuLancar
     * @return \Illuminate\Http\Response
     */
    public function show(BahanBakuLancar $bahanBakuLancar)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\BahanBakuLancar  $bahanBakuLancar
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $bahan_baku_lancar = BahanBakuLancar::find($id);
        return response()->json($bahan_baku_lancar);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateBahanBakuLancarRequest  $request
     * @param  \App\Models\BahanBakuLancar  $bahanBakuLancar
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $bahan_baku_lancar = BahanBakuLancar::find($id);
    
        $bahan_baku_lancar->nama             = $request->nama;
        $bahan_baku_lancar->harga             = $request->harga;
        $bahan_baku_lancar->update();

        return response()->json("Data Berhasil Diupdate");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\BahanBakuLancar  $bahanBakuLancar
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $bahan_baku_lancar = BahanBakuLancar::find($id);
        $bahan_baku_lancar->delete();
        return response()->json('Data Berhasil Dihapus');
    }

    public function allProduk()
    {
        $bahan_baku_lancar = BahanBakuLancar::all();
        return response()->json($bahan_baku_lancar);
    }
}
