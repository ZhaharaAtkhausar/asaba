<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Models\Koperasi;

class NeracaController extends Controller
{
    public function Koperasi()
    {
        $koperasi = Koperasi::all();
        return view('statistik.neraca', compact('koperasi'));
    }

    public function tatakelola()
    {
        $koperasi = Koperasi::all();
        return view('statistik.tatakelola', compact('koperasi'));
    }

    public function profilresiko()
    {
        $koperasi = Koperasi::all();
        return view('statistik.profileresiko', compact('koperasi'));
    }

    public function permodalan()
    {
        $koperasi = Koperasi::all();
        return view('statistik.permodalan', compact('koperasi'));
    }

    public function keuangan()
    {
        $koperasi = Koperasi::all();
        return view('statistik.datakeuangan', compact('koperasi'));
    }

    public function sehat()
    {
        $koperasi = Koperasi::all();
        return view('statistik.sehat', compact('koperasi'));
    }

    public function ksptatakelola()
    {
        $koperasi = Koperasi::all();
        return view('statistik.tatakelola', compact('koperasi'));
    }

    public function kspprofilresiko()
    {
        $koperasi = Koperasi::all();
        return view('statistik.profileresiko', compact('koperasi'));
    }

    public function ksppermodalan()
    {
        $koperasi = Koperasi::all();
        return view('statistik.permodalan', compact('koperasi'));
    }

    public function kspkeuangan()
    {
        $koperasi = Koperasi::all();
        return view('statistik.datakeuangan', compact('koperasi'));
    }

    public function kspsehat()
    {
        $koperasi = Koperasi::all();
        return view('statistik.sehat', compact('koperasi'));
    }

    public function kspprint()
    {
        $koperasi = Koperasi::all();
        return view('sertifikat.tabel', compact('koperasi'));
    }

    public function print()
    {
        $koperasi = Koperasi::all();
        return view('sertifikat.tabel', compact('koperasi'));
    }

    public function index($id)
    {
        $users = DB::table('koperasis')
        ->where('koperasis.id', '=', $id)
        ->join('aktiva_lancars as al' , 'koperasis.id', '=', 'al.koperasi_id')
        ->join('investasis as inv' , 'koperasis.id', '=', 'inv.koperasi_id')
        ->join('aktiva_tetaps as at' , 'koperasis.id', '=', 'at.koperasi_id')
        ->join('aktiva_tidak_berwujuds as ab' , 'koperasis.id', '=', 'ab.koperasi_id')
        ->join('aktiva_lains as ali' , 'koperasis.id', '=', 'ali.koperasi_id')
        ->join('hutang_pendeks as hp' , 'koperasis.id', '=', 'hp.koperasi_id')
        ->join('hutang_panjangs as hpa' , 'koperasis.id', '=', 'hpa.koperasi_id')
        ->join('ekuitas as ek' , 'koperasis.id', '=', 'ek.koperasi_id')
        ->select(
            'koperasis.*',
            'al.*',
            'inv.*',
            'at.*',
            'ab.*',
            'ali.*',
            'hp.*',
            'hpa.*',
            'ek.*',
            // DB::raw('al.giro + al.tabungan + al.deposito as jumlah_kas_bank'),
            // DB::raw('al.giro2 + al.tabungan2 + al.deposito2 as jumlah_kas_bank2'),
            // DB::raw('al.simpanan_sukarela + al.simpanan_berjangka_koplain as simpanan_koplain'),
            // DB::raw('al.simpanan_sukarela2 + al.simpanan_berjangka_koplain2 as simpanan_koplain2'),
            // DB::raw('al.kas + al.giro + al.tabungan + al.deposito + al.simpanan_sukarela + al.simpanan_berjangka_koplain as jumlah_kasbankkoplain'),
            // DB::raw('al.kas + al.giro2 + al.tabungan2 + al.deposito2 + al.simpanan_sukarela2 + al.simpanan_berjangka_koplain2 as jumlah_kasbankkoplain2'),
            // DB::raw('al.piutang_dagang + al.piutang_anggota + al.piutang_calon + al.piutang_koplain + al.piutang_bunga + al.piutang_lain as jumlah_piutang'),
            // DB::raw('al.piutang_dagang2 + al.piutang_anggota2 + al.piutang_calon2 + al.piutang_koplain2 + al.piutang_bunga2 + al.piutang_lain2 as jumlah_piutang2'),
            // DB::raw('al.piutang_dagang + al.piutang_anggota + al.piutang_calon + al.piutang_koplain + al.piutang_bunga + al.piutang_lain - al.penyisihan_pinjaman as pinjaman_dpttertagih'),
            // DB::raw('al.piutang_dagang2 + al.piutang_anggota2 + al.piutang_calon2 + al.piutang_koplain2 + al.piutang_bunga2 + al.piutang_lain2 - al.penyisihan_pinjaman2 as pinjaman_dpttertagih2'),
            // DB::raw('al.kas + al.giro + al.tabungan + al.deposito + al.simpanan_sukarela + al.simpanan_berjangka_koplain + al.surat_berharga + (al.piutang_dagang + al.piutang_anggota + al.piutang_calon + al.piutang_koplain + al.piutang_bunga + al.piutang_lain - al.penyisihan_pinjaman) as jumlah_aktivalancar'),
            // DB::raw('al.kas2 + al.giro2 + al.tabungan2 + al.deposito2 + al.simpanan_sukarela2 + al.simpanan_berjangka_koplain2 + al.surat_berharga2 + (al.piutang_dagang2 + al.piutang_anggota2 + al.piutang_calon2 + al.piutang_koplain2 + al.piutang_bunga2 + al.piutang_lain2 - al.penyisihan_pinjaman2) as jumlah_aktivalancar2'),
            // DB::raw('inv.penyertaan_koplain + inv.penyertaan_lemkeulain as jumlah_penyertaan'),
            // DB::raw('inv.penyertaan_koplain2 + inv.penyertaan_lemkeulain2 as jumlah_penyertaan2'),
            // DB::raw('inv.properti_inv - inv.akm_peny_prop as prop_inv_bersih'),
            // DB::raw('inv.properti_inv2 - inv.akm_peny_prop2 as prop_inv_bersih2'),
            // DB::raw('inv.tabungan_berjangka + inv.surat_berharga_panjang + inv.simpanan_lain + inv.penyertaan_koplain + inv.penyertaan_lemkeulain + inv.inv_jplain + (inv.properti_inv - inv.akm_peny_prop) as jumlah_investasi'),
            // DB::raw('inv.tabungan_berjangka2 + inv.surat_berharga_panjang2 + inv.simpanan_lain2 + inv.penyertaan_koplain2 + inv.penyertaan_lemkeulain2 + inv.inv_jplain2 + (inv.properti_inv2 - inv.akm_peny_prop2) as jumlah_investasi2'),
            // DB::raw('(at.tanah + at.bangunan + at.kendaraan + at.inv_perkap) - at.akm_peny as jumlah_aktivatetap'),
            // DB::raw('(at.tanah2 + at.bangunan2 + at.kendaraan2 + at.inv_perkap2) - at.akm_peny2 as jumlah_aktivatetap2'),
            // DB::raw('ali.beban_ditangguhkan + ali.amortisasi_beban + ali.agunan_diambil + ali.beban_praoperasional + ali.amortisasi_biaya + ali.lain as jumlah_aktivalain'),
            // DB::raw('ali.beban_ditangguhkan2 + ali.amortisasi_beban2 + ali.agunan_diambil2 + ali.beban_praoperasional2 + ali.amortisasi_biaya2 + ali.lain2 as jumlah_aktivalain'),
            // DB::raw('(al.kas + al.giro + al.tabungan + al.deposito + al.simpanan_sukarela + al.simpanan_berjangka_koplain + al.surat_berharga + (al.piutang_dagang + al.piutang_anggota + al.piutang_calon + al.piutang_koplain + al.piutang_bunga + al.piutang_lain - al.penyisihan_pinjaman)) + (inv.tabungan_berjangka + inv.surat_berharga_panjang + inv.simpanan_lain + inv.penyertaan_koplain + inv.penyertaan_lemkeulain + inv.inv_jplain + (inv.properti_inv - inv.akm_peny_prop)) + ((at.tanah + at.bangunan + at.kendaraan + at.inv_perkap) - at.akm_peny) + (ab.aktiva_tdk_berwujud) + (ali.beban_ditangguhkan + ali.amortisasi_beban + ali.agunan_diambil + ali.beban_praoperasional + ali.amortisasi_biaya + ali.lain) as jumlah_aktiva'),
            // DB::raw('(al.kas2 + al.giro2 + al.tabungan2 + al.deposito2 + al.simpanan_sukarela2 + al.simpanan_berjangka_koplain2 + al.surat_berharga2 + (al.piutang_dagang2 + al.piutang_anggota2 + al.piutang_calon2 + al.piutang_koplain2 + al.piutang_bunga2 + al.piutang_lain2 - al.penyisihan_pinjaman2)) + (inv.tabungan_berjangka2 + inv.surat_berharga_panjang2 + inv.simpanan_lain2 + inv.penyertaan_koplain2 + inv.penyertaan_lemkeulain2 + inv.inv_jplain2 + (inv.properti_inv2 - inv.akm_peny_prop2)) + ((at.tanah2 + at.bangunan2 + at.kendaraan2 + at.inv_perkap2) - at.akm_peny2) + (ab.aktiva_tdk_berwujud2) + (ali.beban_ditangguhkan2 + ali.amortisasi_beban2 + ali.agunan_diambil2 + ali.beban_praoperasional2 + ali.amortisasi_biaya2 + ali.lain2) as jumlah_aktiva2'),
            // DB::raw('hp.titipan_dana + hp.titipan_jaminan + hp.titipan_zakat as jumlah_titipan'),
            // DB::raw('hp.titipan_dana2 + hp.titipan_jaminan2 + hp.titipan_zakat2 as jumlah_titipan2'),
            // DB::raw('hp.tabungan_anggota + hp.tabungan_nonanggota + hp.simpanan_bjkanggota + hp.simpanan_bjkcalon + hp.hutang_bank + hp.hutang_lpdb + hp.hutang_pajak + hp.beban_hrsdibayar + hp.pendapatan_dimuka + hp.hutang_biaya + hp.dana_bagian + hp.titipan_dana + hp.titipan_jaminan + hp.titipan_zakat + hp.hutang_sewa + hp.kewajiban_lain as jumlah_kwlancar'),
            // DB::raw('hp.tabungan_anggota2 + hp.tabungan_nonanggota2 + hp.simpanan_bjkanggota2 + hp.simpanan_bjkcalon2 + hp.hutang_bank2 + hp.hutang_lpdb2 + hp.hutang_pajak2 + hp.beban_hrsdibayar2 + hp.pendapatan_dimuka2 + hp.hutang_biaya2 + hp.dana_bagian2 + hp.titipan_dana2 + hp.titipan_jaminan2 + hp.titipan_zakat2 + hp.hutang_sewa2 + hp.kewajiban_lain2 as jumlah_kwlancar2'),
            // DB::raw('hpa.hutang_bank_panjang + hpa.hutang_koplain + hpa.pasiva + hpa.simpanan_berjangka + hpa.titipan_dana_panjang + hpa.hutang_lpdb_panjang + hpa.hutang_sewa_panjang + hpa.hutang_lain as jumlah_kwpanjang'),
            // DB::raw('hpa.hutang_bank_panjang2 + hpa.hutang_koplain2 + hpa.pasiva2 + hpa.simpanan_berjangka2 + hpa.titipan_dana_panjang2 + hpa.hutang_lpdb_panjang2 + hpa.hutang_sewa_panjang2 + hpa.hutang_lain2 as jumlah_kwpanjang2'),
            // DB::raw('ek.shu_sebelum + ek.shu_berjalan as jumlah_blmdibagi'),
            // DB::raw('ek.shu_sebelum2 + ek.shu_berjalan2 as jumlah_blmdibagi2'),
            // DB::raw('ek.simpanan_pokok + ek.simpanan_wajib + ek.modal_penyetaraan + ek.modal_penyertaan + ek.modal_sumbangan + ek.cadangan_umum + ek.cadangan_tujuan + ek.shu_sebelum + ek.shu_berjalan as jumlah_ekuitas'),
            // DB::raw('ek.simpanan_pokok2 + ek.simpanan_wajib2 + ek.modal_penyetaraan2 + ek.modal_penyertaan2 + ek.modal_sumbangan2 + ek.cadangan_umum2 + ek.cadangan_tujuan2 + ek.shu_sebelum2 + ek.shu_berjalan2 as jumlah_ekuitas2'),
            // DB::raw('(hp.tabungan_anggota + hp.tabungan_nonanggota + hp.simpanan_bjkanggota + hp.simpanan_bjkcalon + hp.hutang_bank + hp.hutang_lpdb + hp.hutang_pajak + hp.beban_hrsdibayar + hp.pendapatan_dimuka + hp.hutang_biaya + hp.dana_bagian + hp.titipan_dana + hp.titipan_jaminan + hp.titipan_zakat + hp.hutang_sewa + hp.kewajiban_lain) + (hpa.hutang_bank_panjang + hpa.hutang_koplain + hpa.pasiva + hpa.simpanan_berjangka + hpa.titipan_dana_panjang + hpa.hutang_lpdb_panjang + hpa.hutang_sewa_panjang + hpa.hutang_lain) + (ek.simpanan_pokok + ek.simpanan_wajib + ek.modal_penyetaraan + ek.modal_penyertaan + ek.modal_sumbangan + ek.cadangan_umum + ek.cadangan_tujuan + ek.shu_sebelum + ek.shu_berjalan) as jumlah_kwekuitas'),
            // DB::raw('(hp.tabungan_anggota2 + hp.tabungan_nonanggota2 + hp.simpanan_bjkanggota2 + hp.simpanan_bjkcalon2 + hp.hutang_bank2 + hp.hutang_lpdb2 + hp.hutang_pajak2 + hp.beban_hrsdibayar2 + hp.pendapatan_dimuka2 + hp.hutang_biaya2 + hp.dana_bagian2 + hp.titipan_dana2 + hp.titipan_jaminan2 + hp.titipan_zakat2 + hp.hutang_sewa2 + hp.kewajiban_lain2) + (hpa.hutang_bank_panjang2 + hpa.hutang_koplain2 + hpa.pasiva2 + hpa.simpanan_berjangka2 + hpa.titipan_dana_panjang2 + hpa.hutang_lpdb_panjang2 + hpa.hutang_sewa_panjang2 + hpa.hutang_lain2) + (ek.simpanan_pokok2 + ek.simpanan_wajib2 + ek.modal_penyetaraan2 + ek.modal_penyertaan2 + ek.modal_sumbangan2 + ek.cadangan_umum2 + ek.cadangan_tujuan2 + ek.shu_sebelum2 + ek.shu_berjalan2) as jumlah_kwekuitas'),
        )
        ->get();

        return response()->json($users);
    }

    public function datakeuangan($id)
    {
        $users = DB::table('koperasis')
        ->where('koperasis.id', '=', $id)
        ->join('aktiva_lancars as al' , 'koperasis.id', '=', 'al.koperasi_id')
        ->join('investasis as inv' , 'koperasis.id', '=', 'inv.koperasi_id')
        ->join('aktiva_tetaps as at' , 'koperasis.id', '=', 'at.koperasi_id')
        ->join('aktiva_tidak_berwujuds as ab' , 'koperasis.id', '=', 'ab.koperasi_id')
        ->join('aktiva_lains as ali' , 'koperasis.id', '=', 'ali.koperasi_id')
        ->join('hutang_pendeks as hp' , 'koperasis.id', '=', 'hp.koperasi_id')
        ->join('hutang_panjangs as hpa' , 'koperasis.id', '=', 'hpa.koperasi_id')
        ->join('ekuitas as ek' , 'koperasis.id', '=', 'ek.koperasi_id')
        ->join('partisipasi_anggotas as pa' , 'koperasis.id', '=', 'pa.koperasi_id')
        ->join('pendapatan_nonanggotas as pn' , 'koperasis.id', '=', 'pn.koperasi_id')
        ->join('beban_anggotas as ba' , 'koperasis.id', '=', 'ba.koperasi_id')
        ->join('beban_nonanggotas as bn' , 'koperasis.id', '=', 'bn.koperasi_id')
        ->join('beban_usahas as bu' , 'koperasis.id', '=', 'bu.koperasi_id')
        ->join('beban_perkoperasians as bp' , 'koperasis.id', '=', 'bp.koperasi_id')
        ->join('pendapatan_lains as pl' , 'koperasis.id', '=', 'pl.koperasi_id')
        ->join('biaya_lains as bl' , 'koperasis.id', '=', 'bl.koperasi_id')
        ->join('pajak_penghasilans as pp' , 'koperasis.id', '=', 'pp.koperasi_id')
        ->join('pembiayaan_bermasalahs as pb' , 'koperasis.id', '=', 'pb.koperasi_id')
        ->join('agunans as ag' , 'koperasis.id', '=', 'ag.koperasi_id')
        ->select(
            // 'koperasis.id as id_koperasi',
            'al.*',
            'inv.*',
            'at.*',
            'ab.*',
            'ali.*',
            'hp.*',
            'hpa.*',
            'ek.*',
            'pa.*',
            'pn.*',
            'ba.*',
            'bn.*',
            'bu.*',
            'bp.*',
            'pl.*',
            'bl.*',
            'pp.*',
            'pb.*',
            'ag.*',
        )
        ->get();

        return response()->json($users);
    }

    public function dttata($id)
    {
        $tk = DB::table('koperasis')
        ->where('koperasis.id', '=', $id)
        ->join('tata_kelolas as tk' , 'koperasis.id', '=', 'tk.koperasi_id')
        ->select(
            'koperasis.nama',
            'tk.*',
        )
        ->get();

        return response()->json($tk);
    }

    public function dtresiko($id)
    {
        $pr = DB::table('koperasis')
        ->where('koperasis.id', '=', $id)
        ->join('profil_resikos as pr' , 'koperasis.id', '=', 'pr.koperasi_id')
        ->join('aktiva_lancars as al' , 'koperasis.id', '=', 'al.koperasi_id')
        ->join('investasis as inv' , 'koperasis.id', '=', 'inv.koperasi_id')
        ->join('aktiva_tetaps as at' , 'koperasis.id', '=', 'at.koperasi_id')
        ->join('aktiva_tidak_berwujuds as ab' , 'koperasis.id', '=', 'ab.koperasi_id')
        ->join('aktiva_lains as ali' , 'koperasis.id', '=', 'ali.koperasi_id')
        ->join('hutang_pendeks as hp' , 'koperasis.id', '=', 'hp.koperasi_id')
        ->join('hutang_panjangs as hpa' , 'koperasis.id', '=', 'hpa.koperasi_id')
        ->join('ekuitas as ek' , 'koperasis.id', '=', 'ek.koperasi_id')
        ->select(
            // 'koperasis.*',
            'pr.*',
            'al.*',
            'inv.*',
            'at.*',
            'ab.*',
            'ali.*',
            'hp.*',
            'hpa.*',
            'ek.*',
        )
        ->get();

        return response()->json($pr);
    }

    // public function sertifikat()
    // {
    //     $pr = DB::table('koperasis')
    //     ->join('tata_kelolas as tk' , 'koperasis.id', '=', 'tk.koperasi_id')
    //     ->join('profil_resikos as pr' , 'koperasis.id', '=', 'pr.koperasi_id')
    //     ->join('aktiva_lancars as al' , 'koperasis.id', '=', 'al.koperasi_id')
    //     ->join('investasis as inv' , 'koperasis.id', '=', 'inv.koperasi_id')
    //     ->join('aktiva_tetaps as at' , 'koperasis.id', '=', 'at.koperasi_id')
    //     ->join('aktiva_tidak_berwujuds as ab' , 'koperasis.id', '=', 'ab.koperasi_id')
    //     ->join('aktiva_lains as ali' , 'koperasis.id', '=', 'ali.koperasi_id')
    //     ->join('hutang_pendeks as hp' , 'koperasis.id', '=', 'hp.koperasi_id')
    //     ->join('hutang_panjangs as hpa' , 'koperasis.id', '=', 'hpa.koperasi_id')
    //     ->join('ekuitas as ek' , 'koperasis.id', '=', 'ek.koperasi_id')
    //     ->join('partisipasi_anggotas as pa' , 'koperasis.id', '=', 'pa.koperasi_id')
        // ->join('pendapatan_nonanggotas as pn' , 'koperasis.id', '=', 'pn.koperasi_id')
        // ->join('beban_anggotas as ba' , 'koperasis.id', '=', 'ba.koperasi_id')
        // ->join('beban_nonanggotas as bn' , 'koperasis.id', '=', 'bn.koperasi_id')
        // ->join('beban_usahas as bu' , 'koperasis.id', '=', 'bu.koperasi_id')
        // ->join('beban_perkoperasians as bp' , 'koperasis.id', '=', 'bp.koperasi_id')
        // ->join('pendapatan_lains as pl' , 'koperasis.id', '=', 'pl.koperasi_id')
        // ->join('biaya_lains as bl' , 'koperasis.id', '=', 'bl.koperasi_id')
        // ->join('pajak_penghasilans as pp' , 'koperasis.id', '=', 'pp.koperasi_id')
        // ->join('pembiayaan_bermasalahs as pb' , 'koperasis.id', '=', 'pb.koperasi_id')
        // ->join('agunans as ag' , 'koperasis.id', '=', 'ag.koperasi_id')
    //     ->select('koperasis.*')
    //     ->paginate(1);

    //     return response()->json($pr);
    // }

    public function sertifikat()
    {
        $pr = DB::table('koperasis')
        ->where('koperasi_id', '=', 1)
        ->join('tata_kelolas as tk' , 'koperasis.id', '=', 'tk.koperasi_id')
        ->select(
            'koperasis.*',
            DB::raw('tk.pk_1a + tk.pk_1b + tk.pk_1c + tk.pk_1d as keanggotaan_terbuka'),
        )
        ->get();

        return response()->json($pr);
    }
}
