<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProveedoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('proveedores', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->text('nombre');
            $table->text('razonSocial')->default('');
            $table->string('rfc',13)->default('');
            $table->text('direccion')->default('');
            $table->text('telefono')->default('');
            $table->text('email')->default('');
            $table->string('contacto',120)->default('');
            $table->string('web',120)->default('');
            $table->text('banco')->default('');
            $table->string('clabe',50)->default('');
            $table->string('formaPago',2)->default('');
            $table->text('observaciones')->default('');
            $table->time('abre')->default('00:00:00');
            $table->time('cierra')->default('00:00:00');
            $table->boolean('lunes')->default(false);
            $table->boolean('martes')->default(false);
            $table->boolean('miercoles')->default(false);
            $table->boolean('jueves')->default(false);
            $table->boolean('viernes')->default(false);
            $table->boolean('sabado')->default(false);
            $table->boolean('domingo')->default(false);
            $table->boolean('activo')->default(true);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('proveedores');
    }
}
