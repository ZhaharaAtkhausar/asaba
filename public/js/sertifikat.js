$(function () {
    let id = '';
    if (localStorage.getItem("id") == null) {
        $("#search").on("change", function () {
            id = $(this).val();

            const myTimeout = setTimeout(hasil, 1000);
            let skorAkhir = 0;

            function hasil() {
                let tk = parseInt($("#htk1").text());
                let pr = parseInt($("#hpr1").text());
                let md = parseInt($("#hp1").text());
                let keu = parseInt($("#ha1").text());

                let tks = parseInt($("#htk3").text());
                let prs = parseInt($("#hpr3").text());
                let mds = parseInt($("#hp3").text());
                let keus = parseInt($("#ha3").text());

                let total_nilai = tk + pr + md + keu;
                // console.log(tk);
                $("#op1").text(total_nilai);
                let op1 = parseInt($("#op1").text());

                $("#op2").text((op1/55).toFixed(2));

                let tkPercent = (30/100)*tks;
                let prPercent = (15/100)*prs;
                let keuPercent = (40/100)*keus;
                let mdPercent = (15/100)*mds;

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
                }
                skorAkhir = ((tkPercent)+(prPercent)+(keuPercent)+(mdPercent)).toFixed(2);
                // console.log(skorAkhir);
            }
        });
    } else {
        const myTimeout = setTimeout(hasil, 1500);
        let skorAkhir = 0;

        function hasil() {
            let tk = parseInt($("#htk1").text());
            let pr = parseInt($("#hpr1").text());
            let md = parseInt($("#hp1").text());
            let keu = parseInt($("#ha1").text());

            let tks = parseInt($("#htk3").text());
            let prs = parseInt($("#hpr3").text());
            let mds = parseInt($("#hp3").text());
            let keus = parseInt($("#ha3").text());

            let total_nilai = tk + pr + md + keu;
            // console.log(tk);
            $("#op1").text(total_nilai);
            let op1 = parseInt($("#op1").text());

            $("#op2").text((op1/55).toFixed(2));

            let tkPercent = (30/100)*tks;
            let prPercent = (15/100)*prs;
            let keuPercent = (40/100)*keus;
            let mdPercent = (15/100)*mds;

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
            }
            skorAkhir = ((tkPercent)+(prPercent)+(keuPercent)+(mdPercent)).toFixed(2);
            // console.log(skorAkhir);
        }
    }

});
