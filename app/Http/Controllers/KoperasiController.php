<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Koperasi;
use DB;
use DataTables;
use Auth;
use App\Models\TataKelola;
use App\Models\Kecamatan;
use App\Models\ProfilResiko;
use App\Models\Desa;
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
use App\Models\BentukKoperasi;
use App\Models\KelKoperasi;
use App\Models\SektorUsaha;
use App\Models\JenisKoperasi;

class KoperasiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $koperasi = Koperasi::all();

        $kecamatan = Kecamatan::all();

        $desa = Desa::all();

        $sektor = SektorUsaha::all();

        $kelompok = KelKoperasi::all();

        $bentuk = BentukKoperasi::all();

        $jenis = JenisKoperasi::all();

        return view('koperasi.list', compact('koperasi' , 'kecamatan' , 'desa' , 'kelompok' , 'bentuk' , 'sektor' , 'jenis'));
    }

    public function countKoperasi()
    {
        $koperasi = Koperasi::count();

        $tata_kelola = TataKelola::count();

        return response()->json([
            'koperasi' => $koperasi,
            'tata_kelola' => $tata_kelola,
        ]);
    }

    public function desaAll()
    {
        $desa = Desa::all();

        return response()->json($desa);
    }

    public function filter(Request $request)
    {
        // $isi = substr( json_encode($request->keys()) , 2, -2);
        $data = DB::table('koperasis');
            // ->where('kecamatan_id' , 'like' , $request->kecamatan); // Desired output
            // $data->where($isi , 'like' , $request->$isi);
        $results = $data->get();

        // return response()->json($isi);
        return response()->json($results);
    }

    public function selectKec(Request $request)
    {
        if($request->ajax())
        {
            $output="";

            $desa = Kecamatan::all();

                foreach ($desa as $key => $row)
                $output.='<option selected value="" hidden> Kecamatan : </option>'.
                        '<option value='.$row->id_kecamatan.'>'.$row->nama_kecamatan.'</option>';
            
            return Response($output);

        }
    }

    public function selectDesa(Request $request)
    {
        if($request->ajax())
        {
            $output="";

            $desa = Desa::where('kecamatan_id' , $request->desa)->get();

            if ($desa) {
                foreach ($desa as $key => $row)
                $output.='<option selected value="" hidden> Desa : </option>'.
                        '<option value='.$row->id_desa.'>'.$row->nama_desa.'</option>';
            }
            return Response($output);

        }
    }

    public function cariKec(Request $request)
    {
        if($request->ajax())
        {

        $output="";
        $data=DB::table('koperasis')
                    ->where('kecamatan_id','LIKE', $request->search)
                    ->get();

            if($data)
            {

            foreach ($data as $key => $row)
                $output.='<tr>'.
                            '<td>'.$row->nik.'</td>'.
                            '<td>'.$row->nama.'</td>'.
                            '<td>'.$row->data_tahun_buku.'</td>'.
                            '<td>'.$row->telp.'</td>'.
                            '<td>'.
                                '<a href="#productView" data-toggle="modal" data-id='.$row->id.' data-target="#productView" id="detail">
                                    <i class="ik ik-eye f-16 mr-15"></i>
                                </a>
                                <a href="#editKoperasi" data-toggle="modal" data-id='.$row->id.' data-target="#editKoperasi" id="edit">
                                    <i class="ik ik-edit f-16 mr-15 text-green"></i>
                                </a>
                                <a href="javascript:void(0)" id="delete" data-id='.$row->id.'><i class="ik ik-trash-2 f-16 text-red"></i></a>'.
                            '</td>'.
                          '</tr>';
            }
            return Response($output);
        }
    }    

    public function cariDesa(Request $request)
    {
        if($request->ajax())
        {

        $output="";
        $data=DB::table('koperasis')
                    ->where('desa_id','LIKE', $request->search)
                    ->get();

            if($data)
            {

            foreach ($data as $key => $row)
                $output.='<tr>'.
                            '<td>'.$row->nik.'</td>'.
                            '<td>'.$row->nama.'</td>'.
                            '<td>'.$row->data_tahun_buku.'</td>'.
                            '<td>'.$row->telp.'</td>'.
                            '<td>'.
                                '<a href="#productView" data-toggle="modal" data-id='.$row->id.' data-target="#productView" id="detail">
                                    <i class="ik ik-eye f-16 mr-15"></i>
                                </a>
                                <a href="#editKoperasi" data-toggle="modal" data-id='.$row->id.' data-target="#editKoperasi" id="edit">
                                    <i class="ik ik-edit f-16 mr-15 text-green"></i>
                                </a>
                                <a href="javascript:void(0)" id="delete" data-id='.$row->id.'><i class="ik ik-trash-2 f-16 text-red"></i></a>'.
                            '</td>'.
                          '</tr>';
            }
            return Response($output);
        }
    }

    public function cariJenis(Request $request)
    {
        if($request->ajax())
        {

        $output="";
        $data=DB::table('koperasis')
                    ->where('jenis_id','LIKE', $request->search)
                    ->get();

            if($data)
            {

            foreach ($data as $key => $row)
                $output.='<tr>'.
                            '<td>'.$row->nik.'</td>'.
                            '<td>'.$row->nama.'</td>'.
                            '<td>'.$row->data_tahun_buku.'</td>'.
                            '<td>'.$row->telp.'</td>'.
                            '<td>'.
                                '<a href="#productView" data-toggle="modal" data-id='.$row->id.' data-target="#productView" id="detail">
                                    <i class="ik ik-eye f-16 mr-15"></i>
                                </a>
                                <a href="#editKoperasi" data-toggle="modal" data-id='.$row->id.' data-target="#editKoperasi" id="edit">
                                    <i class="ik ik-edit f-16 mr-15 text-green"></i>
                                </a>
                                <a href="javascript:void(0)" id="delete" data-id='.$row->id.'><i class="ik ik-trash-2 f-16 text-red"></i></a>'.
                            '</td>'.
                          '</tr>';
            }
            return Response($output);
        }
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
                            '<td>'.$row->data_tahun_buku.'</td>'.
                            '<td>'.$row->telp.'</td>'.
                            '<td>'.
                                '<a href="#productView" data-toggle="modal" data-id='.$row->id.' data-target="#productView" id="detail">
                                    <i class="ik ik-eye f-16 mr-15"></i>
                                </a>
                                <a href="#editKoperasi" data-toggle="modal" data-id='.$row->id.' data-target="#editKoperasi" id="edit">
                                    <i class="ik ik-edit f-16 mr-15 text-green"></i>
                                </a>
                                <a href="javascript:void(0)" id="delete" data-id='.$row->id.'><i class="ik ik-trash-2 f-16 text-red"></i></a>'.
                            '</td>'.
                          '</tr>';
            }
            return Response($output);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('koperasi.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $koperasi = Koperasi::create($request->all());
        return redirect('koperasi')
            ->with('success','Product created successfully.');
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

    public function detail($id)
    {
        $koperasi = Koperasi::find($id);

        $tk = TataKelola::where('koperasi_id', '=', $id )->get();
        $pr = ProfilResiko::where('koperasi_id', '=', $id )->get();

        return response()->json([
            "koperasi" => $koperasi,
            "tata_kelola" => $tk,
            "profil_resiko" => $pr

        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $koperasi = Koperasi::find($id);
        return response()->json($koperasi);
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
        $request->validate([
            'nik' => 'required',
            'nama' => 'required',
            'jenis' => 'required',
            'no_badan_hukum' => 'required',
            'telp' => 'required',
            'data_tahun_buku' => 'required',
        ]);

        $koperasi = Koperasi::find($id);
            $koperasi->nik              = $request->nik;
            $koperasi->nama             = $request->nama;
            $koperasi->jenis            = $request->jenis;
            $koperasi->no_badan_hukum   = $request->no_badan_hukum;
            $koperasi->telp             = $request->telp;
            $koperasi->email            = $request->email;
            $koperasi->data_tahun_buku  = $request->data_tahun_buku;
            $koperasi->almt_terakhir    = $request->almt_terakhir;
            $koperasi->almt_akta        = $request->almt_akta;
            $koperasi->kecamatan_id     = $request->kecamatan_id;
            $koperasi->desa_id          = $request->desa_id;
            $koperasi->update();

        return response()->json("Data Berhasil Diupdate");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $koperasi = Koperasi::find($id);
        $koperasi->delete();
        return response()->json('Data Berhasil Dihapus');
    }
}
