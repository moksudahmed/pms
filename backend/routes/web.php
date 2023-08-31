<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/
use Illuminate\Http\Request;

$router->options('{any:.*}', function () {
    return response('', 200);
});

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('/hello', function () use ($router) {
    return "Hello World";
});
$router->post('/get/{name}','TestController@show');
$router->get('/check','TestController@dbcheck');
$router->get('/users','TestController@getUsers');
$router->post('/store2','TestController@store');

$router->post('/foo', function (Request $req) {
    return $req->all();
    //var_dump($req); die();
});

$router->get('/api/index','UserController@index');
$router->post('/api/register','UserController@store');

$router->post('/property/store','PropertyController@store');
$router->get('/property/index','PropertyController@index');
