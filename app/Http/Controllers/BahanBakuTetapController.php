<?php

namespace App\Http\Controllers;

use App\Models\BahanBakuTetap;
use Illuminate\Http\Request;
use App\Http\Requests\StoreBahanBakuTetapRequest;
use App\Http\Requests\UpdateBahanBakuTetapRequest;
use DB;
use DataTables;
use Auth;

class BahanBakuTetapController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $bahan_baku_tetap = BahanBakuTetap::all();
        $idx = 1;

        return view('bahan_baku_tetap.list', compact('bahan_baku_tetap' , 'idx'));
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
     * @param  \App\Http\Requests\StoreBahanBakuTetapRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        BahanBakuTetap::create($request->all());

        return redirect('bahan-baku-tetap')
            ->with('success','Product created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\BahanBakuTetap  $bahanBakuTetap
     * @return \Illuminate\Http\Response
     */
    public function show(BahanBakuTetap $bahanBakuTetap)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\BahanBakuTetap  $bahanBakuTetap
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $bahan_baku_tetap = BahanBakuTetap::find($id);
        return response()->json($bahan_baku_tetap);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateBahanBakuTetapRequest  $request
     * @param  \App\Models\BahanBakuTetap  $bahanBakuTetap
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $bahan_baku_tetap = BahanBakuTetap::find($id);
    
        $bahan_baku_tetap->nama             = $request->nama;
        $bahan_baku_tetap->harga             = $request->harga;
        $bahan_baku_tetap->update();

        return response()->json("Data Berhasil Diupdate");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\BahanBakuTetap  $bahanBakuTetap
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $bahan_baku_tetap = BahanBakuTetap::find($id);
        $bahan_baku_tetap->delete();
        return response()->json('Data Berhasil Dihapus');
    }

    public function allProduk()
    {
        $bahan_baku_lancar = BahanBakuTetap::all();
        return response()->json($bahan_baku_lancar);
    }
}
