<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Koperasi;
use App\Models\TataKelola;
use App\Models\BiayaLain;
use App\Models\ProfilResiko;
use App\Models\AktivaLancar;
use App\Models\Investasi;
use App\Models\AktivaTetap;
use App\Models\AktivaTidakBerwujud;
use App\Models\AktivaLain;
use App\Models\HutangPendek;
use App\Models\HutangPanjang;
use App\Models\Ekuitas;
use App\Models\PartisipasiAnggota;
use App\Models\PendapatanNonanggota;
use App\Models\BebanAnggota;
use App\Models\BebanNonanggota;
use App\Models\BebanUsaha;
use App\Models\BebanPerkoperasian;
use App\Models\PendapatanLain;
use App\Models\PajakPenghasilan;
use App\Models\PembiayaanBermasalah;
use App\Models\Agunan;
use DB;

class InputController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $koperasi = Koperasi::all();
        return view('input.list', compact('koperasi'));
    }

    public function search(Request $request){

        if($request->ajax())
        {

        $output="";
        $data=DB::table('koperasis')
                    ->where('nama','LIKE','%'.$request->search."%")
                    ->orWhere('nik','LIKE','%'.$request->search."%")
                    ->get();

            if($data)
            {

            foreach ($data as $key => $row)
                $output.='<tr>'.
                                '<td>'.$row->nik.'</td>'.
                                '<td>'.$row->nama.'</td>'.
                                '<td>'.$row->jenis.'</td>'.
                                '<td>'.$row->data_tahun_buku.'</td>'.
                                '<td>'.$row->telp.'</td>'.
                                '<td>'.
                                    '<a href="#productView" data-toggle="modal" data-target="#productView" class="btn btn-primary" id="btnPilih" data-id='.$row->id.'>Pilih Koperasi</a>'.
                                '</td>'.
                          '</tr>';
            }
            return Response($output);
        }
    }

    public function pilih($id)
    {
        $koperasi = Koperasi::find($id);
        return response()->json($koperasi);
    }

    public function stepsatu($id)
    {
        $koperasi = Koperasi::find($id);
        return view('input.stepsatu', compact('koperasi'));
    }

    public function inputdua(Request $request)
    {
        $pr = ProfilResiko::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));
    }

    public function inputsatu(Request $request)
    {
        $tk = TataKelola::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));
    }

    public function inputtiga(Request $request)
    {
        $al = AktivaLancar::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));
    }

    public function inputempat(Request $request)
    {
        $inv = Investasi::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));
    }

    public function inputlima(Request $request)
    {
        $at = AktivaTetap::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));
    }

    public function inputenam(Request $request)
    {
        $atb = AktivaTidakBerwujud::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));
    }

    public function inputtujuh(Request $request)
    {
        $al = AktivaLain::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));
    }

    public function inputdelapan(Request $request)
    {
        $hp = HutangPendek::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));
    }

    public function inputsembilan(Request $request)
    {
        $tk = HutangPanjang::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));
    }

    public function inputsepuluh(Request $request)
    {
        $tk = Ekuitas::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));
    }

    public function inputsebelas(Request $request)
    {
        $tk = PartisipasiAnggota::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));
    }

    public function inputduabelas(Request $request)
    {
        $tk = PendapatanNonanggota::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));
    }

    public function inputtigabelas(Request $request)
    {
        $tk = BebanAnggota::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));
    }

    public function inputempatbelas(Request $request)
    {
        $tk = BebanNonanggota::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));
    }

    public function inputlimabelas(Request $request)
    {
        $tk = BebanUsaha::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));
    }

    public function inputenambelas(Request $request)
    {
        $tk = BebanPerkoperasian::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));
    }

    public function inputtujuhbelas(Request $request)
    {
        $tk = PendapatanLain::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));
    }

    public function inputdelapanbelas(Request $request)
    {
        $tk = BiayaLain::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));
    }

    public function inputsembilanbelas(Request $request)
    {
        $tk = PajakPenghasilan::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));
    }

    public function inputduapuluh(Request $request)
    {
        $tk = PembiayaanBermasalah::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));
    }

    public function inputduasatu(Request $request)
    {
        $tk = Agunan::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
