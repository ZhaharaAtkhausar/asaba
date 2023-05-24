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

class EditController extends Controller
{
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

    public function satu($id)
    {
        $tk = DB::table('koperasis')
        ->where('koperasis.id', '=', $id)
        ->join('tata_kelolas as tk' , 'koperasis.id', '=', 'tk.koperasi_id')
        ->select(
            // 'koperasis.*',
            'tk.*',
        )
        ->get();

        return response()->json($tk);
    }

    public function dua($id)
    {
        $pr = DB::table('koperasis')
        ->where('koperasis.id', '=', $id)
        ->join('profil_resikos as pr' , 'koperasis.id', '=', 'pr.koperasi_id')
        ->select(
            // 'koperasis.*',
            'pr.*',
        )
        ->get();

        return response()->json($pr);
    }

    public function tiga($id)
    {
        $tk = DB::table('koperasis')
        ->where('koperasis.id', '=', $id)
        ->join('aktiva_lancars as al' , 'koperasis.id', '=', 'al.koperasi_id')
        ->select(
            // 'koperasis.*',
            'al.*',
        )
        ->get()
        ->map(function ($tk) {
            // unset($tk->id_aktiva_lancar);
            unset($tk->koperasi_id);
            unset($tk->updated_at);
            unset($tk->created_at);
            return $tk;
        });

        return response()->json($tk);
    }

    public function empat($id)
    {
        $tk = DB::table('koperasis')
        ->where('koperasis.id', '=', $id)
        ->join('investasis as inv' , 'koperasis.id', '=', 'inv.koperasi_id')
        ->select(
            // 'koperasis.*',
            'inv.*',
        )
        ->get()
        ->map(function ($tk) {
            unset($tk->id_invjp);
            unset($tk->koperasi_id);
            unset($tk->updated_at);
            unset($tk->created_at);
            return $tk;
        });

        return response()->json($tk);
    }

    public function lima($id)
    {
        $tk = DB::table('koperasis')
        ->where('koperasis.id', '=', $id)
        ->join('aktiva_tetaps as at' , 'koperasis.id', '=', 'at.koperasi_id')
        ->select(
            // 'koperasis.*',
            'at.*',
        )
        ->get()
        ->map(function ($tk) {
            unset($tk->id_aktiva_tetap);
            unset($tk->koperasi_id);
            unset($tk->updated_at);
            unset($tk->created_at);
            return $tk;
        });

        return response()->json($tk);
    }

    public function enam($id)
    {
        $tk = DB::table('koperasis')
        ->where('koperasis.id', '=', $id)
        ->join('aktiva_tidak_berwujuds as ab' , 'koperasis.id', '=', 'ab.koperasi_id')
        ->select(
            // 'koperasis.*',
            'ab.*',
        )
        ->get()
        ->map(function ($tk) {
            unset($tk->id_aktiva_tdk_berwujud);
            unset($tk->koperasi_id);
            unset($tk->updated_at);
            unset($tk->created_at);
            return $tk;
        });

        return response()->json($tk);
    }

    public function tujuh($id)
    {
        $tk = DB::table('koperasis')
        ->where('koperasis.id', '=', $id)
        ->join('aktiva_lains as ali' , 'koperasis.id', '=', 'ali.koperasi_id')
        ->select(
            // 'koperasis.*',
            'ali.*',
        )
        ->get()
        ->map(function ($tk) {
            unset($tk->id_aktiva_lain);
            unset($tk->koperasi_id);
            unset($tk->updated_at);
            unset($tk->created_at);
            return $tk;
        });

        return response()->json($tk);
    }

    public function delapan($id)
    {
        $tk = DB::table('koperasis')
        ->where('koperasis.id', '=', $id)
        ->join('hutang_pendeks as hp' , 'koperasis.id', '=', 'hp.koperasi_id')
        ->select(
            // 'koperasis.*',
            'hp.*',
        )
        ->get()
        ->map(function ($tk) {
            unset($tk->id_hutang_pendek);
            unset($tk->koperasi_id);
            unset($tk->updated_at);
            unset($tk->created_at);
            return $tk;
        });

        return response()->json($tk);
    }

    public function sembilan($id)
    {
        $tk = DB::table('koperasis')
        ->where('koperasis.id', '=', $id)
        ->join('hutang_panjangs as hp' , 'koperasis.id', '=', 'hp.koperasi_id')
        ->select(
            // 'koperasis.*',
            'hp.*',
        )
        ->get()
        ->map(function ($tk) {
            unset($tk->id_hutang_panjang);
            unset($tk->koperasi_id);
            unset($tk->updated_at);
            unset($tk->created_at);
            return $tk;
        });

        return response()->json($tk);
    }

    public function sepuluh($id)
    {
        $tk = DB::table('koperasis')
        ->where('koperasis.id', '=', $id)
        ->join('ekuitas as ali' , 'koperasis.id', '=', 'ali.koperasi_id')
        ->select(
            // 'koperasis.*',
            'ali.*',
        )
        ->get()
        ->map(function ($tk) {
            unset($tk->id_ekuitas);
            unset($tk->koperasi_id);
            unset($tk->updated_at);
            unset($tk->created_at);
            return $tk;
        });

        return response()->json($tk);
    }

    public function sebelas($id)
    {
        $tk = DB::table('koperasis')
        ->where('koperasis.id', '=', $id)
        ->join('partisipasi_anggotas as ali' , 'koperasis.id', '=', 'ali.koperasi_id')
        ->select(
            // 'koperasis.*',
            'ali.*',
        )
        ->get()
        ->map(function ($tk) {
            unset($tk->id_partisipasi_anggota);
            unset($tk->koperasi_id);
            unset($tk->updated_at);
            unset($tk->created_at);
            return $tk;
        });

        return response()->json($tk);
    }

    public function duabelas($id)
    {
        $tk = DB::table('koperasis')
        ->where('koperasis.id', '=', $id)
        ->join('pendapatan_nonanggotas as ali' , 'koperasis.id', '=', 'ali.koperasi_id')
        ->select(
            // 'koperasis.*',
            'ali.*',
        )
        ->get()
        ->map(function ($tk) {
            unset($tk->id_pendapatan_nonanggota);
            unset($tk->koperasi_id);
            unset($tk->updated_at);
            unset($tk->created_at);
            return $tk;
        });

        return response()->json($tk);
    }

    public function tigabelas($id)
    {
        $tk = DB::table('koperasis')
        ->where('koperasis.id', '=', $id)
        ->join('beban_anggotas as ali' , 'koperasis.id', '=', 'ali.koperasi_id')
        ->select(
            // 'koperasis.*',
            'ali.*',
        )
        ->get()
        ->map(function ($tk) {
            unset($tk->id_beban_anggota);
            unset($tk->koperasi_id);
            unset($tk->updated_at);
            unset($tk->created_at);
            return $tk;
        });

        return response()->json($tk);
    }

    public function empatbelas($id)
    {
        $tk = DB::table('koperasis')
        ->where('koperasis.id', '=', $id)
        ->join('beban_nonanggotas as ali' , 'koperasis.id', '=', 'ali.koperasi_id')
        ->select(
            // 'koperasis.*',
            'ali.*',
        )
        ->get()
        ->map(function ($tk) {
            unset($tk->id_beban_nonanggota);
            unset($tk->koperasi_id);
            unset($tk->updated_at);
            unset($tk->created_at);
            return $tk;
        });

        return response()->json($tk);
    }

    public function limabelas($id)
    {
        $tk = DB::table('koperasis')
        ->where('koperasis.id', '=', $id)
        ->join('beban_usahas as ali' , 'koperasis.id', '=', 'ali.koperasi_id')
        ->select(
            // 'koperasis.*',
            'ali.*',
        )
        ->get()
        ->map(function ($tk) {
            unset($tk->id_beban_usaha);
            unset($tk->koperasi_id);
            unset($tk->updated_at);
            unset($tk->created_at);
            return $tk;
        });

        return response()->json($tk);
    }

    public function enambelas($id)
    {
        $tk = DB::table('koperasis')
        ->where('koperasis.id', '=', $id)
        ->join('beban_perkoperasians as ali' , 'koperasis.id', '=', 'ali.koperasi_id')
        ->select(
            // 'koperasis.*',
            'ali.*',
        )
        ->get()
        ->map(function ($tk) {
            unset($tk->id_beban_perkoperasian);
            unset($tk->koperasi_id);
            unset($tk->updated_at);
            unset($tk->created_at);
            return $tk;
        });

        return response()->json($tk);
    }

    public function tujuhbelas($id)
    {
        $tk = DB::table('koperasis')
        ->where('koperasis.id', '=', $id)
        ->join('pendapatan_lains as ali' , 'koperasis.id', '=', 'ali.koperasi_id')
        ->select(
            // 'koperasis.*',
            'ali.*',
        )
        ->get()
        ->map(function ($tk) {
            unset($tk->id_pendapatan_lain);
            unset($tk->koperasi_id);
            unset($tk->updated_at);
            unset($tk->created_at);
            return $tk;
        });

        return response()->json($tk);
    }

    public function delapanbelas($id)
    {
        $tk = DB::table('koperasis')
        ->where('koperasis.id', '=', $id)
        ->join('biaya_lains as ali' , 'koperasis.id', '=', 'ali.koperasi_id')
        ->select(
            // 'koperasis.*',
            'ali.*',
        )
        ->get()
        ->map(function ($tk) {
            unset($tk->id_biaya_lain);
            unset($tk->koperasi_id);
            unset($tk->updated_at);
            unset($tk->created_at);
            return $tk;
        });

        return response()->json($tk);
    }

    public function sembilanbelas($id)
    {
        $tk = DB::table('koperasis')
        ->where('koperasis.id', '=', $id)
        ->join('pajak_penghasilans as ali' , 'koperasis.id', '=', 'ali.koperasi_id')
        ->select(
            // 'koperasis.*',
            'ali.*',
        )
        ->get()
        ->map(function ($tk) {
            unset($tk->id_pajak_penghasilan);
            unset($tk->koperasi_id);
            unset($tk->updated_at);
            unset($tk->created_at);
            return $tk;
        });

        return response()->json($tk);
    }

    public function duapuluh($id)
    {
        $tk = DB::table('koperasis')
        ->where('koperasis.id', '=', $id)
        ->join('pembiayaan_bermasalahs as ali' , 'koperasis.id', '=', 'ali.koperasi_id')
        ->select(
            // 'koperasis.*',
            'ali.*',
        )
        ->get()
        ->map(function ($tk) {
            unset($tk->id_pembiayaan_bermasalah);
            unset($tk->koperasi_id);
            unset($tk->updated_at);
            unset($tk->created_at);
            return $tk;
        });

        return response()->json($tk);
    }

    public function duasatu($id)
    {
        $tk = DB::table('koperasis')
        ->where('koperasis.id', '=', $id)
        ->join('agunans as ali' , 'koperasis.id', '=', 'ali.koperasi_id')
        ->select(
            // 'koperasis.*',
            'ali.*',
        )
        ->get()
        ->map(function ($tk) {
            unset($tk->id_agunan);
            unset($tk->koperasi_id);
            unset($tk->updated_at);
            unset($tk->created_at);
            return $tk;
        });

        return response()->json($tk);
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
        // $al = AktivaLancar::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));
        $al = AktivaLancar::where('koperasi_id', '=' , $request->koperasi_id)->first();

        // $al->id_aktiva_lancar = $request->id_aktiva_lancar;
        $al->barang_dagang = $request->barang_dagang;
        $al->barang_dagang2 = $request->barang_dagang2;
        $al->beban_dimuka = $request->beban_dimuka;
        $al->beban_dimuka2 = $request->beban_dimuka2;
        $al->deposito = $request->deposito;
        $al->deposito2 = $request->deposito2;
        $al->giro = $request->giro;
        $al->giro2 = $request->giro2;
        $al->kas = $request->kas;
        $al->kas2 = $request->kas2;
        // $al->koperasi_id = $request->koperasi_id;
        $al->lainnya = $request->lainnya;
        $al->lainnya2 = $request->lainnya2;
        $al->pendapatan_aknditerima = $request->pendapatan_aknditerima;
        $al->pendapatan_aknditerima2 = $request->pendapatan_aknditerima2;
        $al->penyisihan_pinjaman = $request->penyisihan_pinjaman;
        $al->penyisihan_pinjaman2 = $request->penyisihan_pinjaman2;
        $al->perkap_kantor = $request->perkap_kantor;
        $al->perkap_kantor2 = $request->perkap_kantor2;
        $al->piutang_anggota = $request->piutang_anggota;
        $al->piutang_anggota2 = $request->piutang_anggota2;
        $al->piutang_bunga = $request->piutang_bunga;
        $al->piutang_bunga2 = $request->piutang_bunga2;
        $al->piutang_calon = $request->piutang_calon;
        $al->piutang_calon2 = $request->piutang_calon2;
        $al->piutang_dagang = $request->piutang_dagang;
        $al->piutang_dagang2 = $request->piutang_dagang2;
        $al->piutang_koplain = $request->piutang_koplain;
        $al->piutang_koplain2 = $request->piutang_koplain2;
        $al->piutang_lain = $request->piutang_lain;
        $al->piutang_lain2 = $request->piutang_lain2;
        $al->premi_asuransi = $request->premi_asuransi;
        $al->premi_asuransi2 = $request->premi_asuransi2;
        $al->simpanan_berjangka_koplain = $request->simpanan_berjangka_koplain;
        $al->simpanan_berjangka_koplain2 = $request->simpanan_berjangka_koplain2;
        $al->simpanan_sukarela = $request->simpanan_sukarela;
        $al->simpanan_sukarela2 = $request->simpanan_sukarela2;
        $al->surat_berharga = $request->surat_berharga;
        $al->surat_berharga2 = $request->surat_berharga2;
        $al->tabungan = $request->tabungan;
        $al->tabungan2 = $request->tabungan2;
        $al->save();

        return response()->json(['tabel' => $al, 'request' => $request->id_aktiva_lancar]);
    }

    public function inputempat(Request $request)
    {
        // $inv = Investasi::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));
        $inv = Investasi::where('koperasi_id' , '=' , $request->koperasi_id)->first();

        // $inv->koperasi_id = $request->koperasi_id;
        $inv->tabungan_berjangka = $request->tabungan_berjangka;
        $inv->surat_berharga_panjang = $request->surat_berharga_panjang;
        $inv->simpanan_lain = $request->simpanan_lain;
        $inv->penyertaan_koplain = $request->penyertaan_koplain;
        $inv->penyertaan_lemkeulain = $request->penyertaan_lemkeulain;
        $inv->inv_jplain = $request->inv_jplain;
        $inv->properti_inv = $request->properti_inv;
        $inv->akm_peny_prop = $request->akm_peny_prop;
        $inv->tabungan_berjangka2 = $request->tabungan_berjangka2;
        $inv->surat_berharga_panjang2 = $request->surat_berharga_panjang2;
        $inv->simpanan_lain2 = $request->simpanan_lain2;
        $inv->penyertaan_koplain2 = $request->penyertaan_koplain2;
        $inv->penyertaan_lemkeulain2 = $request->penyertaan_lemkeulain2;
        $inv->inv_jplain2 = $request->inv_jplain2;
        $inv->properti_inv2 = $request->properti_inv2;
        $inv->akm_peny_prop2 = $request->akm_peny_prop2;
        $inv->save();

        return response()->json("Berhasil DiUPDate");
    }

    public function inputlima(Request $request)
    {
        // $at = AktivaTetap::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));

        $at = AktivaTetap::where('koperasi_id', '=', $request->koperasi_id)->first();

        // $at->koperasi_id = $request->koperasi_id;
        $at->tanah = $request->tanah;
        $at->bangunan = $request->bangunan;
        $at->kendaraan = $request->kendaraan;
        $at->inv_perkap = $request->inv_perkap;
        $at->akm_peny = $request->akm_peny;
        $at->tanah2 = $request->tanah2;
        $at->bangunan2 = $request->bangunan2;
        $at->kendaraan2 = $request->kendaraan2;
        $at->inv_perkap2 = $request->inv_perkap2;
        $at->akm_peny2 = $request->akm_peny2;
        $at->save();
    }

    public function inputenam(Request $request)
    {
        // $atb = AktivaTidakBerwujud::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));

        $atb = AktivaTidakBerwujud::where('koperasi_id', '=' , $request->koperasi_id)->first();

        $atb->aktiva_tdk_berwujud = $request->aktiva_tdk_berwujud;
        $atb->aktiva_tdk_berwujud2 = $request->aktiva_tdk_berwujud2;
        $atb->save();

        return response()->json(['Success']);
    }

    public function inputtujuh(Request $request)
    {
        // $al = AktivaLain::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));

        $al = AktivaLain::where('koperasi_id', '=', $request->koperasi_id)->first();

        $al->beban_ditangguhkan = $request->beban_ditangguhkan;
        $al->amortisasi_beban = $request->amortisasi_beban;
        $al->agunan_diambil = $request->agunan_diambil;
        $al->beban_praoperasional = $request->beban_praoperasional;
        $al->amortisasi_biaya = $request->amortisasi_biaya;
        $al->lain = $request->lain;
        $al->beban_ditangguhkan2 = $request->beban_ditangguhkan2;
        $al->amortisasi_beban2 = $request->amortisasi_beban2;
        $al->agunan_diambil2 = $request->agunan_diambil2;
        $al->beban_praoperasional2 = $request->beban_praoperasional2;
        $al->amortisasi_biaya2 = $request->amortisasi_biaya2;
        $al->lain2 = $request->lain2;
        $al->save();

        return response()->json(['Aman']);
    }

    public function inputdelapan(Request $request)
    {
        // $hp = HutangPendek::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));

        $hp = HutangPendek::where('koperasi_id', '=', $request->koperasi_id)->first();

        $hp->tabungan_anggota = $request->tabungan_anggota;
        $hp->tabungan_nonanggota = $request->tabungan_nonanggota;
        $hp->simpanan_bjkanggota = $request->simpanan_bjkanggota;
        $hp->simpanan_bjkcalon = $request->simpanan_bjkcalon;
        $hp->hutang_bank = $request->hutang_bank;
        $hp->hutang_lpdb = $request->hutang_lpdb;
        $hp->hutang_pajak = $request->hutang_pajak;
        $hp->beban_hrsdibayar = $request->beban_hrsdibayar;
        $hp->pendapatan_dimuka = $request->pendapatan_dimuka;
        $hp->hutang_biaya = $request->hutang_biaya;
        $hp->dana_bagian = $request->dana_bagian;
        $hp->titipan_dana = $request->titipan_dana;
        $hp->titipan_jaminan = $request->titipan_jaminan;
        $hp->titipan_zakat = $request->titipan_zakat;
        $hp->hutang_sewa = $request->hutang_sewa;
        $hp->kewajiban_lain = $request->kewajiban_lain;
        $hp->tabungan_anggota2 = $request->tabungan_anggota2;
        $hp->tabungan_nonanggota2 = $request->tabungan_nonanggota2;
        $hp->simpanan_bjkanggota2 = $request->simpanan_bjkanggota2;
        $hp->simpanan_bjkcalon2 = $request->simpanan_bjkcalon2;
        $hp->hutang_bank2 = $request->hutang_bank2;
        $hp->hutang_lpdb2 = $request->hutang_lpdb2;
        $hp->hutang_pajak2 = $request->hutang_pajak2;
        $hp->beban_hrsdibayar2 = $request->beban_hrsdibayar2;
        $hp->pendapatan_dimuka2 = $request->pendapatan_dimuka2;
        $hp->hutang_biaya2 = $request->hutang_biaya2;
        $hp->dana_bagian2 = $request->dana_bagian2;
        $hp->titipan_dana2 = $request->titipan_dana2;
        $hp->titipan_jaminan2 = $request->titipan_jaminan2;
        $hp->titipan_zakat2 = $request->titipan_zakat2;
        $hp->hutang_sewa2 = $request->hutang_sewa2;
        $hp->kewajiban_lain2 = $request->kewajiban_lain2;
        $hp->save();

        return response()->json(['Masuk']);
    }

    public function inputsembilan(Request $request)
    {
        // $tk = HutangPanjang::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));

        $tk = HutangPanjang::where('koperasi_id', '=', $request->koperasi_id)->first();

        $tk->hutang_bank_panjang = $request->hutang_bank_panjang;
        $tk->hutang_koplain = $request->hutang_koplain;
        $tk->pasiva = $request->pasiva;
        $tk->simpanan_berjangka = $request->simpanan_berjangka;
        $tk->titipan_dana_panjang = $request->titipan_dana_panjang;
        $tk->hutang_lpdb_panjang = $request->hutang_lpdb_panjang;
        $tk->hutang_sewa_panjang = $request->hutang_sewa_panjang;
        $tk->hutang_lain = $request->hutang_lain;
        $tk->hutang_bank_panjang2 = $request->hutang_bank_panjang2;
        $tk->hutang_koplain2 = $request->hutang_koplain2;
        $tk->pasiva2 = $request->pasiva2;
        $tk->simpanan_berjangka2 = $request->simpanan_berjangka2;
        $tk->titipan_dana_panjang2 = $request->titipan_dana_panjang2;
        $tk->hutang_lpdb_panjang2 = $request->hutang_lpdb_panjang2;
        $tk->hutang_sewa_panjang2 = $request->hutang_sewa_panjang2;
        $tk->hutang_lain = $request->hutang_lain;
        $tk->save();

        return response()->json(['Sudah']);
    }

    public function inputsepuluh(Request $request)
    {
        // $tk = Ekuitas::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));

        $tk = Ekuitas::where('koperasi_id', '=' , $request->koperasi_id)->first();

        $tk->simpanan_pokok = $request->simpanan_pokok;
        $tk->simpanan_wajib = $request->simpanan_wajib;
        $tk->modal_penyetaraan = $request->modal_penyetaraan;
        $tk->modal_penyertaan = $request->modal_penyertaan;
        $tk->modal_sumbangan = $request->modal_sumbangan;
        $tk->cadangan_umum = $request->cadangan_umum;
        $tk->cadangan_tujuan = $request->cadangan_tujuan;
        $tk->shu_sebelum = $request->shu_sebelum;
        $tk->shu_berjalan = $request->shu_berjalan;
        $tk->simpanan_pokok2 = $request->simpanan_pokok2;
        $tk->simpanan_wajib2 = $request->simpanan_wajib2;
        $tk->modal_penyetaraan2 = $request->modal_penyetaraan2;
        $tk->modal_penyertaan2 = $request->modal_penyertaan2;
        $tk->modal_sumbangan2 = $request->modal_sumbangan2;
        $tk->cadangan_umum2 = $request->cadangan_umum2;
        $tk->cadangan_tujuan2 = $request->cadangan_tujuan2;
        $tk->shu_sebelum2 = $request->shu_sebelum2;
        $tk->shu_berjalan2 = $request->shu_berjalan2;
        $tk->save();

        return response()->json(['Masuk']);
    }

    public function inputsebelas(Request $request)
    {
        // $tk = PartisipasiAnggota::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));

        $tk = PartisipasiAnggota::where('koperasi_id', '=' , $request->koperasi_id)->first();

        $tk->jasa_pinjaman = $request->jasa_pinjaman;
        $tk->administrasi_anggota = $request->administrasi_anggota;
        $tk->provisi_anggota = $request->provisi_anggota;
        $tk->pelayanan_lain = $request->pelayanan_lain;
        $tk->penjualan_anggota = $request->penjualan_anggota;
        $tk->jasa_pinjaman2 = $request->jasa_pinjaman2;
        $tk->administrasi_anggota2 = $request->administrasi_anggota2;
        $tk->provisi_anggota2 = $request->provisi_anggota2;
        $tk->pelayanan_lain2 = $request->pelayanan_lain2;
        $tk->penjualan_anggota2 = $request->penjualan_anggota2;
        $tk->save();

        return response()->json(['Oke']);
    }

    public function inputduabelas(Request $request)
    {
        // $tk = PendapatanNonanggota::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));

        $pn = PendapatanNonanggota::where('koperasi_id', '=', $request->koperasi_id)->first();

        $pn->jasa_pinjaman_non = $request->jasa_pinjaman_non;
        $pn->administrasi = $request->administrasi;
        $pn->provisi = $request->provisi;
        $pn->jasa_pelayanan = $request->jasa_pelayanan;
        $pn->penjualan = $request->penjualan;
        $pn->beban_penjualan = $request->beban_penjualan;
        $pn->jasa_pinjaman_non2 = $request->jasa_pinjaman_non2;
        $pn->administrasi2 = $request->administrasi2;
        $pn->provisi2 = $request->provisi2;
        $pn->jasa_pelayanan2 = $request->jasa_pelayanan2;
        $pn->penjualan2 = $request->penjualan2;
        $pn->beban_penjualan2 = $request->beban_penjualan2;
        $pn->save();

        return response()->json(['Oke']);
    }

    public function inputtigabelas(Request $request)
    {
        // $tk = BebanAnggota::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));

        $ba = BebanAnggota::where('koperasi_id' , '=', $request->koperasi_id)->first();

        $ba->simpanan_anggota = $request->simpanan_anggota;
        $ba->simpanan_berjangka_anggota = $request->simpanan_berjangka_anggota;
        $ba->simpanan_anggota2 = $request->simpanan_anggota2;
        $ba->simpanan_berjangka_anggota = $request->simpanan_berjangka_anggota;
        $ba->save();

        return response()->json(['Aman']);
    }

    public function inputempatbelas(Request $request)
    {
        // $tk = BebanNonanggota::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));

        $bn = BebanNonanggota::where('koperasi_id', '=', $request->koperasi_id)->first();

        $bn->jasa_simpanan = $request->jasa_simpanan;
        $bn->simpanan_nonberjangka = $request->simpanan_nonberjangka;
        $bn->jasa_hutang_bank = $request->jasa_hutang_bank;
        $bn->pinjaman_lpdb = $request->pinjaman_lpdb;
        $bn->modal_penyertaan = $request->modal_penyertaan;
        $bn->pihak_ketiga = $request->pihak_ketiga;
        $bn->jasa_simpanan2 = $request->jasa_simpanan2;
        $bn->simpanan_nonberjangka2 = $request->simpanan_nonberjangka2;
        $bn->jasa_hutang_bank2 = $request->jasa_hutang_bank2;
        $bn->pinjaman_lpdb2 = $request->pinjaman_lpdb2;
        $bn->modal_penyertaan2 = $request->modal_penyertaan2;
        $bn->pihak_ketiga2 = $request->pihak_ketiga2;
        $bn->save();

        return response()->json(['Gas']);
    }

    public function inputlimabelas(Request $request)
    {
        // $tk = BebanUsaha::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));

        $bu = BebanUsaha::where('koperasi_id', '=', $request->koperasi_id)->first();

        $bu->biaya_penyisihan = $request->biaya_penyisihan;
        $bu->biaya_bunga = $request->biaya_bunga;
        $bu->honor_karyawan = $request->honor_karyawan;
        $bu->biaya_perkap = $request->biaya_perkap;
        $bu->biaya_asuransi = $request->biaya_asuransi;
        $bu->biaya_listrik = $request->biaya_listrik;
        $bu->biaya_penyusutan = $request->biaya_penyusutan;
        $bu->biaya_lain = $request->biaya_lain;
        $bu->biaya_pemeliharaan = $request->biaya_pemeliharaan;
        $bu->biaya_promosi = $request->biaya_promosi;
        $bu->biaya_akomodasi = $request->biaya_akomodasi;
        $bu->biaya_transportasi = $request->biaya_transportasi;
        $bu->biaya_administrasi = $request->biaya_administrasi;
        $bu->biaya_pajak = $request->biaya_pajak;
        $bu->biaya_sewa = $request->biaya_sewa;
        $bu->biaya_operasional = $request->biaya_operasional;
        $bu->biaya_penyisihan2 = $request->biaya_penyisihan2;
        $bu->biaya_bunga2 = $request->biaya_bunga2;
        $bu->honor_karyawan2 = $request->honor_karyawan2;
        $bu->biaya_perkap2 = $request->biaya_perkap2;
        $bu->biaya_asuransi2 = $request->biaya_asuransi2;
        $bu->biaya_listrik2 = $request->biaya_listrik2;
        $bu->biaya_penyusutan2 = $request->biaya_penyusutan2;
        $bu->biaya_lain2 = $request->biaya_lain2;
        $bu->biaya_pemeliharaan2 = $request->biaya_pemeliharaan2;
        $bu->biaya_promosi2 = $request->biaya_promosi2;
        $bu->biaya_akomodasi2 = $request->biaya_akomodasi2;
        $bu->biaya_transportasi2 = $request->biaya_transportasi2;
        $bu->biaya_administrasi2 = $request->biaya_administrasi2;
        $bu->biaya_pajak2 = $request->biaya_pajak2;
        $bu->biaya_sewa2 = $request->biaya_sewa2;
        $bu->biaya_operasional2 = $request->biaya_operasional2;
        $bu->save();

        return response()->json(['Aman']);
    }

    public function inputenambelas(Request $request)
    {
        // $tk = BebanPerkoperasian::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));

        $bp = BebanPerkoperasian::where('koperasi_id', '=', $request->koperasi_id)->first();

        $bp->beban_pengawas = $request->beban_pengawas;
        $bp->beban_pembinaan = $request->beban_pembinaan;
        $bp->beban_rapat = $request->beban_rapat;
        $bp->beban_pengawas2 = $request->beban_pengawas2;
        $bp->beban_pembinaan2 = $request->beban_pembinaan2;
        $bp->beban_rapat = $request->beban_rapat;
        $bp->save();

        return response()->json(['BebanPerkoperasian']);
    }

    public function inputtujuhbelas(Request $request)
    {
        // $tk = PendapatanLain::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));

        $pl = PendapatanLain::where('koperasi_id', '=', $request->koperasi_id)->first();

        $pl->pendapatan_deviden = $request->pendapatan_deviden;
        $pl->pendapatan_sewa = $request->pendapatan_sewa;
        $pl->pendapatan_lain = $request->pendapatan_lain;
        $pl->pendapatan_deviden2 = $request->pendapatan_deviden2;
        $pl->pendapatan_sewa2 = $request->pendapatan_sewa2;
        $pl->pendapatan_lain2 = $request->pendapatan_lain2;
        $pl->save();

        return response()->json(['PendLain']);
    }

    public function inputdelapanbelas(Request $request)
    {
        // $tk = BiayaLain::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));

        $bl = BiayaLain::where('koperasi_id', '=', $request->koperasi_id)->first();

        $bl->biaya_lain = $request->biaya_lain;
        $bl->biaya_lain2 = $request->biaya_lain2;
        $bl->save();

        return response()->json(['BiayaLain']);
    }

    public function inputsembilanbelas(Request $request)
    {
        // $tk = PajakPenghasilan::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));

        $pp = PajakPenghasilan::where('koperasi_id' , '=' , $request->koperasi_id)->first();

        $pp->pajak_penghasilan = $request->pajak_penghasilan;
        $pp->pajak_penghasilan2 = $request->pajak_penghasilan2;
        $pp->save();

        return response()->json(['PajakPenghasilan']);
    }

    public function inputduapuluh(Request $request)
    {
        // $tk = PembiayaanBermasalah::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));

        $pb = PembiayaanBermasalah::where('koperasi_id', '=', $request->koperasi_id)->first();

        $pb->pkl = $request->pkl;
        $pb->pdr = $request->pdr;
        $pb->macet = $request->macet;
        $pb->pkl2 = $request->pkl2;
        $pb->pdr2 = $request->pdr2;
        $pb->macet2 = $request->macet2;
        $pb->save();

        return response()->json(['PembiayaanBermasalah']);
    }

    public function inputduasatu(Request $request)
    {
        // $tk = Agunan::create(json_decode($request->getContent(),true));
        // return response()->json(json_decode($request->getContent(),true));

        $agu = Agunan::where('koperasi_id', '=', $request->koperasi_id)->first();
        $agu->agunan_pkl = $request->agunan_pkl;
        $agu->agunan_pdr = $request->agunan_pdr;
        $agu->agunan_macet = $request->agunan_macet;
        $agu->agunan_pkl2 = $request->agunan_pkl2;
        $agu->agunan_pdr2 = $request->agunan_pdr2;
        $agu->agunan_macet = $request->agunan_macet;
        $agu->save();

        return response()->json(['agunan']);
    }
}
