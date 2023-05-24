$(function () {
    let url = window.location.pathname;
    let id = url.substring(url.lastIndexOf('/') + 1);
    console.log(id);

    let tataKelola = '';
    let profilResiko = '';
    let keuangan = '';
    let permodalan = '';
    let tk = '';

    //tksehat
    fetch("/koperasi/tatakelola/"  + id)
    .then(data => data.json())
    .then(res => {
        if (res.length < 1) {
            Swal.fire({
                icon: 'warning',
                title: 'Data Tidak Ditemukan',
                text: 'Membersihkan Halaman',
            })
            $($("body").find("table>tbody>tr>td[id]")).text("");
        }else{
            console.log(res);
            res.map(data => {
                console.log(data);
                tk = {...data}
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
                let hpk1 = totaltkn;
                //mengisi hpk2
                let hpk2 = (totaltkn/totaldatapk).toFixed(2);
                //mengisi hpk3
                let hpk3 = (totaltks*100)/(totaldatapk*4).toFixed(2);
                //mengisi hpk4

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
                let hk1 = totaltknk;
                //mengisi hpk2
                let hk2 = (totaltknk/totalkelembagaan).toFixed(2);
                //mengisi hpk3
                let hk3 = ((totaltksk*100)/(totalkelembagaan*4)).toFixed(2);
                //mengisi hpk4


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
                let hm1 = totaltknm;
                //mengisi hpk2
                let hm2 = (totaltknm/totalmanajemen).toFixed(2);
                //mengisi hpk3
                let hm3 = ((totaltksm*100)/(totalmanajemen*4)).toFixed(2);
                //mengisi hpk4

                //menghitung keseluruhan tatakelola
                    //mengisi baris hasil tata kelola
                let totalnilaitk = totaltkn+totaltknk+totaltknm;
                let totaldatatk = totaldatapk+totalkelembagaan+totalmanajemen;
                let totalskortk = totaltks+totaltksk+totaltksm;
                tataKelola = ((totalskortk*100)/(totaldatatk*4)).toFixed(2);
                //akhir tksehat
            })//penutup res.map
        }
        console.log(tataKelola);
    })//tksehat

    $.get("/koperasi/profileresiko/" + id)
        .then(res => {
            res.map(data => {
                let e91 = parseInt(data.ro_a1);
                let e92 = parseInt(data.ro_a2);
                let e93 = parseInt(data.ro_a3);
                let e94 = parseInt(data.ro_a4);
                let ror1 = ((e91+e92+e93+e94)/4)*100;
                let ron1 = '';
                let ros1 = '';

                //set value ke table ron1
                if (ror1 <= 25) {
                    ron1 = 4;
                } else if (ror1 <= 50) {
                    ron1 = 3;
                } else if (ror1 <= 75) {
                    ron1 = 2;
                } else {
                    ron1 = 1;
                }

                //set value ke table ros1
                if (ror1 <= 25) {
                    ros1 = 1;
                } else if (ror1 <= 50) {
                    ros1 = 2;
                } else if (ror1 <= 75) {
                    ros1 = 3;
                } else {
                    ros1 = 4;
                }
                //membuat variabel untuk mengisi tabel baris 2
                let e95 = parseInt(data.ro_b1);
                let e96 = parseInt(data.ro_b2);
                let e97 = parseInt(data.ro_b3);
                let e98 = parseInt(data.ro_b4);
                let ror2 = ((e95+e96+e97+e98)/4)*100;
                let ron2 = '';
                let ros2 = '';

                //set value ke table ron2
                if (ror2 <= 25) {
                    ron2 = 4;
                } else if (ror2 <= 50) {
                    ron2 = 3;
                } else if (ror2 <= 75) {
                    ron2 = 2;
                } else {
                    ron2 = 1;
                }

                //set value ke table ros2
                if (ror2 <= 25) {
                    ros2 = 1;
                } else if (ror2 <= 50) {
                    ros2 = 2;
                } else if (ror2 <= 75) {
                    ros2 = 3;
                } else {
                    ros2 = 4;
                }
                //membuat variabel untuk mengisi tabel baris 3
                let e101 = parseInt(data.rk_a1);
                let e102 = parseInt(data.rk_a2);
                let e103 = parseInt(data.rk_a3);
                let e104 = parseInt(data.rk_a4);
                let rkr1 = ((e101+e102+e103+e104)/4)*100;
                let rkn1 = '';
                let rks1 = '';

                //set value ke table rkn1
                if (rkr1 <= 25) {
                    rkn1 = 4;
                } else if (ror1 <= 50) {
                    rkn1 = 3;
                } else if (ror1 <= 75) {
                    rkn1 = 2;
                } else {
                    rkn1 = 1;
                }

                //set value ke table rks1
                if (rkr1 <= 25) {
                    rks1 = 1;
                } else if (rkr1 <= 50) {
                    rks1 = 2;
                } else if (rkr1 <= 75) {
                    rks1 = 3;
                } else {
                    rks1 = 4;
                }
                //membuat variabel untuk mengisi tabel baris 4
                let e105 = parseInt(data.rk_b1);
                let e106 = parseInt(data.rk_b2);
                let e107 = parseInt(data.rk_b3);
                let e108 = parseInt(data.rk_b4);
                let rkr2 = ((e105+e106+e107+e108)/4)*100;
                let rkn2 = '';
                let rks2 = '';

                //set value ke table rkn2
                if (rkr2 <= 25) {
                    rkn2 = 4;
                } else if (ror2 <= 50) {
                    rkn2 = 3;
                } else if (ror2 <= 75) {
                    rkn2 = 2;
                } else {
                    rkn2 = 1;
                }

                //set value ke table rks2
                if (rkr2 <= 25) {
                    rks2 = 1;
                } else if (rkr2 <= 50) {
                    rks2 = 2;
                } else if (rkr2 <= 75) {
                    rks2 = 3;
                } else {
                    rks2 = 4;
                }


                //membuat variabel untuk mengisi tabel baris 7
                let e111 = parseInt(data.rl_a1);
                let e112 = parseInt(data.rl_a2);
                let e113 = parseInt(data.rl_a3);
                let e114 = parseInt(data.rl_a4);
                let e115 = parseInt(data.rl_a5);
                let rlr3 = ((e111+e112+e113+e114+e115)/5)*100;
                let rln3 = '';
                let rls3 = '';

                //set value ke table rln3
                if (rlr3 <= 25) {
                    rln3 = 4;
                } else if (rlr3 <= 50) {
                    rln3 = 3;
                } else if (rlr3 <= 75) {
                    rln3 = 2;
                } else {
                    rln3 = 1;
                }

                //set value ke table rls3
                if (rlr3 <= 25) {
                    rls3 = 1;
                } else if (rlr3 <= 50) {
                    rls3 = 2;
                } else if (rlr3 <= 75) {
                    rls3 = 3;
                } else {
                    rls3 = 4;
                }
                //membuat variabel untuk mengisi tabel baris 8
                let e119 = parseInt(data.kpmro_a1);
                let e120 = parseInt(data.kpmro_a2);
                let e121 = parseInt(data.kpmro_a3);
                let e122 = parseInt(data.kpmro_a4);
                let kror1 = ((e119+e120+e121+e122)/4)*100;
                let kron1 = '';
                let kros1 = '';

                //set value ke table kron1
                if (kror1 <= 25) {
                    kron1 = 4;
                } else if (kror1 <= 50) {
                    kron1 = 3;
                } else if (kror1 <= 75) {
                    kron1 = 2;
                } else {
                    kron1 = 1;
                }

                //set value ke table kros1
                if (kror1 <= 25) {
                    kros1 = 1;
                } else if (kror1 <= 50) {
                    kros1 = 2;
                } else if (kror1 <= 75) {
                    kros1 = 3;
                } else {
                    kros1 = 4;
                }
                //membuat variabel untuk mengisi tabel baris 9
                let e123 = parseInt(data.kpmro_b1);
                let e124 = parseInt(data.kpmro_b2);
                let e125 = parseInt(data.kpmro_b3);
                let kror2 = ((e123+e124+e125)/3)*100;
                let kron2 = '';
                let kros2 = '';

                //set value ke table kron2
                if (kror2 <= 25) {
                    kron2 = 4;
                } else if (kror2 <= 50) {
                    kron2 = 3;
                } else if (kror2 <= 75) {
                    kron2 = 2;
                } else {
                    kron2 = 1;
                }

                //set value ke table kros1
                if (kror2 <= 25) {
                    kros2 = 1;
                } else if (kror2 <= 50) {
                    kros2 = 2;
                } else if (kror2 <= 75) {
                    kros2 = 3;
                } else {
                    kros2 = 4;
                }
                //membuat variabel untuk mengisi tabel baris 10
                let e126 = parseInt(data.kpmro_c1);
                let e127 = parseInt(data.kpmro_c2);
                let e128 = parseInt(data.kpmro_c3);
                let e129 = parseInt(data.kpmro_c4);
                let kror3 = ((e126+e127+e128+e129)/4)*100;
                let kron3 = '';
                let kros3 = '';

                //set value ke table kror3
                if (kror3 <= 25) {
                    kron3 = 4;
                } else if (kror3 <= 50) {
                    kron3 = 3;
                } else if (kror3 <= 75) {
                    kron3 = 2;
                } else {
                    kron3 = 1;
                }

                //set value ke table kros1
                if (kror3 <= 25) {
                    kros3 = 1;
                } else if (kror3 <= 50) {
                    kros3 = 2;
                } else if (kror3 <= 75) {
                    kros3 = 3;
                } else {
                    kros3 = 4;
                }
                //membuat variabel untuk mengisi tabel baris 11
                let e132 = parseInt(data.kpmrk_a1);
                let e133 = parseInt(data.kpmrk_a2);
                let e134 = parseInt(data.kpmrk_a3);
                let e135 = parseInt(data.kpmrk_a4);
                let krkr1 = ((e132+e133+e134+e135)/4)*100;
                let krkn1 = '';
                let krks1 = '';

                //set value ke table kror3
                if (krkr1 <= 25) {
                    krkn1 = 4;
                } else if (krkr1 <= 50) {
                    krkn1 = 3;
                } else if (krkr1 <= 75) {
                    krkn1 = 2;
                } else {
                    krkn1 = 1;
                }

                //set value ke table kros1
                if (krkr1 <= 25) {
                    krks1 = 1;
                } else if (krkr1 <= 50) {
                    krks1 = 2;
                } else if (krkr1 <= 75) {
                    krks1 = 3;
                } else {
                    krks1 = 4;
                }
                //membuat variabel untuk mengisi tabel baris 12
                let e136 = parseInt(data.kpmrk_b1);
                let e137 = parseInt(data.kpmrk_b2);
                let e138 = parseInt(data.kpmrk_b3);
                let e139 = parseInt(data.kpmrk_b4);
                let krkr2 = ((e136+e137+e138+e139)/4)*100;
                let krkn2 = '';
                let krks2 = '';
                //set value ke table kror3
                if (krkr2 <= 25) {
                    krkn2 = 4;
                } else if (krkr2 <= 50) {
                    krkn2 = 3;
                } else if (krkr2 <= 75) {
                    krkn2 = 2;
                } else {
                    krkn2 = 1;
                }

                //set value ke table kros1
                if (krkr2 <= 25) {
                    krks2 = 1;
                } else if (krkr2 <= 50) {
                    krks2 = 2;
                } else if (krkr2 <= 75) {
                    krks2 = 3;
                } else {
                    krks2 = 4;
                }
                //membuat variabel untuk mengisi tabel baris 13
                let e140 = parseInt(data.kpmrk_c1);
                let e141 = parseInt(data.kpmrk_c2);
                let e142 = parseInt(data.kpmrk_c3);
                let e143 = parseInt(data.kpmrk_c4);
                let krkr3 = ((e140+e141+e142+e143)/4)*100;
                let krkn3 = '';
                let krks3 = '';
                //set value ke table kror3
                if (krkr3 <= 25) {
                    krkn3 = 4;
                } else if (krkr3 <= 50) {
                    krkn3 = 3;
                } else if (krkr3 <= 75) {
                    krkn3 = 2;
                } else {
                    krkn3 = 1;
                }

                //set value ke table kros1
                if (krkr3 <= 25) {
                    krks3 = 1;
                } else if (krkr3 <= 50) {
                    krks3 = 2;
                } else if (krkr3 <= 75) {
                    krks3 = 3;
                } else {
                    krks3 = 4;
                }
                //membuat variabel untuk mengisi tabel baris 14
                let e146 = parseInt(data.kpmrl_a1);
                let e147 = parseInt(data.kpmrl_a2);
                let e148 = parseInt(data.kpmrl_a3);
                let e149 = parseInt(data.kpmrl_a4);
                let krlr1 = ((e146+e147+e148+e149)/4)*100;
                let krln1 = '';
                let krls1 = '';
                //set value ke table kror3
                if (krlr1 <= 25) {
                    krln1 = 4;
                } else if (krlr1 <= 50) {
                    krln1 = 3;
                } else if (krlr1 <= 75) {
                    krln1 = 2;
                } else {
                    krln1 = 1;
                }

                //set value ke table kros1
                if (krlr1 <= 25) {
                    krls1 = 1;
                } else if (krlr1 <= 50) {
                    krls1 = 2;
                } else if (krlr1 <= 75) {
                    krls1 = 3;
                } else {
                    krls1 = 4;
                }
                //membuat variabel untuk mengisi tabel baris 15
                let e150 = parseInt(data.kpmrl_b1);
                let e151 = parseInt(data.kpmrl_b2);
                let e152 = parseInt(data.kpmrl_b3);
                let e153 = parseInt(data.kpmrl_b4);
                let e154 = parseInt(data.kpmrl_b5);
                let krlr2 = ((e150+e151+e152+e153+e154)/5)*100;
                let krln2 = '';
                let krls2 = '';
                //set value ke table kror3
                if (krlr2 <= 25) {
                    krln2 = 4;
                } else if (krlr2 <= 50) {
                    krln2 = 3;
                } else if (krlr2 <= 75) {
                    krln2 = 2;
                } else {
                    krln2 = 1;
                }

                //set value ke table kros1
                if (krlr2 <= 25) {
                    krls2 = 1;
                } else if (krlr2 <= 50) {
                    krls2 = 2;
                } else if (krlr2 <= 75) {
                    krls2 = 3;
                } else {
                    krls2 = 4;
                }
                //membuat variabel untuk mengisi tabel baris 15
                let e155 = parseInt(data.kpmrl_c1);
                let e156 = parseInt(data.kpmrl_c2);
                let e157 = parseInt(data.kpmrl_c3);
                let e158 = parseInt(data.kpmrl_c4);
                let krlr3 = ((e155+e156+e157+e158)/4)*100;
                let krln3 = '';
                let krls3 = '';
                //set value ke table kror3
                if (krlr3 <= 25) {
                    krln3 = 4;
                } else if (krlr3 <= 50) {
                    krln3 = 3;
                } else if (krlr3 <= 75) {
                    krln3 = 2;
                } else {
                    krln3 = 1;
                }

                //set value ke table kros1
                if (krlr3 <= 25) {
                    krls3 = 1;
                } else if (krlr3 <= 50) {
                    krls3 = 2;
                } else if (krlr3 <= 75) {
                    krls3 = 3;
                } else {
                    krls3 = 4;
                }

                // console.log(data);
                let d35 = data.surat_berharga+data.premi_asuransi+data.perkap_kantor+data.beban_dimuka+data.pendapatan_aknditerima+data.barang_dagang+data.lainnya+(data.kas+(data.giro+data.tabungan+data.deposito)+(data.simpanan_sukarela+data.simpanan_berjangka)+((data.piutang_anggota+data.piutang_calon+data.piutang_koplain+data.piutang_bunga+data.piutang_lain)-data.penyisihan_pinjaman));
                let d49 = data.simpanan_berjangka+data.surat_berharga+data.simpanan_lain+data.penyertaan_koplain+data.penyertaan_lemkeulain+data.inv_jplain+data.akm_peny_prop+(data.properti_inv-data.akm_peny_prop);
                let d56 = (data.tanah+data.bangunan+data.kendaraan+data.inv_perkap)-data.akm_peny;
                let d59 = data.aktiva_tdk_berwujud;
                let d67 = data.beban_ditangguhkan+data.amortisasi_beban+data.agunan_diambil+data.beban_praoperasional+data.amortisasi_biaya+data.lain;
                //set value sesuai variabel
                let d68 = d35+d49+d56+d59+d67;
                let h25 = (data.titipan_dana+data.titipan_jaminan+data.titipan_zakat)+data.hutang_sewa+data.tabungan_anggota+data.tabungan_nonanggota+data.simpanan_bjkanggota+data.simpanan_bjkcalon+data.hutang_bank+data.hutang_lpdb+data.hutang_pajak+data.beban_hrsdibayar+data.pendapatan_dimuka+data.hutang_biaya+data.dana_bagian;
                let d17 = data.kas+(data.giro+data.tabungan+data.deposito)+(data.simpanan_sukarela+data.simpanan_berjangka);
                //set value ke rlr1
                let rlr1 = (d17/d68).toFixed(2);

                if (rlr1 == Infinity) {
                    rlr1 = 0;
                } else if (isNaN(rlr1)) rlr1 = 0;

                let rln1 = '';
                let rls1 = '';
                //set value ke table rln1
                if (rlr1 <= 5) {
                    rln1 = 4;
                } else if (rlr1 <= 10) {
                    rln1 = 3;
                } else if (rlr1 <= 15) {
                    rln1 = 2;
                } else {
                    rln1 = 1;
                }

                //set value ke table rls1
                if (rlr1 <= 5) {
                    rls1 = 1;
                } else if (rlr1 <= 10) {
                    rls1 = 2;
                } else if (rlr1 <= 15) {
                    rls1 = 3;
                } else {
                    rls1 = 4;
                }
                //set value ke rlr2
                let rlr2 = (d17/h25).toFixed(2);

                if (rlr2 == Infinity) {
                    rlr2 = 0;
                } else if (isNaN(rlr2)) rlr2 = 0;

                let rln2 = '';
                let rls2 = '';
                //set value ke table rln2
                if (rlr2 <= 7) {
                    rln2 = 4;
                } else if (rlr2 <= 14) {
                    rln2 = 3;
                } else if (rlr2 <= 21) {
                    rln2 = 2;
                } else {
                    rln2 = 1;
                }

                //set value ke table rls2
                if (rlr2 <= 7) {
                    rls2 = 1;
                } else if (rlr2 <= 14) {
                    rls2 = 2;
                } else if (rlr2 <= 21) {
                    rls2 = 3;
                } else {
                    rls2 = 4;
                }

                //membuat variabel untuk menampung semua nilai resiko inheren
                let totaldatari = 7;

                let n1 = ron1;
                let n2 = ron2;
                let n4 = rkn1;
                let n5 = rkn2;
                let n7 = rln1;
                let n8 = rln2;
                let n9 = rln3;

                let s1 = ros1;
                let s2 = ros2;
                let s4 = rks1;
                let s5 = rks2;
                let s7 = rls1;
                let s8 = rls2;
                let s9 = rls3;

                let totaln = n1+n2+n4+n5+n7+n8+n9;
                let totals = s1+s2+s4+s5+s7+s8+s9;
                    //set value hri1
                let hri1 = totaln;
                //set value hri2
                let hri2 = (totaln/totaldatari).toFixed(2);
                //set value hri3
                let hri3 = ((totals*100)/(totaldatari*4)).toFixed(2);
                //membuat variabel untuk menampung semua nilai Manajemen Resiko
                let totaldatamr = 9;
                let nm1 = kron1;
                let nm2 = kron2;
                let nm3 = kron2;
                let nm4 = krkn1;
                let nm5 = krkn2;
                let nm6 = krkn2;
                let nm7 = krln1;
                let nm8 = krln2;
                let nm9 = krln3;

                let sm1 = kros1;
                let sm2 = kros2;
                let sm3 = kros2;
                let sm4 = krks1;
                let sm5 = krks2;
                let sm6 = krks2;
                let sm7 = krls1;
                let sm8 = krls2;
                let sm9 = krls3;

                let totalnm = nm1+nm2+nm3+nm4+nm5+nm6+nm7+nm8+nm9;
                let totalsm = sm1+sm2+sm3+sm4+sm5+sm6+sm7+sm8+sm9;
                    //set value hri1
                let hmr1 = totalnm;
                //set value hri2
                let hmr2 = (totalnm/totaldatamr).toFixed(2);
                //set value hri3
                let hmr3 = ((totalsm*100)/(totaldatamr*4)).toFixed(2);

                //set value hpr1
                let allskor = totals+totalsm;
                let alldatapr = totaldatamr+totaldatari;
                profilResiko = ((allskor*100)/(alldatapr*4)).toFixed(2);
            })
        })
    //akhir profil resaiko

    //keuangan
    $.get("/koperasi/datakeuangan/" + id)
        .then(res=>{
            res.map(data=>{
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
                console.log(kkr1);

                if (kkr1 == Infinity) {
                    kkr1 = 0;
                } else if (isNaN(kkr1)) kkr1 = 0;

                let kkn1 = '';
                let kks1 = '';

                if (kkr1 <= 3) {
                    kkn1 = 4;
                } else if (kkr1 <= 5) {
                    kkn1 = 3;
                } else if (kkr1 <= 7) {
                    kkn1 = 2;
                } else {
                    kkn1 = 1;
                }

                if (kkr1 <= 3) {
                    kks1 = 1;
                } else if (kkr1 <= 5) {
                    kks1 = 2;
                } else if (kkr1 <= 7) {
                    kks1 = 3;
                } else {
                    kks1 = 4;
                }
                console.log(kks1);

                //baris ke-2
                let kkr2 = (((stlh_pajak/jml_kweku)*100).toFixed(2));

                if (kkr2 == Infinity) {
                    kkr2 = 0;
                } else if (isNaN(kkr2)) kkr2 = 0;

                let kkn2 = '';
                let kks2 = '';

                if (kkr2 <= 5) {
                    kkn2 = 4;
                } else if (kkr2 <= 7) {
                    kkn2 = 3;
                } else if (kkr2 <= 10) {
                    kkn2 = 2;
                } else {
                    kkn2 = 1;
                }

                if (kkr2 <= 5) {
                    kks2 = 1;
                } else if (kkr2 <= 7) {
                    kks2 = 2;
                } else if (kkr2 <= 10) {
                    kks2 = 3;
                } else {
                    kks2 = 4;
                }

                //baris ke-3
                let kkr3 = ((((jml_prtianggota - jml_bbnanggota)/(porsi_anggota + jml_bbnpkop))*100).toFixed(2));
                if (kkr3 == Infinity) {
                    kkr3 = 0;
                } else if (isNaN(kkr3)) kkr3 = 0;

                let kkn3 = '';
                let kks3 = '';

                if (kkr3 <= 5) {
                    kkn3 = 4;
                } else if (kkr3 <= 7) {
                    kkn3 = 3;
                } else if (kkr3 <= 10) {
                    kkn3 = 2;
                } else {
                    kkn3 = 1;
                }

                if (kkr3 <= 5) {
                    kks3 = 1;
                } else if (kkr3 <= 7) {
                    kks3 = 2;
                } else if (kkr3 <= 10) {
                    kks3 = 3;
                } else {
                    kks3 = 4;
                }

                //baris ke-4 (setelah rentabilitas)
                let kkr4 = ((((jml_bbnanggota + porsi_anggota + jml_bbnpkop)/jml_prtianggota)*100).toFixed(2));

                if (kkr4 == Infinity) {
                    kkr4 = 0;
                } else if (isNaN(kkr4)) kkr4 = 0;

                let kkn4 = '';
                let kks4 = '';

                if (kkr4 <= 80) {
                    kkn4 = 4;
                } else if (kkr4 <= 90) {
                    kkn4 = 3;
                } else if (kkr4 <= 100) {
                    kkn4 = 2;
                } else {
                    kkn4 = 1;
                }

                if (kkr4 <= 80) {
                    kks4 = 1;
                } else if (kkr4 <= 90) {
                    kks4 = 2;
                } else if (kkr4 <= 100) {
                    kks4 = 3;
                } else {
                    kks4 = 4;
                }

                //baris ke-5
                let kkr5 = (((jml_bbnusaha/sisa_kotor)*100).toFixed(2));

                if (kkr5 == Infinity) {
                    kkr5 = 0;
                } else if (isNaN(kkr5)) kkr5 = 0;

                let kkn5 = '';
                let kks5 = '';

                if (kkr5 <= 40) {
                    kkn5 = 1;
                } else if (kkr5 <= 60) {
                    kkn5 = 2;
                } else if (kkr5 <= 80) {
                    kkn5 = 3;
                } else {
                    kkn5 = 4;
                }

                if (kkr5 <= 40) {
                    kks5 = 1;
                } else if (kkr5 <= 60) {
                    kks5 = 2;
                } else if (kkr5 <= 80) {
                    kks5 = 3;
                } else {
                    kks5 = 4;
                }

                //baris ke-6(likuiditas)
                let kkr6 = (((jml_kasbnk/kw_lancar)*100).toFixed(2));

                if (kkr6 == Infinity) {
                    kkr6 = 0;
                } else if (isNaN(kkr6)) kkr6 = 0;

                let kkn6 = '';
                let kks6 = '';

                if (kkr6 <= 10) {
                    kkn6 = 4;
                } else if (kkr6 <= 20) {
                    kkn6 = 3;
                } else if (kkr6 <= 30) {
                    kkn6 = 2;
                } else {
                    kkn6 = 1;
                }

                if (kkr6 <= 10) {
                    kks6 = 1;
                } else if (kkr6 <= 20) {
                    kks6 = 2;
                } else if (kkr6 <= 30) {
                    kks6 = 3;
                } else {
                    kks6 = 4;
                }

                // baris ke-7
                let kkr7 = (((jml_piutang/(jml_kweku - data.hutang_pajak - data.beban_hrsdibayar - data.hutang_biaya))*100).toFixed(2));

                if (kkr7 == Infinity) {
                    kkr7 = 0;
                } else if (isNaN(kkr7)) kkr7 = 0;

                let kkn7 = '';
                let kks7 = '';

                if (kkr7 <= 60) {
                    kkn7 = 4;
                } else if (kkr7 <= 75) {
                    kkn7 = 3;
                } else if (kkr7 <= 90) {
                    kkn7 = 2;
                } else {
                    kkn7 = 1;
                }

                if (kkr7 <= 60) {
                    kks7 = 1;
                } else if (kkr7 <= 75) {
                    kks7 = 2;
                } else if (kkr7 <= 90) {
                    kks7 = 3;
                } else {
                    kks7 = 4;
                }

                //baris ke-8
                let kkr8 = (((jml_aktlancar/kw_lancar)*100).toFixed(2));

                if (kkr8 == Infinity) {
                    kkr8 = 0;
                } else if (isNaN(kkr8)) kkr8 = 0;

                let kkn8 = '';
                let kks8 = '';

                if (kkr8 <= 75) {
                    kkn8 = 4;
                } else if (kkr8 <= 100) {
                    kkn8 = 3;
                } else if (kkr8 <= 125) {
                    kkn8 = 2;
                } else {
                    kkn8 = 1;
                }

                if (kkr8 <= 75) {
                    kks8 = 1;
                } else if (kkr8 <= 100) {
                    kks8 = 2;
                } else if (kkr8 <= 125) {
                    kks8 = 3;
                } else {
                    kks8 = 4;
                }

                //baris ke-9
                let kkr9 = ((data.beban_penjualan/data.barang_dagang).toFixed(2));

                if (kkr9 == Infinity) {
                    kkr9 = 0;
                } else if (isNaN(kkr9)) kkr9 = 0;

                let kkn9 = '';
                let kks9 = '';

                if (kkr9 <= 3) {
                    kkn9 = 4;
                } else if (kkr9 <= 7) {
                    kkn9 = 3;
                } else if (kkr9 <= 10) {
                    kkn9 = 2;
                } else {
                    kkn9 = 1;
                }

                if (kkr9 <= 3) {
                    kks9 = 1;
                } else if (kkr9 <= 7) {
                    kks9 = 2;
                } else if (kkr9 <= 10) {
                    kks9 = 3;
                } else {
                    kks9 = 4;
                }

                //baris ke-10
                let kkr10 = (((data.piutang_dagang/(data.penjualan_anggota + data.penjualan))/360).toFixed(2));

                if (kkr10 == Infinity) {
                    kkr10 = 0;
                } else if (isNaN(kkr10)) kkr10 = 0;

                let kkn10 = '';
                let kks10 = '';

                if (kkr10 <= 100) {
                    kkn10 = 4;
                } else if (kkr10 <= 140) {
                    kkn10 = 3;
                } else if (kkr10 <= 180) {
                    kkn10 = 2;
                } else {
                    kkn10 = 1;
                }

                if (kkr10 <= 100) {
                    kks10 = 1;
                } else if (kkr10 <= 140) {
                    kks10 = 2;
                } else if (kkr10 <= 180) {
                    kks10 = 3;
                } else {
                    kks10 = 4;
                }

                //baris ke-11
                let kkr11 = (((data.penjualan_anggota + data.penjualan)/data.piutang_dagang).toFixed(2));

                if (kkr11 == Infinity) {
                    kkr11 = 0;
                } else if (isNaN(kkr11)) kkr11 = 0

                let kkn11 = '';
                let kks11 = '';

                if (kkr11 <= 4) {
                    kkn11 = 4;
                } else if (kkr11 <= 7) {
                    kkn11 = 3;
                } else if (kkr11 <= 10) {
                    kkn11 = 2;
                } else {
                    kkn11 = 1;
                }

                if (kkr11 <= 4) {
                    kks11 = 1;
                } else if (kkr11 <= 7) {
                    kks11 = 2;
                } else if (kkr11 <= 10) {
                    kks11 = 3;
                } else {
                    kks11 = 4;
                }

                //baris ke-12
                let kkr12 = ((((data.penjualan_anggota + data.penjualan)/jml_eku)*100).toFixed(2));

                if (kkr12 == Infinity) {
                    kkr12 = 0;
                } else if (isNaN(kkr12)) kkr12 = 0;

                let kkn12 = '';
                let kks12 = '';

                if (kkr12 <= 25) {
                    kkn12 = 4;
                } else if (kkr12 <= 75) {
                    kkn12 = 3;
                } else if (kkr12 <= 125) {
                    kkn12 = 2;
                } else {
                    kkn12 = 1;
                }

                if (kkr12 <= 25) {
                    kks12 = 1;
                } else if (kkr12 <= 75) {
                    kks12 = 2;
                } else if (kkr12 <= 125) {
                    kks12 = 3;
                } else {
                    kks12 = 4;
                }

                //baris ke-13
                let kkr13 = ((((data.penjualan_anggota + data.penjualan)/jmlakt)*100).toFixed(2));

                if (kkr13 == Infinity) {
                    kkr13 = 0;
                } else if (isNaN(kkr13)) kkr13 = 0;

                let kkn13 = '';
                let kks13 = '';

                if (kkr13 <= 5) {
                    kkn13 = 4;
                } else if (kkr13 <= 15) {
                    kkn13 = 3;
                } else if (kkr13 <= 25) {
                    kkn13 = 2;
                } else {
                    kkn13 = 1;
                }

                if (kkr13 <= 5) {
                    kks13 = 1;
                } else if (kkr13 <= 15) {
                    kks13 = 2;
                } else if (kkr13 <= 25) {
                    kks13 = 3;
                } else {
                    kks13 = 4;
                }

                //baris ke-14
                let kkr14 = ((((jmlakt - jmlakt2)/jmlakt2)*100).toFixed(2));

                if (kkr14 == Infinity) {
                    kkr14 = 0;
                } else if (isNaN(kkr14)) kkr14 = 0;

                let kkn14 = '';
                let kks14 = '';

                if (kkr14 <= 4) {
                    kkn14 = 4;
                } else if (kkr14 <= 7) {
                    kkn14 = 3;
                } else if (kkr14 <= 10) {
                    kkn14 = 2;
                } else {
                    kkn14 = 1;
                }

                if (kkr14 <= 4) {
                    kks14 = 1;
                } else if (kkr14 <= 7) {
                    kks14 = 2;
                } else if (kkr14 <= 10) {
                    kks14 = 3;
                } else {
                    kks14 = 4;
                }

                //baris ke-15
                let kkr15 = ((((jml_eku - jml_eku2)/jml_eku2)*100).toFixed(2));

                if (kkr15 == Infinity) {
                    kkr15 = 0;
                } else if (isNaN(kkr15)) kkr15 = 0;

                let kkn15 = '';
                let kks15 = '';

                if (kkr15 <= 4) {
                    kkn15 = 4;
                } else if (kkr15 <= 7) {
                    kkn15 = 3;
                } else if (kkr15 <= 10) {
                    kkn15 = 2;
                } else {
                    kkn15 = 1;
                }

                if (kkr15 <= 4) {
                    kks15 = 1;
                } else if (kkr15 <= 7) {
                    kks15 = 2;
                } else if (kkr15 <= 10) {
                    kks15 = 3;
                } else {
                    kks15 = 4;
                }

                //baris ke-16
                let kkr16 = ((((stlh_pajak - stlh_pajak2)/stlh_pajak2)*100).toFixed(2));

                if (kkr16 == Infinity) {
                    kkr16 = 0;
                } else if (isNaN(kkr16)) kkr16 = 0;

                let kkn16 = '';
                let kks16 = '';

                if (kkr16 <= 1) {
                    kkn16 = 4;
                } else if (kkr16 <= 3) {
                    kkn16 = 3;
                } else if (kkr16 <= 5) {
                    kkn16 = 2;
                } else {
                    kkn16 = 1;
                }

                if (kkr16 <= 1) {
                    kks16 = 1;
                } else if (kkr16 <= 3) {
                    kks16 = 2;
                } else if (kkr16 <= 5) {
                    kks16 = 3;
                } else {
                    kks16 = 4;
                }

                //baris ke-17
                let kkr17 = (((jml_prtianggota/jml_pendapatan)*100).toFixed(2));

                if (kkr17 == Infinity) {
                    kkr17 = 0;
                } else if (isNaN(kkr17)) kkr17 = 0;

                let kkn17 = '';
                let kks17 = '';

                if (kkr17 <= 35) {
                    kkn17 = 4;
                } else if (kkr17 <= 60) {
                    kkn17 = 3;
                } else if (kkr17 <= 85) {
                    kkn17 = 2;
                } else {
                    kkn17 = 1;
                }

                if (kkr17 <= 35) {
                    kks17 = 1;
                } else if (kkr17 <= 60) {
                    kks17 = 2;
                } else if (kkr17 <= 85) {
                    kks17 = 3;
                } else {
                    kks17 = 4;
                }

                //baris ke-18
                let kkr18 = (((stlh_pajak/(data.simpanan_pokok + data.simpanan_wajib))*100).toFixed(2));

                if (kkr18 == Infinity) {
                    kkr18 = 0;
                } else if (isNaN(kkr18)) kkr18 = 0;

                let kkn18 = '';
                let kks18 = '';

                if (kkr18 <= 10) {
                    kkn18 = 4;
                } else if (kkr18 <= 20) {
                    kkn18 = 3;
                } else if (kkr18 <= 30) {
                    kkn18 = 2;
                } else {
                    kkn18 = 1;
                }

                if (kkr18 <= 10) {
                    kks18 = 1;
                } else if (kkr18 <= 20) {
                    kks18 = 2;
                } else if (kkr18 <= 30) {
                    kks18 = 3;
                } else {
                    kks18 = 4;
                }

                //baris ke-19
                let kkr19 = ((((data.tabungan_anggota + data.simpanan_bjkanggota)/(data.tabungan_anggota + data.tabungan_nonanggota + data.simpanan_bjkanggota + data.simpanan_bjkcalon))*100).toFixed(2));

                if (kkr19 == Infinity) {
                    kkr19 = 0;
                } else if (isNaN(kkr19)) kkr19 = 0;

                let kkn19 = '';
                let kks19 = '';

                if (kkr19 <= 25) {
                    kkn19 = 4;
                } else if (kkr19 <= 50) {
                    kkn19 = 3;
                } else if (kkr19 <= 75) {
                    kkn19 = 2;
                } else {
                    kkn19 = 1;
                }

                if (kkr19 <= 25) {
                    kks19 = 1;
                } else if (kkr19 <= 50) {
                    kks19 = 2;
                } else if (kkr19 <= 75) {
                    kks19 = 3;
                } else {
                    kks19 = 4;
                }

                //hasil rentabilitas
                let totalkpp = 3;

                let totalkkn = kkn1 + kkn2 + kkn3;
                let totalkks = kks1 + kks2 + kks3;
                console.log(totalkks);

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
                console.log(skor_ekk);
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
                //set value hkkr2
                let hkk1 = parseInt($("#hkk1").text());
                //set value hkkr3
                let skor_kk = totalkks_pt + totalkks_jd;
                let data_kk = totalkpp_pt + totalkpp_jd;

                // Hasil Kinerja keuangan
                let total_nilai = totalkkn_jd + totalkkn_pt + totalkkn + totalkkn_ef + totalkkn_el + totalkkn_ai;
                let data_a = totalkpp_pt + totalkpp_jd + totalkpp_ai + totalkpp_el + totalkpp + totalkpp_ef;
                $("#ha1").text(total_nilai);
                //set value hkkr2
                let ha1 = parseInt($("#ha1").text());
                $("#ha2").text((ha1/data_a).toFixed(2));
                //set value hkkr3
                let skor_a = totalkks + totalkks_ef + totalkks_el + totalkks_ai + totalkks_pt + totalkks_jd;
                console.log(skor_a);
                $("#ha3").text(((skor_a*100)/(data_a*4)).toFixed(2));
                keuangan = ((skor_a*100)/(data_a*4)).toFixed(2);
            })
            console.log(keuangan);
        });
    //akhir keuangan

    //permodalan
    $.get("/koperasi/neraca/" + id)
        .then(res=>{
            res.map(data=>{
                console.log(data);
                let jmleku = (data.tabungan_anggota + data.tabungan_nonanggota + data.simpanan_bjkanggota + data.simpanan_bjkcalon + data.hutang_bank + data.hutang_lpdb + data.hutang_pajak + data.beban_hrsdibayar + data.pendapatan_dimuka + data.hutang_biaya + data.dana_bagian + data.titipan_dana + data.titipan_jaminan + data.titipan_zakat + data.hutang_sewa + data.kewajiban_lain) + (data.hutang_bank_panjang + data.hutang_koplain + data.pasiva + data.simpanan_berjangka + data.titipan_dana_panjang + data.hutang_lpdb_panjang + data.hutang_sewa_panjang + data.hutang_lain) + (data.simpanan_pokok + data.simpanan_wajib + data.modal_penyetaraan + data.modal_penyertaan + data.modal_sumbangan + data.cadangan_umum + data.cadangan_tujuan + data.shu_sebelum + data.shu_berjalan);
                let jmlakt = (data.kas + data.giro + data.tabungan + data.deposito + data.simpanan_sukarela + data.simpanan_berjangka_koplain + data.surat_berharga + (data.piutang_dagang + data.piutang_anggota + data.piutang_calon + data.piutang_koplain + data.piutang_bunga + data.piutang_lain - data.penyisihan_pinjaman)) + (data.tabungan_berjangka + data.surat_berharga_panjang + data.simpanan_lain + data.penyertaan_koplain + data.penyertaan_lemkeulain + data.inv_jplain + (data.properti_inv - data.akm_peny_prop)) + ((data.tanah + data.bangunan + data.kendaraan + data.inv_perkap) - data.akm_peny) + (data.aktiva_tdk_berwujud) + (data.beban_ditangguhkan + data.amortisasi_beban + data.agunan_diambil + data.beban_praoperasional + data.amortisasi_biaya + data.lain)

                $('#nama').text(data.nama);
                $('#nohukum').text(data.no_badan_hukum);
                $('#alamat').text(data.almt_terakhir);

                let kpr1 = (((jmleku/jmlakt)*100).toFixed(2));

                if (kpr1 == Infinity) {
                    kpr1 = 0;
                } else if (isNaN(kpr1)) kpr1 = 0;

                let kpn1 = '';
                let kps1 = '';

                if (kpr1 <= 10) {
                kpn1 = 4;
                } else if (kpr1 <= 20) {
                kpn1 = 3;
                } else if (kpr1 <= 30) {
                kpn1 = 2;
                } else {
                kpn1 = 1;
                }

                if (kpr1 <= 10) {
                    kps1 = 1;
                } else if (kpr1 <= 20) {
                    kps1 = 2;
                } else if (kpr1 <= 30) {
                    kps1 = 3;
                } else {
                    kps1 = 4;
                }

                let p10 = (data.tabungan_anggota + data.simpanan_bjkanggota + data.titipan_dana)

                let kppr1 = ((p10/jmlakt)*100);
                // console.log(kppr1);
                if (kppr1 == Infinity) {
                    kppr1 = 0;
                } else if (isNaN(kppr1)) kppr1 = 0;

                let kppn1 = '';
                let kpps1 = '';

                if (kppr1 <= 10) {
                    kppn1 = 4;
                } else if (kppr1 <= 20) {
                    kppn1 = 3;
                } else if (kppr1 <= 30) {
                    kppn1 = 2;
                } else {
                    kppn1 = 1;
                }

                if (kppr1 <= 10) {
                    kpps1 = 1;
                } else if (kppr1 <= 20) {
                    kpps1 = 2;
                } else if (kppr1 <= 30) {
                    kpps1 = 3;
                } else {
                    kpps1 = 4;
                }

                let jmljp = data.hutang_bank_panjang + data.hutang_koplain + data.pasiva + data.simpanan_berjangka + data.titipan_dana_panjang + data.hutang_lpdb_panjang + data.hutang_sewa_panjang + data.hutang_lain

                let kppr2 = ((jmljp/jmleku)*100);
                // console.log(kppr2);
                if (kppr2 == Infinity) {
                    kppr2 = 0;
                } else if (isNaN(kppr2)) kppr2 = 0;

                let kppn2 = '';
                let kpps2 = '';

                if (kppr2 <= 100) {
                    kppn2 = 4;
                } else if (kppr2 <= 125) {
                    kppn2 = 3;
                } else if (kppr2 <= 150) {
                    kppn2 = 2;
                } else {
                    kppn2 = 1;
                }

                if (kppr2 <= 100) {
                    kpps2 = 1;
                } else if (kppr2 <= 125) {
                    kpps2 = 2;
                } else if (kppr2 <= 150) {
                    kpps2 = 3;
                } else {
                    kpps2 = 4;
                }

                //total kecukupan modal
                let totalkp = 1;
                let kp1 = kpn1;

                let ks1 = kps1;

                $("#hkp1").text(kp1);
                $("#hkp2").text((kp1/totalkp).toFixed(2));
                $("#hkp3").text(((ks1*100)/(totalkp*4)).toFixed(2));

                let hkp3 = $("#hkp3").text();
                if (hkp3 <= 51 ) {
                    $("#hkp4").text("DALAM PENGAWASAN KHUSUS");
                    $("#colorhmr").css( "background-color", "red" );
                } else if (hkp3 <= 66) {
                    $("#hkp4").text("DALAM PENGAWASAN");
                    $("#colorhmr").css( "background-color", "#FF8C00" );
                } else if (hkp3 <= 80) {
                    $("#hkp4").text("CUKUP SEHAT");
                    $("#colorhmr").css( "background-color", "#FFD700" );
                } else {
                    $("#hkp4").text("SEHAT");
                    $("#colorhmr").css( "background-color", "#7CFC00" );
                }

                //total pengelolaan
                let totalkpp = 2;

                let totalkpn = kppn1 + kppn2;
                let totalkps = kpps1 + kpps2;

                $("#hkpp1").text(totalkpn);
                $("#hkpp2").text((totalkpn/totalkpp).toFixed(2));
                $("#hkpp3").text(((totalkps*100)/(totalkpp*4)).toFixed(2));

                let hkpp3 = $("#hkpp3").text();
                if (hkpp3 <= 51 ) {
                    $("#hkpp4").text("DALAM PENGAWASAN KHUSUS");
                    $("#colorhmr").css( "background-color", "red" );
                } else if (hkpp3 <= 66) {
                    $("#hkpp4").text("DALAM PENGAWASAN");
                    $("#colorhmr").css( "background-color", "#FF8C00" );
                } else if (hkpp3 <= 80) {
                    $("#hkpp4").text("CUKUP SEHAT");
                    $("#colorhmr").css( "background-color", "#FFD700" );
                } else {
                    $("#hkpp4").text("SEHAT");
                    $("#colorhmr").css( "background-color", "#7CFC00" );
                }

                //total permodalan
                $("#hp1").text(kp1+totalkpn);
                //set value hpr2
                let hp1 = parseInt($("#hp1").text());
                $("#hp2").text((hp1/(totalkp+totalkpp)).toFixed(2));
                //set value hpr3
                let allskor = ks1+totalkps;
                let alldatapr = totalkp+totalkpp;
                $("#hp3").text(((allskor*100)/(alldatapr*4)).toFixed(2));
                permodalan = ((allskor*100)/(alldatapr*4)).toFixed(2);
                console.log(permodalan);
            })
        })
    //akhir permodalan

    //hasil sertifikat

    const myTimeout = setTimeout(hasil, 900);


    function hasil() {
        console.log(tataKelola);
        console.log(profilResiko);
        console.log(keuangan);
        console.log(permodalan);

        let tkPercent = (30/100)*tataKelola;
        let prPercent = (15/100)*profilResiko;
        let keuPercent = (40/100)*keuangan;
        let mdPercent = (15/100)*permodalan;

        $("#op3").text(((tkPercent)+(prPercent)+(keuPercent)+(mdPercent)).toFixed(2));

        let op3 = $("#op3").text();
        if (op3 <= 51) {
            $("#op4").text("DALAM PENGAWASAN KHUSUS");
            $("#colorhpr").css( "background-color", "red" );
        } else if (op3 <= 66) {
            $("#op4").text("DALAM PENGAWASAN");
            $("#colorhpr").css( "background-color", "#FF8C00" );
        } else if (op3 <= 80) {
            $("#op4").text("CUKUP SEHAT");
            $("#colorhpr").css( "background-color", "#FFD700" );
        } else {
            $("#op4").text("SEHAT");
            $("#colorhpr").css( "background-color", "#7CFC00" );
        }//hasil sertifikat
    }

});
