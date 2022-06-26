<?php

namespace App\Http\Controllers;
use App\Models\Reservacion;
use Illuminate\Http\Request;

class ReservacionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Reservacion::all();
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
            'personas' => 'required',
            'mesaID' => 'required',
            'fecha' => 'required',
            'hora' => 'required'
        ]);
        return Reservacion::create($request->all());
    }

    /**
     * Display the specified resource.
     * 
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Reservacion::find($id);
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
        $reservacion = Reservacion::find($id);
        $reservacion->update($request->all());
        return $reservacion;
    }

    /**
     * Activate the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function activar($id)
    {
        $reservacion = Reservacion::find($id);
        $reservacion->update(['activo'=>true]);
        return $reservacion;
    }

    /**
     * Deactivate the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function desactivar($id)
    {
        $reservacion = Reservacion::find($id);
        $reservacion->update(['activo'=>false]);
        return $reservacion;
    }

    /**
     * Search for a Reservacion by name.
     *
     * @param  str  $nombre
     * @return \Illuminate\Http\Response
     */
    public function search($nombre)
    {
        return Reservacion::where('nombre', 'LIKE', '%' . $nombre . '%')->get();
    }
}
