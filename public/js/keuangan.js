$(function () {
    let id = '';
    if (localStorage.getItem("id") == null) {
        $("#search").on("change", function () {
            //ambil id dari isi selectoption
            id = $(this).val();
            // console.log(id);

            $.get("/koperasi/datakeuangan/" + id)

            .then(res=>{
                // console.log(res);
                res.map(data=>{
                    // console.log(data);
                    // console.log(4/0);

                    //hasil query phu
                    let jml_prtianggota = data.jasa_pinjaman + data.administrasi_anggota + data.provisi_anggota + data.pelayanan_lain + data.penjualan_anggota;
                    let jml_prtianggota2 = data.jasa_pinjaman2 + data.administrasi_anggota2 + data.provisi_anggota2 + data.pelayanan_lain2 + data.penjualan_anggota2;
                    let jml_pendnon = data.jasa_pinjaman_non + data.administrasi + data.provisi + data.jasa_pelayanan + data.penjualan;
                    let jml_pendnon2 = data.jasa_pinjaman_non2 + data.administrasi2 + data.provisi2 + data.jasa_pelayanan2 + data.penjualan2;
                    let jml_pendapatan = jml_prtianggota + jml_pendnon;
                    let jml_pendapatan2 = jml_prtianggota2 + jml_pendnon2;

                    let jml_bbnanggota = data.simpanan_anggota + data.simpanan_berjangka_anggota;
                    let jml_bbnanggota2 = data.simpanan_anggota2 + data.simpanan_berjangka_anggota2;
                    let jml_bbnnon = data.jasa_simpanan + data.simpanan_nonberjangka + data.jasa_hutang_bank + data.pinjaman_lpdb + data.modal_penyertaan + data.pihak_ketiga;
                    let jml_bbnnon2 = data.jasa_simpanan2 + data.simpanan_nonberjangka2 + data.jasa_hutang_bank2 + data.pinjaman_lpdb2 + data.modal_penyertaan2 + data.pihak_ketiga2;
                    let jml_beban = jml_bbnanggota + jml_bbnnon;
                    let jml_beban2 = jml_bbnanggota2 + jml_bbnnon2;

                    let sisa_kotor = jml_pendapatan - jml_beban;
                    let sisa_kotor2 = jml_pendapatan2 - jml_beban2;

                    let jml_bbnusaha = data.biaya_penyisihan + data.biaya_bunga + data.honor_karyawan + data.biaya_perkap + data.biaya_asuransi + data.biaya_listrik + data.biaya_penyusutan + data.biaya_lain + data.biaya_pemeliharaan + data.biaya_promosi + data.biaya_akomodasi + data.biaya_transportasi + data.biaya_administrasi + data.biaya_pajak + data.biaya_sewa + data.biaya_operasional;
                    let jml_bbnusaha2 = data.biaya_penyisihan2 + data.biaya_bunga2 + data.honor_karyawan2 + data.biaya_perkap2 + data.biaya_asuransi2 + data.biaya_listrik2 + data.biaya_penyusutan2 + data.biaya_lain2 + data.biaya_pemeliharaan2 + data.biaya_promosi2 + data.biaya_akomodasi2 + data.biaya_transportasi2 + data.biaya_administrasi2 + data.biaya_pajak2 + data.biaya_sewa2 + data.biaya_operasional2;

                    let porsi_anggota = (jml_prtianggota/jml_pendapatan)*jml_bbnusaha;
                    let porsi_non = (jml_pendnon/jml_pendapatan)*jml_bbnusaha;

                    let jml_bbnpkop = data.beban_pengawas + data.beban_pembinaan + data.beban_rapat;
                    let jml_bbnpkop2 = data.beban_pengawas2 + data.beban_pembinaan2 + data.beban_rapat2;
                    let spa = sisa_kotor - porsi_anggota - jml_bbnpkop;
                    let laba_non = (jml_pendnon - jml_bbnnon) - porsi_non;
                    let laba_usaha = sisa_kotor - jml_bbnusaha - jml_bbnpkop;
                    let laba_usaha2 = sisa_kotor2 - jml_bbnusaha2 - jml_bbnpkop2;

                    let jml_pendlain = data.pendapatan_deviden + data.pendapatan_sewa + data.pendapatan_lain;
                    let jml_pendlain2 = data.pendapatan_deviden2 + data.pendapatan_sewa2 + data.pendapatan_lain2;
                    let jml_biayalain = data.biaya_lain;
                    let jml_biayalain2 = data.biayalain2;
                    let pend_biaya = jml_pendlain - jml_biayalain;
                    let pend_biaya2 = jml_pendlain2 - jml_biayalain2;

                    let sblm_pajak = laba_usaha + pend_biaya;
                    let sblm_pajak2 = laba_usaha2 + pend_biaya2;
                    let stlh_pajak = sblm_pajak - data.pajak_penghasilan;
                    let stlh_pajak2 = sblm_pajak2 - data.pajak_penghasilan2;

                    //hasil query bs
                    let kw_lancar = data.tabungan_anggota + data.tabungan_nonanggota + data.simpanan_bjkanggota + data.simpanan_bjkcalon + data.hutang_bank + data.hutang_lpdb + data.hutang_pajak + data.beban_hrsdibayar + data.pendapatan_dimuka + data.hutang_biaya + data.dana_bagian + data.titipan_dana + data.titipan_jaminan + data.titipan_zakat + data.hutang_sewa + data.kewajiban_lain;
                    let jml_kasbnk = data.kas + data.giro + data.tabungan + data.deposito + data.simpanan_sukarela + data.simpanan_berjangka_koplain;

                    let jml_piutang = data.piutang_anggota + data.piutang_calon + data.piutang_koplain + data.piutang_bunga + data.piutang_lain;
                    let jml_eku = data.simpanan_pokok + data.simpanan_wajib + data.modal_penyetaraan + data.modal_penyertaan + data.modal_sumbangan + data.cadangan_umum + data.cadangan_tujuan + data.shu_sebelum + data.shu_berjalan;
                    let jml_aktlancar = data.kas + data.giro + data.tabungan + data.deposito + data.simpanan_sukarela + data.simpanan_berjangka_koplain + data.surat_berharga + (data.piutang_anggota + data.piutang_calon + data.piutang_koplain + data.piutang_bunga + data.piutang_lain - data.penyisihan_pinjaman);

                    let jml_kweku = kw_lancar + (data.hutang_bank_panjang + data.hutang_koplain + data.pasiva + data.simpanan_berjangka + data.titipan_dana_panjang + data.hutang_lpdb_panjang + data.hutang_sewa_panjang + data.hutang_lain) + (data.simpanan_pokok + data.simpanan_wajib + data.modal_penyetaraan + data.modal_penyertaan + data.modal_sumbangan + data.cadangan_umum + data.cadangan_tujuan + data.shu_sebelum + data.shu_berjalan);
                    let jmlakt = (jml_kasbnk + data.surat_berharga + (data.piutang_anggota + data.piutang_calon + data.piutang_koplain + data.piutang_bunga + data.piutang_lain - data.penyisihan_pinjaman)) + (data.tabungan_berjangka + data.surat_berharga_panjang + data.simpanan_lain + data.penyertaan_koplain + data.penyertaan_lemkeulain + data.inv_jplain + (data.properti_inv - data.akm_peny_prop)) + ((data.tanah + data.bangunan + data.kendaraan + data.inv_perkap) - data.akm_peny) + (data.aktiva_tdk_berwujud) + (data.beban_ditangguhkan + data.amortisasi_beban + data.agunan_diambil + data.beban_praoperasional + data.amortisasi_biaya + data.lain)
                    let jmlakt2 = (data.kas2 + data.giro2 + data.tabungan2 + data.deposito2 + data.simpanan_sukarela2 + data.simpanan_berjangka_koplain2 + data.surat_berharga2 + (data.piutang_dagang2 + data.piutang_anggota2 + data.piutang_calon2 + data.piutang_koplain2 + data.piutang_bunga2 + data.piutang_lain2 - data.penyisihan_pinjaman2)) + (data.tabungan_berjangka2 + data.surat_berharga_panjang2 + data.simpanan_lain2 + data.penyertaan_koplain2 + data.penyertaan_lemkeulain2 + data.inv_jplain2 + (data.properti_inv2 - data.akm_peny_prop2)) + ((data.tanah2 + data.bangunan2 + data.kendaraan2 + data.inv_perkap2) - data.akm_peny2) + (data.aktiva_tdk_berwujud2) + (data.beban_ditangguhkan2 + data.amortisasi_beban2 + data.agunan_diambil2 + data.beban_praoperasional2 + data.amortisasi_biaya2 + data.lain2);
                    let jml_eku2 = data.simpanan_pokok2 + data.simpanan_wajib2 + data.modal_penyetaraan2 + data.modal_penyertaan2 + data.modal_sumbangan2 + data.cadangan_umum2 + data.cadangan_tujuan2 + data.shu_sebelum2 + data.shu_berjalan2;

                    //memasukkan data ke tabel kinerja keuangan
                    //baris ke-1
                    let kkr1 = (((stlh_pajak/jmlakt)*100).toFixed(2));
                    // console.log(jml_biayalain);
                    // console.log(jmlakt);

                    if (kkr1 == Infinity) {
                        kkr1 = 0;
                    } else if (isNaN(kkr1)) kkr1 = 0;
                    $("#kkr1").text(kkr1+"%");
                    // console.log(kkr1);

                    if (kkr1 <= 3) {
                        $("#kkn1").text("4");
                    } else if (kkr1 <= 5) {
                        $("#kkn1").text("3");
                    } else if (kkr1 <= 7) {
                        $("#kkn1").text("2");
                    } else {
                        $("#kkn1").text("1");
                    }

                    if (kkr1 <= 3) {
                        $("#kkk1").text("Tidak Baik");
                    } else if (kkr1 <= 5) {
                        $("#kkk1").text("Kurang Baik");
                    } else if (kkr1 <= 7) {
                        $("#kkk1").text("Cukup Baik");
                    } else {
                        $("#kkk1").text("Baik");
                    }

                    if (kkr1 <= 3) {
                        $("#kks1").text("1");
                    } else if (kkr1 <= 5) {
                        $("#kks1").text("2");
                    } else if (kkr1 <= 7) {
                        $("#kks1").text("3");
                    } else {
                        $("#kks1").text("4");
                    }

                    //baris ke-2
                    let kkr2 = (((stlh_pajak/jml_kweku)*100).toFixed(2));

                    if (kkr2 == Infinity) {
                        kkr2 = 0;
                    } else if (isNaN(kkr2)) kkr2 = 0;


                    $("#kkr2").text(kkr2+"%");

                    if (kkr2 <= 5) {
                        $("#kkn2").text("4");
                    } else if (kkr2 <= 7) {
                        $("#kkn2").text("3");
                    } else if (kkr2 <= 10) {
                        $("#kkn2").text("2");
                    } else {
                        $("#kkn2").text("1");
                    }

                    if (kkr2 <= 5) {
                        $("#kkk2").text("Tidak Baik");
                    } else if (kkr2 <= 7) {
                        $("#kkk2").text("Kurang Baik");
                    } else if (kkr2 <= 10) {
                        $("#kkk2").text("Cukup Baik");
                    } else {
                        $("#kkk2").text("Baik");
                    }

                    if (kkr2 <= 5) {
                        $("#kks2").text("1");
                    } else if (kkr2 <= 7) {
                        $("#kks2").text("2");
                    } else if (kkr2 <= 10) {
                        $("#kks2").text("3");
                    } else {
                        $("#kks2").text("4");
                    }

                    //baris ke-3
                    let kkr3 = ((((jml_prtianggota - jml_bbnanggota)/(porsi_anggota + jml_bbnpkop))*100).toFixed(2));
                    if (kkr3 == Infinity) {
                        kkr3 = 0;
                    } else if (isNaN(kkr3)) kkr3 = 0;


                    $("#kkr3").text(kkr3+"%");

                    if (kkr3 <= 5) {
                        $("#kkn3").text("4");
                    } else if (kkr3 <= 7) {
                        $("#kkn3").text("3");
                    } else if (kkr3 <= 10) {
                        $("#kkn3").text("2");
                    } else {
                        $("#kkn3").text("1");
                    }

                    if (kkr3 <= 5) {
                        $("#kkk3").text("Tidak Baik");
                    } else if (kkr3 <= 7) {
                        $("#kkk3").text("Kurang Baik");
                    } else if (kkr3 <= 10) {
                        $("#kkk3").text("Cukup Baik");
                    } else {
                        $("#kkk3").text("Baik");
                    }

                    if (kkr3 <= 5) {
                        $("#kks3").text("1");
                    } else if (kkr3 <= 7) {
                        $("#kks3").text("2");
                    } else if (kkr3 <= 10) {
                        $("#kks3").text("3");
                    } else {
                        $("#kks3").text("4");
                    }

                    //baris ke-4 (setelah rentabilitas)
                    let kkr4 = ((((jml_bbnanggota + porsi_anggota + jml_bbnpkop)/jml_prtianggota)*100).toFixed(2));

                    if (kkr4 == Infinity) {
                        kkr4 = 0;
                    } else if (isNaN(kkr4)) kkr4 = 0;


                    $("#kkr4").text(kkr4+"%");

                    if (kkr4 <= 80) {
                        $("#kkn4").text("4");
                    } else if (kkr4 <= 90) {
                        $("#kkn4").text("3");
                    } else if (kkr4 <= 100) {
                        $("#kkn4").text("2");
                    } else {
                        $("#kkn4").text("1");
                    }

                    if (kkr4 <= 80) {
                        $("#kkk4").text("Tidak Baik");
                    } else if (kkr4 <= 90) {
                        $("#kkk4").text("Kurang Baik");
                    } else if (kkr4 <= 100) {
                        $("#kkk4").text("Cukup Baik");
                    } else {
                        $("#kkk4").text("Baik");
                    }

                    if (kkr4 <= 80) {
                        $("#kks4").text("1");
                    } else if (kkr4 <= 90) {
                        $("#kks4").text("2");
                    } else if (kkr4 <= 100) {
                        $("#kks4").text("3");
                    } else {
                        $("#kks4").text("4");
                    }

                    //baris ke-5
                    let kkr5 = (((jml_bbnusaha/sisa_kotor)*100).toFixed(2));

                    if (kkr5 == Infinity) {
                        kkr5 = 0;
                    } else if (isNaN(kkr5)) kkr5 = 0;


                    $("#kkr5").text(kkr5+"%");

                    if (kkr5 <= 40) {
                        $("#kkn5").text("4");
                    } else if (kkr5 <= 60) {
                        $("#kkn5").text("3");
                    } else if (kkr5 <= 80) {
                        $("#kkn5").text("2");
                    } else {
                        $("#kkn5").text("1");
                    }

                    if (kkr5 <= 40) {
                        $("#kkk5").text("Tidak Baik");
                    } else if (kkr5 <= 60) {
                        $("#kkk5").text("Kurang Baik");
                    } else if (kkr5 <= 80) {
                        $("#kkk5").text("Cukup Baik");
                    } else {
                        $("#kkk5").text("Baik");
                    }

                    if (kkr5 <= 40) {
                        $("#kks5").text("1");
                    } else if (kkr5 <= 60) {
                        $("#kks5").text("2");
                    } else if (kkr5 <= 80) {
                        $("#kks5").text("3");
                    } else {
                        $("#kks5").text("4");
                    }

                    //baris ke-6(likuiditas)
                    let kkr6 = (((jml_kasbnk/kw_lancar)*100).toFixed(2));

                    if (kkr6 == Infinity) {
                        kkr6 = 0;
                    } else if (isNaN(kkr6)) kkr6 = 0;

                    $("#kkr6").text(kkr6+"%");

                    if (kkr6 <= 10) {
                        $("#kkn6").text("4");
                    } else if (kkr6 <= 20) {
                        $("#kkn6").text("3");
                    } else if (kkr6 <= 30) {
                        $("#kkn6").text("2");
                    } else {
                        $("#kkn6").text("1");
                    }

                    if (kkr6 <= 10) {
                        $("#kkk6").text("Tidak Baik");
                    } else if (kkr6 <= 20) {
                        $("#kkk6").text("Kurang Baik");
                    } else if (kkr6 <= 30) {
                        $("#kkk6").text("Cukup Baik");
                    } else {
                        $("#kkk6").text("Baik");
                    }

                    if (kkr6 <= 10) {
                        $("#kks6").text("1");
                    } else if (kkr6 <= 20) {
                        $("#kks6").text("2");
                    } else if (kkr6 <= 30) {
                        $("#kks6").text("3");
                    } else {
                        $("#kks6").text("4");
                    }

                    // baris ke-7
                    let kkr7 = (((jml_piutang/(jml_kweku - data.hutang_pajak - data.beban_hrsdibayar - data.hutang_biaya))*100).toFixed(2));

                    if (kkr7 == Infinity) {
                        kkr7 = 0;
                    } else if (isNaN(kkr7)) kkr7 = 0;

                    $("#kkr7").text(kkr7+"%");

                    if (kkr7 <= 60) {
                        $("#kkn7").text("4");
                    } else if (kkr7 <= 75) {
                        $("#kkn7").text("3");
                    } else if (kkr7 <= 90) {
                        $("#kkn7").text("2");
                    } else {
                        $("#kkn7").text("1");
                    }

                    if (kkr7 <= 60) {
                        $("#kkk7").text("Tidak Baik");
                    } else if (kkr7 <= 75) {
                        $("#kkk7").text("Kurang Baik");
                    } else if (kkr7 <= 90) {
                        $("#kkk7").text("Cukup Baik");
                    } else {
                        $("#kkk7").text("Baik");
                    }

                    if (kkr7 <= 60) {
                        $("#kks7").text("1");
                    } else if (kkr7 <= 75) {
                        $("#kks7").text("2");
                    } else if (kkr7 <= 90) {
                        $("#kks7").text("3");
                    } else {
                        $("#kks7").text("4");
                    }

                    //baris ke-8
                    let kkr8 = (((jml_aktlancar/kw_lancar)*100).toFixed(2));

                    if (kkr8 == Infinity) {
                        kkr8 = 0;
                    } else if (isNaN(kkr8)) kkr8 = 0;

                    $("#kkr8").text(kkr8+"%");

                    if (kkr8 <= 75) {
                        $("#kkn8").text("4");
                    } else if (kkr8 <= 100) {
                        $("#kkn8").text("3");
                    } else if (kkr8 <= 125) {
                        $("#kkn8").text("2");
                    } else {
                        $("#kkn8").text("1");
                    }

                    if (kkr8 <= 75) {
                        $("#kkk8").text("Tidak Baik");
                    } else if (kkr8 <= 100) {
                        $("#kkk8").text("Kurang Baik");
                    } else if (kkr8 <= 125) {
                        $("#kkk8").text("Cukup Baik");
                    } else {
                        $("#kkk8").text("Baik");
                    }

                    if (kkr8 <= 75) {
                        $("#kks8").text("1");
                    } else if (kkr8 <= 100) {
                        $("#kks8").text("2");
                    } else if (kkr8 <= 125) {
                        $("#kks8").text("3");
                    } else {
                        $("#kks8").text("4");
                    }

                    //baris ke-9
                    let kkr9 = ((data.beban_penjualan/data.barang_dagang).toFixed(2));

                    if (kkr9 == Infinity) {
                        kkr9 = 0;
                    } else if (isNaN(kkr9)) kkr9 = 0;

                    $("#kkr9").text(kkr9);

                    if (kkr9 <= 3) {
                        $("#kkn9").text("4");
                    } else if (kkr9 <= 7) {
                        $("#kkn9").text("3");
                    } else if (kkr9 <= 10) {
                        $("#kkn9").text("2");
                    } else {
                        $("#kkn9").text("1");
                    }

                    if (kkr9 <= 3) {
                        $("#kkk9").text("Tidak Baik");
                    } else if (kkr9 <= 7) {
                        $("#kkk9").text("Kurang Baik");
                    } else if (kkr9 <= 10) {
                        $("#kkk9").text("Cukup Baik");
                    } else {
                        $("#kkk9").text("Baik");
                    }

                    if (kkr9 <= 3) {
                        $("#kks9").text("1");
                    } else if (kkr9 <= 7) {
                        $("#kks9").text("2");
                    } else if (kkr9 <= 10) {
                        $("#kks9").text("3");
                    } else {
                        $("#kks9").text("4");
                    }

                    //baris ke-10
                    let kkr10 = (((data.piutang_dagang/(data.penjualan_anggota + data.penjualan))/360).toFixed(2));

                    if (kkr10 == Infinity) {
                        kkr10 = 0;
                    } else if (isNaN(kkr10)) kkr10 = 0;

                    $("#kkr10").text(kkr10);

                    if (kkr10 <= 100) {
                        $("#kkn10").text("4");
                    } else if (kkr10 <= 140) {
                        $("#kkn10").text("3");
                    } else if (kkr10 <= 180) {
                        $("#kkn10").text("2");
                    } else {
                        $("#kkn10").text("1");
                    }

                    if (kkr10 <= 100) {
                        $("#kkk10").text("Tidak Baik");
                    } else if (kkr10 <= 140) {
                        $("#kkk10").text("Kurang Baik");
                    } else if (kkr10 <= 180) {
                        $("#kkk10").text("Cukup Baik");
                    } else {
                        $("#kkk10").text("Baik");
                    }

                    if (kkr10 <= 100) {
                        $("#kks10").text("1");
                    } else if (kkr10 <= 140) {
                        $("#kks10").text("2");
                    } else if (kkr10 <= 180) {
                        $("#kks10").text("3");
                    } else {
                        $("#kks10").text("4");
                    }

                    //baris ke-11
                    let kkr11 = (((data.penjualan_anggota + data.penjualan)/data.piutang_dagang).toFixed(2));

                    if (kkr11 == Infinity) {
                        kkr11 = 0;
                    } else if (isNaN(kkr11)) kkr11 = 0

                    $("#kkr11").text(kkr11);

                    if (kkr11 <= 4) {
                        $("#kkn11").text("4");
                    } else if (kkr11 <= 7) {
                        $("#kkn11").text("3");
                    } else if (kkr11 <= 10) {
                        $("#kkn11").text("2");
                    } else {
                        $("#kkn11").text("1");
                    }

                    if (kkr11 <= 4) {
                        $("#kkk11").text("Tidak Baik");
                    } else if (kkr11 <= 7) {
                        $("#kkk11").text("Kurang Baik");
                    } else if (kkr11 <= 10) {
                        $("#kkk11").text("Cukup Baik");
                    } else {
                        $("#kkk11").text("Baik");
                    }

                    if (kkr11 <= 4) {
                        $("#kks11").text("1");
                    } else if (kkr11 <= 7) {
                        $("#kks11").text("2");
                    } else if (kkr11 <= 10) {
                        $("#kks11").text("3");
                    } else {
                        $("#kks11").text("4");
                    }

                    //baris ke-12
                    let kkr12 = ((((data.penjualan_anggota + data.penjualan)/jml_eku)*100).toFixed(2));

                    if (kkr12 == Infinity) {
                        kkr12 = 0;
                    } else if (isNaN(kkr12)) kkr12 = 0;

                    $("#kkr12").text(kkr12+"%");

                    if (kkr12 <= 25) {
                        $("#kkn12").text("4");
                    } else if (kkr12 <= 75) {
                        $("#kkn12").text("3");
                    } else if (kkr12 <= 125) {
                        $("#kkn12").text("2");
                    } else {
                        $("#kkn12").text("1");
                    }

                    if (kkr12 <= 25) {
                        $("#kkk12").text("Tidak Baik");
                    } else if (kkr12 <= 75) {
                        $("#kkk12").text("Kurang Baik");
                    } else if (kkr12 <= 125) {
                        $("#kkk12").text("Cukup Baik");
                    } else {
                        $("#kkk12").text("Baik");
                    }

                    if (kkr12 <= 25) {
                        $("#kks12").text("1");
                    } else if (kkr12 <= 75) {
                        $("#kks12").text("2");
                    } else if (kkr12 <= 125) {
                        $("#kks12").text("3");
                    } else {
                        $("#kks12").text("4");
                    }

                    //baris ke-13
                    let kkr13 = ((((data.penjualan_anggota + data.penjualan)/jmlakt)*100).toFixed(2));

                    if (kkr13 == Infinity) {
                        kkr13 = 0;
                    } else if (isNaN(kkr13)) kkr13 = 0;

                    $("#kkr13").text(kkr13+"%");

                    if (kkr13 <= 5) {
                        $("#kkn13").text("4");
                    } else if (kkr13 <= 15) {
                        $("#kkn13").text("3");
                    } else if (kkr13 <= 25) {
                        $("#kkn13").text("2");
                    } else {
                        $("#kkn13").text("1");
                    }

                    if (kkr13 <= 5) {
                        $("#kkk13").text("Tidak Baik");
                    } else if (kkr13 <= 15) {
                        $("#kkk13").text("Kurang Baik");
                    } else if (kkr13 <= 25) {
                        $("#kkk13").text("Cukup Baik");
                    } else {
                        $("#kkk13").text("Baik");
                    }

                    if (kkr13 <= 5) {
                        $("#kks13").text("1");
                    } else if (kkr13 <= 15) {
                        $("#kks13").text("2");
                    } else if (kkr13 <= 25) {
                        $("#kks13").text("3");
                    } else {
                        $("#kks13").text("4");
                    }

                    //baris ke-14
                    let kkr14 = ((((jmlakt - jmlakt2)/jmlakt2)*100).toFixed(2));

                    if (kkr14 == Infinity) {
                        kkr14 = 0;
                    } else if (isNaN(kkr14)) kkr14 = 0;

                    $("#kkr14").text(kkr14+"%");

                    if (kkr14 <= 4) {
                        $("#kkn14").text("4");
                    } else if (kkr14 <= 7) {
                        $("#kkn14").text("3");
                    } else if (kkr14 <= 10) {
                        $("#kkn14").text("2");
                    } else {
                        $("#kkn14").text("1");
                    }

                    if (kkr14 <= 4) {
                        $("#kkk14").text("Tidak Baik");
                    } else if (kkr14 <= 7) {
                        $("#kkk14").text("Kurang Baik");
                    } else if (kkr14 <= 10) {
                        $("#kkk14").text("Cukup Baik");
                    } else {
                        $("#kkk14").text("Baik");
                    }

                    if (kkr14 <= 4) {
                        $("#kks14").text("1");
                    } else if (kkr14 <= 7) {
                        $("#kks14").text("2");
                    } else if (kkr14 <= 10) {
                        $("#kks14").text("3");
                    } else {
                        $("#kks14").text("4");
                    }

                    //baris ke-15
                    let kkr15 = ((((jml_eku - jml_eku2)/jml_eku2)*100).toFixed(2));

                    if (kkr15 == Infinity) {
                        kkr15 = 0;
                    } else if (isNaN(kkr15)) kkr15 = 0;

                    $("#kkr15").text(kkr15+"%");

                    if (kkr15 <= 4) {
                        $("#kkn15").text("4");
                    } else if (kkr15 <= 7) {
                        $("#kkn15").text("3");
                    } else if (kkr15 <= 10) {
                        $("#kkn15").text("2");
                    } else {
                        $("#kkn15").text("1");
                    }

                    if (kkr15 <= 4) {
                        $("#kkk15").text("Tidak Baik");
                    } else if (kkr15 <= 7) {
                        $("#kkk15").text("Kurang Baik");
                    } else if (kkr15 <= 10) {
                        $("#kkk15").text("Cukup Baik");
                    } else {
                        $("#kkk15").text("Baik");
                    }

                    if (kkr15 <= 4) {
                        $("#kks15").text("1");
                    } else if (kkr15 <= 7) {
                        $("#kks15").text("2");
                    } else if (kkr15 <= 10) {
                        $("#kks15").text("3");
                    } else {
                        $("#kks15").text("4");
                    }

                    //baris ke-16
                    let kkr16 = ((((stlh_pajak - stlh_pajak2)/stlh_pajak2)*100).toFixed(2));

                    if (kkr16 == Infinity) {
                        kkr16 = 0;
                    } else if (isNaN(kkr16)) kkr16 = 0;

                    $("#kkr16").text(kkr16+"%");

                    if (kkr16 <= 1) {
                        $("#kkn16").text("4");
                    } else if (kkr16 <= 3) {
                        $("#kkn16").text("3");
                    } else if (kkr16 <= 5) {
                        $("#kkn16").text("2");
                    } else {
                        $("#kkn16").text("1");
                    }

                    if (kkr16 <= 1) {
                        $("#kkk16").text("Tidak Baik");
                    } else if (kkr16 <= 3) {
                        $("#kkk16").text("Kurang Baik");
                    } else if (kkr16 <= 5) {
                        $("#kkk16").text("Cukup Baik");
                    } else {
                        $("#kkk16").text("Baik");
                    }

                    if (kkr16 <= 1) {
                        $("#kks16").text("1");
                    } else if (kkr16 <= 3) {
                        $("#kks16").text("2");
                    } else if (kkr16 <= 5) {
                        $("#kks16").text("3");
                    } else {
                        $("#kks16").text("4");
                    }

                    //baris ke-17
                    let kkr17 = (((jml_prtianggota/jml_pendapatan)*100).toFixed(2));

                    if (kkr17 == Infinity) {
                        kkr17 = 0;
                    } else if (isNaN(kkr17)) kkr17 = 0;

                    $("#kkr17").text(kkr17+"%");

                    if (kkr17 <= 35) {
                        $("#kkn17").text("4");
                    } else if (kkr17 <= 60) {
                        $("#kkn17").text("3");
                    } else if (kkr17 <= 85) {
                        $("#kkn17").text("2");
                    } else {
                        $("#kkn17").text("1");
                    }

                    if (kkr17 <= 35) {
                        $("#kkk17").text("Tidak Baik");
                    } else if (kkr17 <= 60) {
                        $("#kkk17").text("Kurang Baik");
                    } else if (kkr17 <= 85) {
                        $("#kkk17").text("Cukup Baik");
                    } else {
                        $("#kkk17").text("Baik");
                    }

                    if (kkr17 <= 35) {
                        $("#kks17").text("1");
                    } else if (kkr17 <= 60) {
                        $("#kks17").text("2");
                    } else if (kkr17 <= 85) {
                        $("#kks17").text("3");
                    } else {
                        $("#kks17").text("4");
                    }

                    //baris ke-18
                    let kkr18 = (((stlh_pajak/(data.simpanan_pokok + data.simpanan_wajib))*100).toFixed(2));

                    if (kkr18 == Infinity) {
                        kkr18 = 0;
                    } else if (isNaN(kkr18)) kkr18 = 0;

                    $("#kkr18").text(kkr18+"%");

                    if (kkr18 <= 10) {
                        $("#kkn18").text("4");
                    } else if (kkr18 <= 20) {
                        $("#kkn18").text("3");
                    } else if (kkr18 <= 30) {
                        $("#kkn18").text("2");
                    } else {
                        $("#kkn18").text("1");
                    }

                    if (kkr18 <= 10) {
                        $("#kkk18").text("Tidak Baik");
                    } else if (kkr18 <= 20) {
                        $("#kkk18").text("Kurang Baik");
                    } else if (kkr18 <= 30) {
                        $("#kkk18").text("Cukup Baik");
                    } else {
                        $("#kkk18").text("Baik");
                    }

                    if (kkr18 <= 10) {
                        $("#kks18").text("1");
                    } else if (kkr18 <= 20) {
                        $("#kks18").text("2");
                    } else if (kkr18 <= 30) {
                        $("#kks18").text("3");
                    } else {
                        $("#kks18").text("4");
                    }

                    //baris ke-19
                    let kkr19 = ((((data.tabungan_anggota + data.simpanan_bjkanggota)/(data.tabungan_anggota + data.tabungan_nonanggota + data.simpanan_bjkanggota + data.simpanan_bjkcalon))*100).toFixed(2));

                    if (kkr19 == Infinity) {
                        kkr19 = 0;
                    } else if (isNaN(kkr19)) kkr19 = 0;

                    $("#kkr19").text(kkr19+"%");

                    if (kkr19 <= 25) {
                        $("#kkn19").text("4");
                    } else if (kkr19 <= 50) {
                        $("#kkn19").text("3");
                    } else if (kkr19 <= 75) {
                        $("#kkn19").text("2");
                    } else {
                        $("#kkn19").text("1");
                    }

                    if (kkr19 <= 25) {
                        $("#kkk19").text("Tidak Baik");
                    } else if (kkr19 <= 50) {
                        $("#kkk19").text("Kurang Baik");
                    } else if (kkr19 <= 75) {
                        $("#kkk19").text("Cukup Baik");
                    } else {
                        $("#kkk19").text("Baik");
                    }

                    if (kkr19 <= 25) {
                        $("#kks19").text("1");
                    } else if (kkr19 <= 50) {
                        $("#kks19").text("2");
                    } else if (kkr19 <= 75) {
                        $("#kks19").text("3");
                    } else {
                        $("#kks19").text("4");
                    }

                    //hasil rentabilitas
                    let totalkpp = 3;
                    let kkn1 = parseInt($("#kkn1").text());
                    let kkn2 = parseInt($("#kkn2").text());
                    let kkn3 = parseInt($("#kkn2").text());

                    let kks1 = parseInt($("#kks1").text());
                    let kks2 = parseInt($("#kks2").text());
                    let kks3 = parseInt($("#kks2").text());

                    let totalkkn = kkn1 + kkn2 + kkn3;
                    let totalkks = kks1 + kks2 + kks3;
                    // console.log(totalkks);

                    $("#hr1").text(totalkkn);
                    $("#hr2").text((totalkkn/totalkpp).toFixed(2));
                    $("#hr3").text(((totalkks*100)/(totalkpp*4)).toFixed(2));

                    let hr3 = $("#hr3").text();
                    if (hr3 <= 51 ) {
                        $("#hr4").text("DALAM PENGAWASAN KHUSUS");
                        $("#colorhmr").css( "background-color", "red" );
                    } else if (hr3 <= 66) {
                        $("#hr4").text("DALAM PENGAWASAN");
                        $("#colorhmr").css( "background-color", "#FF8C00" );
                    } else if (hr3 <= 80) {
                        $("#hr4").text("CUKUP SEHAT");
                        $("#colorhmr").css( "background-color", "#FFD700" );
                    } else {
                        $("#hr4").text("SEHAT");
                        $("#colorhmr").css( "background-color", "#7CFC00" );
                    }

                    //hasil efisiensi
                    let totalkpp_ef = 2;
                    let kkn4 = parseInt($("#kkn4").text());
                    let kkn5 = parseInt($("#kkn5").text());

                    let kks4 = parseInt($("#kks4").text());
                    let kks5 = parseInt($("#kks5").text());

                    let totalkkn_ef = kkn4 + kkn5;
                    let totalkks_ef = kks4 + kks5;

                    $("#he1").text(totalkkn_ef);
                    $("#he2").text((totalkkn_ef/totalkpp_ef).toFixed(2));
                    $("#he3").text(((totalkks_ef*100)/(totalkpp_ef*4)).toFixed(2));

                    let he3 = $("#he3").text();
                    if (he3 <= 51 ) {
                        $("#he4").text("DALAM PENGAWASAN KHUSUS");
                        $("#colorhmr").css( "background-color", "red" );
                    } else if (he3 <= 66) {
                        $("#he4").text("DALAM PENGAWASAN");
                        $("#colorhmr").css( "background-color", "#FF8C00" );
                    } else if (he3 <= 80) {
                        $("#he4").text("CUKUP SEHAT");
                        $("#colorhmr").css( "background-color", "#FFD700" );
                    } else {
                        $("#he4").text("SEHAT");
                        $("#colorhmr").css( "background-color", "#7CFC00" );
                    }

                    //hasil likuiditas
                    let totalkpp_el = 3;
                    let kkn6 = parseInt($("#kkn6").text());
                    let kkn7 = parseInt($("#kkn7").text());
                    let kkn8 = parseInt($("#kkn8").text());

                    let kks6 = parseInt($("#kks6").text());
                    let kks7 = parseInt($("#kks7").text());
                    let kks8 = parseInt($("#kks8").text());

                    let totalkkn_el = kkn6 + kkn7 + kkn8;
                    let totalkks_el = kks6 + kks7 + kks8;

                    $("#hl1").text(totalkkn_el);
                    $("#hl2").text((totalkkn_el/totalkpp_el).toFixed(2));
                    $("#hl3").text(((totalkks_el*100)/(totalkpp_el*4)).toFixed(2));

                    let hl3 = $("#hl3").text();
                    if (hl3 <= 51 ) {
                        $("#hl4").text("DALAM PENGAWASAN KHUSUS");
                        $("#colorhmr").css( "background-color", "red" );
                    } else if (hl3 <= 66) {
                        $("#hl4").text("DALAM PENGAWASAN");
                        $("#colorhmr").css( "background-color", "#FF8C00" );
                    } else if (hl3 <= 80) {
                        $("#hl4").text("CUKUP SEHAT");
                        $("#colorhmr").css( "background-color", "#FFD700" );
                    } else {
                        $("#hl4").text("SEHAT");
                        $("#colorhmr").css( "background-color", "#7CFC00" );
                    }

                    //hasil MANAJEMEN AKTIVA DAN INVESTASI
                    let totalkpp_ai = 5;
                    let kkn9 = parseInt($("#kkn9").text());
                    let kkn10 = parseInt($("#kkn10").text());
                    let kkn11 = parseInt($("#kkn11").text());
                    let kkn12 = parseInt($("#kkn12").text());
                    let kkn13 = parseInt($("#kkn13").text());

                    let kks9 = parseInt($("#kks9").text());
                    let kks10 = parseInt($("#kks10").text());
                    let kks11 = parseInt($("#kks11").text());
                    let kks12 = parseInt($("#kks12").text());
                    let kks13 = parseInt($("#kks13").text());

                    let totalkkn_ai = kkn9 + kkn10 + kkn11 + kkn12 + kkn13;
                    let totalkks_ai = kks9 + kks10 + kks11 + kks12 + kks13;

                    $("#ai1").text(totalkkn_ai);
                    $("#ai2").text((totalkkn_ai/totalkpp_ai).toFixed(2));
                    $("#ai3").text(((totalkks_ai*100)/(totalkpp_ai*4)).toFixed(2));

                    let ai3 = $("#ai3").text();
                    if (ai3 <= 51 ) {
                        $("#ai4").text("DALAM PENGAWASAN KHUSUS");
                        $("#colorhmr").css( "background-color", "red" );
                    } else if (ai3 <= 66) {
                        $("#ai4").text("DALAM PENGAWASAN");
                        $("#colorhmr").css( "background-color", "#FF8C00" );
                    } else if (ai3 <= 80) {
                        $("#ai4").text("CUKUP SEHAT");
                        $("#colorhmr").css( "background-color", "#FFD700" );
                    } else {
                        $("#ai4").text("SEHAT");
                        $("#colorhmr").css( "background-color", "#7CFC00" );
                    }

                    //hasil pertumbuhan
                    let totalkpp_pt = 3;
                    let kkn14 = parseInt($("#kkn14").text());
                    let kkn15 = parseInt($("#kkn15").text());
                    let kkn16 = parseInt($("#kkn16").text());

                    let kks14 = parseInt($("#kks14").text());
                    let kks15 = parseInt($("#kks15").text());
                    let kks16 = parseInt($("#kks16").text());

                    let totalkkn_pt = kkn14 + kkn15 + kkn16;
                    let totalkks_pt = kks14 + kks15 + kks16;

                    $("#pt1").text(totalkkn_pt);
                    $("#pt2").text((totalkkn_pt/totalkpp_pt).toFixed(2));
                    $("#pt3").text(((totalkks_pt*100)/(totalkpp_pt*4)).toFixed(2));

                    let pt3 = $("#pt3").text();
                    if (pt3 <= 51 ) {
                        $("#pt4").text("DALAM PENGAWASAN KHUSUS");
                        $("#colorhmr").css( "background-color", "red" );
                    } else if (pt3 <= 66) {
                        $("#pt4").text("DALAM PENGAWASAN");
                        $("#colorhmr").css( "background-color", "#FF8C00" );
                    } else if (pt3 <= 80) {
                        $("#pt4").text("CUKUP SEHAT");
                        $("#colorhmr").css( "background-color", "#FFD700" );
                    } else {
                        $("#pt4").text("SEHAT");
                        $("#colorhmr").css( "background-color", "#7CFC00" );
                    }

                    //hasil jatidiri
                    let totalkpp_jd = 3;
                    let kkn17 = parseInt($("#kkn17").text());
                    let kkn18 = parseInt($("#kkn18").text());
                    let kkn19 = parseInt($("#kkn19").text());

                    let kks17 = parseInt($("#kks17").text());
                    let kks18 = parseInt($("#kks18").text());
                    let kks19 = parseInt($("#kks19").text());

                    let totalkkn_jd = kkn17 + kkn18 + kkn19;
                    let totalkks_jd = kks17 + kks18 + kks19;

                    $("#jd1").text(totalkkn_jd);
                    $("#jd2").text((totalkkn_jd/totalkpp_jd).toFixed(2));
                    $("#jd3").text(((totalkks_jd*100)/(totalkpp_jd*4)).toFixed(2));

                    let jd3 = $("#jd3").text();
                    if (jd3 <= 51 ) {
                        $("#jd4").text("DALAM PENGAWASAN KHUSUS");
                        $("#colorhmr").css( "background-color", "red" );
                    } else if (jd3 <= 66) {
                        $("#jd4").text("DALAM PENGAWASAN");
                        $("#colorhmr").css( "background-color", "#FF8C00" );
                    } else if (jd3 <= 80) {
                        $("#jd4").text("CUKUP SEHAT");
                        $("#colorhmr").css( "background-color", "#FFD700" );
                    } else {
                        $("#jd4").text("SEHAT");
                        $("#colorhmr").css( "background-color", "#7CFC00" );
                    }

                    //Hasil EVALUASI KINERJA KEUANGAN

                    $("#hekk1").text(totalkkn + totalkkn_ef);
                    //set value hekkr2
                    let hekk1 = parseInt($("#hekk1").text());
                    $("#hekk2").text((hekk1/(totalkpp + totalkpp_ef)).toFixed(2));
                    //set value hekkr3
                    let skor_ekk = totalkks + totalkks_ef;
                    let data_ekk = totalkpp + totalkpp_ef;
                    $("#hekk3").text(((skor_ekk*100)/(data_ekk*4)).toFixed(2));
                    //set value hekkr4
                    let hekk3 = $("#hekk3").text();
                    if (hekk3 <= 51) {
                        $("#hekk4").text("DALAM PENGAWASAN KHUSUS");
                        $("#colorhekkr").css( "background-color", "red" );
                    } else if (hekk3 <= 66) {
                        $("#hekk4").text("DALAM PENGAWASAN");
                        $("#colorhekkr").css( "background-color", "#FF8C00" );
                    } else if (hekk3 <= 80) {
                        $("#hekk4").text("CUKUP SEHAT");
                        $("#colorhekkr").css( "background-color", "#FFD700" );
                    } else {
                        $("#hekk4").text("SEHAT");
                        $("#colorhekkr").css( "background-color", "#7CFC00" );
                    }

                    // hasil MANAJEMEN KEUANGAN
                    $("#hmk1").text(totalkkn_ai + totalkkn_el);
                    //set value hmkr2
                    let hmk1 = parseInt($("#hmk1").text());
                    $("#hmk2").text((hmk1/(totalkks_el + totalkks_ai)).toFixed(2));
                    //set value hmkr3
                    let skor_mk = totalkks_el + totalkks_ai;
                    let data_mk = totalkpp_ai + totalkpp_el;
                    $("#hmk3").text(((skor_mk*100)/(data_mk*4)).toFixed(2));
                    //set value hmkr4
                    let hmk3 = $("#hmk3").text();
                    if (hmk3 <= 51) {
                        $("#hmk4").text("DALAM PENGAWASAN KHUSUS");
                        $("#colorhmkr").css( "background-color", "red" );
                    } else if (hmk3 <= 66) {
                        $("#hmk4").text("DALAM PENGAWASAN");
                        $("#colorhmkr").css( "background-color", "#FF8C00" );
                    } else if (hmk3 <= 80) {
                        $("#hmk4").text("CUKUP SEHAT");
                        $("#colorhmkr").css( "background-color", "#FFD700" );
                    } else {
                        $("#hmk4").text("SEHAT");
                        $("#colorhmkr").css( "background-color", "#7CFC00" );
                    }

                    //Hasil KESINAMBUNGAN KEUANGAN
                    $("#hkk1").text(totalkkn_jd + totalkkn_pt);
                    //set value hkkr2
                    let hkk1 = parseInt($("#hkk1").text());
                    $("#hkk2").text((hkk1/(totalkpp_pt + totalkpp_jd)).toFixed(2));
                    //set value hkkr3
                    let skor_kk = totalkks_pt + totalkks_jd;
                    let data_kk = totalkpp_pt + totalkpp_jd;
                    $("#hkk3").text(((skor_kk*100)/(data_kk*4)).toFixed(2));
                    //set value hkkr4
                    let hkk3 = $("#hkk3").text();
                    if (hkk3 <= 51) {
                        $("#hkk4").text("DALAM PENGAWASAN KHUSUS");
                        $("#colorhkkr").css( "background-color", "red" );
                    } else if (hkk3 <= 66) {
                        $("#hkk4").text("DALAM PENGAWASAN");
                        $("#colorhkkr").css( "background-color", "#FF8C00" );
                    } else if (hkk3 <= 80) {
                        $("#hkk4").text("CUKUP SEHAT");
                        $("#colorhkkr").css( "background-color", "#FFD700" );
                    } else {
                        $("#hkk4").text("SEHAT");
                        $("#colorhkkr").css( "background-color", "#7CFC00" );
                    }

                    // Hasil Kinerja keuangan
                    let total_nilai = totalkkn_jd + totalkkn_pt + totalkkn + totalkkn_ef + totalkkn_el + totalkkn_ai;
                    let data_a = totalkpp_pt + totalkpp_jd + totalkpp_ai + totalkpp_el + totalkpp + totalkpp_ef;
                    $("#ha1").text(total_nilai);
                    //set value hkkr2
                    let ha1 = parseInt($("#ha1").text());
                    $("#ha2").text((ha1/data_a).toFixed(2));
                    //set value hkkr3
                    let skor_a = totalkks + totalkks_ef + totalkks_el + totalkks_ai + totalkks_pt + totalkks_jd;
                    // console.log(skor_a);
                    $("#ha3").text(((skor_a*100)/(data_a*4)).toFixed(2));
                    //set value har4
                    let ha3 = $("#ha3").text();
                    if (ha3 <= 51) {
                        $("#ha4").text("DALAM PENGAWASAN KHUSUS");
                        $("#colorhar").css( "background-color", "red" );
                    } else if (ha3 <= 66) {
                        $("#ha4").text("DALAM PENGAWASAN");
                        $("#colorhar").css( "background-color", "#FF8C00" );
                    } else if (ha3 <= 80) {
                        $("#ha4").text("CUKUP SEHAT");
                        $("#colorhar").css( "background-color", "#FFD700" );
                    } else {
                        $("#ha4").text("SEHAT");
                        $("#colorhar").css( "background-color", "#7CFC00" );
                    }
                });
            });
        });
    } else {
        id = localStorage.getItem('id');

        $.get("/koperasi/datakeuangan/" + id)
        .then(res=>{
            // console.log(res);
            res.map(data=>{
                // console.log(data);
                // console.log(4/0);

                //hasil query phu
                let jml_prtianggota = data.jasa_pinjaman + data.administrasi_anggota + data.provisi_anggota + data.pelayanan_lain + data.penjualan_anggota;
                let jml_prtianggota2 = data.jasa_pinjaman2 + data.administrasi_anggota2 + data.provisi_anggota2 + data.pelayanan_lain2 + data.penjualan_anggota2;
                let jml_pendnon = data.jasa_pinjaman_non + data.administrasi + data.provisi + data.jasa_pelayanan + data.penjualan;
                let jml_pendnon2 = data.jasa_pinjaman_non2 + data.administrasi2 + data.provisi2 + data.jasa_pelayanan2 + data.penjualan2;
                let jml_pendapatan = jml_prtianggota + jml_pendnon;
                let jml_pendapatan2 = jml_prtianggota2 + jml_pendnon2;

                let jml_bbnanggota = data.simpanan_anggota + data.simpanan_berjangka_anggota;
                let jml_bbnanggota2 = data.simpanan_anggota2 + data.simpanan_berjangka_anggota2;
                let jml_bbnnon = data.jasa_simpanan + data.simpanan_nonberjangka + data.jasa_hutang_bank + data.pinjaman_lpdb + data.modal_penyertaan + data.pihak_ketiga;
                let jml_bbnnon2 = data.jasa_simpanan2 + data.simpanan_nonberjangka2 + data.jasa_hutang_bank2 + data.pinjaman_lpdb2 + data.modal_penyertaan2 + data.pihak_ketiga2;
                let jml_beban = jml_bbnanggota + jml_bbnnon;
                let jml_beban2 = jml_bbnanggota2 + jml_bbnnon2;

                let sisa_kotor = jml_pendapatan - jml_beban;
                let sisa_kotor2 = jml_pendapatan2 - jml_beban2;

                let jml_bbnusaha = data.biaya_penyisihan + data.biaya_bunga + data.honor_karyawan + data.biaya_perkap + data.biaya_asuransi + data.biaya_listrik + data.biaya_penyusutan + data.biaya_lain + data.biaya_pemeliharaan + data.biaya_promosi + data.biaya_akomodasi + data.biaya_transportasi + data.biaya_administrasi + data.biaya_pajak + data.biaya_sewa + data.biaya_operasional;
                let jml_bbnusaha2 = data.biaya_penyisihan2 + data.biaya_bunga2 + data.honor_karyawan2 + data.biaya_perkap2 + data.biaya_asuransi2 + data.biaya_listrik2 + data.biaya_penyusutan2 + data.biaya_lain2 + data.biaya_pemeliharaan2 + data.biaya_promosi2 + data.biaya_akomodasi2 + data.biaya_transportasi2 + data.biaya_administrasi2 + data.biaya_pajak2 + data.biaya_sewa2 + data.biaya_operasional2;

                let porsi_anggota = (jml_prtianggota/jml_pendapatan)*jml_bbnusaha;
                let porsi_non = (jml_pendnon/jml_pendapatan)*jml_bbnusaha;

                let jml_bbnpkop = data.beban_pengawas + data.beban_pembinaan + data.beban_rapat;
                let jml_bbnpkop2 = data.beban_pengawas2 + data.beban_pembinaan2 + data.beban_rapat2;
                let spa = sisa_kotor - porsi_anggota - jml_bbnpkop;
                let laba_non = (jml_pendnon - jml_bbnnon) - porsi_non;
                let laba_usaha = sisa_kotor - jml_bbnusaha - jml_bbnpkop;
                let laba_usaha2 = sisa_kotor2 - jml_bbnusaha2 - jml_bbnpkop2;

                let jml_pendlain = data.pendapatan_deviden + data.pendapatan_sewa + data.pendapatan_lain;
                let jml_pendlain2 = data.pendapatan_deviden2 + data.pendapatan_sewa2 + data.pendapatan_lain2;
                let jml_biayalain = data.biaya_lain;
                let jml_biayalain2 = data.biayalain2;
                let pend_biaya = jml_pendlain - jml_biayalain;
                let pend_biaya2 = jml_pendlain2 - jml_biayalain2;

                let sblm_pajak = laba_usaha + pend_biaya;
                let sblm_pajak2 = laba_usaha2 + pend_biaya2;
                let stlh_pajak = sblm_pajak - data.pajak_penghasilan;
                let stlh_pajak2 = sblm_pajak2 - data.pajak_penghasilan2;

                //hasil query bs
                let kw_lancar = data.tabungan_anggota + data.tabungan_nonanggota + data.simpanan_bjkanggota + data.simpanan_bjkcalon + data.hutang_bank + data.hutang_lpdb + data.hutang_pajak + data.beban_hrsdibayar + data.pendapatan_dimuka + data.hutang_biaya + data.dana_bagian + data.titipan_dana + data.titipan_jaminan + data.titipan_zakat + data.hutang_sewa + data.kewajiban_lain;
                let jml_kasbnk = data.kas + data.giro + data.tabungan + data.deposito + data.simpanan_sukarela + data.simpanan_berjangka_koplain;

                let jml_piutang = data.piutang_anggota + data.piutang_calon + data.piutang_koplain + data.piutang_bunga + data.piutang_lain;
                let jml_eku = data.simpanan_pokok + data.simpanan_wajib + data.modal_penyetaraan + data.modal_penyertaan + data.modal_sumbangan + data.cadangan_umum + data.cadangan_tujuan + data.shu_sebelum + data.shu_berjalan;
                let jml_aktlancar = data.kas + data.giro + data.tabungan + data.deposito + data.simpanan_sukarela + data.simpanan_berjangka_koplain + data.surat_berharga + (data.piutang_anggota + data.piutang_calon + data.piutang_koplain + data.piutang_bunga + data.piutang_lain - data.penyisihan_pinjaman);

                let jml_kweku = kw_lancar + (data.hutang_bank_panjang + data.hutang_koplain + data.pasiva + data.simpanan_berjangka + data.titipan_dana_panjang + data.hutang_lpdb_panjang + data.hutang_sewa_panjang + data.hutang_lain) + (data.simpanan_pokok + data.simpanan_wajib + data.modal_penyetaraan + data.modal_penyertaan + data.modal_sumbangan + data.cadangan_umum + data.cadangan_tujuan + data.shu_sebelum + data.shu_berjalan);
                let jmlakt = (jml_kasbnk + data.surat_berharga + (data.piutang_anggota + data.piutang_calon + data.piutang_koplain + data.piutang_bunga + data.piutang_lain - data.penyisihan_pinjaman)) + (data.tabungan_berjangka + data.surat_berharga_panjang + data.simpanan_lain + data.penyertaan_koplain + data.penyertaan_lemkeulain + data.inv_jplain + (data.properti_inv - data.akm_peny_prop)) + ((data.tanah + data.bangunan + data.kendaraan + data.inv_perkap) - data.akm_peny) + (data.aktiva_tdk_berwujud) + (data.beban_ditangguhkan + data.amortisasi_beban + data.agunan_diambil + data.beban_praoperasional + data.amortisasi_biaya + data.lain)
                let jmlakt2 = (data.kas2 + data.giro2 + data.tabungan2 + data.deposito2 + data.simpanan_sukarela2 + data.simpanan_berjangka_koplain2 + data.surat_berharga2 + (data.piutang_dagang2 + data.piutang_anggota2 + data.piutang_calon2 + data.piutang_koplain2 + data.piutang_bunga2 + data.piutang_lain2 - data.penyisihan_pinjaman2)) + (data.tabungan_berjangka2 + data.surat_berharga_panjang2 + data.simpanan_lain2 + data.penyertaan_koplain2 + data.penyertaan_lemkeulain2 + data.inv_jplain2 + (data.properti_inv2 - data.akm_peny_prop2)) + ((data.tanah2 + data.bangunan2 + data.kendaraan2 + data.inv_perkap2) - data.akm_peny2) + (data.aktiva_tdk_berwujud2) + (data.beban_ditangguhkan2 + data.amortisasi_beban2 + data.agunan_diambil2 + data.beban_praoperasional2 + data.amortisasi_biaya2 + data.lain2);
                let jml_eku2 = data.simpanan_pokok2 + data.simpanan_wajib2 + data.modal_penyetaraan2 + data.modal_penyertaan2 + data.modal_sumbangan2 + data.cadangan_umum2 + data.cadangan_tujuan2 + data.shu_sebelum2 + data.shu_berjalan2;

                //memasukkan data ke tabel kinerja keuangan
                //baris ke-1
                let kkr1 = (((stlh_pajak/jmlakt)*100).toFixed(2));
                // console.log(jml_biayalain);
                // console.log(jmlakt);

                if (kkr1 == Infinity) {
                    kkr1 = 0;
                } else if (isNaN(kkr1)) kkr1 = 0;
                $("#kkr1").text(kkr1+"%");
                // console.log(kkr1);

                if (kkr1 <= 3) {
                    $("#kkn1").text("4");
                } else if (kkr1 <= 5) {
                    $("#kkn1").text("3");
                } else if (kkr1 <= 7) {
                    $("#kkn1").text("2");
                } else {
                    $("#kkn1").text("1");
                }

                if (kkr1 <= 3) {
                    $("#kkk1").text("Tidak Baik");
                } else if (kkr1 <= 5) {
                    $("#kkk1").text("Kurang Baik");
                } else if (kkr1 <= 7) {
                    $("#kkk1").text("Cukup Baik");
                } else {
                    $("#kkk1").text("Baik");
                }

                if (kkr1 <= 3) {
                    $("#kks1").text("1");
                } else if (kkr1 <= 5) {
                    $("#kks1").text("2");
                } else if (kkr1 <= 7) {
                    $("#kks1").text("3");
                } else {
                    $("#kks1").text("4");
                }

                //baris ke-2
                let kkr2 = (((stlh_pajak/jml_kweku)*100).toFixed(2));

                if (kkr2 == Infinity) {
                    kkr2 = 0;
                } else if (isNaN(kkr2)) kkr2 = 0;


                $("#kkr2").text(kkr2+"%");

                if (kkr2 <= 5) {
                    $("#kkn2").text("4");
                } else if (kkr2 <= 7) {
                    $("#kkn2").text("3");
                } else if (kkr2 <= 10) {
                    $("#kkn2").text("2");
                } else {
                    $("#kkn2").text("1");
                }

                if (kkr2 <= 5) {
                    $("#kkk2").text("Tidak Baik");
                } else if (kkr2 <= 7) {
                    $("#kkk2").text("Kurang Baik");
                } else if (kkr2 <= 10) {
                    $("#kkk2").text("Cukup Baik");
                } else {
                    $("#kkk2").text("Baik");
                }

                if (kkr2 <= 5) {
                    $("#kks2").text("1");
                } else if (kkr2 <= 7) {
                    $("#kks2").text("2");
                } else if (kkr2 <= 10) {
                    $("#kks2").text("3");
                } else {
                    $("#kks2").text("4");
                }

                //baris ke-3
                let kkr3 = ((((jml_prtianggota - jml_bbnanggota)/(porsi_anggota + jml_bbnpkop))*100).toFixed(2));
                if (kkr3 == Infinity) {
                    kkr3 = 0;
                } else if (isNaN(kkr3)) kkr3 = 0;


                $("#kkr3").text(kkr3+"%");

                if (kkr3 <= 5) {
                    $("#kkn3").text("4");
                } else if (kkr3 <= 7) {
                    $("#kkn3").text("3");
                } else if (kkr3 <= 10) {
                    $("#kkn3").text("2");
                } else {
                    $("#kkn3").text("1");
                }

                if (kkr3 <= 5) {
                    $("#kkk3").text("Tidak Baik");
                } else if (kkr3 <= 7) {
                    $("#kkk3").text("Kurang Baik");
                } else if (kkr3 <= 10) {
                    $("#kkk3").text("Cukup Baik");
                } else {
                    $("#kkk3").text("Baik");
                }

                if (kkr3 <= 5) {
                    $("#kks3").text("1");
                } else if (kkr3 <= 7) {
                    $("#kks3").text("2");
                } else if (kkr3 <= 10) {
                    $("#kks3").text("3");
                } else {
                    $("#kks3").text("4");
                }

                //baris ke-4 (setelah rentabilitas)
                let kkr4 = ((((jml_bbnanggota + porsi_anggota + jml_bbnpkop)/jml_prtianggota)*100).toFixed(2));

                if (kkr4 == Infinity) {
                    kkr4 = 0;
                } else if (isNaN(kkr4)) kkr4 = 0;


                $("#kkr4").text(kkr4+"%");

                if (kkr4 <= 80) {
                    $("#kkn4").text("4");
                } else if (kkr4 <= 90) {
                    $("#kkn4").text("3");
                } else if (kkr4 <= 100) {
                    $("#kkn4").text("2");
                } else {
                    $("#kkn4").text("1");
                }

                if (kkr4 <= 80) {
                    $("#kkk4").text("Tidak Baik");
                } else if (kkr4 <= 90) {
                    $("#kkk4").text("Kurang Baik");
                } else if (kkr4 <= 100) {
                    $("#kkk4").text("Cukup Baik");
                } else {
                    $("#kkk4").text("Baik");
                }

                if (kkr4 <= 80) {
                    $("#kks4").text("1");
                } else if (kkr4 <= 90) {
                    $("#kks4").text("2");
                } else if (kkr4 <= 100) {
                    $("#kks4").text("3");
                } else {
                    $("#kks4").text("4");
                }

                //baris ke-5
                let kkr5 = (((jml_bbnusaha/sisa_kotor)*100).toFixed(2));

                if (kkr5 == Infinity) {
                    kkr5 = 0;
                } else if (isNaN(kkr5)) kkr5 = 0;


                $("#kkr5").text(kkr5+"%");

                if (kkr5 <= 40) {
                    $("#kkn5").text("4");
                } else if (kkr5 <= 60) {
                    $("#kkn5").text("3");
                } else if (kkr5 <= 80) {
                    $("#kkn5").text("2");
                } else {
                    $("#kkn5").text("1");
                }

                if (kkr5 <= 40) {
                    $("#kkk5").text("Tidak Baik");
                } else if (kkr5 <= 60) {
                    $("#kkk5").text("Kurang Baik");
                } else if (kkr5 <= 80) {
                    $("#kkk5").text("Cukup Baik");
                } else {
                    $("#kkk5").text("Baik");
                }

                if (kkr5 <= 40) {
                    $("#kks5").text("1");
                } else if (kkr5 <= 60) {
                    $("#kks5").text("2");
                } else if (kkr5 <= 80) {
                    $("#kks5").text("3");
                } else {
                    $("#kks5").text("4");
                }

                //baris ke-6(likuiditas)
                let kkr6 = (((jml_kasbnk/kw_lancar)*100).toFixed(2));

                if (kkr6 == Infinity) {
                    kkr6 = 0;
                } else if (isNaN(kkr6)) kkr6 = 0;

                $("#kkr6").text(kkr6+"%");

                if (kkr6 <= 10) {
                    $("#kkn6").text("4");
                } else if (kkr6 <= 20) {
                    $("#kkn6").text("3");
                } else if (kkr6 <= 30) {
                    $("#kkn6").text("2");
                } else {
                    $("#kkn6").text("1");
                }

                if (kkr6 <= 10) {
                    $("#kkk6").text("Tidak Baik");
                } else if (kkr6 <= 20) {
                    $("#kkk6").text("Kurang Baik");
                } else if (kkr6 <= 30) {
                    $("#kkk6").text("Cukup Baik");
                } else {
                    $("#kkk6").text("Baik");
                }

                if (kkr6 <= 10) {
                    $("#kks6").text("1");
                } else if (kkr6 <= 20) {
                    $("#kks6").text("2");
                } else if (kkr6 <= 30) {
                    $("#kks6").text("3");
                } else {
                    $("#kks6").text("4");
                }

                // baris ke-7
                let kkr7 = (((jml_piutang/(jml_kweku - data.hutang_pajak - data.beban_hrsdibayar - data.hutang_biaya))*100).toFixed(2));

                if (kkr7 == Infinity) {
                    kkr7 = 0;
                } else if (isNaN(kkr7)) kkr7 = 0;

                $("#kkr7").text(kkr7+"%");

                if (kkr7 <= 60) {
                    $("#kkn7").text("4");
                } else if (kkr7 <= 75) {
                    $("#kkn7").text("3");
                } else if (kkr7 <= 90) {
                    $("#kkn7").text("2");
                } else {
                    $("#kkn7").text("1");
                }

                if (kkr7 <= 60) {
                    $("#kkk7").text("Tidak Baik");
                } else if (kkr7 <= 75) {
                    $("#kkk7").text("Kurang Baik");
                } else if (kkr7 <= 90) {
                    $("#kkk7").text("Cukup Baik");
                } else {
                    $("#kkk7").text("Baik");
                }

                if (kkr7 <= 60) {
                    $("#kks7").text("1");
                } else if (kkr7 <= 75) {
                    $("#kks7").text("2");
                } else if (kkr7 <= 90) {
                    $("#kks7").text("3");
                } else {
                    $("#kks7").text("4");
                }

                //baris ke-8
                let kkr8 = (((jml_aktlancar/kw_lancar)*100).toFixed(2));

                if (kkr8 == Infinity) {
                    kkr8 = 0;
                } else if (isNaN(kkr8)) kkr8 = 0;

                $("#kkr8").text(kkr8+"%");

                if (kkr8 <= 75) {
                    $("#kkn8").text("4");
                } else if (kkr8 <= 100) {
                    $("#kkn8").text("3");
                } else if (kkr8 <= 125) {
                    $("#kkn8").text("2");
                } else {
                    $("#kkn8").text("1");
                }

                if (kkr8 <= 75) {
                    $("#kkk8").text("Tidak Baik");
                } else if (kkr8 <= 100) {
                    $("#kkk8").text("Kurang Baik");
                } else if (kkr8 <= 125) {
                    $("#kkk8").text("Cukup Baik");
                } else {
                    $("#kkk8").text("Baik");
                }

                if (kkr8 <= 75) {
                    $("#kks8").text("1");
                } else if (kkr8 <= 100) {
                    $("#kks8").text("2");
                } else if (kkr8 <= 125) {
                    $("#kks8").text("3");
                } else {
                    $("#kks8").text("4");
                }

                //baris ke-9
                let kkr9 = ((data.beban_penjualan/data.barang_dagang).toFixed(2));

                if (kkr9 == Infinity) {
                    kkr9 = 0;
                } else if (isNaN(kkr9)) kkr9 = 0;

                $("#kkr9").text(kkr9);

                if (kkr9 <= 3) {
                    $("#kkn9").text("4");
                } else if (kkr9 <= 7) {
                    $("#kkn9").text("3");
                } else if (kkr9 <= 10) {
                    $("#kkn9").text("2");
                } else {
                    $("#kkn9").text("1");
                }

                if (kkr9 <= 3) {
                    $("#kkk9").text("Tidak Baik");
                } else if (kkr9 <= 7) {
                    $("#kkk9").text("Kurang Baik");
                } else if (kkr9 <= 10) {
                    $("#kkk9").text("Cukup Baik");
                } else {
                    $("#kkk9").text("Baik");
                }

                if (kkr9 <= 3) {
                    $("#kks9").text("1");
                } else if (kkr9 <= 7) {
                    $("#kks9").text("2");
                } else if (kkr9 <= 10) {
                    $("#kks9").text("3");
                } else {
                    $("#kks9").text("4");
                }

                //baris ke-10
                let kkr10 = (((data.piutang_dagang/(data.penjualan_anggota + data.penjualan))/360).toFixed(2));

                if (kkr10 == Infinity) {
                    kkr10 = 0;
                } else if (isNaN(kkr10)) kkr10 = 0;

                $("#kkr10").text(kkr10);

                if (kkr10 <= 100) {
                    $("#kkn10").text("4");
                } else if (kkr10 <= 140) {
                    $("#kkn10").text("3");
                } else if (kkr10 <= 180) {
                    $("#kkn10").text("2");
                } else {
                    $("#kkn10").text("1");
                }

                if (kkr10 <= 100) {
                    $("#kkk10").text("Tidak Baik");
                } else if (kkr10 <= 140) {
                    $("#kkk10").text("Kurang Baik");
                } else if (kkr10 <= 180) {
                    $("#kkk10").text("Cukup Baik");
                } else {
                    $("#kkk10").text("Baik");
                }

                if (kkr10 <= 100) {
                    $("#kks10").text("1");
                } else if (kkr10 <= 140) {
                    $("#kks10").text("2");
                } else if (kkr10 <= 180) {
                    $("#kks10").text("3");
                } else {
                    $("#kks10").text("4");
                }

                //baris ke-11
                let kkr11 = (((data.penjualan_anggota + data.penjualan)/data.piutang_dagang).toFixed(2));

                if (kkr11 == Infinity) {
                    kkr11 = 0;
                } else if (isNaN(kkr11)) kkr11 = 0

                $("#kkr11").text(kkr11);

                if (kkr11 <= 4) {
                    $("#kkn11").text("4");
                } else if (kkr11 <= 7) {
                    $("#kkn11").text("3");
                } else if (kkr11 <= 10) {
                    $("#kkn11").text("2");
                } else {
                    $("#kkn11").text("1");
                }

                if (kkr11 <= 4) {
                    $("#kkk11").text("Tidak Baik");
                } else if (kkr11 <= 7) {
                    $("#kkk11").text("Kurang Baik");
                } else if (kkr11 <= 10) {
                    $("#kkk11").text("Cukup Baik");
                } else {
                    $("#kkk11").text("Baik");
                }

                if (kkr11 <= 4) {
                    $("#kks11").text("1");
                } else if (kkr11 <= 7) {
                    $("#kks11").text("2");
                } else if (kkr11 <= 10) {
                    $("#kks11").text("3");
                } else {
                    $("#kks11").text("4");
                }

                //baris ke-12
                let kkr12 = ((((data.penjualan_anggota + data.penjualan)/jml_eku)*100).toFixed(2));

                if (kkr12 == Infinity) {
                    kkr12 = 0;
                } else if (isNaN(kkr12)) kkr12 = 0;

                $("#kkr12").text(kkr12+"%");

                if (kkr12 <= 25) {
                    $("#kkn12").text("4");
                } else if (kkr12 <= 75) {
                    $("#kkn12").text("3");
                } else if (kkr12 <= 125) {
                    $("#kkn12").text("2");
                } else {
                    $("#kkn12").text("1");
                }

                if (kkr12 <= 25) {
                    $("#kkk12").text("Tidak Baik");
                } else if (kkr12 <= 75) {
                    $("#kkk12").text("Kurang Baik");
                } else if (kkr12 <= 125) {
                    $("#kkk12").text("Cukup Baik");
                } else {
                    $("#kkk12").text("Baik");
                }

                if (kkr12 <= 25) {
                    $("#kks12").text("1");
                } else if (kkr12 <= 75) {
                    $("#kks12").text("2");
                } else if (kkr12 <= 125) {
                    $("#kks12").text("3");
                } else {
                    $("#kks12").text("4");
                }

                //baris ke-13
                let kkr13 = ((((data.penjualan_anggota + data.penjualan)/jmlakt)*100).toFixed(2));

                if (kkr13 == Infinity) {
                    kkr13 = 0;
                } else if (isNaN(kkr13)) kkr13 = 0;

                $("#kkr13").text(kkr13+"%");

                if (kkr13 <= 5) {
                    $("#kkn13").text("4");
                } else if (kkr13 <= 15) {
                    $("#kkn13").text("3");
                } else if (kkr13 <= 25) {
                    $("#kkn13").text("2");
                } else {
                    $("#kkn13").text("1");
                }

                if (kkr13 <= 5) {
                    $("#kkk13").text("Tidak Baik");
                } else if (kkr13 <= 15) {
                    $("#kkk13").text("Kurang Baik");
                } else if (kkr13 <= 25) {
                    $("#kkk13").text("Cukup Baik");
                } else {
                    $("#kkk13").text("Baik");
                }

                if (kkr13 <= 5) {
                    $("#kks13").text("1");
                } else if (kkr13 <= 15) {
                    $("#kks13").text("2");
                } else if (kkr13 <= 25) {
                    $("#kks13").text("3");
                } else {
                    $("#kks13").text("4");
                }

                //baris ke-14
                let kkr14 = ((((jmlakt - jmlakt2)/jmlakt2)*100).toFixed(2));

                if (kkr14 == Infinity) {
                    kkr14 = 0;
                } else if (isNaN(kkr14)) kkr14 = 0;

                $("#kkr14").text(kkr14+"%");

                if (kkr14 <= 4) {
                    $("#kkn14").text("4");
                } else if (kkr14 <= 7) {
                    $("#kkn14").text("3");
                } else if (kkr14 <= 10) {
                    $("#kkn14").text("2");
                } else {
                    $("#kkn14").text("1");
                }

                if (kkr14 <= 4) {
                    $("#kkk14").text("Tidak Baik");
                } else if (kkr14 <= 7) {
                    $("#kkk14").text("Kurang Baik");
                } else if (kkr14 <= 10) {
                    $("#kkk14").text("Cukup Baik");
                } else {
                    $("#kkk14").text("Baik");
                }

                if (kkr14 <= 4) {
                    $("#kks14").text("1");
                } else if (kkr14 <= 7) {
                    $("#kks14").text("2");
                } else if (kkr14 <= 10) {
                    $("#kks14").text("3");
                } else {
                    $("#kks14").text("4");
                }

                //baris ke-15
                let kkr15 = ((((jml_eku - jml_eku2)/jml_eku2)*100).toFixed(2));

                if (kkr15 == Infinity) {
                    kkr15 = 0;
                } else if (isNaN(kkr15)) kkr15 = 0;

                $("#kkr15").text(kkr15+"%");

                if (kkr15 <= 4) {
                    $("#kkn15").text("4");
                } else if (kkr15 <= 7) {
                    $("#kkn15").text("3");
                } else if (kkr15 <= 10) {
                    $("#kkn15").text("2");
                } else {
                    $("#kkn15").text("1");
                }

                if (kkr15 <= 4) {
                    $("#kkk15").text("Tidak Baik");
                } else if (kkr15 <= 7) {
                    $("#kkk15").text("Kurang Baik");
                } else if (kkr15 <= 10) {
                    $("#kkk15").text("Cukup Baik");
                } else {
                    $("#kkk15").text("Baik");
                }

                if (kkr15 <= 4) {
                    $("#kks15").text("1");
                } else if (kkr15 <= 7) {
                    $("#kks15").text("2");
                } else if (kkr15 <= 10) {
                    $("#kks15").text("3");
                } else {
                    $("#kks15").text("4");
                }

                //baris ke-16
                let kkr16 = ((((stlh_pajak - stlh_pajak2)/stlh_pajak2)*100).toFixed(2));

                if (kkr16 == Infinity) {
                    kkr16 = 0;
                } else if (isNaN(kkr16)) kkr16 = 0;

                $("#kkr16").text(kkr16+"%");

                if (kkr16 <= 1) {
                    $("#kkn16").text("4");
                } else if (kkr16 <= 3) {
                    $("#kkn16").text("3");
                } else if (kkr16 <= 5) {
                    $("#kkn16").text("2");
                } else {
                    $("#kkn16").text("1");
                }

                if (kkr16 <= 1) {
                    $("#kkk16").text("Tidak Baik");
                } else if (kkr16 <= 3) {
                    $("#kkk16").text("Kurang Baik");
                } else if (kkr16 <= 5) {
                    $("#kkk16").text("Cukup Baik");
                } else {
                    $("#kkk16").text("Baik");
                }

                if (kkr16 <= 1) {
                    $("#kks16").text("1");
                } else if (kkr16 <= 3) {
                    $("#kks16").text("2");
                } else if (kkr16 <= 5) {
                    $("#kks16").text("3");
                } else {
                    $("#kks16").text("4");
                }

                //baris ke-17
                let kkr17 = (((jml_prtianggota/jml_pendapatan)*100).toFixed(2));

                if (kkr17 == Infinity) {
                    kkr17 = 0;
                } else if (isNaN(kkr17)) kkr17 = 0;

                $("#kkr17").text(kkr17+"%");

                if (kkr17 <= 35) {
                    $("#kkn17").text("4");
                } else if (kkr17 <= 60) {
                    $("#kkn17").text("3");
                } else if (kkr17 <= 85) {
                    $("#kkn17").text("2");
                } else {
                    $("#kkn17").text("1");
                }

                if (kkr17 <= 35) {
                    $("#kkk17").text("Tidak Baik");
                } else if (kkr17 <= 60) {
                    $("#kkk17").text("Kurang Baik");
                } else if (kkr17 <= 85) {
                    $("#kkk17").text("Cukup Baik");
                } else {
                    $("#kkk17").text("Baik");
                }

                if (kkr17 <= 35) {
                    $("#kks17").text("1");
                } else if (kkr17 <= 60) {
                    $("#kks17").text("2");
                } else if (kkr17 <= 85) {
                    $("#kks17").text("3");
                } else {
                    $("#kks17").text("4");
                }

                //baris ke-18
                let kkr18 = (((stlh_pajak/(data.simpanan_pokok + data.simpanan_wajib))*100).toFixed(2));

                if (kkr18 == Infinity) {
                    kkr18 = 0;
                } else if (isNaN(kkr18)) kkr18 = 0;

                $("#kkr18").text(kkr18+"%");

                if (kkr18 <= 10) {
                    $("#kkn18").text("4");
                } else if (kkr18 <= 20) {
                    $("#kkn18").text("3");
                } else if (kkr18 <= 30) {
                    $("#kkn18").text("2");
                } else {
                    $("#kkn18").text("1");
                }

                if (kkr18 <= 10) {
                    $("#kkk18").text("Tidak Baik");
                } else if (kkr18 <= 20) {
                    $("#kkk18").text("Kurang Baik");
                } else if (kkr18 <= 30) {
                    $("#kkk18").text("Cukup Baik");
                } else {
                    $("#kkk18").text("Baik");
                }

                if (kkr18 <= 10) {
                    $("#kks18").text("1");
                } else if (kkr18 <= 20) {
                    $("#kks18").text("2");
                } else if (kkr18 <= 30) {
                    $("#kks18").text("3");
                } else {
                    $("#kks18").text("4");
                }

                //baris ke-19
                let kkr19 = ((((data.tabungan_anggota + data.simpanan_bjkanggota)/(data.tabungan_anggota + data.tabungan_nonanggota + data.simpanan_bjkanggota + data.simpanan_bjkcalon))*100).toFixed(2));

                if (kkr19 == Infinity) {
                    kkr19 = 0;
                } else if (isNaN(kkr19)) kkr19 = 0;

                $("#kkr19").text(kkr19+"%");

                if (kkr19 <= 25) {
                    $("#kkn19").text("4");
                } else if (kkr19 <= 50) {
                    $("#kkn19").text("3");
                } else if (kkr19 <= 75) {
                    $("#kkn19").text("2");
                } else {
                    $("#kkn19").text("1");
                }

                if (kkr19 <= 25) {
                    $("#kkk19").text("Tidak Baik");
                } else if (kkr19 <= 50) {
                    $("#kkk19").text("Kurang Baik");
                } else if (kkr19 <= 75) {
                    $("#kkk19").text("Cukup Baik");
                } else {
                    $("#kkk19").text("Baik");
                }

                if (kkr19 <= 25) {
                    $("#kks19").text("1");
                } else if (kkr19 <= 50) {
                    $("#kks19").text("2");
                } else if (kkr19 <= 75) {
                    $("#kks19").text("3");
                } else {
                    $("#kks19").text("4");
                }

                //hasil rentabilitas
                let totalkpp = 3;
                let kkn1 = parseInt($("#kkn1").text());
                let kkn2 = parseInt($("#kkn2").text());
                let kkn3 = parseInt($("#kkn2").text());

                let kks1 = parseInt($("#kks1").text());
                let kks2 = parseInt($("#kks2").text());
                let kks3 = parseInt($("#kks2").text());

                let totalkkn = kkn1 + kkn2 + kkn3;
                let totalkks = kks1 + kks2 + kks3;
                // console.log(totalkks);

                $("#hr1").text(totalkkn);
                $("#hr2").text((totalkkn/totalkpp).toFixed(2));
                $("#hr3").text(((totalkks*100)/(totalkpp*4)).toFixed(2));

                let hr3 = $("#hr3").text();
                if (hr3 <= 51 ) {
                    $("#hr4").text("DALAM PENGAWASAN KHUSUS");
                    $("#colorhmr").css( "background-color", "red" );
                } else if (hr3 <= 66) {
                    $("#hr4").text("DALAM PENGAWASAN");
                    $("#colorhmr").css( "background-color", "#FF8C00" );
                } else if (hr3 <= 80) {
                    $("#hr4").text("CUKUP SEHAT");
                    $("#colorhmr").css( "background-color", "#FFD700" );
                } else {
                    $("#hr4").text("SEHAT");
                    $("#colorhmr").css( "background-color", "#7CFC00" );
                }

                //hasil efisiensi
                let totalkpp_ef = 2;
                let kkn4 = parseInt($("#kkn4").text());
                let kkn5 = parseInt($("#kkn5").text());

                let kks4 = parseInt($("#kks4").text());
                let kks5 = parseInt($("#kks5").text());

                let totalkkn_ef = kkn4 + kkn5;
                let totalkks_ef = kks4 + kks5;

                $("#he1").text(totalkkn_ef);
                $("#he2").text((totalkkn_ef/totalkpp_ef).toFixed(2));
                $("#he3").text(((totalkks_ef*100)/(totalkpp_ef*4)).toFixed(2));

                let he3 = $("#he3").text();
                if (he3 <= 51 ) {
                    $("#he4").text("DALAM PENGAWASAN KHUSUS");
                    $("#colorhmr").css( "background-color", "red" );
                } else if (he3 <= 66) {
                    $("#he4").text("DALAM PENGAWASAN");
                    $("#colorhmr").css( "background-color", "#FF8C00" );
                } else if (he3 <= 80) {
                    $("#he4").text("CUKUP SEHAT");
                    $("#colorhmr").css( "background-color", "#FFD700" );
                } else {
                    $("#he4").text("SEHAT");
                    $("#colorhmr").css( "background-color", "#7CFC00" );
                }

                //hasil likuiditas
                let totalkpp_el = 3;
                let kkn6 = parseInt($("#kkn6").text());
                let kkn7 = parseInt($("#kkn7").text());
                let kkn8 = parseInt($("#kkn8").text());

                let kks6 = parseInt($("#kks6").text());
                let kks7 = parseInt($("#kks7").text());
                let kks8 = parseInt($("#kks8").text());

                let totalkkn_el = kkn6 + kkn7 + kkn8;
                let totalkks_el = kks6 + kks7 + kks8;

                $("#hl1").text(totalkkn_el);
                $("#hl2").text((totalkkn_el/totalkpp_el).toFixed(2));
                $("#hl3").text(((totalkks_el*100)/(totalkpp_el*4)).toFixed(2));

                let hl3 = $("#hl3").text();
                if (hl3 <= 51 ) {
                    $("#hl4").text("DALAM PENGAWASAN KHUSUS");
                    $("#colorhmr").css( "background-color", "red" );
                } else if (hl3 <= 66) {
                    $("#hl4").text("DALAM PENGAWASAN");
                    $("#colorhmr").css( "background-color", "#FF8C00" );
                } else if (hl3 <= 80) {
                    $("#hl4").text("CUKUP SEHAT");
                    $("#colorhmr").css( "background-color", "#FFD700" );
                } else {
                    $("#hl4").text("SEHAT");
                    $("#colorhmr").css( "background-color", "#7CFC00" );
                }

                //hasil MANAJEMEN AKTIVA DAN INVESTASI
                let totalkpp_ai = 5;
                let kkn9 = parseInt($("#kkn9").text());
                let kkn10 = parseInt($("#kkn10").text());
                let kkn11 = parseInt($("#kkn11").text());
                let kkn12 = parseInt($("#kkn12").text());
                let kkn13 = parseInt($("#kkn13").text());

                let kks9 = parseInt($("#kks9").text());
                let kks10 = parseInt($("#kks10").text());
                let kks11 = parseInt($("#kks11").text());
                let kks12 = parseInt($("#kks12").text());
                let kks13 = parseInt($("#kks13").text());

                let totalkkn_ai = kkn9 + kkn10 + kkn11 + kkn12 + kkn13;
                let totalkks_ai = kks9 + kks10 + kks11 + kks12 + kks13;

                $("#ai1").text(totalkkn_ai);
                $("#ai2").text((totalkkn_ai/totalkpp_ai).toFixed(2));
                $("#ai3").text(((totalkks_ai*100)/(totalkpp_ai*4)).toFixed(2));

                let ai3 = $("#ai3").text();
                if (ai3 <= 51 ) {
                    $("#ai4").text("DALAM PENGAWASAN KHUSUS");
                    $("#colorhmr").css( "background-color", "red" );
                } else if (ai3 <= 66) {
                    $("#ai4").text("DALAM PENGAWASAN");
                    $("#colorhmr").css( "background-color", "#FF8C00" );
                } else if (ai3 <= 80) {
                    $("#ai4").text("CUKUP SEHAT");
                    $("#colorhmr").css( "background-color", "#FFD700" );
                } else {
                    $("#ai4").text("SEHAT");
                    $("#colorhmr").css( "background-color", "#7CFC00" );
                }

                //hasil pertumbuhan
                let totalkpp_pt = 3;
                let kkn14 = parseInt($("#kkn14").text());
                let kkn15 = parseInt($("#kkn15").text());
                let kkn16 = parseInt($("#kkn16").text());

                let kks14 = parseInt($("#kks14").text());
                let kks15 = parseInt($("#kks15").text());
                let kks16 = parseInt($("#kks16").text());

                let totalkkn_pt = kkn14 + kkn15 + kkn16;
                let totalkks_pt = kks14 + kks15 + kks16;

                $("#pt1").text(totalkkn_pt);
                $("#pt2").text((totalkkn_pt/totalkpp_pt).toFixed(2));
                $("#pt3").text(((totalkks_pt*100)/(totalkpp_pt*4)).toFixed(2));

                let pt3 = $("#pt3").text();
                if (pt3 <= 51 ) {
                    $("#pt4").text("DALAM PENGAWASAN KHUSUS");
                    $("#colorhmr").css( "background-color", "red" );
                } else if (pt3 <= 66) {
                    $("#pt4").text("DALAM PENGAWASAN");
                    $("#colorhmr").css( "background-color", "#FF8C00" );
                } else if (pt3 <= 80) {
                    $("#pt4").text("CUKUP SEHAT");
                    $("#colorhmr").css( "background-color", "#FFD700" );
                } else {
                    $("#pt4").text("SEHAT");
                    $("#colorhmr").css( "background-color", "#7CFC00" );
                }

                //hasil jatidiri
                let totalkpp_jd = 3;
                let kkn17 = parseInt($("#kkn17").text());
                let kkn18 = parseInt($("#kkn18").text());
                let kkn19 = parseInt($("#kkn19").text());

                let kks17 = parseInt($("#kks17").text());
                let kks18 = parseInt($("#kks18").text());
                let kks19 = parseInt($("#kks19").text());

                let totalkkn_jd = kkn17 + kkn18 + kkn19;
                let totalkks_jd = kks17 + kks18 + kks19;

                $("#jd1").text(totalkkn_jd);
                $("#jd2").text((totalkkn_jd/totalkpp_jd).toFixed(2));
                $("#jd3").text(((totalkks_jd*100)/(totalkpp_jd*4)).toFixed(2));

                let jd3 = $("#jd3").text();
                if (jd3 <= 51 ) {
                    $("#jd4").text("DALAM PENGAWASAN KHUSUS");
                    $("#colorhmr").css( "background-color", "red" );
                } else if (jd3 <= 66) {
                    $("#jd4").text("DALAM PENGAWASAN");
                    $("#colorhmr").css( "background-color", "#FF8C00" );
                } else if (jd3 <= 80) {
                    $("#jd4").text("CUKUP SEHAT");
                    $("#colorhmr").css( "background-color", "#FFD700" );
                } else {
                    $("#jd4").text("SEHAT");
                    $("#colorhmr").css( "background-color", "#7CFC00" );
                }

                //Hasil EVALUASI KINERJA KEUANGAN

                $("#hekk1").text(totalkkn + totalkkn_ef);
                //set value hekkr2
                let hekk1 = parseInt($("#hekk1").text());
                $("#hekk2").text((hekk1/(totalkpp + totalkpp_ef)).toFixed(2));
                //set value hekkr3
                let skor_ekk = totalkks + totalkks_ef;
                let data_ekk = totalkpp + totalkpp_ef;
                $("#hekk3").text(((skor_ekk*100)/(data_ekk*4)).toFixed(2));
                //set value hekkr4
                let hekk3 = $("#hekk3").text();
                if (hekk3 <= 51) {
                    $("#hekk4").text("DALAM PENGAWASAN KHUSUS");
                    $("#colorhekkr").css( "background-color", "red" );
                } else if (hekk3 <= 66) {
                    $("#hekk4").text("DALAM PENGAWASAN");
                    $("#colorhekkr").css( "background-color", "#FF8C00" );
                } else if (hekk3 <= 80) {
                    $("#hekk4").text("CUKUP SEHAT");
                    $("#colorhekkr").css( "background-color", "#FFD700" );
                } else {
                    $("#hekk4").text("SEHAT");
                    $("#colorhekkr").css( "background-color", "#7CFC00" );
                }

                // hasil MANAJEMEN KEUANGAN
                $("#hmk1").text(totalkkn_ai + totalkkn_el);
                //set value hmkr2
                let hmk1 = parseInt($("#hmk1").text());
                $("#hmk2").text((hmk1/(totalkks_el + totalkks_ai)).toFixed(2));
                //set value hmkr3
                let skor_mk = totalkks_el + totalkks_ai;
                let data_mk = totalkpp_ai + totalkpp_el;
                $("#hmk3").text(((skor_mk*100)/(data_mk*4)).toFixed(2));
                //set value hmkr4
                let hmk3 = $("#hmk3").text();
                if (hmk3 <= 51) {
                    $("#hmk4").text("DALAM PENGAWASAN KHUSUS");
                    $("#colorhmkr").css( "background-color", "red" );
                } else if (hmk3 <= 66) {
                    $("#hmk4").text("DALAM PENGAWASAN");
                    $("#colorhmkr").css( "background-color", "#FF8C00" );
                } else if (hmk3 <= 80) {
                    $("#hmk4").text("CUKUP SEHAT");
                    $("#colorhmkr").css( "background-color", "#FFD700" );
                } else {
                    $("#hmk4").text("SEHAT");
                    $("#colorhmkr").css( "background-color", "#7CFC00" );
                }

                //Hasil KESINAMBUNGAN KEUANGAN
                $("#hkk1").text(totalkkn_jd + totalkkn_pt);
                //set value hkkr2
                let hkk1 = parseInt($("#hkk1").text());
                $("#hkk2").text((hkk1/(totalkpp_pt + totalkpp_jd)).toFixed(2));
                //set value hkkr3
                let skor_kk = totalkks_pt + totalkks_jd;
                let data_kk = totalkpp_pt + totalkpp_jd;
                $("#hkk3").text(((skor_kk*100)/(data_kk*4)).toFixed(2));
                //set value hkkr4
                let hkk3 = $("#hkk3").text();
                if (hkk3 <= 51) {
                    $("#hkk4").text("DALAM PENGAWASAN KHUSUS");
                    $("#colorhkkr").css( "background-color", "red" );
                } else if (hkk3 <= 66) {
                    $("#hkk4").text("DALAM PENGAWASAN");
                    $("#colorhkkr").css( "background-color", "#FF8C00" );
                } else if (hkk3 <= 80) {
                    $("#hkk4").text("CUKUP SEHAT");
                    $("#colorhkkr").css( "background-color", "#FFD700" );
                } else {
                    $("#hkk4").text("SEHAT");
                    $("#colorhkkr").css( "background-color", "#7CFC00" );
                }

                // Hasil Kinerja keuangan
                let total_nilai = totalkkn_jd + totalkkn_pt + totalkkn + totalkkn_ef + totalkkn_el + totalkkn_ai;
                let data_a = totalkpp_pt + totalkpp_jd + totalkpp_ai + totalkpp_el + totalkpp + totalkpp_ef;
                $("#ha1").text(total_nilai);
                //set value hkkr2
                let ha1 = parseInt($("#ha1").text());
                $("#ha2").text((ha1/data_a).toFixed(2));
                //set value hkkr3
                let skor_a = totalkks + totalkks_ef + totalkks_el + totalkks_ai + totalkks_pt + totalkks_jd;
                // console.log(skor_a);
                $("#ha3").text(((skor_a*100)/(data_a*4)).toFixed(2));
                //set value har4
                let ha3 = $("#ha3").text();
                if (ha3 <= 51) {
                    $("#ha4").text("DALAM PENGAWASAN KHUSUS");
                    $("#colorhar").css( "background-color", "red" );
                } else if (ha3 <= 66) {
                    $("#ha4").text("DALAM PENGAWASAN");
                    $("#colorhar").css( "background-color", "#FF8C00" );
                } else if (ha3 <= 80) {
                    $("#ha4").text("CUKUP SEHAT");
                    $("#colorhar").css( "background-color", "#FFD700" );
                } else {
                    $("#ha4").text("SEHAT");
                    $("#colorhar").css( "background-color", "#7CFC00" );
                }
            });
        });
    }

});
