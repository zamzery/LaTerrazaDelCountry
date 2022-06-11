<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proveedor extends Model
{
    use HasFactory;
    protected $table = 'proveedores';
    protected $fillable = ['nombre', 'razonSocial', 'rfc', 'direccion', 'telefono', 'email', 'contacto', 'web', 'banco', 'clabe', 'formaPago', 'observaciones', 'abre', 'cierra', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo', 'activo'];
}
