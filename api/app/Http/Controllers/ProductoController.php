<?php

namespace App\Http\Controllers;
use App\Models\Producto;
use Illuminate\Http\Request;

class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Producto::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required',
            'descripcion' => 'required',
            'precioCompra' => 'required',
            'precioVenta' => 'required',
            'proveedorID' => 'required',
            'categoriaID' => 'required',
            'stock' => 'required',
            'stockMinimo' => 'required',
            'stockMaximo' => 'required'
        ]);
        return Producto::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Producto::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $producto = Producto::find($id);
        $producto->update($request->all());
        return $producto;
    }

    /**
     * Activate the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function activar($id)
    {
        $producto = Producto::find($id);
        $producto->update(['activo'=>true]);
        return $producto;
    }

    /**
     * Deactivate the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function desactivar($id)
    {
        $producto = Producto::find($id);
        $producto->update(['activo'=>false]);
        return $producto;
    }

    /**
     * Search for a producto by name.
     *
     * @param  str  $nombre
     * @return \Illuminate\Http\Response
     */
    public function search($nombre)
    {
        return Producto::where('nombre', 'LIKE', '%' . $nombre . '%')->get();
    }
}
