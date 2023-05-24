$(function () {
    let id = '';
    if (localStorage.getItem("id") == null) {
        $("#search").on("change", function () {
            //ambil id dari isi selectoption
            id = $(this).val();
            // console.log(id);

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
                        // console.log(data);
                        //PRINSIP KOPERASI
                        //membuat variabel untuk mengisi table baris 1
                        let e6 =parseInt(data.pk_1a);
                        let e7 =parseInt(data.pk_1b);
                        let e8 =parseInt(data.pk_1c);
                        let e9 =parseInt(data.pk_1d);

                        //set value ke table tkr1
                        let tkr1 = ((e6+e7+e8+e9)/4)*100 ;
                        let tkn1 = '';
                        let tks1 = '';

                        //set value ke table tkn1
                        if(tkr1 <= 25 ) {
                            tkn1 = 4;
                        } else if (tkr1 <= 50) {
                            tkn1 = 3;
                        } else if (tkr1 <= 75 ) {
                            tkn1 = 2;
                        } else {
                            tkn1 = 1;
                        }

                        //set value ke table tks1
                        if(tkr1 <= 25 ) {
                            tks1 = 1;
                        } else if (tkr1 <= 50) {
                            tks1 = 2;
                        } else if (tkr1 <= 75 ) {
                            tks1 = 3;
                        } else {
                            tks1 = 4;
                        }

                        //mengisi table baris 2
                        let e10 =parseInt(data.pk_2a);
                        let e11 =parseInt(data.pk_2b);
                        let e12 =parseInt(data.pk_2c);
                        let e13 =parseInt(data.pk_2d);
                        let e14 =parseInt(data.pk_2e);

                        //set value ke table tkr1
                        let tkr2 = ((e10+e11+e12+e13+e14)/5)*100 ;
                        let tkn2 = '';
                        let tks2 = '';

                        //set value ke table tkn1
                        if(tkr2 <= 25 ) {
                            tkn2 = 4;
                        } else if (tkr2 <= 50) {
                            tkn2= 3;
                        } else if (tkr2 <= 75 ) {
                            tkn2= 2;
                        } else {
                            tkn2= 1;
                        }

                        //set value ke table tks2
                        if(tkr2 <= 25 ) {
                            tks2= 1;
                        } else if (tkr1 <= 50) {
                            tks2= 2;
                        } else if (tkr2 <= 75 ) {
                            tks2= 3;
                        } else {
                            tks2= 4;
                        }

                        //mengisi tabel baris 3
                        let e15 =parseInt(data.pk_3a);
                        let e16 =parseInt(data.pk_3b);
                        let e17 =parseInt(data.pk_3c);

                        //set value ke table tkr1
                        let tkr3 = ((e15+e16+e17)/3)*100 ;
                        let tkn3 = '';
                        let tks3 = '';

                        //set value ke table tkn1
                        if(tkr3 <= 25 ) {
                            tkn3= 4;
                        } else if (tkr3 <= 50) {
                            tkn3= 3;
                        } else if (tkr3 <= 75 ) {
                            tkn3= 2;
                        } else {
                            tkn3= 1;
                        }

                        //set value ke table tks3
                        if(tkr3 <= 25 ) {
                            tks3= 1;
                        } else if (tkr1 <= 50) {
                            tks3= 2;
                        } else if (tkr3 <= 75 ) {
                            tks3= 3;
                        } else {
                            tks3= 4;
                        }

                        //mengisi tabel baris 4
                        let e18 =parseInt(data.pk_4a);
                        let e19 =parseInt(data.pk_4b);
                        let e20 =parseInt(data.pk_4c);
                        let e21 =parseInt(data.pk_4d);

                        //set value ke table tkr1
                        let tkr4 = ((e18+e19+e20+e21)/4)*100 ;
                        let tkn4 = '';
                        let tks4 = '';

                        //set value ke table tkn1
                        if(tkr4 <= 25 ) {
                            tkn4= 4;
                        } else if (tkr4 <= 50) {
                            tkn4= 3;
                        } else if (tkr4 <= 75 ) {
                            tkn4= 2;
                        } else {
                            tkn4= 1;
                        }

                        //set value ke table tks4
                        if(tkr4 <= 25 ) {
                            tks4= 1;
                        } else if (tkr1 <= 50) {
                            tks4= 2;
                        } else if (tkr4 <= 75 ) {
                            tks4= 3;
                        } else {
                            tks4= 4;
                        }

                        //mengisi tabel baris 5
                        let e22 =parseInt(data.pk_5a);
                        let e23 =parseInt(data.pk_5b);
                        let e24 =parseInt(data.pk_5c);
                        let e25 =parseInt(data.pk_5d);

                        //set value ke table tkr1
                        let tkr5 = ((e22+e23+e24+e25)/4)*100 ;
                        let tkn5 = '';
                        let tks5 = '';

                        //set value ke table tkn1
                        if(tkr5 <= 25 ) {
                            tkn5= 4;
                        } else if (tkr5 <= 50) {
                            tkn5= 3;
                        } else if (tkr5 <= 75 ) {
                            tkn5= 2;
                        } else {
                            tkn5= 1;
                        }

                        //set value ke table tks5
                        if(tkr5 <= 25 ) {
                            tks5= 1;
                        } else if (tkr1 <= 50) {
                            tks5= 2;
                        } else if (tkr5 <= 75 ) {
                            tks5= 3;
                        } else {
                            tks5= 4;
                        }

                        //mengisi tabel baris 6
                        let e26 =parseInt(data.pk_6a);
                        let e27 =parseInt(data.pk_6b);
                        let e28 =parseInt(data.pk_6c);
                        let e29 =parseInt(data.pk_6d);

                        //set value ke table tkr1
                        let tkr6 = ((e26+e27+e28+e29)/4)*100 ;
                        let tkn6 = '';
                        let tks6 = '';

                        //set value ke table tkn1
                        if(tkr6 <= 25 ) {
                            tkn6= 4;
                        } else if (tkr6 <= 50) {
                            tkn6= 3;
                        } else if (tkr6 <= 75 ) {
                            tkn6= 2;
                        } else {
                            tkn6= 1;
                        }

                        //set value ke table tks6
                        if(tkr6 <= 25 ) {
                            tks6= 1;
                        } else if (tkr1 <= 50) {
                            tks6= 2;
                        } else if (tkr6 <= 75 ) {
                            tks6= 3;
                        } else {
                            tks6= 4;
                        }

                        //mengisi tabel baris 7
                        let e30 =parseInt(data.pk_7a);
                        let e31 =parseInt(data.pk_7b);
                        let e32 =parseInt(data.pk_7c);
                        let e33 =parseInt(data.pk_7d);

                        //set value ke table tkr1
                        let tkr7 = ((e30+e31+e32+e33)/4)*100 ;
                        let tkn7 = '';
                        let tks7 = '';

                        //set value ke table tkn1
                        if(tkr7 <= 25 ) {
                            tkn7= 4;
                        } else if (tkr7 <= 50) {
                            tkn7= 3;
                        } else if (tkr7 <= 75 ) {
                            tkn7= 2;
                        } else {
                            tkn7= 1;
                        }

                        //set value ke table tks7
                        if(tkr7 <= 25 ) {
                            tks7= 1;
                        } else if (tkr1 <= 50) {
                            tks7= 2;
                        } else if (tkr7 <= 75 ) {
                            tks7= 3;
                        } else {
                            tks7= 4;
                        }
                        //Mengisi baris hasil Prinsip Koperasi
                        let totaldatapk = 7;
                        //menghitung total nilai
                        let htkn1 = tkn1;
                        let htkn2 = tkn2;
                        let htkn3 = tkn3;
                        let htkn4 = tkn4;
                        let htkn5 = tkn5;
                        let htkn6 = tkn6;
                        let htkn7 = tkn7;
                        let totaltkn = htkn1+htkn2+htkn3+htkn4+htkn5+htkn6+htkn7;
                        // console.log(totaltkn);
                        //menghitung total skor
                        let htks1 = tks1;
                        let htks2 = tks2;
                        let htks3 = tks3;
                        let htks4 = tks4;
                        let htks5 = tks5;
                        let htks6 = tks6;
                        let htks7 = tks7;
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
                        let tkn8 = '';
                        let tks8 = '';

                        //set value ke table tkn8
                        if(tkr8 <= 25 ) {
                            tkn8= 4;
                        } else if (tkr8 <= 50) {
                            tkn8= 3;
                        } else if (tkr8 <= 75 ) {
                            tkn8= 2;
                        } else {
                            tkn8= 1;
                        }

                        //set value ke table tks8
                        if(tkr8 <= 25 ) {
                            tks8= 1;
                        } else if (tkr1 <= 50) {
                            tks8= 2;
                        } else if (tkr8 <= 75 ) {
                            tks8= 3;
                        } else {
                            tks8= 4;
                        }

                        //mengisi tabel baris 9
                        let e39 =parseInt(data.pk_22a);
                        let e40 =parseInt(data.pk_22b);
                        let e41 =parseInt(data.pk_22c);

                        //set value ke table tkr9
                        let tkr9 = ((e39+e40+e41)/3)*100 ;
                        let tkn9 = '';
                        let tks9 = '';

                        //set value ke table tkn9
                        if(tkr9 <= 25 ) {
                            tkn9= 4;
                        } else if (tkr9 <= 50) {
                            tkn9= 3;
                        } else if (tkr9 <= 75 ) {
                            tkn9= 2;
                        } else {
                            tkn9= 1;
                        }

                        //set value ke table tks9
                        if(tkr9 <= 25 ) {
                            tks9= 1;
                        } else if (tkr1 <= 50) {
                            tks9= 2;
                        } else if (tkr9 <= 75 ) {
                            tks9= 3;
                        } else {
                            tks9= 4;
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
                        let tkn10 = '';
                        let tks10 = '';

                        //set value ke table tkn1
                        if(tkr10 <= 25 ) {
                            tkn10= 4;
                        } else if (tkr10 <= 50) {
                            tkn10= 3;
                        } else if (tkr10 <= 75 ) {
                            tkn10= 2;
                        } else {
                            tkn10= 1;
                        }

                        //set value ke table tks10
                        if(tkr10 <= 25 ) {
                            tks10= 1;
                        } else if (tkr1 <= 50) {
                            tks10= 2;
                        } else if (tkr10 <= 75 ) {
                            tks10= 3;
                        } else {
                            tks10= 4;
                        }

                        //mengisi tabel baris 11
                        let e59 =parseInt(data.pk_24a);
                        let e60 =parseInt(data.pk_24b);
                        let e61 =parseInt(data.pk_24c);
                        let e62 =parseInt(data.pk_24d);

                        //set value ke table tkr11
                        let tkr11 = ((e59+e60+e61+e62)/4)*100 ;
                        let tkn11 = '';
                        let tks11 = '';

                        //set value ke table tkn11
                        if(tkr11 <= 25 ) {
                            tkn11= 4;
                        } else if (tkr11 <= 50) {
                            tkn11= 3;
                        } else if (tkr11 <= 75 ) {
                            tkn11= 2;
                        } else {
                            tkn11= 1;
                        }

                        //set value ke table tks11
                        if(tkr11 <= 25 ) {
                            tks11= 1;
                        } else if (tkr1 <= 50) {
                            tks11= 2;
                        } else if (tkr11 <= 75 ) {
                            tks11= 3;
                        } else {
                            tks11= 4;
                        }

                        //mengisi tabel baris 12
                        let e63 =parseInt(data.pk_25a);
                        let e64 =parseInt(data.pk_25b);
                        let e65 =parseInt(data.pk_25c);

                        //set value ke table tkr12
                        let tkr12 = ((e63+e64+e65)/3)*100 ;
                        let tkn12 = '';
                        let tks12 = '';

                        //set value ke table tkn12
                        if(tkr12 <= 25 ) {
                            tkn12= 4;
                        } else if (tkr12 <= 50) {
                            tkn12= 3;
                        } else if (tkr12 <= 75 ) {
                            tkn12= 2;
                        } else {
                            tkn12= 1;
                        }

                        //set value ke table tks12
                        if(tkr12 <= 25 ) {
                            tks12= 1;
                        } else if (tkr1 <= 50) {
                            tks12= 2;
                        } else if (tkr12 <= 75 ) {
                            tks12= 3;
                        } else {
                            tks12= 4;
                        }
                        //Mengisi baris hasil Kelembagaan
                        let totalkelembagaan = 5;
                        //menghitung total nilai
                        let htknk1 = tkn8;
                        let htknk2 = tkn9;
                        let htknk3 = tkn10;
                        let htknk4 = tkn11;
                        let htknk5 = tkn12;
                        let totaltknk = htknk1+htknk2+htknk3+htknk4+htknk5;
                        //menghitung total skor
                        let htksk1 = tks8;
                        let htksk2 = tks9;
                        let htksk3 = tks10;
                        let htksk4 = tks11;
                        let htksk5 = tks12;
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
                        let tkn13 = '';
                        let tks13 = '';

                        //set value ke table tkn13
                        if(tkr13 <= 25 ) {
                            tkn13= 4;
                        } else if (tkr13 <= 50) {
                            tkn13= 3;
                        } else if (tkr13 <= 75 ) {
                            tkn13= 2;
                        } else {
                            tkn13= 1;
                        }

                        //set value ke table tks13
                        if(tkr13 <= 25 ) {
                            tks13= 1;
                        } else if (tkr1 <= 50) {
                            tks13= 2;
                        } else if (tkr13 <= 75 ) {
                            tks13= 3;
                        } else {
                            tks13= 4;
                        }

                        //mengisi tabel baris 14
                        let e71 =parseInt(data.pk_32a);
                        let e72 =parseInt(data.pk_32b);
                        let e73 =parseInt(data.pk_32c);
                        let e74 =parseInt(data.pk_32d);

                        //set value ke table tkr14
                        let tkr14 = ((e71+e72+e73+e74)/4)*100 ;
                        let tkn14 = '';
                        let tks14 = '';

                        //set value ke table tkn14
                        if(tkr14 <= 25 ) {
                            tkn14= 4;
                        } else if (tkr14 <= 50) {
                            tkn14= 3;
                        } else if (tkr14 <= 75 ) {
                            tkn14= 2;
                        } else {
                            tkn14= 1;
                        }

                        //set value ke table tks14
                        if(tkr14 <= 25 ) {
                            tks14= 1;
                        } else if (tkr1 <= 50) {
                            tks14= 2;
                        } else if (tkr14 <= 75 ) {
                            tks14= 3;
                        } else {
                            tks14= 4;
                        }

                        //mengisi tabel baris 12
                        let e75 =parseInt(data.pk_33a);
                        let e76 =parseInt(data.pk_33b);
                        let e77 =parseInt(data.pk_33c);
                        let e78 =parseInt(data.pk_33d);

                        //set value ke table tkr15
                        let tkr15 = ((e75+e76+e77+e78)/4)*100 ;
                        let tkn15 = '';
                        let tks15 = '';
                        //set value ke table tkn15
                        if(tkr15 <= 25 ) {
                            tkn15 = 4;
                        } else if (tkr15 <= 50) {
                            tkn15= 3;
                        } else if (tkr15 <= 75 ) {
                            tkn15= 2;
                        } else {
                            tkn15= 1;
                        }

                        //set value ke table tks15
                        if(tkr15 <= 25 ) {
                            tks15= 1;
                        } else if (tkr1 <= 50) {
                            tks15= 2;
                        } else if (tkr15 <= 75 ) {
                            tks15= 3;
                        } else {
                            tks15= 4;
                        }

                        //mengisi tabel baris 16
                        let e79 =parseInt(data.pk_34a);
                        let e80 =parseInt(data.pk_34b);
                        let e81 =parseInt(data.pk_34c);
                        let e82 =parseInt(data.pk_34d);

                        //set value ke table tkr16
                        let tkr16 = ((e79+e80+e81+e82)/4)*100 ;
                        let tkn16 = '';
                        let tks16 = '';
                        //set value ke table tkn16
                        if(tkr16 <= 25 ) {
                            tkn16= 4;
                        } else if (tkr16 <= 50) {
                            tkn16= 3;
                        } else if (tkr16 <= 75 ) {
                            tkn16= 2;
                        } else {
                            tkn16= 1;
                        }
                        //set value ke table tks16
                        if(tkr16 <= 25 ) {
                            tks16= 1;
                        } else if (tkr1 <= 50) {
                            tks16= 2;
                        } else if (tkr16 <= 75 ) {
                            tks16= 3;
                        } else {
                            tks16= 4;
                        }

                        //mengisi tabel baris 17
                        let e83 =parseInt(data.pk_35a);
                        let e84 =parseInt(data.pk_35b);
                        let e85 =parseInt(data.pk_35c);
                        let e86 =parseInt(data.pk_35d);

                        //set value ke table tkr17
                        let tkr17 = ((e83+e84+e85+e86)/4)*100 ;
                        let tkn17 = '';
                        let tks17 = '';
                        //set value ke table tkn17
                        if(tkr17 <= 25 ) {
                            tkn17= 4;
                        } else if (tkr17 <= 50) {
                            tkn17= 3;
                        } else if (tkr17 <= 75 ) {
                            tkn17= 2;
                        } else {
                            tkn17= 1;
                        }

                        //set value ke table tks17
                        if(tkr17 <= 25 ) {
                            tks17= 1;
                        } else if (tkr1 <= 50) {
                            tks17= 2;
                        } else if (tkr17 <= 75 ) {
                            tks17= 3;
                        } else {
                            tks17= 4;
                        }
                        //Mengisi baris hasil Kelembagaan
                        let totalmanajemen = 5;
                        //menghitung total nilai
                        let htknm1 = tkn13;
                        let htknm2 = tkn14;
                        let htknm3 = tkn15;
                        let htknm4 = tkn16;
                        let htknm5 = tkn17;
                        let totaltknm = htknm1+htknm2+htknm3+htknm4+htknm5;
                        //menghitung total skor
                        let htksm1 = tks13;
                        let htksm2 = tks14;
                        let htksm3 = tks15;
                        let htksm4 = tks16;
                        let htksm5 = tks17;
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
    } else {
        id = localStorage.getItem('id');

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
                    $("#namaKop").text(data.nama);
                    //PRINSIP KOPERASI
                    //membuat variabel untuk mengisi table baris 1
                    let e6 =parseInt(data.pk_1a);
                    let e7 =parseInt(data.pk_1b);
                    let e8 =parseInt(data.pk_1c);
                    let e9 =parseInt(data.pk_1d);

                    //set value ke table tkr1
                    let tkr1 = ((e6+e7+e8+e9)/4)*100 ;
                    let tkn1 = '';
                    let tks1 = '';

                    //set value ke table tkn1
                    if(tkr1 <= 25 ) {
                        tkn1 = 4;
                    } else if (tkr1 <= 50) {
                        tkn1 = 3;
                    } else if (tkr1 <= 75 ) {
                        tkn1 = 2;
                    } else {
                        tkn1 = 1;
                    }

                    //set value ke table tks1
                    if(tkr1 <= 25 ) {
                        tks1 = 1;
                    } else if (tkr1 <= 50) {
                        tks1 = 2;
                    } else if (tkr1 <= 75 ) {
                        tks1 = 3;
                    } else {
                        tks1 = 4;
                    }

                    //mengisi table baris 2
                    let e10 =parseInt(data.pk_2a);
                    let e11 =parseInt(data.pk_2b);
                    let e12 =parseInt(data.pk_2c);
                    let e13 =parseInt(data.pk_2d);
                    let e14 =parseInt(data.pk_2e);

                    //set value ke table tkr1
                    let tkr2 = ((e10+e11+e12+e13+e14)/5)*100 ;
                    let tkn2 = '';
                    let tks2 = '';

                    //set value ke table tkn1
                    if(tkr2 <= 25 ) {
                        tkn2 = 4;
                    } else if (tkr2 <= 50) {
                        tkn2= 3;
                    } else if (tkr2 <= 75 ) {
                        tkn2= 2;
                    } else {
                        tkn2= 1;
                    }

                    //set value ke table tks2
                    if(tkr2 <= 25 ) {
                        tks2= 1;
                    } else if (tkr1 <= 50) {
                        tks2= 2;
                    } else if (tkr2 <= 75 ) {
                        tks2= 3;
                    } else {
                        tks2= 4;
                    }

                    //mengisi tabel baris 3
                    let e15 =parseInt(data.pk_3a);
                    let e16 =parseInt(data.pk_3b);
                    let e17 =parseInt(data.pk_3c);

                    //set value ke table tkr1
                    let tkr3 = ((e15+e16+e17)/3)*100 ;
                    let tkn3 = '';
                    let tks3 = '';

                    //set value ke table tkn1
                    if(tkr3 <= 25 ) {
                        tkn3= 4;
                    } else if (tkr3 <= 50) {
                        tkn3= 3;
                    } else if (tkr3 <= 75 ) {
                        tkn3= 2;
                    } else {
                        tkn3= 1;
                    }

                    //set value ke table tks3
                    if(tkr3 <= 25 ) {
                        tks3= 1;
                    } else if (tkr1 <= 50) {
                        tks3= 2;
                    } else if (tkr3 <= 75 ) {
                        tks3= 3;
                    } else {
                        tks3= 4;
                    }

                    //mengisi tabel baris 4
                    let e18 =parseInt(data.pk_4a);
                    let e19 =parseInt(data.pk_4b);
                    let e20 =parseInt(data.pk_4c);
                    let e21 =parseInt(data.pk_4d);

                    //set value ke table tkr1
                    let tkr4 = ((e18+e19+e20+e21)/4)*100 ;
                    let tkn4 = '';
                    let tks4 = '';

                    //set value ke table tkn1
                    if(tkr4 <= 25 ) {
                        tkn4= 4;
                    } else if (tkr4 <= 50) {
                        tkn4= 3;
                    } else if (tkr4 <= 75 ) {
                        tkn4= 2;
                    } else {
                        tkn4= 1;
                    }

                    //set value ke table tks4
                    if(tkr4 <= 25 ) {
                        tks4= 1;
                    } else if (tkr1 <= 50) {
                        tks4= 2;
                    } else if (tkr4 <= 75 ) {
                        tks4= 3;
                    } else {
                        tks4= 4;
                    }

                    //mengisi tabel baris 5
                    let e22 =parseInt(data.pk_5a);
                    let e23 =parseInt(data.pk_5b);
                    let e24 =parseInt(data.pk_5c);
                    let e25 =parseInt(data.pk_5d);

                    //set value ke table tkr1
                    let tkr5 = ((e22+e23+e24+e25)/4)*100 ;
                    let tkn5 = '';
                    let tks5 = '';

                    //set value ke table tkn1
                    if(tkr5 <= 25 ) {
                        tkn5= 4;
                    } else if (tkr5 <= 50) {
                        tkn5= 3;
                    } else if (tkr5 <= 75 ) {
                        tkn5= 2;
                    } else {
                        tkn5= 1;
                    }

                    //set value ke table tks5
                    if(tkr5 <= 25 ) {
                        tks5= 1;
                    } else if (tkr1 <= 50) {
                        tks5= 2;
                    } else if (tkr5 <= 75 ) {
                        tks5= 3;
                    } else {
                        tks5= 4;
                    }

                    //mengisi tabel baris 6
                    let e26 =parseInt(data.pk_6a);
                    let e27 =parseInt(data.pk_6b);
                    let e28 =parseInt(data.pk_6c);
                    let e29 =parseInt(data.pk_6d);

                    //set value ke table tkr1
                    let tkr6 = ((e26+e27+e28+e29)/4)*100 ;
                    let tkn6 = '';
                    let tks6 = '';

                    //set value ke table tkn1
                    if(tkr6 <= 25 ) {
                        tkn6= 4;
                    } else if (tkr6 <= 50) {
                        tkn6= 3;
                    } else if (tkr6 <= 75 ) {
                        tkn6= 2;
                    } else {
                        tkn6= 1;
                    }

                    //set value ke table tks6
                    if(tkr6 <= 25 ) {
                        tks6= 1;
                    } else if (tkr1 <= 50) {
                        tks6= 2;
                    } else if (tkr6 <= 75 ) {
                        tks6= 3;
                    } else {
                        tks6= 4;
                    }

                    //mengisi tabel baris 7
                    let e30 =parseInt(data.pk_7a);
                    let e31 =parseInt(data.pk_7b);
                    let e32 =parseInt(data.pk_7c);
                    let e33 =parseInt(data.pk_7d);

                    //set value ke table tkr1
                    let tkr7 = ((e30+e31+e32+e33)/4)*100 ;
                    let tkn7 = '';
                    let tks7 = '';

                    //set value ke table tkn1
                    if(tkr7 <= 25 ) {
                        tkn7= 4;
                    } else if (tkr7 <= 50) {
                        tkn7= 3;
                    } else if (tkr7 <= 75 ) {
                        tkn7= 2;
                    } else {
                        tkn7= 1;
                    }

                    //set value ke table tks7
                    if(tkr7 <= 25 ) {
                        tks7= 1;
                    } else if (tkr1 <= 50) {
                        tks7= 2;
                    } else if (tkr7 <= 75 ) {
                        tks7= 3;
                    } else {
                        tks7= 4;
                    }
                    //Mengisi baris hasil Prinsip Koperasi
                    let totaldatapk = 7;
                    //menghitung total nilai
                    let htkn1 = tkn1;
                    let htkn2 = tkn2;
                    let htkn3 = tkn3;
                    let htkn4 = tkn4;
                    let htkn5 = tkn5;
                    let htkn6 = tkn6;
                    let htkn7 = tkn7;
                    let totaltkn = htkn1+htkn2+htkn3+htkn4+htkn5+htkn6+htkn7;
                    // console.log(totaltkn);
                    //menghitung total skor
                    let htks1 = tks1;
                    let htks2 = tks2;
                    let htks3 = tks3;
                    let htks4 = tks4;
                    let htks5 = tks5;
                    let htks6 = tks6;
                    let htks7 = tks7;
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
                    let tkn8 = '';
                    let tks8 = '';

                    //set value ke table tkn8
                    if(tkr8 <= 25 ) {
                        tkn8= 4;
                    } else if (tkr8 <= 50) {
                        tkn8= 3;
                    } else if (tkr8 <= 75 ) {
                        tkn8= 2;
                    } else {
                        tkn8= 1;
                    }

                    //set value ke table tks8
                    if(tkr8 <= 25 ) {
                        tks8= 1;
                    } else if (tkr1 <= 50) {
                        tks8= 2;
                    } else if (tkr8 <= 75 ) {
                        tks8= 3;
                    } else {
                        tks8= 4;
                    }

                    //mengisi tabel baris 9
                    let e39 =parseInt(data.pk_22a);
                    let e40 =parseInt(data.pk_22b);
                    let e41 =parseInt(data.pk_22c);

                    //set value ke table tkr9
                    let tkr9 = ((e39+e40+e41)/3)*100 ;
                    let tkn9 = '';
                    let tks9 = '';

                    //set value ke table tkn9
                    if(tkr9 <= 25 ) {
                        tkn9= 4;
                    } else if (tkr9 <= 50) {
                        tkn9= 3;
                    } else if (tkr9 <= 75 ) {
                        tkn9= 2;
                    } else {
                        tkn9= 1;
                    }

                    //set value ke table tks9
                    if(tkr9 <= 25 ) {
                        tks9= 1;
                    } else if (tkr1 <= 50) {
                        tks9= 2;
                    } else if (tkr9 <= 75 ) {
                        tks9= 3;
                    } else {
                        tks9= 4;
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
                    let tkn10 = '';
                    let tks10 = '';

                    //set value ke table tkn1
                    if(tkr10 <= 25 ) {
                        tkn10= 4;
                    } else if (tkr10 <= 50) {
                        tkn10= 3;
                    } else if (tkr10 <= 75 ) {
                        tkn10= 2;
                    } else {
                        tkn10= 1;
                    }

                    //set value ke table tks10
                    if(tkr10 <= 25 ) {
                        tks10= 1;
                    } else if (tkr1 <= 50) {
                        tks10= 2;
                    } else if (tkr10 <= 75 ) {
                        tks10= 3;
                    } else {
                        tks10= 4;
                    }

                    //mengisi tabel baris 11
                    let e59 =parseInt(data.pk_24a);
                    let e60 =parseInt(data.pk_24b);
                    let e61 =parseInt(data.pk_24c);
                    let e62 =parseInt(data.pk_24d);

                    //set value ke table tkr11
                    let tkr11 = ((e59+e60+e61+e62)/4)*100 ;
                    let tkn11 = '';
                    let tks11 = '';

                    //set value ke table tkn11
                    if(tkr11 <= 25 ) {
                        tkn11= 4;
                    } else if (tkr11 <= 50) {
                        tkn11= 3;
                    } else if (tkr11 <= 75 ) {
                        tkn11= 2;
                    } else {
                        tkn11= 1;
                    }

                    //set value ke table tks11
                    if(tkr11 <= 25 ) {
                        tks11= 1;
                    } else if (tkr1 <= 50) {
                        tks11= 2;
                    } else if (tkr11 <= 75 ) {
                        tks11= 3;
                    } else {
                        tks11= 4;
                    }

                    //mengisi tabel baris 12
                    let e63 =parseInt(data.pk_25a);
                    let e64 =parseInt(data.pk_25b);
                    let e65 =parseInt(data.pk_25c);

                    //set value ke table tkr12
                    let tkr12 = ((e63+e64+e65)/3)*100 ;
                    let tkn12 = '';
                    let tks12 = '';

                    //set value ke table tkn12
                    if(tkr12 <= 25 ) {
                        tkn12= 4;
                    } else if (tkr12 <= 50) {
                        tkn12= 3;
                    } else if (tkr12 <= 75 ) {
                        tkn12= 2;
                    } else {
                        tkn12= 1;
                    }

                    //set value ke table tks12
                    if(tkr12 <= 25 ) {
                        tks12= 1;
                    } else if (tkr1 <= 50) {
                        tks12= 2;
                    } else if (tkr12 <= 75 ) {
                        tks12= 3;
                    } else {
                        tks12= 4;
                    }
                    //Mengisi baris hasil Kelembagaan
                    let totalkelembagaan = 5;
                    //menghitung total nilai
                    let htknk1 = tkn8;
                    let htknk2 = tkn9;
                    let htknk3 = tkn10;
                    let htknk4 = tkn11;
                    let htknk5 = tkn12;
                    let totaltknk = htknk1+htknk2+htknk3+htknk4+htknk5;
                    //menghitung total skor
                    let htksk1 = tks8;
                    let htksk2 = tks9;
                    let htksk3 = tks10;
                    let htksk4 = tks11;
                    let htksk5 = tks12;
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
                    let tkn13 = '';
                    let tks13 = '';

                    //set value ke table tkn13
                    if(tkr13 <= 25 ) {
                        tkn13= 4;
                    } else if (tkr13 <= 50) {
                        tkn13= 3;
                    } else if (tkr13 <= 75 ) {
                        tkn13= 2;
                    } else {
                        tkn13= 1;
                    }

                    //set value ke table tks13
                    if(tkr13 <= 25 ) {
                        tks13= 1;
                    } else if (tkr1 <= 50) {
                        tks13= 2;
                    } else if (tkr13 <= 75 ) {
                        tks13= 3;
                    } else {
                        tks13= 4;
                    }

                    //mengisi tabel baris 14
                    let e71 =parseInt(data.pk_32a);
                    let e72 =parseInt(data.pk_32b);
                    let e73 =parseInt(data.pk_32c);
                    let e74 =parseInt(data.pk_32d);

                    //set value ke table tkr14
                    let tkr14 = ((e71+e72+e73+e74)/4)*100 ;
                    let tkn14 = '';
                    let tks14 = '';

                    //set value ke table tkn14
                    if(tkr14 <= 25 ) {
                        tkn14= 4;
                    } else if (tkr14 <= 50) {
                        tkn14= 3;
                    } else if (tkr14 <= 75 ) {
                        tkn14= 2;
                    } else {
                        tkn14= 1;
                    }

                    //set value ke table tks14
                    if(tkr14 <= 25 ) {
                        tks14= 1;
                    } else if (tkr1 <= 50) {
                        tks14= 2;
                    } else if (tkr14 <= 75 ) {
                        tks14= 3;
                    } else {
                        tks14= 4;
                    }

                    //mengisi tabel baris 12
                    let e75 =parseInt(data.pk_33a);
                    let e76 =parseInt(data.pk_33b);
                    let e77 =parseInt(data.pk_33c);
                    let e78 =parseInt(data.pk_33d);

                    //set value ke table tkr15
                    let tkr15 = ((e75+e76+e77+e78)/4)*100 ;
                    let tkn15 = '';
                    let tks15 = '';
                    //set value ke table tkn15
                    if(tkr15 <= 25 ) {
                        tkn15 = 4;
                    } else if (tkr15 <= 50) {
                        tkn15= 3;
                    } else if (tkr15 <= 75 ) {
                        tkn15= 2;
                    } else {
                        tkn15= 1;
                    }

                    //set value ke table tks15
                    if(tkr15 <= 25 ) {
                        tks15= 1;
                    } else if (tkr1 <= 50) {
                        tks15= 2;
                    } else if (tkr15 <= 75 ) {
                        tks15= 3;
                    } else {
                        tks15= 4;
                    }

                    //mengisi tabel baris 16
                    let e79 =parseInt(data.pk_34a);
                    let e80 =parseInt(data.pk_34b);
                    let e81 =parseInt(data.pk_34c);
                    let e82 =parseInt(data.pk_34d);

                    //set value ke table tkr16
                    let tkr16 = ((e79+e80+e81+e82)/4)*100 ;
                    let tkn16 = '';
                    let tks16 = '';
                    //set value ke table tkn16
                    if(tkr16 <= 25 ) {
                        tkn16= 4;
                    } else if (tkr16 <= 50) {
                        tkn16= 3;
                    } else if (tkr16 <= 75 ) {
                        tkn16= 2;
                    } else {
                        tkn16= 1;
                    }
                    //set value ke table tks16
                    if(tkr16 <= 25 ) {
                        tks16= 1;
                    } else if (tkr1 <= 50) {
                        tks16= 2;
                    } else if (tkr16 <= 75 ) {
                        tks16= 3;
                    } else {
                        tks16= 4;
                    }

                    //mengisi tabel baris 17
                    let e83 =parseInt(data.pk_35a);
                    let e84 =parseInt(data.pk_35b);
                    let e85 =parseInt(data.pk_35c);
                    let e86 =parseInt(data.pk_35d);

                    //set value ke table tkr17
                    let tkr17 = ((e83+e84+e85+e86)/4)*100 ;
                    let tkn17 = '';
                    let tks17 = '';
                    //set value ke table tkn17
                    if(tkr17 <= 25 ) {
                        tkn17= 4;
                    } else if (tkr17 <= 50) {
                        tkn17= 3;
                    } else if (tkr17 <= 75 ) {
                        tkn17= 2;
                    } else {
                        tkn17= 1;
                    }

                    //set value ke table tks17
                    if(tkr17 <= 25 ) {
                        tks17= 1;
                    } else if (tkr1 <= 50) {
                        tks17= 2;
                    } else if (tkr17 <= 75 ) {
                        tks17= 3;
                    } else {
                        tks17= 4;
                    }
                    //Mengisi baris hasil Kelembagaan
                    let totalmanajemen = 5;
                    //menghitung total nilai
                    let htknm1 = tkn13;
                    let htknm2 = tkn14;
                    let htknm3 = tkn15;
                    let htknm4 = tkn16;
                    let htknm5 = tkn17;
                    let totaltknm = htknm1+htknm2+htknm3+htknm4+htknm5;
                    //menghitung total skor
                    let htksm1 = tks13;
                    let htksm2 = tks14;
                    let htksm3 = tks15;
                    let htksm4 = tks16;
                    let htksm5 = tks17;
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
    }
});
