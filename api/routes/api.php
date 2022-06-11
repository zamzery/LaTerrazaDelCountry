<?php
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\ProductoController;
use App\Http\Controllers\PaqueteController;
use App\Http\Controllers\ProveedorController;
use App\Http\Controllers\MesaController;
use App\Http\Controllers\CuentaController;
use App\Http\Controllers\PedidoController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Sanctum\HasApiTokens;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::resource('products',ProductController::class);

//================== Rutas Protegidas =====================//
Route::group(['middleware'=>['auth:sanctum']], function () {
    // Rutas de Categorías
    Route::post('/categoria',[CategoriaController::class, 'store']);
    Route::put('/categoria/{id}',[CategoriaController::class, 'update']);
    Route::post('/categoria/activar/{id}',[CategoriaController::class, 'activar']);
    Route::post('/categoria/desactivar/{id}',[CategoriaController::class, 'desactivar']);

    // Rutas de Productos
    Route::post('/productos',[ProductoController::class, 'store']);
    Route::put('/productos/{id}',[ProductoController::class, 'update']);
    Route::post('/productos/activar/{id}',[ProductoController::class, 'activar']);
    Route::post('/productos/desactivar/{id}',[ProductoController::class, 'desactivar']);

    // Rutas de Paquetes
    Route::post('/paquete',[PaqueteController::class, 'store']);
    Route::put('/paquete/{id}',[PaqueteController::class, 'update']);
    Route::post('/paquete/activar/{id}',[PaqueteController::class, 'activar']);
    Route::post('/paquete/desactivar/{id}',[PaqueteController::class, 'desactivar']);

    // Rutas de Proveedores
    Route::post('/proveedor',[ProveedorController::class, 'store']);
    Route::put('/proveedor/{id}',[ProveedorController::class, 'update']);
    Route::post('/proveedor/activar/{id}',[ProveedorController::class, 'activar']);
    Route::post('/proveedor/desactivar/{id}',[ProveedorController::class, 'desactivar']);

    // Rutas de Mesas
    Route::post('/mesa',[MesaController::class, 'store']);
    Route::put('/mesa/{id}',[MesaController::class, 'update']);
    Route::post('/mesa/activar/{id}',[MesaController::class, 'activar']);
    Route::post('/mesa/desactivar/{id}',[MesaController::class, 'desactivar']);

    // Rutas de Cuentas
    Route::post('/cuenta',[CuentaController::class, 'store']);
    Route::put('/cuenta/{id}',[CuentaController::class, 'update']);
    Route::post('/cuenta/activar/{id}',[CuentaController::class, 'activar']);
    Route::post('/cuenta/desactivar/{id}',[CuentaController::class, 'desactivar']);

    // Rutas de Pedidos
    Route::post('/pedido',[PedidoController::class, 'store']);
    Route::put('/pedido/{id}',[PedidoController::class, 'update']);
    Route::post('/pedido/activar/{id}',[PedidoController::class, 'activar']);
    Route::post('/pedido/desactivar/{id}',[PedidoController::class, 'desactivar']);

    // Ruta para cerrar sesión
    Route::post('/logout',[AuthController::class, 'logout']);
});

//================== Rutas Públicas ======================//
// Rutas de Usuarios
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

//Rutas de Categorías
Route::get('/categoria/search/{nombre}', [CategoriaController::class, 'search']);
Route::get('/categoria/{id}', [CategoriaController::class, 'show']);
Route::get('/categoria', [CategoriaController::class, 'index']);

//Rutas de Productos
Route::get('/productos/search/{nombre}', [ProductoController::class, 'search']);
Route::get('/productos/{id}', [ProductoController::class, 'show']);
Route::get('/productos', [ProductoController::class, 'index']);

//Rutas de Paquetes
Route::get('/paquete/search/{nombre}', [PaqueteController::class, 'search']);
Route::get('/paquete/{id}', [PaqueteController::class, 'show']);
Route::get('/paquete', [PaqueteController::class, 'index']);

//Rutas de Proveedores
Route::get('/proveedor/search/{nombre}', [ProveedorController::class, 'search']);
Route::get('/proveedor/{id}', [ProveedorController::class, 'show']);
Route::get('/proveedor', [ProveedorController::class, 'index']);

//Rutas de Mesas
Route::get('/mesa/search/{nombre}', [MesaController::class, 'search']);
Route::get('/mesa/{id}', [MesaController::class, 'show']);
Route::get('/mesa', [MesaController::class, 'index']);

//Rutas de Cuentas
Route::get('/cuenta/search/{nombre}', [CuentaController::class, 'search']);
Route::get('/cuenta/{id}', [CuentaController::class, 'show']);
Route::get('/cuenta', [CuentaController::class, 'index']);

//Rutas de Pedidos
Route::get('/pedido/{id}', [PedidoController::class, 'show']);
Route::get('/pedido', [PedidoController::class, 'index']);

//Autorización de usuarios
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
