<?php

namespace App\Http\Controllers;
use App\Models\Paquete;
use Illuminate\Http\Request;

class PaqueteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Paquete::all();
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
            'contenido' => 'required'
        ]);
        return Paquete::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Paquete::find($id);
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
        $paquete = Paquete::find($id);
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
        $paquete = Paquete::find($id);
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
        $paquete = Paquete::find($id);
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
        return Paquete::where('nombre', 'LIKE', '%' . $nombre . '%')->get();
    }
}
