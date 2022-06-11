<?php

namespace App\Http\Controllers;
use App\Models\Mesa;
use Illuminate\Http\Request;

class MesaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Mesa::all();
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
            'activo' => 'required'
        ]);
        return Mesa::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Mesa::find($id);
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
        $paquete = Mesa::find($id);
        $paquete->update($request->all());
        return $paquete;
    }

    /**
     * Activate the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function activar($id)
    {
        $paquete = Mesa::find($id);
        $paquete->update(['activo'=>true]);
        return $paquete;
    }

    /**
     * Deactivate the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function desactivar($id)
    {
        $paquete = Mesa::find($id);
        $paquete->update(['activo'=>false]);
        return $paquete;
    }

    /**
     * Search for a paquete by name.
     *
     * @param  str  $nombre
     * @return \Illuminate\Http\Response
     */
    public function search($nombre)
    {
        return Mesa::where('nombre', 'LIKE', '%' . $nombre . '%')->get();
    }
}
