$(function() {
    $("#search").on("change", function() {
        //ambil id dari isi selectoption
        let id = $(this).val();
        console.log(id);

        $.get("/koperasi/profileresiko/" + id)
            .then(res => {
                if (res.length < 1) {
                    Swal.fire({
                            icon: 'warning',
                            title: 'Data Tidak Ditemukan',
                            text: 'Membersihkan Halaman',
                        })
                        // $($("body").find("table>tbody>tr>td[id]")).text("");
                } else {
                    res.map(data => {
                            console.log(data);
                            //RESIKO INHEREN
                            //membuat variabel untuk mengisi tabel baris 1
                            let e91 = parseInt(data.ro_a1);
                            let e92 = parseInt(data.ro_a2);
                            let e93 = parseInt(data.ro_a3);
                            let e94 = parseInt(data.ro_a4);
                            let ror1 = ((e91 + e92 + e93 + e94) / 4) * 100;
                            //set value ke table ror1
                            $("#ror1").text(ror1 + "%");
                            //set value ke table ron1
                            if (ror1 <= 25) {
                                $("#ron1").text("4");
                            } else if (ror1 <= 50) {
                                $("#ron1").text("3");
                            } else if (ror1 <= 75) {
                                $("#ron1").text("2");
                            } else {
                                $("#ron1").text("1");
                            }
                            //set value ke table rok1
                            if (ror1 <= 25) {
                                $("#rok1").text("Tidak Baik");
                            } else if (ror1 <= 50) {
                                $("#rok1").text("Kurang Baik");
                            } else if (ror1 <= 75) {
                                $("#rok1").text("Cukup Baik");
                            } else {
                                $("#rok1").text("Baik");
                            }
                            //set value ke table ros1
                            if (ror1 <= 25) {
                                $("#ros1").text("1");
                            } else if (ror1 <= 50) {
                                $("#ros1").text("2");
                            } else if (ror1 <= 75) {
                                $("#ros1").text("3");
                            } else {
                                $("#ros1").text("4");
                            }
                            //membuat variabel untuk mengisi tabel baris 2
                            let e95 = parseInt(data.ro_b1);
                            let e96 = parseInt(data.ro_b2);
                            let e97 = parseInt(data.ro_b3);
                            let e98 = parseInt(data.ro_b4);
                            let ror2 = ((e95 + e96 + e97 + e98) / 4) * 100;
                            //set value ke table ror2
                            $("#ror2").text(ror2 + "%");
                            //set value ke table ron2
                            if (ror2 <= 25) {
                                $("#ron2").text("4");
                            } else if (ror2 <= 50) {
                                $("#ron2").text("3");
                            } else if (ror2 <= 75) {
                                $("#ron2").text("2");
                            } else {
                                $("#ron2").text("1");
                            }
                            //set value ke table rok2
                            if (ror2 <= 25) {
                                $("#rok2").text("Tidak Baik");
                            } else if (ror2 <= 50) {
                                $("#rok2").text("Kurang Baik");
                            } else if (ror2 <= 75) {
                                $("#rok2").text("Cukup Baik");
                            } else {
                                $("#rok2").text("Baik");
                            }
                            //set value ke table ros2
                            if (ror2 <= 25) {
                                $("#ros2").text("1");
                            } else if (ror2 <= 50) {
                                $("#ros2").text("2");
                            } else if (ror2 <= 75) {
                                $("#ros2").text("3");
                            } else {
                                $("#ros2").text("4");
                            }
                            //membuat variabel untuk mengisi tabel baris 3
                            let e101 = parseInt(data.rk_a1);
                            let e102 = parseInt(data.rk_a2);
                            let e103 = parseInt(data.rk_a3);
                            let e104 = parseInt(data.rk_a4);
                            let rkr1 = ((e101 + e102 + e103 + e104) / 4) * 100;
                            //set value ke table rkr1
                            $("#rkr1").text(rkr1 + "%");
                            //set value ke table rkn1
                            if (rkr1 <= 25) {
                                $("#rkn1").text("4");
                            } else if (ror1 <= 50) {
                                $("#rkn1").text("3");
                            } else if (ror1 <= 75) {
                                $("#rkn1").text("2");
                            } else {
                                $("#rkn1").text("1");
                            }
                            //set value ke table rkk1
                            if (rkr1 <= 25) {
                                $("#rkk1").text("Tidak Baik");
                            } else if (rkr1 <= 50) {
                                $("#rkk1").text("Kurang Baik");
                            } else if (rkr1 <= 75) {
                                $("#rkk1").text("Cukup Baik");
                            } else {
                                $("#rkk1").text("Baik");
                            }
                            //set value ke table rks1
                            if (rkr1 <= 25) {
                                $("#rks1").text("1");
                            } else if (rkr1 <= 50) {
                                $("#rks1").text("2");
                            } else if (rkr1 <= 75) {
                                $("#rks1").text("3");
                            } else {
                                $("#rks1").text("4");
                            }
                            //membuat variabel untuk mengisi tabel baris 4
                            let e105 = parseInt(data.rk_b1);
                            let e106 = parseInt(data.rk_b2);
                            let e107 = parseInt(data.rk_b3);
                            let e108 = parseInt(data.rk_b4);
                            let rkr2 = ((e105 + e106 + e107 + e108) / 4) * 100;
                            //set value ke table rkr1
                            $("#rkr2").text(rkr2 + "%");
                            //set value ke table rkn2
                            if (rkr2 <= 25) {
                                $("#rkn2").text("4");
                            } else if (ror2 <= 50) {
                                $("#rkn2").text("3");
                            } else if (ror2 <= 75) {
                                $("#rkn2").text("2");
                            } else {
                                $("#rkn2").text("1");
                            }
                            //set value ke table rkk2
                            if (rkr2 <= 25) {
                                $("#rkk2").text("Tidak Baik");
                            } else if (rkr2 <= 50) {
                                $("#rkk2").text("Kurang Baik");
                            } else if (rkr2 <= 75) {
                                $("#rkk2").text("Cukup Baik");
                            } else {
                                $("#rkk2").text("Baik");
                            }
                            //set value ke table rks2
                            if (rkr2 <= 25) {
                                $("#rks2").text("1");
                            } else if (rkr2 <= 50) {
                                $("#rks2").text("2");
                            } else if (rkr2 <= 75) {
                                $("#rks2").text("3");
                            } else {
                                $("#rks2").text("4");
                            }

                            //membuat variabel untuk mengisi tabel baris 7
                            let e111 = parseInt(data.rl_a1);
                            let e112 = parseInt(data.rl_a2);
                            let e113 = parseInt(data.rl_a3);
                            let e114 = parseInt(data.rl_a4);
                            let e115 = parseInt(data.rl_a5);
                            let rlr3 = ((e111 + e112 + e113 + e114 + e115) / 5) * 100;
                            //set value ke table rlr3
                            $("#rlr3").text(rlr3 + "%");
                            //set value ke table rln3
                            if (rlr3 <= 25) {
                                $("#rln3").text("4");
                            } else if (rlr3 <= 50) {
                                $("#rln3").text("3");
                            } else if (rlr3 <= 75) {
                                $("#rln3").text("2");
                            } else {
                                $("#rln3").text("1");
                            }
                            //set value ke table rlk3
                            if (rlr3 <= 25) {
                                $("#rlk3").text("Tidak Baik");
                            } else if (rlr3 <= 50) {
                                $("#rlk3").text("Kurang Baik");
                            } else if (rlr3 <= 75) {
                                $("#rlk3").text("Cukup Baik");
                            } else {
                                $("#rlk3").text("Baik");
                            }
                            //set value ke table rls3
                            if (rlr3 <= 25) {
                                $("#rls3").text("1");
                            } else if (rlr3 <= 50) {
                                $("#rls3").text("2");
                            } else if (rlr3 <= 75) {
                                $("#rls3").text("3");
                            } else {
                                $("#rls3").text("4");
                            }
                            //membuat variabel untuk mengisi tabel baris 8
                            let e119 = parseInt(data.kpmro_a1);
                            let e120 = parseInt(data.kpmro_a2);
                            let e121 = parseInt(data.kpmro_a3);
                            let e122 = parseInt(data.kpmro_a4);
                            let kror1 = ((e119 + e120 + e121 + e122) / 4) * 100;
                            // console.log(e119);
                            //set value ke table kror1
                            $("#kror1").text(kror1 + "%");
                            //set value ke table kron1
                            if (kror1 <= 25) {
                                $("#kron1").text("4");
                            } else if (kror1 <= 50) {
                                $("#kron1").text("3");
                            } else if (kror1 <= 75) {
                                $("#kron1").text("2");
                            } else {
                                $("#kron1").text("1");
                            }
                            //set value ke table krok1
                            if (kror1 <= 25) {
                                $("#krok1").text("Tidak Baik");
                            } else if (kror1 <= 50) {
                                $("#krok1").text("Kurang Baik");
                            } else if (kror1 <= 75) {
                                $("#krok1").text("Cukup Baik");
                            } else {
                                $("#krok1").text("Baik");
                            }
                            //set value ke table kros1
                            if (kror1 <= 25) {
                                $("#kros1").text("1");
                            } else if (kror1 <= 50) {
                                $("#kros1").text("2");
                            } else if (kror1 <= 75) {
                                $("#kros1").text("3");
                            } else {
                                $("#kros1").text("4");
                            }
                            //membuat variabel untuk mengisi tabel baris 9
                            let e123 = parseInt(data.kpmro_b1);
                            let e124 = parseInt(data.kpmro_b2);
                            let e125 = parseInt(data.kpmro_b3);
                            let kror2 = ((e123 + e124 + e125) / 3) * 100;
                            // console.log(data.kprmo_b1);
                            //set value ke table kror2
                            $("#kror2").text(kror2 + "%");
                            //set value ke table kron2
                            if (kror2 <= 25) {
                                $("#kron2").text("4");
                            } else if (kror2 <= 50) {
                                $("#kron2").text("3");
                            } else if (kror2 <= 75) {
                                $("#kron2").text("2");
                            } else {
                                $("#kron2").text("1");
                            }
                            //set value ke table krok1
                            if (kror2 <= 25) {
                                $("#krok2").text("Tidak Baik");
                            } else if (kror2 <= 50) {
                                $("#krok2").text("Kurang Baik");
                            } else if (kror2 <= 75) {
                                $("#krok2").text("Cukup Baik");
                            } else {
                                $("#krok2").text("Baik");
                            }
                            //set value ke table kros1
                            if (kror2 <= 25) {
                                $("#kros2").text("1");
                            } else if (kror2 <= 50) {
                                $("#kros2").text("2");
                            } else if (kror2 <= 75) {
                                $("#kros2").text("3");
                            } else {
                                $("#kros2").text("4");
                            }
                            //membuat variabel untuk mengisi tabel baris 10
                            let e126 = parseInt(data.kpmro_c1);
                            let e127 = parseInt(data.kpmro_c2);
                            let e128 = parseInt(data.kpmro_c3);
                            let e129 = parseInt(data.kpmro_c4);
                            let kror3 = ((e126 + e127 + e128 + e129) / 4) * 100;
                            //set value ke table kror3
                            $("#kror3").text(kror3 + "%");
                            //set value ke table kror3
                            if (kror3 <= 25) {
                                $("#kron3").text("4");
                            } else if (kror3 <= 50) {
                                $("#kron3").text("3");
                            } else if (kror3 <= 75) {
                                $("#kron3").text("2");
                            } else {
                                $("#kron3").text("1");
                            }
                            //set value ke table krok1
                            if (kror3 <= 25) {
                                $("#krok3").text("Tidak Baik");
                            } else if (kror3 <= 50) {
                                $("#krok3").text("Kurang Baik");
                            } else if (kror3 <= 75) {
                                $("#krok3").text("Cukup Baik");
                            } else {
                                $("#krok3").text("Baik");
                            }
                            //set value ke table kros1
                            if (kror3 <= 25) {
                                $("#kros3").text("1");
                            } else if (kror3 <= 50) {
                                $("#kros3").text("2");
                            } else if (kror3 <= 75) {
                                $("#kros3").text("3");
                            } else {
                                $("#kros3").text("4");
                            }
                            //membuat variabel untuk mengisi tabel baris 11
                            let e132 = parseInt(data.kpmrk_a1);
                            let e133 = parseInt(data.kpmrk_a2);
                            let e134 = parseInt(data.kpmrk_a3);
                            let e135 = parseInt(data.kpmrk_a4);
                            let krkr1 = ((e132 + e133 + e134 + e135) / 4) * 100;
                            //set value ke table kror3
                            $("#krkr1").text(krkr1 + "%");
                            //set value ke table kror3
                            if (krkr1 <= 25) {
                                $("#krkn1").text("4");
                            } else if (krkr1 <= 50) {
                                $("#krkn1").text("3");
                            } else if (krkr1 <= 75) {
                                $("#krkn1").text("2");
                            } else {
                                $("#krkn1").text("1");
                            }
                            //set value ke table krok1
                            if (krkr1 <= 25) {
                                $("#krkk1").text("Tidak Baik");
                            } else if (krkr1 <= 50) {
                                $("#krkk1").text("Kurang Baik");
                            } else if (krkr1 <= 75) {
                                $("#krkk1").text("Cukup Baik");
                            } else {
                                $("#krkk1").text("Baik");
                            }
                            //set value ke table kros1
                            if (krkr1 <= 25) {
                                $("#krks1").text("1");
                            } else if (krkr1 <= 50) {
                                $("#krks1").text("2");
                            } else if (krkr1 <= 75) {
                                $("#krks1").text("3");
                            } else {
                                $("#krks1").text("4");
                            }
                            //membuat variabel untuk mengisi tabel baris 12
                            let e136 = parseInt(data.kpmrk_b1);
                            let e137 = parseInt(data.kpmrk_b2);
                            let e138 = parseInt(data.kpmrk_b3);
                            let e139 = parseInt(data.kpmrk_b4);
                            let krkr2 = ((e136 + e137 + e138 + e139) / 4) * 100;
                            //set value ke table kror3
                            $("#krkr2").text(krkr2 + "%");
                            //set value ke table kror3
                            if (krkr2 <= 25) {
                                $("#krkn2").text("4");
                            } else if (krkr2 <= 50) {
                                $("#krkn2").text("3");
                            } else if (krkr2 <= 75) {
                                $("#krkn2").text("2");
                            } else {
                                $("#krkn2").text("1");
                            }
                            //set value ke table krok1
                            if (krkr2 <= 25) {
                                $("#krkk2").text("Tidak Baik");
                            } else if (krkr2 <= 50) {
                                $("#krkk2").text("Kurang Baik");
                            } else if (krkr2 <= 75) {
                                $("#krkk2").text("Cukup Baik");
                            } else {
                                $("#krkk2").text("Baik");
                            }
                            //set value ke table kros1
                            if (krkr2 <= 25) {
                                $("#krks2").text("1");
                            } else if (krkr2 <= 50) {
                                $("#krks2").text("2");
                            } else if (krkr2 <= 75) {
                                $("#krks2").text("3");
                            } else {
                                $("#krks2").text("4");
                            }
                            //membuat variabel untuk mengisi tabel baris 13
                            let e140 = parseInt(data.kpmrk_c1);
                            let e141 = parseInt(data.kpmrk_c2);
                            let e142 = parseInt(data.kpmrk_c3);
                            let e143 = parseInt(data.kpmrk_c4);
                            let krkr3 = ((e140 + e141 + e142 + e143) / 4) * 100;
                            //set value ke table kror3
                            $("#krkr3").text(krkr3 + "%");
                            //set value ke table kror3
                            if (krkr3 <= 25) {
                                $("#krkn3").text("4");
                            } else if (krkr3 <= 50) {
                                $("#krkn3").text("3");
                            } else if (krkr3 <= 75) {
                                $("#krkn3").text("2");
                            } else {
                                $("#krkn3").text("1");
                            }
                            //set value ke table krok1
                            if (krkr3 <= 25) {
                                $("#krkk3").text("Tidak Baik");
                            } else if (krkr3 <= 50) {
                                $("#krkk3").text("Kurang Baik");
                            } else if (krkr3 <= 75) {
                                $("#krkk3").text("Cukup Baik");
                            } else {
                                $("#krkk3").text("Baik");
                            }
                            //set value ke table kros1
                            if (krkr3 <= 25) {
                                $("#krks3").text("1");
                            } else if (krkr3 <= 50) {
                                $("#krks3").text("2");
                            } else if (krkr3 <= 75) {
                                $("#krks3").text("3");
                            } else {
                                $("#krks3").text("4");
                            }
                            //membuat variabel untuk mengisi tabel baris 14
                            let e146 = parseInt(data.kpmrl_a1);
                            let e147 = parseInt(data.kpmrl_a2);
                            let e148 = parseInt(data.kpmrl_a3);
                            let e149 = parseInt(data.kpmrl_a4);
                            let krlr1 = ((e146 + e147 + e148 + e149) / 4) * 100;
                            //set value ke table kror3
                            $("#krlr1").text(krlr1 + "%");
                            //set value ke table kror3
                            if (krlr1 <= 25) {
                                $("#krln1").text("4");
                            } else if (krlr1 <= 50) {
                                $("#krln1").text("3");
                            } else if (krlr1 <= 75) {
                                $("#krln1").text("2");
                            } else {
                                $("#krln1").text("1");
                            }
                            //set value ke table krok1
                            if (krlr1 <= 25) {
                                $("#krlk1").text("Tidak Baik");
                            } else if (krlr1 <= 50) {
                                $("#krlk1").text("Kurang Baik");
                            } else if (krlr1 <= 75) {
                                $("#krlk1").text("Cukup Baik");
                            } else {
                                $("#krlk1").text("Baik");
                            }
                            //set value ke table kros1
                            if (krlr1 <= 25) {
                                $("#krls1").text("1");
                            } else if (krlr1 <= 50) {
                                $("#krls1").text("2");
                            } else if (krlr1 <= 75) {
                                $("#krls1").text("3");
                            } else {
                                $("#krls1").text("4");
                            }
                            //membuat variabel untuk mengisi tabel baris 15
                            let e150 = parseInt(data.kpmrl_b1);
                            let e151 = parseInt(data.kpmrl_b2);
                            let e152 = parseInt(data.kpmrl_b3);
                            let e153 = parseInt(data.kpmrl_b4);
                            let e154 = parseInt(data.kpmrl_b5);
                            let krlr2 = ((e150 + e151 + e152 + e153 + e154) / 5) * 100;
                            //set value ke table kror3
                            $("#krlr2").text(krlr2 + "%");
                            //set value ke table kror3
                            if (krlr2 <= 25) {
                                $("#krln2").text("4");
                            } else if (krlr2 <= 50) {
                                $("#krln2").text("3");
                            } else if (krlr2 <= 75) {
                                $("#krln2").text("2");
                            } else {
                                $("#krln2").text("1");
                            }
                            //set value ke table krok1
                            if (krlr2 <= 25) {
                                $("#krlk2").text("Tidak Baik");
                            } else if (krlr2 <= 50) {
                                $("#krlk2").text("Kurang Baik");
                            } else if (krlr2 <= 75) {
                                $("#krlk2").text("Cukup Baik");
                            } else {
                                $("#krlk2").text("Baik");
                            }
                            //set value ke table kros1
                            if (krlr2 <= 25) {
                                $("#krls2").text("1");
                            } else if (krlr2 <= 50) {
                                $("#krls2").text("2");
                            } else if (krlr2 <= 75) {
                                $("#krls2").text("3");
                            } else {
                                $("#krls2").text("4");
                            }
                            //membuat variabel untuk mengisi tabel baris 15
                            let e155 = parseInt(data.kpmrl_c1);
                            let e156 = parseInt(data.kpmrl_c2);
                            let e157 = parseInt(data.kpmrl_c3);
                            let e158 = parseInt(data.kpmrl_c4);
                            let krlr3 = ((e155 + e156 + e157 + e158) / 4) * 100;
                            //set value ke table kror3
                            $("#krlr3").text(krlr3 + "%");
                            //set value ke table kror3
                            if (krlr3 <= 25) {
                                $("#krln3").text("4");
                            } else if (krlr3 <= 50) {
                                $("#krln3").text("3");
                            } else if (krlr3 <= 75) {
                                $("#krln3").text("2");
                            } else {
                                $("#krln3").text("1");
                            }
                            //set value ke table krok1
                            if (krlr3 <= 25) {
                                $("#krlk3").text("Tidak Baik");
                            } else if (krlr3 <= 50) {
                                $("#krlk3").text("Kurang Baik");
                            } else if (krlr3 <= 75) {
                                $("#krlk3").text("Cukup Baik");
                            } else {
                                $("#krlk3").text("Baik");
                            }
                            //set value ke table kros1
                            if (krlr3 <= 25) {
                                $("#krls3").text("1");
                            } else if (krlr3 <= 50) {
                                $("#krls3").text("2");
                            } else if (krlr3 <= 75) {
                                $("#krls3").text("3");
                            } else {
                                $("#krls3").text("4");
                            }

                            //MENGISI TABEL HASIL HASIL RESIKO INHEREN


                            let d35 = data.surat_berharga + data.premi_asuransi + data.perkap_kantor + data.beban_dimuka + data.pendapatan_aknditerima + data.barang_dagang + data.lainnya + (data.kas + (data.giro + data.tabungan + data.deposito) + (data.simpanan_sukarela + data.simpanan_berjangka) + ((data.piutang_anggota + data.piutang_calon + data.piutang_koplain + data.piutang_bunga + data.piutang_lain) - data.penyisihan_pinjaman));
                            let d49 = data.simpanan_berjangka + data.surat_berharga + data.simpanan_lain + data.penyertaan_koplain + data.penyertaan_lemkeulain + data.inv_jplain + data.akm_peny_prop + (data.properti_inv - data.akm_peny_prop);
                            let d56 = (data.tanah + data.bangunan + data.kendaraan + data.inv_perkap) - data.akm_peny;
                            let d59 = data.aktiva_tdk_berwujud;
                            let d67 = data.beban_ditangguhkan + data.amortisasi_beban + data.agunan_diambil + data.beban_praoperasional + data.amortisasi_biaya + data.lain;
                            //set value sesuai variabel
                            let d68 = d35 + d49 + d56 + d59 + d67;
                            let h25 = (data.titipan_dana + data.titipan_jaminan + data.titipan_zakat) + data.hutang_sewa + data.tabungan_anggota + data.tabungan_nonanggota + data.simpanan_bjkanggota + data.simpanan_bjkcalon + data.hutang_bank + data.hutang_lpdb + data.hutang_pajak + data.beban_hrsdibayar + data.pendapatan_dimuka + data.hutang_biaya + data.dana_bagian;
                            let d17 = data.kas + (data.giro + data.tabungan + data.deposito) + (data.simpanan_sukarela + data.simpanan_berjangka);
                            //set value ke rlr1
                            let rlr1 = (d17 / d68).toFixed(2);
                            console.log(rlr1);

                            if (rlr1 == Infinity) {
                                rlr1 = 0;
                            } else if (isNaN(rlr1)) rlr1 = 0;

                            $("#rlr1").text(rlr1 + "%");
                            //set value ke table rln1
                            if (rlr1 <= 5) {
                                $("#rln1").text("4");
                            } else if (rlr1 <= 10) {
                                $("#rln1").text("3");
                            } else if (rlr1 <= 15) {
                                $("#rln1").text("2");
                            } else {
                                $("#rln1").text("1");
                            }
                            //set value ke table rlk1
                            if (rlr1 <= 5) {
                                $("#rlk1").text("Tidak Baik");
                            } else if (rlr1 <= 10) {
                                $("#rlk1").text("Kurang Baik");
                            } else if (rlr1 <= 15) {
                                $("#rlk1").text("Cukup Baik");
                            } else {
                                $("#rlk1").text("Baik");
                            }
                            //set value ke table rls1
                            if (rlr1 <= 5) {
                                $("#rls1").text("1");
                            } else if (rlr1 <= 10) {
                                $("#rls1").text("2");
                            } else if (rlr1 <= 15) {
                                $("#rls1").text("3");
                            } else {
                                $("#rls1").text("4");
                            }
                            //set value ke rlr2
                            let rlr2 = (d17 / h25).toFixed(2);

                            if (rlr2 == Infinity) {
                                rlr2 = 0;
                            } else if (isNaN(rlr2)) rlr2 = 0;

                            $("#rlr2").text(rlr2 + "%");
                            //set value ke table rln2
                            if (rlr2 <= 7) {
                                $("#rln2").text("4");
                            } else if (rlr2 <= 14) {
                                $("#rln2").text("3");
                            } else if (rlr2 <= 21) {
                                $("#rln2").text("2");
                            } else {
                                $("#rln2").text("1");
                            }
                            //set value ke table rlk2
                            if (rlr2 <= 7) {
                                $("#rlk2").text("Tidak Baik");
                            } else if (rlr2 <= 14) {
                                $("#rlk2").text("Kurang Baik");
                            } else if (rlr2 <= 21) {
                                $("#rlk2").text("Cukup Baik");
                            } else {
                                $("#rlk2").text("Baik");
                            }
                            //set value ke table rls2
                            if (rlr2 <= 7) {
                                $("#rls2").text("1");
                            } else if (rlr2 <= 14) {
                                $("#rls2").text("2");
                            } else if (rlr2 <= 21) {
                                $("#rls2").text("3");
                            } else {
                                $("#rls2").text("4");
                            }

                            //membuat variabel untuk menampung semua nilai resiko inheren
                            let totaldatari = 7;

                            let n1 = parseInt($("#ron1").text());
                            let n2 = parseInt($("#ron2").text());
                            let n4 = parseInt($("#rkn1").text());
                            let n5 = parseInt($("#rkn2").text());
                            let n7 = parseInt($("#rln1").text());
                            let n8 = parseInt($("#rln2").text());
                            let n9 = parseInt($("#rln3").text());

                            let s1 = parseInt($("#ros1").text());
                            let s2 = parseInt($("#ros2").text());
                            let s4 = parseInt($("#rks1").text());
                            let s5 = parseInt($("#rks2").text());
                            let s7 = parseInt($("#rls1").text());
                            let s8 = parseInt($("#rls2").text());
                            let s9 = parseInt($("#rls3").text());

                            let totaln = n1 + n2 + n4 + n5 + n7 + n8 + n9;
                            let totals = s1 + s2 + s4 + s5 + s7 + s8 + s9;

                            //set value hri1
                            $("#hri1").text(totaln);
                            //set value hri2
                            $("#hri2").text((totaln / totaldatari).toFixed(2));
                            //set value hri3
                            $("#hri3").text(((totals * 100) / (totaldatari * 4)).toFixed(2));
                            //set value hri4
                            let hri3 = $("#hri3").text();
                            console.log(hri3);
                            if (hri3 <= 50) {
                                $("#hri4").text("DALAM PENGAWASAN KHUSUS");
                                $("#colorhri").css("background-color", "red");
                            } else if (hri3 <= 65) {
                                $("#hri4").text("DALAM PENGAWASAN");
                                $("#colorhri").css("background-color", "#FF8C00");
                            } else if (hri3 <= 79) {
                                $("#hri4").text("CUKUP SEHAT");
                                $("#colorhri").css("background-color", "#FFD700");
                            } else {
                                $("#hri4").text("SEHAT");
                                $("#colorhri").css("background-color", "#7CFC00");
                            }
                            //membuat variabel untuk menampung semua nilai Manajemen Resiko
                            let totaldatamr = 9;
                            let nm1 = parseInt($("#kron1").text());
                            let nm2 = parseInt($("#kron2").text());
                            let nm3 = parseInt($("#kron2").text());
                            let nm4 = parseInt($("#krkn1").text());
                            let nm5 = parseInt($("#krkn2").text());
                            let nm6 = parseInt($("#krkn2").text());
                            let nm7 = parseInt($("#krln1").text());
                            let nm8 = parseInt($("#krln2").text());
                            let nm9 = parseInt($("#krln3").text());

                            let sm1 = parseInt($("#kros1").text());
                            let sm2 = parseInt($("#kros2").text());
                            let sm3 = parseInt($("#kros2").text());
                            let sm4 = parseInt($("#krks1").text());
                            let sm5 = parseInt($("#krks2").text());
                            let sm6 = parseInt($("#krks2").text());
                            let sm7 = parseInt($("#krls1").text());
                            let sm8 = parseInt($("#krls2").text());
                            let sm9 = parseInt($("#krls3").text());

                            let totalnm = nm1 + nm2 + nm3 + nm4 + nm5 + nm6 + nm7 + nm8 + nm9;
                            let totalsm = sm1 + sm2 + sm3 + sm4 + sm5 + sm6 + sm7 + sm8 + sm9;
                            //set value hri1
                            $("#hmr1").text(totalnm);
                            //set value hri2
                            $("#hmr2").text((totalnm / totaldatamr).toFixed(2));
                            //set value hri3
                            $("#hmr3").text(((totalsm * 100) / (totaldatamr * 4)).toFixed(2));
                            //set value hri4
                            let hmr3 = $("#hmr3").text();
                            if (hmr3 <= 50) {
                                $("#hmr4").text("DALAM PENGAWASAN KHUSUS");
                                $("#colorhmr").css("background-color", "red");
                            } else if (hmr3 <= 65) {
                                $("#hmr4").text("DALAM PENGAWASAN");
                                $("#colorhmr").css("background-color", "#FF8C00");
                            } else if (hmr3 <= 79) {
                                $("#hmr4").text("CUKUP SEHAT");
                                $("#colorhmr").css("background-color", "#FFD700");
                            } else {
                                $("#hmr4").text("SEHAT");
                                $("#colorhmr").css("background-color", "#7CFC00");
                            }
                            //set value hpr1
                            $("#hpr1").text(totaln + totalnm);
                            //set value hpr2
                            let hpr1 = parseInt($("#hpr1").text());
                            $("#hpr2").text((hpr1 / (totaldatari + totaldatamr)).toFixed(2));
                            //set value hpr3
                            let allskor = totals + totalsm;
                            let alldatapr = totaldatamr + totaldatari;
                            $("#hpr3").text(((allskor * 100) / (alldatapr * 4)).toFixed(2));
                            //set value hpr4
                            let hpr3 = $("#hpr3").text();
                            if (hpr3 <= 50) {
                                $("#hpr4").text("DALAM PENGAWASAN KHUSUS");
                                $("#colorhpr").css("background-color", "red");
                            } else if (hpr3 <= 65) {
                                $("#hpr4").text("DALAM PENGAWASAN");
                                $("#colorhpr").css("background-color", "#FF8C00");
                            } else if (hpr3 <= 79) {
                                $("#hpr4").text("CUKUP SEHAT");
                                $("#colorhpr").css("background-color", "#FFD700");
                            } else {
                                $("#hpr4").text("SEHAT");
                                $("#colorhpr").css("background-color", "#7CFC00");
                            } //batasgetneracakops
                        }) //batasgetneracatampilpr
                }
            })
    });
});