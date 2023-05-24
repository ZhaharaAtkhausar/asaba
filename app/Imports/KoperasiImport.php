<?php

namespace App\Imports;

use App\Models\Koperasi;
use App\Models\KelKoperasi;
use App\Models\JenisKoperasi;
use App\Models\BentukKoperasi;
use App\Models\SektorUsaha;
use App\Models\Kecamatan;
use App\Models\Desa;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithStartRow;

class KoperasiImport implements ToCollection, WithStartRow
{
    public function startRow(): int
    {
        return 2;
    }
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function Collection(Collection $collection)
    {
        foreach ($collection as $row) {

            $kop = Koperasi::where('nik' , $row[1]);

            $jml_baris = $kop->count();
            // return response()->json($kop);

            if ( $jml_baris > 0 ) {

                $jns_rows = JenisKoperasi::where('jenis_koperasi' , $row[19]);
                $sek_rows = SektorUsaha::where('sektor_usaha', $row[21]);
                $bentuk_rows = BentukKoperasi::where('bentuk_koperasi', $row[18]);
                $kel_rows = KelKoperasi::where('kel_koperasi', $row[20]);
                $kecamatan_rows = Kecamatan::where('nama_kecamatan', $row[8]);
                $jenis_id = 0;
                $sektor_id = 0;
                $bentuk_id = 0;
                $kel_id = 0;
                $kecamatan_id = 0;
                $desa_id = 0;

                if( $kecamatan_rows->count < 1 ) {
                    $kecamatan = Kecamatan::create([
                        "nama_kecamatan" => $row[8]
                    ]);
                
                    $kecamatan_id = $kecamatan->id;
                
                } else {
                
                    $kecamatan_id = $kecamatan_rows->id;
                
                }

                if (substr( $row[6] ,0,4) == "Desa") {

                    $ds = substr_replace( $row[6] ,"",0,4). "<br/>";
                    $desa_rows = Desa::where('nama_desa', $ds);

                    if ($desa_rows->count < 1) {

                        $desa = Desa::create([
                            "nama_desa" => $ds
                        ]);

                        $desa_id = $desa->id;

                    } else {

                        $desa_id = $desa_rows->id;
                    }

                }	else if (substr( $row[6] ,0,4) == "Dsn.") {

                    $ds = substr_replace($row[6],"",0,4). "<br/>";
                    $desa_rows = Desa::where('nama_desa', $ds);

                    if ($desa_rows->count < 1) {

                        $desa = Desa::create([
                            "nama_desa" => $ds
                        ]);

                        $desa_id = $desa->id;

                    } else {

                        $desa_id = $desa_rows->id;
                    }

                } else if (substr($row[6],0,3) == "Ds.") {
                    
                    $ds = substr_replace($row[6],"",0,3). "<br/>";
                    $desa_rows = Desa::where('nama_desa', $ds);

                    if ($desa_rows->count < 1) {

                        $desa = Desa::create([
                            "nama_desa" => $ds
                        ]);

                        $desa_id = $desa->id;

                    } else {

                        $desa_id = $desa_rows->id;
                    }
                }

                if( $jns_rows->count < 1 ) {
                    $jenis = JenisKoperasi::create([
                        "jenis_koperasi" => $row[19]
                    ]);
                
                    $jenis_id = $jenis->id;
                
                } else {
                
                    $jenis_id = $jns_rows->id;
                
                }

                if( $sek_rows->count < 1 ) {
                    $sektor = SektorUsaha::create([
                        "sektor_usaha" => $row[21]
                    ]);
                
                    $sektor_id = $sektor->id;
                
                } else {
                
                    $sektor_id = $sek_rows->id;
                
                }

                if( $bentuk_rows->count < 1 ) {
                    $bentuk = BentukKoperasi::create([
                        "bentuk_koperasi" => $row[18]
                    ]);
                
                    $bentuk_id = $bentuk->id;
                
                } else {
                
                    $bentuk_id = $bentuk_rows->id;
                
                }

                if( $kel_rows->count < 1 ) {
                    $kelompok = KelKoperasi::create([
                        "kel_koperasi" => $row[20]
                    ]);
                
                    $kel_id = $kelompok->id;
                
                } else {
                
                    $kel_id = $kel_rows->id;
                
                }

                $kop->nik = $row[1];
                $kop->nama = $row[2];
                $kop->no_badan_hukum = $row[3];
                $kop->tgl_badan_hukum = $row[4];
                $kop->telp = $row[11];
                $kop->alamat = $row[5];
                $kop->kabupaten = $row[9];
                $kop->provinsi = $row[10];
                $kop->ketua = $row[12];
                $kop->telp_ketua = $row[13];
                $kop->sekretaris = $row[14];
                $kop->telp_sekretaris = $row[15];
                $kop->bendahara = $row[16];
                $kop->telp_bendahara = $row[17];
                $kop->anggota_pria = $row[22];
                $kop->anggota_wanita = $row[23];
                $kop->anggota_total = $row[24];
                $kop->rat = $row[25];
                $kop->modal_sendiri = $row[27];
                $kop->modal_luar = $row[28];
                $kop->asset = $row[29];
                $kop->volume_usaha = $row[30];
                $kop->modal_total = $row[31];
                $kop->shu = $row[32];
                $kop->keaktifan = $row[33];
                $kop->desa_id = $row[6];
                $kop->kecamatan_id = $row[8];
                $kop->jenis_id = $row[19];
                $kop->bentuk_id = $row[18];
                $kop->kel_id = $row[20];
                $kop->sektor_id = $row[21];
            } else {
                Koperasi::create([
                    'nik' => $row[1],
                    'nama' => $row[2],
                    'no_badan_hukum' => $row[3],
                    'tgl_badan_hukum' => $row[4],
                    'telp' => $row[11],
                    'alamat' => $row[5],
                    'kabupaten' => $row[9],
                    'provinsi' => $row[10],
                    'ketua' => $row[12],
                    'telp_ketua' => $row[13],
                    'sekretaris' => $row[14],
                    'telp_sekretaris' => $row[15],
                    'bendahara' => $row[16],
                    'telp_bendahara' => $row[17],
                    'anggota_pria' => $row[22],
                    'anggota_wanita' => $row[23],
                    'anggota_total' => $row[24],
                    'rat' => $row[25],
                    'modal_sendiri' => $row[27],
                    'modal_luar' => $row[28],
                    'asset' => $row[29],
                    'volume_usaha' => $row[30],
                    'modal_total' => $row[31],
                    'shu' => $row[32],
                    'keaktifan' => $row[33],
                    'desa_id' => $row[6],
                    'kecamatan_id' => $row[8],
                    'jenis_id' => $row[19],
                    'bentuk_id' => $row[18],
                    'kel_id' => $row[20],
                    'sektor_id' => $row[21],
                ]);
            }
            
        }
    }
}
