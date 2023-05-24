@extends('layouts.main') 
@section('title', 'Dashboard')
@section('content')
    <!-- push external head elements to head -->
    @push('head')

        <link rel="stylesheet" href="{{ asset('plugins/weather-icons/css/weather-icons.min.css') }}">
        <link rel="stylesheet" href="{{ asset('plugins/owl.carousel/dist/assets/owl.carousel.min.css') }}">
        <link rel="stylesheet" href="{{ asset('plugins/owl.carousel/dist/assets/owl.theme.default.min.css') }}">
        <link rel="stylesheet" href="{{ asset('plugins/chartist/dist/chartist.min.css') }}">
    @endpush

    <div class="container-fluid">
        <div class="page-header">
            <div class="row align-items-end">
                <div class="col-lg-8">
                    <div class="page-header-title">
                        <i class="ik ik-file bg-blue"></i>
                        <div class="d-inline">
                            <h5>SNAKi</h5>
                            <span> Biaya Produksi </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header row">
                        <div class="col col-sm-5">
                            <h2>SNAKi</h2>
                            <h6>Simulasi Biaya</h6>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="row">
                                    <div class="col-md-4">
                                        <label for="staticEmail" class="col-form-label">Gula</label>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="input-group mb-3">
                                            <input id="inputGula" type="text" class="form-control" value="20" aria-describedby="basic-addon2">
                                            <div class="input-group-append">
                                                <span class="input-group-text">Gram</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <label for="staticEmail" class="col-form-label">Tepung Tapioka</label>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="input-group mb-3">
                                            <input id="inputTepung" type="text" class="form-control" value="100" aria-describedby="basic-addon2">
                                            <div class="input-group-append">
                                                <span class="input-group-text">Gram</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <label for="staticEmail" class="col-form-label">Cokelat Batangan</label>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="input-group mb-3">
                                            <input id="inputCokelat" type="text" class="form-control" value="30" aria-describedby="basic-addon2">
                                            <div class="input-group-append">
                                                <span class="input-group-text">Gram</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-2">
                                <div class="row" style="margin-top: 55px;">
                                    <button id="btnGenerate" type="submit" class="btn btn-primary mr-2">Generate</button>
                                </div>
                            </div>

                            <div class="col-md-5">
                                <h3>Biaya Produksi SNAKi</h3>
                                <h5 id="hasilHarga"></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
	<!-- push external js -->
    @push('script')
        <script src="{{ asset('plugins/owl.carousel/dist/owl.carousel.min.js') }}"></script>
        <script src="{{ asset('plugins/chartist/dist/chartist.min.js') }}"></script>
        <script src="{{ asset('plugins/flot-charts/jquery.flot.js') }}"></script>
        <!-- <script src="{{ asset('plugins/flot-charts/jquery.flot.categories.js') }}"></script> -->
        <script src="{{ asset('plugins/flot-charts/curvedLines.js') }}"></script>
        <script src="{{ asset('plugins/flot-charts/jquery.flot.tooltip.min.js') }}"></script>

        <script src="{{ asset('plugins/amcharts/amcharts.js') }}"></script>
        <script src="{{ asset('plugins/amcharts/serial.js') }}"></script>
        <script src="{{ asset('plugins/amcharts/themes/light.js') }}"></script>
        
        <script src="{{ asset('js/widget-statistic.js') }}"></script>
        <script src="{{ asset('js/widget-data.js') }}"></script>
        <script src="{{ asset('js/dashboard-charts.js') }}"></script>
        
        <script>
            $(document).ready(function () {
                let gulaperGram = 0;
                let tepungperGram = 0;
                let cokelatperGram = 0;
                let hargaKemasan = 0;

                // Create our number formatter.
                const formatter = new Intl.NumberFormat('id', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 2, 
                });

                function hargaLancar() {
                    
                    $.ajax({
                        type: "get",
                        url: "/api/bahan-baku-lancar",
                        success: function (data) {
                            let hargaGula = data[0].harga;
                            let hargaTepung = data[1].harga;
                            let hargaCokelat = data[2].harga;

                            gulaperGram = (parseFloat(hargaGula)/1000);
                            tepungperGram = (parseFloat(hargaTepung)/1000);
                            cokelatperGram = (parseFloat(hargaCokelat)/1000);
                            console.log(gulaperGram);
                        }
                    });

                }

                function hargaTetap() {
                    $.ajax({
                        type: "get",
                        url: "/api/bahan-baku-tetap",
                        success: function (data) {
                            hargaKemasan = data[0].harga;
                        }
                    });
                }

                function getHargaProduksi() {
                    
                    
                    let gulaGram = $("#inputGula").val();
                    let tepungGram = $("#inputTepung").val();
                    let cokelatGram = $("#inputCokelat").val();

                    let hargaGula = parseFloat(gulaGram)*parseFloat(gulaperGram);
                    let hargaTepung = parseFloat(tepungGram)*parseFloat(tepungperGram);
                    let hargaCokelat = parseFloat(cokelatGram)*parseFloat(cokelatperGram);

                    let hargaProduksi = hargaGula + hargaTepung + hargaCokelat + hargaKemasan;

                    $("#hasilHarga").html(formatter.format(hargaProduksi));
                }
                
                hargaLancar();
                hargaTetap();

                $("#btnGenerate").on('click', function () {
                    getHargaProduksi();
                });
            });
        </script>
    @endpush
@endsection