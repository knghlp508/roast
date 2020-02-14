<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Cafe;

class CafesController extends Controller
{

    /**
     * |-------------------------------------------------------------------------------
     * | Get All Cafes
     * |-------------------------------------------------------------------------------
     * | URL:            /api/v1/cafes
     * | Method:         GET
     * | Description:    Gets all of the cafes in the application
     */
    public function getCafes()
    {
        $cafes = Cafe::all();
        return response()->json($cafes);
    }

    /**
     * |-------------------------------------------------------------------------------
     * | Get An Individual Cafe
     * |-------------------------------------------------------------------------------
     * | URL:            /api/v1/cafes/{id}
     * | Method:         GET
     * | Description:    Gets an individual cafe
     * | Parameters:
     * |   $id   -> ID of the cafe we are retrieving
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function getCafe($id)
    {
        $cafe = Cafe::where('id', '=', $id)->first();
        return response()->json($cafe);
    }

    /**
     * |-------------------------------------------------------------------------------
     * | Adds a New Cafe
     * |-------------------------------------------------------------------------------
     * | URL:            /api/v1/cafes
     * | Method:         POST
     * | Description:    Adds a new cafe to the application
     * @return \Illuminate\Http\JsonResponse
     */
    public function postNewCafe()
    {
        $cafe = new Cafe();

        $cafe->name = Request::get('name'); //咖啡店的名字
        $cafe->address = Request::get('address'); //咖啡店的地址
        $cafe->city = Request::get('city'); //咖啡店所在城市
        $cafe->state = Request::get('state'); //咖啡店所在省份
        $cafe->zip = Request::get('zip'); //邮政编码

        $cafe->save();

        return response()->json($cafe, 201);
    }

}
