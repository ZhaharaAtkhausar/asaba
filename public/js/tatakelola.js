$(function () {
    $("#search").on("change", function () {
        //ambil id dari isi selectoption
        let id = $(this).val();
        console.log(id);

        $.get("/koperasi/tatakelola/" + id)
        .then(res => {
            if (res.length < 1) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Data Tidak Ditemukan',
                    text: 'Membersihkan Halaman',
                })
                $($("body").find("table>tbody>tr>td[id]")).text("");
            }else{
                res.map(data => {
                    console.log(data);
                    //PRINSIP KOPERASI
                    //membuat variabel untuk mengisi table baris 1
                    let e6 =parseInt(data.pk_1a);
                    let e7 =parseInt(data.pk_1b);
                    let e8 =parseInt(data.pk_1c);
                    let e9 =parseInt(data.pk_1d);

                    //set value ke table tkr1
                    let tkr1 = ((e6+e7+e8+e9)/4)*100 ;
                    $("#tkr1").text(tkr1+"%");
                    //set value ke table tkn1
                    if(tkr1 <= 25 ) {
                        $("#tkn1").text("4");
                    } else if (tkr1 <= 50) {
                        $("#tkn1").text("3");
                    } else if (tkr1 <= 75 ) {
                        $("#tkn1").text("2");
                    } else {
                        $("#tkn1").text("1");
                    }
                    //set value ke table tkk1
                    if(tkr1 <= 25 ) {
                        $("#tkk1").text("Tidak Baik");
                    } else if (tkr1 <= 50) {
                        $("#tkk1").text("Kurang Baik");
                    } else if (tkr1 <= 75 ) {
                        $("#tkk1").text("Cukup Baik");
                    } else {
                        $("#tkk1").text("Baik");
                    }
                    //set value ke table tks1
                    if(tkr1 <= 25 ) {
                        $("#tks1").text("1");
                    } else if (tkr1 <= 50) {
                        $("#tks1").text("2");
                    } else if (tkr1 <= 75 ) {
                        $("#tks1").text("3");
                    } else {
                        $("#tks1").text("4");
                    }

                    //mengisi table baris 2
                    let e10 =parseInt(data.pk_2a);
                    let e11 =parseInt(data.pk_2b);
                    let e12 =parseInt(data.pk_2c);
                    let e13 =parseInt(data.pk_2d);
                    let e14 =parseInt(data.pk_2e);

                    //set value ke table tkr1
                    let tkr2 = ((e10+e11+e12+e13+e14)/5)*100 ;
                    $("#tkr2").text(tkr2+"%");
                    //set value ke table tkn1
                    if(tkr2 <= 25 ) {
                        $("#tkn2").text("4");
                    } else if (tkr2 <= 50) {
                        $("#tkn2").text("3");
                    } else if (tkr2 <= 75 ) {
                        $("#tkn2").text("2");
                    } else {
                        $("#tkn2").text("1");
                    }
                    //set value ke table tkk2
                    if(tkr2 <= 25 ) {
                        $("#tkk2").text("Tidak Baik");
                    } else if (tkr2 <= 50) {
                        $("#tkk2").text("Kurang Baik");
                    } else if (tkr2 <= 75 ) {
                        $("#tkk2").text("Cukup Baik");
                    } else {
                        $("#tkk2").text("Baik");
                    }
                    //set value ke table tks2
                    if(tkr2 <= 25 ) {
                        $("#tks2").text("1");
                    } else if (tkr1 <= 50) {
                        $("#tks2").text("2");
                    } else if (tkr2 <= 75 ) {
                        $("#tks2").text("3");
                    } else {
                        $("#tks2").text("4");
                    }

                    //mengisi tabel baris 3
                    let e15 =parseInt(data.pk_3a);
                    let e16 =parseInt(data.pk_3b);
                    let e17 =parseInt(data.pk_3c);

                    //set value ke table tkr1
                    let tkr3 = ((e15+e16+e17)/3)*100 ;
                    $("#tkr3").text(tkr3+"%");
                    //set value ke table tkn1
                    if(tkr3 <= 25 ) {
                        $("#tkn3").text("4");
                    } else if (tkr3 <= 50) {
                        $("#tkn3").text("3");
                    } else if (tkr3 <= 75 ) {
                        $("#tkn3").text("2");
                    } else {
                        $("#tkn3").text("1");
                    }
                    //set value ke table tkk3
                    if(tkr3 <= 25 ) {
                        $("#tkk3").text("Tidak Baik");
                    } else if (tkr3 <= 50) {
                        $("#tkk3").text("Kurang Baik");
                    } else if (tkr3 <= 75 ) {
                        $("#tkk3").text("Cukup Baik");
                    } else {
                        $("#tkk3").text("Baik");
                    }
                    //set value ke table tks3
                    if(tkr3 <= 25 ) {
                        $("#tks3").text("1");
                    } else if (tkr1 <= 50) {
                        $("#tks3").text("2");
                    } else if (tkr3 <= 75 ) {
                        $("#tks3").text("3");
                    } else {
                        $("#tks3").text("4");
                    }

                     //mengisi tabel baris 4
                     let e18 =parseInt(data.pk_4a);
                     let e19 =parseInt(data.pk_4b);
                     let e20 =parseInt(data.pk_4c);
                     let e21 =parseInt(data.pk_4d);

                     //set value ke table tkr1
                     let tkr4 = ((e18+e19+e20+e21)/4)*100 ;
                     $("#tkr4").text(tkr4+"%");
                     //set value ke table tkn1
                     if(tkr4 <= 25 ) {
                         $("#tkn4").text("4");
                     } else if (tkr4 <= 50) {
                         $("#tkn4").text("3");
                     } else if (tkr4 <= 75 ) {
                         $("#tkn4").text("2");
                     } else {
                         $("#tkn4").text("1");
                     }
                     //set value ke table tkk4
                     if(tkr4 <= 25 ) {
                         $("#tkk4").text("Tidak Baik");
                     } else if (tkr4 <= 50) {
                         $("#tkk4").text("Kurang Baik");
                     } else if (tkr4 <= 75 ) {
                         $("#tkk4").text("Cukup Baik");
                     } else {
                         $("#tkk4").text("Baik");
                     }
                     //set value ke table tks4
                     if(tkr4 <= 25 ) {
                         $("#tks4").text("1");
                     } else if (tkr1 <= 50) {
                         $("#tks4").text("2");
                     } else if (tkr4 <= 75 ) {
                         $("#tks4").text("3");
                     } else {
                         $("#tks4").text("4");
                     }

                     //mengisi tabel baris 5
                     let e22 =parseInt(data.pk_5a);
                     let e23 =parseInt(data.pk_5b);
                     let e24 =parseInt(data.pk_5c);
                     let e25 =parseInt(data.pk_5d);

                     //set value ke table tkr1
                     let tkr5 = ((e22+e23+e24+e25)/4)*100 ;
                     $("#tkr5").text(tkr5+"%");
                     //set value ke table tkn1
                     if(tkr5 <= 25 ) {
                         $("#tkn5").text("4");
                     } else if (tkr5 <= 50) {
                         $("#tkn5").text("3");
                     } else if (tkr5 <= 75 ) {
                         $("#tkn5").text("2");
                     } else {
                         $("#tkn5").text("1");
                     }
                     //set value ke table tkk5
                     if(tkr5 <= 25 ) {
                         $("#tkk5").text("Tidak Baik");
                     } else if (tkr5 <= 50) {
                         $("#tkk5").text("Kurang Baik");
                     } else if (tkr5 <= 75 ) {
                         $("#tkk5").text("Cukup Baik");
                     } else {
                         $("#tkk5").text("Baik");
                     }
                     //set value ke table tks5
                     if(tkr5 <= 25 ) {
                         $("#tks5").text("1");
                     } else if (tkr1 <= 50) {
                         $("#tks5").text("2");
                     } else if (tkr5 <= 75 ) {
                         $("#tks5").text("3");
                     } else {
                         $("#tks5").text("4");
                     }

                     //mengisi tabel baris 6
                     let e26 =parseInt(data.pk_6a);
                     let e27 =parseInt(data.pk_6b);
                     let e28 =parseInt(data.pk_6c);
                     let e29 =parseInt(data.pk_6d);

                     //set value ke table tkr1
                     let tkr6 = ((e26+e27+e28+e29)/4)*100 ;
                     $("#tkr6").text(tkr6+"%");
                     //set value ke table tkn1
                     if(tkr6 <= 25 ) {
                         $("#tkn6").text("4");
                     } else if (tkr6 <= 50) {
                         $("#tkn6").text("3");
                     } else if (tkr6 <= 75 ) {
                         $("#tkn6").text("2");
                     } else {
                         $("#tkn6").text("1");
                     }
                     //set value ke table tkk6
                     if(tkr6 <= 25 ) {
                         $("#tkk6").text("Tidak Baik");
                     } else if (tkr6 <= 50) {
                         $("#tkk6").text("Kurang Baik");
                     } else if (tkr6 <= 75 ) {
                         $("#tkk6").text("Cukup Baik");
                     } else {
                         $("#tkk6").text("Baik");
                     }
                     //set value ke table tks6
                     if(tkr6 <= 25 ) {
                         $("#tks6").text("1");
                     } else if (tkr1 <= 50) {
                         $("#tks6").text("2");
                     } else if (tkr6 <= 75 ) {
                         $("#tks6").text("3");
                     } else {
                         $("#tks6").text("4");
                     }

                     //mengisi tabel baris 7
                     let e30 =parseInt(data.pk_7a);
                     let e31 =parseInt(data.pk_7b);
                     let e32 =parseInt(data.pk_7c);
                     let e33 =parseInt(data.pk_7d);

                     //set value ke table tkr1
                     let tkr7 = ((e30+e31+e32+e33)/4)*100 ;
                     $("#tkr7").text(tkr7+"%");
                     //set value ke table tkn1
                     if(tkr7 <= 25 ) {
                         $("#tkn7").text("4");
                     } else if (tkr7 <= 50) {
                         $("#tkn7").text("3");
                     } else if (tkr7 <= 75 ) {
                         $("#tkn7").text("2");
                     } else {
                         $("#tkn7").text("1");
                     }
                     //set value ke table tkk7
                     if(tkr7 <= 25 ) {
                         $("#tkk7").text("Tidak Baik");
                     } else if (tkr7 <= 50) {
                         $("#tkk7").text("Kurang Baik");
                     } else if (tkr7 <= 75 ) {
                         $("#tkk7").text("Cukup Baik");
                     } else {
                         $("#tkk7").text("Baik");
                     }
                     //set value ke table tks7
                     if(tkr7 <= 25 ) {
                         $("#tks7").text("1");
                     } else if (tkr1 <= 50) {
                         $("#tks7").text("2");
                     } else if (tkr7 <= 75 ) {
                         $("#tks7").text("3");
                     } else {
                         $("#tks7").text("4");
                     }
                     //Mengisi baris hasil Prinsip Koperasi
                     let totaldatapk = 7;
                     //menghitung total nilai
                     let htkn1 = parseInt($("#tkn1").text());
                     let htkn2 = parseInt($("#tkn2").text());
                     let htkn3 = parseInt($("#tkn3").text());
                     let htkn4 = parseInt($("#tkn4").text());
                     let htkn5 = parseInt($("#tkn5").text());
                     let htkn6 = parseInt($("#tkn6").text());
                     let htkn7 = parseInt($("#tkn7").text());
                     let totaltkn = htkn1+htkn2+htkn3+htkn4+htkn5+htkn6+htkn7;
                     console.log(totaltkn);
                     //menghitung total skor
                     let htks1 = parseInt($("#tks1").text());
                     let htks2 = parseInt($("#tks2").text());
                     let htks3 = parseInt($("#tks3").text());
                     let htks4 = parseInt($("#tks4").text());
                     let htks5 = parseInt($("#tks5").text());
                     let htks6 = parseInt($("#tks6").text());
                     let htks7 = parseInt($("#tks7").text());
                     let totaltks = htks1+htks2+htks3+htks4+htks5+htks6+htks7;
                        //mengisi hpk1
                        $("#hpk1").text(totaltkn);
                        //mengisi hpk2
                        $("#hpk2").text((totaltkn/totaldatapk).toFixed(2));
                        //mengisi hpk3
                        $("#hpk3").text(((totaltks*100)/(totaldatapk*4)).toFixed(2));
                        //mengisi hpk4
                        let hpk3 = $("#hpk3").text();
                        if (hpk3 <= 51) {
                            $("#hpk4").text("Dalam Pengawasan Khusus");
                            $("#colorpk").css( "background-color", "red" );
                        } else if (hpk3 <= 66) {
                            $("#hpk4").text("Dalam Pengawasan");
                            $("#colorpk").css( "background-color", "#FF8C00" );
                        } else if (hpk3 <= 80) {
                            $("#hpk4").text("Cukup Sehat");
                            $("#colorpk").css( "background-color", "#FFD700" );
                        } else {
                            $("#hpk4").text("Sehat");
                            $("#colorpk").css( "background-color", "#7CFC00" );
                        }

                     //KELEMBAGAAN

                     //mengisi tabel baris 8
                     let e36 =parseInt(data.pk_21a);
                     let e37 =parseInt(data.pk_21b);
                     let e38 =parseInt(data.pk_21c);

                     //set value ke table tkr8
                     let tkr8 = ((e36+e37+e38)/3)*100 ;
                     $("#tkr8").text(tkr8+"%");
                     //set value ke table tkn8
                     if(tkr8 <= 25 ) {
                         $("#tkn8").text("4");
                     } else if (tkr8 <= 50) {
                         $("#tkn8").text("3");
                     } else if (tkr8 <= 75 ) {
                         $("#tkn8").text("2");
                     } else {
                         $("#tkn8").text("1");
                     }
                     //set value ke table tkk8
                     if(tkr8 <= 25 ) {
                         $("#tkk8").text("Tidak Baik");
                     } else if (tkr8 <= 50) {
                         $("#tkk8").text("Kurang Baik");
                     } else if (tkr8 <= 75 ) {
                         $("#tkk8").text("Cukup Baik");
                     } else {
                         $("#tkk8").text("Baik");
                     }
                     //set value ke table tks8
                     if(tkr8 <= 25 ) {
                         $("#tks8").text("1");
                     } else if (tkr1 <= 50) {
                         $("#tks8").text("2");
                     } else if (tkr8 <= 75 ) {
                         $("#tks8").text("3");
                     } else {
                         $("#tks8").text("4");
                     }

                     //mengisi tabel baris 9
                     let e39 =parseInt(data.pk_22a);
                     let e40 =parseInt(data.pk_22b);
                     let e41 =parseInt(data.pk_22c);

                     //set value ke table tkr9
                     let tkr9 = ((e39+e40+e41)/3)*100 ;
                     $("#tkr9").text(tkr9+"%");
                     //set value ke table tkn9
                     if(tkr9 <= 25 ) {
                         $("#tkn9").text("4");
                     } else if (tkr9 <= 50) {
                         $("#tkn9").text("3");
                     } else if (tkr9 <= 75 ) {
                         $("#tkn9").text("2");
                     } else {
                         $("#tkn9").text("1");
                     }
                     //set value ke table tkk9
                     if(tkr9 <= 25 ) {
                         $("#tkk9").text("Tidak Baik");
                     } else if (tkr9 <= 50) {
                         $("#tkk9").text("Kurang Baik");
                     } else if (tkr9 <= 75 ) {
                         $("#tkk9").text("Cukup Baik");
                     } else {
                         $("#tkk9").text("Baik");
                     }
                     //set value ke table tks9
                     if(tkr9 <= 25 ) {
                         $("#tks9").text("1");
                     } else if (tkr1 <= 50) {
                         $("#tks9").text("2");
                     } else if (tkr9 <= 75 ) {
                         $("#tks9").text("3");
                     } else {
                         $("#tks9").text("4");
                     }

                     //mengisi tabel baris 10
                     let e42 =parseInt(data.pk_23a);
                     let e43 =parseInt(data.pk_23b);
                     let e44 =parseInt(data.pk_23c);
                     let e45 =parseInt(data.pk_23d);
                     let e46 =parseInt(data.pk_23e);
                     let e47 =parseInt(data.pk_23f);
                     let e48 =parseInt(data.pk_23g);
                     let e49 =parseInt(data.pk_23h);
                     let e50 =parseInt(data.pk_23i);
                     let e51 =parseInt(data.pk_23j);
                     let e52 =parseInt(data.pk_23k);
                     let e53 =parseInt(data.pk_23l);
                     let e54 =parseInt(data.pk_23m);
                     let e55 =parseInt(data.pk_23n);
                     let e56 =parseInt(data.pk_23o);
                     let e57 =parseInt(data.pk_23p);
                     let e58 =parseInt(data.pk_23q);

                     //set value ke table tkr1
                     let tkr10 = ((e42+e43+e44+e45+e46+e47+e48+e49+e50+e51+e52+e53+e54+e55+e56+e57+e58)/17)*100 ;
                     $("#tkr10").text(tkr10+"%");
                     //set value ke table tkn1
                     if(tkr10 <= 25 ) {
                         $("#tkn10").text("4");
                     } else if (tkr10 <= 50) {
                         $("#tkn10").text("3");
                     } else if (tkr10 <= 75 ) {
                         $("#tkn10").text("2");
                     } else {
                         $("#tkn10").text("1");
                     }
                     //set value ke table tkk10
                     if(tkr10 <= 25 ) {
                         $("#tkk10").text("Tidak Baik");
                     } else if (tkr10 <= 50) {
                         $("#tkk10").text("Kurang Baik");
                     } else if (tkr10 <= 75 ) {
                         $("#tkk10").text("Cukup Baik");
                     } else {
                         $("#tkk10").text("Baik");
                     }
                     //set value ke table tks10
                     if(tkr10 <= 25 ) {
                         $("#tks10").text("1");
                     } else if (tkr1 <= 50) {
                         $("#tks10").text("2");
                     } else if (tkr10 <= 75 ) {
                         $("#tks10").text("3");
                     } else {
                         $("#tks10").text("4");
                     }

                     //mengisi tabel baris 11
                     let e59 =parseInt(data.pk_24a);
                     let e60 =parseInt(data.pk_24b);
                     let e61 =parseInt(data.pk_24c);
                     let e62 =parseInt(data.pk_24d);

                     //set value ke table tkr11
                     let tkr11 = ((e59+e60+e61+e62)/4)*100 ;
                     $("#tkr11").text(tkr11+"%");
                     //set value ke table tkn11
                     if(tkr11 <= 25 ) {
                         $("#tkn11").text("4");
                     } else if (tkr11 <= 50) {
                         $("#tkn11").text("3");
                     } else if (tkr11 <= 75 ) {
                         $("#tkn11").text("2");
                     } else {
                         $("#tkn11").text("1");
                     }
                     //set value ke table tkk11
                     if(tkr11 <= 25 ) {
                         $("#tkk11").text("Tidak Baik");
                     } else if (tkr11 <= 50) {
                         $("#tkk11").text("Kurang Baik");
                     } else if (tkr11 <= 75 ) {
                         $("#tkk11").text("Cukup Baik");
                     } else {
                         $("#tkk11").text("Baik");
                     }
                     //set value ke table tks11
                     if(tkr11 <= 25 ) {
                         $("#tks11").text("1");
                     } else if (tkr1 <= 50) {
                         $("#tks11").text("2");
                     } else if (tkr11 <= 75 ) {
                         $("#tks11").text("3");
                     } else {
                         $("#tks11").text("4");
                     }

                     //mengisi tabel baris 12
                     let e63 =parseInt(data.pk_25a);
                     let e64 =parseInt(data.pk_25b);
                     let e65 =parseInt(data.pk_25c);

                     //set value ke table tkr12
                     let tkr12 = ((e63+e64+e65)/3)*100 ;
                     $("#tkr12").text(tkr12+"%");
                     //set value ke table tkn12
                     if(tkr12 <= 25 ) {
                         $("#tkn12").text("4");
                     } else if (tkr12 <= 50) {
                         $("#tkn12").text("3");
                     } else if (tkr12 <= 75 ) {
                         $("#tkn12").text("2");
                     } else {
                         $("#tkn12").text("1");
                     }
                     //set value ke table tkk12
                     if(tkr12 <= 25 ) {
                         $("#tkk12").text("Tidak Baik");
                     } else if (tkr12 <= 50) {
                         $("#tkk12").text("Kurang Baik");
                     } else if (tkr12 <= 75 ) {
                         $("#tkk12").text("Cukup Baik");
                     } else {
                         $("#tkk12").text("Baik");
                     }
                     //set value ke table tks12
                     if(tkr12 <= 25 ) {
                         $("#tks12").text("1");
                     } else if (tkr1 <= 50) {
                         $("#tks12").text("2");
                     } else if (tkr12 <= 75 ) {
                         $("#tks12").text("3");
                     } else {
                         $("#tks12").text("4");
                     }
                     //Mengisi baris hasil Kelembagaan
                     let totalkelembagaan = 5;
                     //menghitung total nilai
                     let htknk1 = parseInt($("#tkn8").text());
                     let htknk2 = parseInt($("#tkn9").text());
                     let htknk3 = parseInt($("#tkn10").text());
                     let htknk4 = parseInt($("#tkn11").text());
                     let htknk5 = parseInt($("#tkn12").text());
                     let totaltknk = htknk1+htknk2+htknk3+htknk4+htknk5;
                     //menghitung total skor
                     let htksk1 = parseInt($("#tks8").text());
                     let htksk2 = parseInt($("#tks9").text());
                     let htksk3 = parseInt($("#tks10").text());
                     let htksk4 = parseInt($("#tks11").text());
                     let htksk5 = parseInt($("#tks12").text());
                     let totaltksk = htksk1+htksk2+htksk3+htksk4+htksk5;
                        //mengisi hpk1
                        $("#hk1").text(totaltknk);
                        //mengisi hpk2
                        $("#hk2").text((totaltknk/totalkelembagaan).toFixed(2));
                        //mengisi hpk3
                        $("#hk3").text(((totaltksk*100)/(totalkelembagaan*4)).toFixed(2));
                        //mengisi hpk4
                        let hk3 = $("#hk3").text();
                        if (hk3 <= 51) {
                            $("#hk4").text("Dalam Pengawasan Khusus");
                            $("#colorhk").css( "background-color", "red" );
                        } else if (hk3 <= 66) {
                            $("#hk4").text("Dalam Pengawasan");
                            $("#colorhk").css( "background-color", "#FF8C00" );
                        } else if (hk3 <= 80) {
                            $("#hk4").text("Cukup Sehat");
                            $("#colorhk").css( "background-color", "#FFD700" );
                        } else {
                            $("#hk4").text("Sehat");
                            $("#colorhk").css( "background-color", "#7CFC00" );
                        }

                     //MANAJEMEN KOPERASI

                     //mengisi tabel baris 13
                     let e68 =parseInt(data.pk_31a);
                     let e69 =parseInt(data.pk_31b);
                     let e70 =parseInt(data.pk_31c);

                     //set value ke table tkr13
                     let tkr13 = ((e68+e69+e70)/3)*100 ;
                     $("#tkr13").text(tkr13+"%");
                     //set value ke table tkn13
                     if(tkr13 <= 25 ) {
                         $("#tkn13").text("4");
                     } else if (tkr13 <= 50) {
                         $("#tkn13").text("3");
                     } else if (tkr13 <= 75 ) {
                         $("#tkn13").text("2");
                     } else {
                         $("#tkn13").text("1");
                     }
                     //set value ke table tkk13
                     if(tkr13 <= 25 ) {
                         $("#tkk13").text("Tidak Baik");
                     } else if (tkr13 <= 50) {
                         $("#tkk13").text("Kurang Baik");
                     } else if (tkr13 <= 75 ) {
                         $("#tkk13").text("Cukup Baik");
                     } else {
                         $("#tkk13").text("Baik");
                     }
                     //set value ke table tks13
                     if(tkr13 <= 25 ) {
                         $("#tks13").text("1");
                     } else if (tkr1 <= 50) {
                         $("#tks13").text("2");
                     } else if (tkr13 <= 75 ) {
                         $("#tks13").text("3");
                     } else {
                         $("#tks13").text("4");
                     }

                     //mengisi tabel baris 14
                     let e71 =parseInt(data.pk_32a);
                     let e72 =parseInt(data.pk_32b);
                     let e73 =parseInt(data.pk_32c);
                     let e74 =parseInt(data.pk_32d);

                     //set value ke table tkr14
                     let tkr14 = ((e71+e72+e73+e74)/4)*100 ;
                     $("#tkr14").text(tkr14+"%");
                     //set value ke table tkn14
                     if(tkr14 <= 25 ) {
                         $("#tkn14").text("4");
                     } else if (tkr14 <= 50) {
                         $("#tkn14").text("3");
                     } else if (tkr14 <= 75 ) {
                         $("#tkn14").text("2");
                     } else {
                         $("#tkn14").text("1");
                     }
                     //set value ke table tkk14
                     if(tkr14 <= 25 ) {
                         $("#tkk14").text("Tidak Baik");
                     } else if (tkr14 <= 50) {
                         $("#tkk14").text("Kurang Baik");
                     } else if (tkr14 <= 75 ) {
                         $("#tkk14").text("Cukup Baik");
                     } else {
                         $("#tkk14").text("Baik");
                     }
                     //set value ke table tks14
                     if(tkr14 <= 25 ) {
                         $("#tks14").text("1");
                     } else if (tkr1 <= 50) {
                         $("#tks14").text("2");
                     } else if (tkr14 <= 75 ) {
                         $("#tks14").text("3");
                     } else {
                         $("#tks14").text("4");
                     }

                     //mengisi tabel baris 12
                     let e75 =parseInt(data.pk_33a);
                     let e76 =parseInt(data.pk_33b);
                     let e77 =parseInt(data.pk_33c);
                     let e78 =parseInt(data.pk_33d);

                     //set value ke table tkr15
                     let tkr15 = ((e75+e76+e77+e78)/4)*100 ;
                     $("#tkr15").text(tkr15+"%");
                     //set value ke table tkn15
                     if(tkr15 <= 25 ) {
                         $("#tkn15").text("4");
                     } else if (tkr15 <= 50) {
                         $("#tkn15").text("3");
                     } else if (tkr15 <= 75 ) {
                         $("#tkn15").text("2");
                     } else {
                         $("#tkn15").text("1");
                     }
                     //set value ke table tkk15
                     if(tkr15 <= 25 ) {
                         $("#tkk15").text("Tidak Baik");
                     } else if (tkr15 <= 50) {
                         $("#tkk15").text("Kurang Baik");
                     } else if (tkr15 <= 75 ) {
                         $("#tkk15").text("Cukup Baik");
                     } else {
                         $("#tkk15").text("Baik");
                     }
                     //set value ke table tks15
                     if(tkr15 <= 25 ) {
                         $("#tks15").text("1");
                     } else if (tkr1 <= 50) {
                         $("#tks15").text("2");
                     } else if (tkr15 <= 75 ) {
                         $("#tks15").text("3");
                     } else {
                         $("#tks15").text("4");
                     }

                     //mengisi tabel baris 16
                     let e79 =parseInt(data.pk_34a);
                     let e80 =parseInt(data.pk_34b);
                     let e81 =parseInt(data.pk_34c);
                     let e82 =parseInt(data.pk_34d);

                     //set value ke table tkr16
                     let tkr16 = ((e79+e80+e81+e82)/4)*100 ;
                     $("#tkr16").text(tkr16+"%");
                     //set value ke table tkn16
                     if(tkr16 <= 25 ) {
                         $("#tkn16").text("4");
                     } else if (tkr16 <= 50) {
                         $("#tkn16").text("3");
                     } else if (tkr16 <= 75 ) {
                         $("#tkn16").text("2");
                     } else {
                         $("#tkn16").text("1");
                     }
                     //set value ke table tkk16
                     if(tkr16 <= 25 ) {
                         $("#tkk16").text("Tidak Baik");
                     } else if (tkr16 <= 50) {
                         $("#tkk16").text("Kurang Baik");
                     } else if (tkr16 <= 75 ) {
                         $("#tkk16").text("Cukup Baik");
                     } else {
                         $("#tkk16").text("Baik");
                     }
                     //set value ke table tks16
                     if(tkr16 <= 25 ) {
                         $("#tks16").text("1");
                     } else if (tkr1 <= 50) {
                         $("#tks16").text("2");
                     } else if (tkr16 <= 75 ) {
                         $("#tks16").text("3");
                     } else {
                         $("#tks16").text("4");
                     }

                     //mengisi tabel baris 17
                     let e83 =parseInt(data.pk_35a);
                     let e84 =parseInt(data.pk_35b);
                     let e85 =parseInt(data.pk_35c);
                     let e86 =parseInt(data.pk_35d);

                     //set value ke table tkr17
                     let tkr17 = ((e83+e84+e85+e86)/4)*100 ;
                     $("#tkr17").text(tkr17+"%");
                     //set value ke table tkn17
                     if(tkr17 <= 25 ) {
                         $("#tkn17").text("4");
                     } else if (tkr17 <= 50) {
                         $("#tkn17").text("3");
                     } else if (tkr17 <= 75 ) {
                         $("#tkn17").text("2");
                     } else {
                         $("#tkn17").text("1");
                     }
                     //set value ke table tkk17
                     if(tkr17 <= 25 ) {
                         $("#tkk17").text("Tidak Baik");
                     } else if (tkr17 <= 50) {
                         $("#tkk17").text("Kurang Baik");
                     } else if (tkr17 <= 75 ) {
                         $("#tkk17").text("Cukup Baik");
                     } else {
                         $("#tkk17").text("Baik");
                     }
                     //set value ke table tks17
                     if(tkr17 <= 25 ) {
                         $("#tks17").text("1");
                     } else if (tkr1 <= 50) {
                         $("#tks17").text("2");
                     } else if (tkr17 <= 75 ) {
                         $("#tks17").text("3");
                     } else {
                         $("#tks17").text("4");
                     }
                     //Mengisi baris hasil Kelembagaan
                     let totalmanajemen = 5;
                     //menghitung total nilai
                     let htknm1 = parseInt($("#tkn13").text());
                     let htknm2 = parseInt($("#tkn14").text());
                     let htknm3 = parseInt($("#tkn15").text());
                     let htknm4 = parseInt($("#tkn16").text());
                     let htknm5 = parseInt($("#tkn17").text());
                     let totaltknm = htknm1+htknm2+htknm3+htknm4+htknm5;
                     //menghitung total skor
                     let htksm1 = parseInt($("#tks13").text());
                     let htksm2 = parseInt($("#tks14").text());
                     let htksm3 = parseInt($("#tks15").text());
                     let htksm4 = parseInt($("#tks16").text());
                     let htksm5 = parseInt($("#tks17").text());
                     let totaltksm = htksm1+htksm2+htksm3+htksm4+htksm5;
                        //mengisi hpk1
                        $("#hm1").text(totaltknm);
                        //mengisi hpk2
                        $("#hm2").text((totaltknm/totalmanajemen).toFixed(2));
                        //mengisi hpk3
                        $("#hm3").text(((totaltksm*100)/(totalmanajemen*4)).toFixed(2));
                        //mengisi hpk4
                        let hm3 = $("#hm3").text();
                        if (hm3 <= 51) {
                            $("#hm4").text("Dalam Pengawasan Khusus");
                            $("#colorhm").css( "background-color", "red" );
                        } else if (hm3 <= 66) {
                            $("#hm4").text("Dalam Pengawasan");
                            $("#colorhm").css( "background-color", "#FF8C00" );
                        } else if (hm3 <= 80) {
                            $("#hm4").text("Cukup Sehat");
                            $("#colorhm").css( "background-color", "#FFD700" );
                        } else {
                            $("#hm4").text("Sehat");
                            $("#colorhm").css( "background-color", "#7CFC00" );
                        }
                    //menghitung keseluruhan tatakelola
                        //mengisi baris hasil tata kelola
                        let totalnilaitk = totaltkn+totaltknk+totaltknm;
                        $("#htk1").text(totalnilaitk);
                        let totaldatatk = totaldatapk+totalkelembagaan+totalmanajemen;
                        $("#htk2").text((totalnilaitk/totaldatatk).toFixed(2));
                        let totalskortk = totaltks+totaltksk+totaltksm;
                        $("#htk3").text(((totalskortk*100)/(totaldatatk*4)).toFixed(2));
                        let htk3 = $("#htk3").text();
                        if (htk3 <= 51) {
                            $("#htk4").text("Dalam Pengawasan Khusus");
                            $("#colorhtk").css( "background-color", "red" );
                        } else if (htk3 <= 66) {
                            $("#htk4").text("Dalam Pengawasan");
                            $("#colorhtk").css( "background-color", "#FF8C00" );
                        } else if (htk3 <= 80) {
                            $("#htk4").text("Cukup Sehat");
                            $("#colorhtk").css( "background-color", "#FFD700" );
                        } else {
                            $("#htk4").text("Sehat");
                            $("#colorhtk").css( "background-color", "#7CFC00" );
                        }
                })//penutup res.map
            }
        })
    });
});
