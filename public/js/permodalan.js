$(function() {
    let id = '';
    if (localStorage.getItem("id") == null) {
        $("#search").on("change", function() {
            //ambil id dari isi selectoption
            id = $(this).val();
            // console.log(id);

            $.get("/koperasi/neraca/" + id)
                .then(res => {
                    res.map(data => {
                        // console.log(data);

                        let jmleku = (data.simpanan_pokok + data.simpanan_wajib + data.modal_penyetaraan + data.modal_penyertaan + data.modal_sumbangan + data.cadangan_umum + data.cadangan_tujuan + (data.shu_berjalan - data.shu_sebelum));
                        let jmlakt = (data.kas + data.giro + data.tabungan + data.deposito + data.simpanan_sukarela + data.simpanan_berjangka_koplain + data.surat_berharga + (data.piutang_dagang + data.piutang_anggota + data.piutang_calon + data.piutang_koplain + data.piutang_bunga + data.piutang_lain - data.penyisihan_pinjaman) + data.premi_asuransi + data.perkap_kantor + data.beban_dimuka + data.pendapatan_aknditerima + data.barang_dagang + data.lainnya) + (data.tabungan_berjangka + data.surat_berharga_panjang + data.simpanan_lain + data.penyertaan_koplain + data.penyertaan_lemkeulain + data.inv_jplain) + ((data.tanah + data.bangunan + data.kendaraan + data.inv_perkap) - data.akm_peny) + (data.aktiva_tdk_berwujud) + (data.beban_ditangguhkan + data.amortisasi_beban + data.agunan_diambil + data.beban_praoperasional + data.amortisasi_biaya + data.lain)

                        let kpr1 = (((jmleku / jmlakt) * 100).toFixed(2));

                        if (kpr1 == Infinity) {
                            kpr1 = 0;
                        } else if (isNaN(kpr1)) kpr1 = 0;

                        $("#kpr1").text(kpr1 + "%");

                        if (kpr1 <= 10) {
                            $("#kpn1").text("4");
                        } else if (kpr1 <= 20) {
                            $("#kpn1").text("3");
                        } else if (kpr1 <= 30) {
                            $("#kpn1").text("2");
                        } else {
                            $("#kpn1").text("1");
                        }

                        if (kpr1 <= 10) {
                            $("#kpk1").text("Tidak Baik");
                        } else if (kpr1 <= 20) {
                            $("#kpk1").text("Kurang Baik");
                        } else if (kpr1 <= 30) {
                            $("#kpk1").text("Cukup Baik");
                        } else {
                            $("#kpk1").text("Baik");
                        }

                        if (kpr1 <= 10) {
                            $("#kps1").text("1");
                        } else if (kpr1 <= 20) {
                            $("#kps1").text("2");
                        } else if (kpr1 <= 30) {
                            $("#kps1").text("3");
                        } else {
                            $("#kps1").text("4");
                        }

                        let p10 = (data.tabungan_anggota + data.simpanan_bjkanggota + data.titipan_dana)

                        let kppr1 = (((p10 / jmlakt) * 100).toFixed(2));
                        // console.log(kppr1);
                        if (kppr1 == Infinity) {
                            kppr1 = 0;
                        } else if (isNaN(kppr1)) kppr1 = 0;

                        $("#kppr1").text(kppr1 + "%");

                        if (kppr1 <= 10) {
                            $("#kppn1").text("4");
                        } else if (kppr1 <= 20) {
                            $("#kppn1").text("3");
                        } else if (kppr1 <= 30) {
                            $("#kppn1").text("2");
                        } else {
                            $("#kppn1").text("1");
                        }

                        if (kppr1 <= 10) {
                            $("#kppk1").text("Tidak Baik");
                        } else if (kppr1 <= 20) {
                            $("#kppk1").text("Kurang Baik");
                        } else if (kppr1 <= 30) {
                            $("#kppk1").text("Cukup Baik");
                        } else {
                            $("#kppk1").text("Baik");
                        }

                        if (kppr1 <= 10) {
                            $("#kpps1").text("1");
                        } else if (kppr1 <= 20) {
                            $("#kpps1").text("2");
                        } else if (kppr1 <= 30) {
                            $("#kpps1").text("3");
                        } else {
                            $("#kpps1").text("4");
                        }

                        let jmljp = data.hutang_bank_panjang + data.hutang_koplain + data.pasiva + data.simpanan_berjangka + data.titipan_dana_panjang + data.hutang_lpdb_panjang + data.hutang_sewa_panjang + data.hutang_lain

                        let kppr2 = ((jmljp / jmleku) * 100);
                        // console.log(kppr2);
                        if (kppr2 == Infinity) {
                            kppr2 = 0;
                        } else if (isNaN(kppr2)) kppr2 = 0;

                        $("#kppr2").text(kppr2 + "%");

                        if (kppr2 <= 100) {
                            $("#kppn2").text("4");
                        } else if (kppr2 <= 125) {
                            $("#kppn2").text("3");
                        } else if (kppr2 <= 150) {
                            $("#kppn2").text("2");
                        } else {
                            $("#kppn2").text("1");
                        }

                        if (kppr2 <= 100) {
                            $("#kppk2").text("Tidak Baik");
                        } else if (kppr2 <= 125) {
                            $("#kppk2").text("Kurang Baik");
                        } else if (kppr2 <= 150) {
                            $("#kppk2").text("Cukup Baik");
                        } else {
                            $("#kppk2").text("Baik");
                        }

                        if (kppr2 <= 100) {
                            $("#kpps2").text("1");
                        } else if (kppr2 <= 125) {
                            $("#kpps2").text("2");
                        } else if (kppr2 <= 150) {
                            $("#kpps2").text("3");
                        } else {
                            $("#kpps2").text("4");
                        }

                        //total kecukupan modal
                        let totalkp = 1;
                        let kp1 = parseInt($("#kpn1").text());

                        let ks1 = parseInt($("#kps1").text());

                        $("#hkp1").text(kp1);
                        $("#hkp2").text((kp1 / totalkp).toFixed(2));
                        $("#hkp3").text(((ks1 * 100) / (totalkp * 4)).toFixed(2));

                        let hkp3 = $("#hkp3").text();
                        if (hkp3 <= 51) {
                            $("#hkp4").text("DALAM PENGAWASAN KHUSUS");
                            $("#colorhmr").css("background-color", "red");
                        } else if (hkp3 <= 66) {
                            $("#hkp4").text("DALAM PENGAWASAN");
                            $("#colorhmr").css("background-color", "#FF8C00");
                        } else if (hkp3 <= 80) {
                            $("#hkp4").text("CUKUP SEHAT");
                            $("#colorhmr").css("background-color", "#FFD700");
                        } else {
                            $("#hkp4").text("SEHAT");
                            $("#colorhmr").css("background-color", "#7CFC00");
                        }

                        //total pengelolaan
                        let totalkpp = 2;
                        let kpn1 = parseInt($("#kppn1").text());
                        let kpn2 = parseInt($("#kppn2").text());

                        let kps1 = parseInt($("#kpps1").text());
                        let kps2 = parseInt($("#kpps2").text());

                        let totalkpn = kpn1 + kpn2;
                        let totalkps = kps1 + kps2;

                        $("#hkpp1").text(totalkpn);
                        $("#hkpp2").text((totalkpn / totalkpp).toFixed(2));
                        $("#hkpp3").text(((totalkps * 100) / (totalkpp * 4)).toFixed(2));

                        let hkpp3 = $("#hkpp3").text();
                        if (hkpp3 <= 51) {
                            $("#hkpp4").text("DALAM PENGAWASAN KHUSUS");
                            $("#colorhmr").css("background-color", "red");
                        } else if (hkpp3 <= 66) {
                            $("#hkpp4").text("DALAM PENGAWASAN");
                            $("#colorhmr").css("background-color", "#FF8C00");
                        } else if (hkpp3 <= 80) {
                            $("#hkpp4").text("CUKUP SEHAT");
                            $("#colorhmr").css("background-color", "#FFD700");
                        } else {
                            $("#hkpp4").text("SEHAT");
                            $("#colorhmr").css("background-color", "#7CFC00");
                        }

                        //total permodalan
                        $("#hp1").text(kp1 + totalkpn);
                        //set value hpr2
                        let hp1 = parseInt($("#hp1").text());
                        $("#hp2").text((hp1 / (totalkp + totalkpp)).toFixed(2));
                        //set value hpr3
                        let allskor = ks1 + totalkps;
                        let alldatapr = totalkp + totalkpp;
                        $("#hp3").text(((allskor * 100) / (alldatapr * 4)).toFixed(2));
                        //set value hpr4
                        let hp3 = $("#hp3").text();
                        if (hp3 <= 51) {
                            $("#hp4").text("DALAM PENGAWASAN KHUSUS");
                            $("#colorhpr").css("background-color", "red");
                        } else if (hpr3 <= 66) {
                            $("#hp4").text("DALAM PENGAWASAN");
                            $("#colorhpr").css("background-color", "#FF8C00");
                        } else if (hpr3 <= 80) {
                            $("#hp4").text("CUKUP SEHAT");
                            $("#colorhpr").css("background-color", "#FFD700");
                        } else {
                            $("#hp4").text("SEHAT");
                            $("#colorhpr").css("background-color", "#7CFC00");
                        }
                    });
                });
        });
    } else {
        id = localStorage.getItem('id');

        $.get("/koperasi/neraca/" + id)
            .then(res => {
                res.map(data => {
                    console.log(data);

                    let jmleku = (data.simpanan_pokok + data.simpanan_wajib + data.modal_penyetaraan + data.modal_penyertaan + data.modal_sumbangan + data.cadangan_umum + data.cadangan_tujuan + (data.shu_berjalan - data.shu_sebelum));
                    let jmlakt = (data.kas + data.giro + data.tabungan + data.deposito + data.simpanan_sukarela + data.simpanan_berjangka_koplain + data.surat_berharga + (data.piutang_dagang + data.piutang_anggota + data.piutang_calon + data.piutang_koplain + data.piutang_bunga + data.piutang_lain - data.penyisihan_pinjaman) + data.premi_asuransi + data.perkap_kantor + data.beban_dimuka + data.pendapatan_aknditerima + data.barang_dagang + data.lainnya) + (data.tabungan_berjangka + data.surat_berharga_panjang + data.simpanan_lain + data.penyertaan_koplain + data.penyertaan_lemkeulain + data.inv_jplain) + ((data.tanah + data.bangunan + data.kendaraan + data.inv_perkap) - data.akm_peny) + (data.aktiva_tdk_berwujud) + (data.beban_ditangguhkan + data.amortisasi_beban + data.agunan_diambil + data.beban_praoperasional + data.amortisasi_biaya + data.lain)

                    let kpr1 = (((jmleku / jmlakt) * 100).toFixed(2));

                    if (kpr1 == Infinity) {
                        kpr1 = 0;
                    } else if (isNaN(kpr1)) kpr1 = 0;

                    $("#kpr1").text(kpr1 + "%");

                    if (kpr1 <= 10) {
                        $("#kpn1").text("4");
                    } else if (kpr1 <= 20) {
                        $("#kpn1").text("3");
                    } else if (kpr1 <= 30) {
                        $("#kpn1").text("2");
                    } else {
                        $("#kpn1").text("1");
                    }

                    if (kpr1 <= 10) {
                        $("#kpk1").text("Tidak Baik");
                    } else if (kpr1 <= 20) {
                        $("#kpk1").text("Kurang Baik");
                    } else if (kpr1 <= 30) {
                        $("#kpk1").text("Cukup Baik");
                    } else {
                        $("#kpk1").text("Baik");
                    }

                    if (kpr1 <= 10) {
                        $("#kps1").text("1");
                    } else if (kpr1 <= 20) {
                        $("#kps1").text("2");
                    } else if (kpr1 <= 30) {
                        $("#kps1").text("3");
                    } else {
                        $("#kps1").text("4");
                    }

                    let p10 = (data.tabungan_anggota + data.simpanan_bjkanggota + data.titipan_dana)

                    let kppr1 = (((p10 / jmlakt) * 100).toFixed(2));
                    // console.log(kppr1);
                    if (kppr1 == Infinity) {
                        kppr1 = 0;
                    } else if (isNaN(kppr1)) kppr1 = 0;

                    $("#kppr1").text(kppr1 + "%");

                    if (kppr1 <= 10) {
                        $("#kppn1").text("4");
                    } else if (kppr1 <= 20) {
                        $("#kppn1").text("3");
                    } else if (kppr1 <= 30) {
                        $("#kppn1").text("2");
                    } else {
                        $("#kppn1").text("1");
                    }

                    if (kppr1 <= 10) {
                        $("#kppk1").text("Tidak Baik");
                    } else if (kppr1 <= 20) {
                        $("#kppk1").text("Kurang Baik");
                    } else if (kppr1 <= 30) {
                        $("#kppk1").text("Cukup Baik");
                    } else {
                        $("#kppk1").text("Baik");
                    }

                    if (kppr1 <= 10) {
                        $("#kpps1").text("1");
                    } else if (kppr1 <= 20) {
                        $("#kpps1").text("2");
                    } else if (kppr1 <= 30) {
                        $("#kpps1").text("3");
                    } else {
                        $("#kpps1").text("4");
                    }

                    let jmljp = data.hutang_bank_panjang + data.hutang_koplain + data.pasiva + data.simpanan_berjangka + data.titipan_dana_panjang + data.hutang_lpdb_panjang + data.hutang_sewa_panjang + data.hutang_lain

                    let kppr2 = ((jmljp / jmleku) * 100);
                    // console.log(kppr2);
                    if (kppr2 == Infinity) {
                        kppr2 = 0;
                    } else if (isNaN(kppr2)) kppr2 = 0;

                    $("#kppr2").text(kppr2 + "%");

                    if (kppr2 <= 100) {
                        $("#kppn2").text("4");
                    } else if (kppr2 <= 125) {
                        $("#kppn2").text("3");
                    } else if (kppr2 <= 150) {
                        $("#kppn2").text("2");
                    } else {
                        $("#kppn2").text("1");
                    }

                    if (kppr2 <= 100) {
                        $("#kppk2").text("Tidak Baik");
                    } else if (kppr2 <= 125) {
                        $("#kppk2").text("Kurang Baik");
                    } else if (kppr2 <= 150) {
                        $("#kppk2").text("Cukup Baik");
                    } else {
                        $("#kppk2").text("Baik");
                    }

                    if (kppr2 <= 100) {
                        $("#kpps2").text("1");
                    } else if (kppr2 <= 125) {
                        $("#kpps2").text("2");
                    } else if (kppr2 <= 150) {
                        $("#kpps2").text("3");
                    } else {
                        $("#kpps2").text("4");
                    }

                    //total kecukupan modal
                    let totalkp = 1;
                    let kp1 = parseInt($("#kpn1").text());

                    let ks1 = parseInt($("#kps1").text());

                    $("#hkp1").text(kp1);
                    $("#hkp2").text((kp1 / totalkp).toFixed(2));
                    $("#hkp3").text(((ks1 * 100) / (totalkp * 4)).toFixed(2));

                    let hkp3 = $("#hkp3").text();
                    if (hkp3 <= 51) {
                        $("#hkp4").text("DALAM PENGAWASAN KHUSUS");
                        $("#colorhmr").css("background-color", "red");
                    } else if (hkp3 <= 66) {
                        $("#hkp4").text("DALAM PENGAWASAN");
                        $("#colorhmr").css("background-color", "#FF8C00");
                    } else if (hkp3 <= 80) {
                        $("#hkp4").text("CUKUP SEHAT");
                        $("#colorhmr").css("background-color", "#FFD700");
                    } else {
                        $("#hkp4").text("SEHAT");
                        $("#colorhmr").css("background-color", "#7CFC00");
                    }

                    //total pengelolaan
                    let totalkpp = 2;
                    let kpn1 = parseInt($("#kppn1").text());
                    let kpn2 = parseInt($("#kppn2").text());

                    let kps1 = parseInt($("#kpps1").text());
                    let kps2 = parseInt($("#kpps2").text());

                    let totalkpn = kpn1 + kpn2;
                    let totalkps = kps1 + kps2;

                    $("#hkpp1").text(totalkpn);
                    $("#hkpp2").text((totalkpn / totalkpp).toFixed(2));
                    $("#hkpp3").text(((totalkps * 100) / (totalkpp * 4)).toFixed(2));

                    let hkpp3 = $("#hkpp3").text();
                    if (hkpp3 <= 51) {
                        $("#hkpp4").text("DALAM PENGAWASAN KHUSUS");
                        $("#colorhmr").css("background-color", "red");
                    } else if (hkpp3 <= 66) {
                        $("#hkpp4").text("DALAM PENGAWASAN");
                        $("#colorhmr").css("background-color", "#FF8C00");
                    } else if (hkpp3 <= 80) {
                        $("#hkpp4").text("CUKUP SEHAT");
                        $("#colorhmr").css("background-color", "#FFD700");
                    } else {
                        $("#hkpp4").text("SEHAT");
                        $("#colorhmr").css("background-color", "#7CFC00");
                    }

                    //total permodalan
                    $("#hp1").text(kp1 + totalkpn);
                    //set value hpr2
                    let hp1 = parseInt($("#hp1").text());
                    $("#hp2").text((hp1 / (totalkp + totalkpp)).toFixed(2));
                    //set value hpr3
                    let allskor = ks1 + totalkps;
                    let alldatapr = totalkp + totalkpp;
                    $("#hp3").text(((allskor * 100) / (alldatapr * 4)).toFixed(2));
                    //set value hpr4
                    let hp3 = $("#hp3").text();
                    if (hp3 <= 51) {
                        $("#hp4").text("DALAM PENGAWASAN KHUSUS");
                        $("#colorhpr").css("background-color", "red");
                    } else if (hpr3 <= 66) {
                        $("#hp4").text("DALAM PENGAWASAN");
                        $("#colorhpr").css("background-color", "#FF8C00");
                    } else if (hpr3 <= 80) {
                        $("#hp4").text("CUKUP SEHAT");
                        $("#colorhpr").css("background-color", "#FFD700");
                    } else {
                        $("#hp4").text("SEHAT");
                        $("#colorhpr").css("background-color", "#7CFC00");
                    }
                });
            });

    }

});