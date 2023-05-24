<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\KoperasiImport;

class ImporController extends Controller
{
    public function fileImportExport()
    {
       return view('impor.koperasi');
    }

    public function fileImport(Request $request) 
    {
        Excel::import(new KoperasiImport, $request->file('file')->store('files'));
        return redirect()->back();
    }
}
