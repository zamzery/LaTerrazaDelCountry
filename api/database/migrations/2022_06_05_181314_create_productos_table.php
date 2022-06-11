<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('productos', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->text('nombre');
            $table->text('descripcion')->default('');
            $table->string('imagen',50)->default('');
            $table->decimal('precioCompra',9,2);
            $table->decimal('precioVenta',9,2);
            $table->integer('proveedorID');
            $table->integer('categoriaID');
            $table->boolean('stock')->default(false);
            $table->integer('stockMinimo');
            $table->integer('stockMaximo');
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
        Schema::dropIfExists('productos');
    }
}
