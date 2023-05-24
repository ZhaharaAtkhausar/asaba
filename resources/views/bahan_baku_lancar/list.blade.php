@extends('layouts.main')
@section('title', 'Data Produk')
@section('content')

    @push('head')
        <link rel="stylesheet" href="{{ asset('plugins/select2/dist/css/select2.min.css') }}">
    @endpush

    <div class="container-fluid">
        <div class="page-header">
            <div class="row align-items-end">
                <div class="col-lg-8">
                    <div class="page-header-title">
                        <i class="ik ik-file bg-blue"></i>
                        <div class="d-inline">
                            <h5>Produk</h5>
                            <span> List Produk </span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <nav class="breadcrumb-container" aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="{{route('dashboard')}}"><i class="ik ik-home"></i></a>
                            </li>
                            <li class="breadcrumb-item">
                                <a href="#">Produk</a>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header row">
                        
                        <div class="col-sm-5">
                            <!-- <div class="card-options text-left">
                                <a href="{{ url('bahan-baku-lancar/tambah') }}" class=" btn btn-outline-primary btn-semi-rounded "> Tambah Produk </a>
                            </div> -->
                        </div>
                    </div>
                    <div class="card-body">
                        <table id="advanced_table" class="table">
                            <thead>
                                <tr>
                                    <th> Nomer </th>
                                    <th> Nama </th>
                                    <th> Harga </th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody id="result">
                                @foreach ($bahan_baku_lancar as $bbl)
                                    <tr>
                                        <td>{{ $idx }}</td>
                                        <td>{{ $bbl->nama }}</td>
                                        <td>{{ $bbl->harga }}</td>
                                        <td>
                                            <a href="#editKoperasi" data-toggle="modal" data-id="{{ $bbl->id }}" data-target="#editKoperasi" id="edit">
                                                <i class="ik ik-edit f-16 mr-15 text-green"></i>
                                            </a>
                                            <!-- <a href="#" data-id="{{ $bbl->id }}" id="delete"><i class="ik ik-trash-2 f-16 text-red"></i></a> -->
                                        </td>
                                        <td hidden>{{ $idx++ }}</td>
                                    </tr>
                                @endforeach

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade edit-layout-modal pr-0" id="editKoperasi" tabindex="-1" role="dialog" aria-labelledby="productViewLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="productViewLabel"> Detail Produk </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-12">
                            <form class="forms-sample" method="post" action="">
                                @csrf

                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>Nama</label>
                                            <input style="font-weight: bold; color: black;" disabled type="text" class="form-control" id="nama" name="nama" placeholder="Masukkan Nama">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>Harga (/Kg)</label>
                                            <input type="text" class="form-control" id="harga" name="harga" placeholder="Masukkan Harga">
                                        </div>
                                    </div>
                                </div>
                                <button id="btnEdit" type="submit" class="btn btn-primary mr-2">{{ __('Submit')}}</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>


    @push('script')
        <script src="{{ asset('plugins/amcharts/amcharts.js') }}"></script>
        <script src="{{ asset('plugins/amcharts/gauge.js') }}"></script>
        <script src="{{ asset('plugins/amcharts/serial.js') }}"></script>
        <script src="{{ asset('plugins/amcharts/themes/light.js') }}"></script>
        <script src="{{ asset('plugins/amcharts/animate.min.js') }}"></script>
        <script src="{{ asset('plugins/amcharts/pie.js') }}"></script>
        <script src="{{ asset('plugins/ammap3/ammap/ammap.js') }}"></script>
        <script src="{{ asset('plugins/ammap3/ammap/maps/js/usaLow.js') }}"></script>
        <script src="{{ asset('plugins/select2/dist/js/select2.min.js') }}"></script>
        <script src="{{ asset('js/product.js') }}"></script>
        <script>
            $(function() {
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });

                //Fungsi Delete
                $('body').on('click', '#delete', function (event) {
                    // console.log("btn delete diklik");
                    let id = $(this).attr('data-id');

                    $.ajax(
                        {
                        url: "/bahan-baku-lancar/delete/" + id,
                        type: 'GET',
                        data: {
                            id: id
                        },
                        success: function (response){
                            window.location.reload();
                        },
                    });
                });

                //Fungsi Tampil Edit
                $("body").on("click","#edit",function(e){
                    e.preventDefault;

                    let id = $(this).data('id');
                    let url = "/bahan-baku-lancar/edit/" + id;
                    // console.log(id);

                    $.get(url, row => {

                        $("#nama").val(row.nama);
                        $("#harga").val(row.harga);

                        //Tombol Edit
                        $("body").on("click", "#btnEdit" ,function(e) {

                            e.preventDefault();
                            
                            let nama = $("#nama").val();
                            let harga = $("#harga").val();

                            $.ajax({
                                url: "/bahan-baku-lancar/edit/"+id,
                                type: "POST",
                                headers: {
                                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                },
                                data: {
                                    nama : nama,
                                    harga : harga,
                                },
                                dataType: 'json',
                                success: function (data) {
                                    window.location.reload();
                                }
                            });

                        });

                    });
                });
            });
        </script>
    @endpush

@endsection
