<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BahanBakuTetap extends Model
{
    use HasFactory;
    protected $table = 'bahan_baku_tetaps';
    protected $primaryKey = 'id';
    protected $fillable = [
        'nama',
        'harga',
    ];
}
