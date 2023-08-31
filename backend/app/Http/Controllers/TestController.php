<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use App\Helpers\ApiResponse;
use App\Models\Post ;

class TestController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    
    public function getUsers(){
        $users = DB::table('users')
                    ->where('role', '=', 'Landlord')                    
                    ->get();
        //$users = DB::select('select * from users');
        return response()->json($users);

    }
    public function store(Request $request)
    {
        // Validate the incoming request data for creating a new user
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:6',
            'role' => 'required|in:Landlord,Property Manager,Tenant,Agent,Accountant',
            // Add more validation rules as needed
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Create a new user
        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role,
        ]);

        return response()->json(['message' => 'User created successfully', 'data' => $user]);
    }

    public function store3(Request $request)
    {
        // Validate the incoming request data for creating a new user
        $validator = Validator::make($request->all(), [
            'FirstName' => 'required|string|max:255',
            'LastName' => 'required|string|max:255',
            'Email' => 'required|email|unique:users,email',
            'Password' => 'required|string|min:6',
            'Role' => 'required|in:Landlord,Property Manager,Tenant,Agent,Accountant',
            // Add more validation rules as needed
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Create a new user
        $user = User::create([
            'UserID' => $request->UserID,
            'FirstName' => $request->FirstName,
            'LastName' => $request->LastName,
            'Email' => $request->Email,
            'Password' => Hash::make($request->Password),
            'Role' => $request->Role,
        ]);

        return response()->json(['message' => 'User created successfully', 'data' => $user]);
    }

    public function store2(Request $request)
    {   
        $input = $request->all();
        //$getData = Input::all();;
        //$getData = $request->getContent();
        DB::table('users')->insert([$input]);
        
        return $input;
    }

    public function show($name){
        return "Bismillah".$name;
    }
    //
    public function dbcheck(){
        try {
            $dbconnect = DB::connection()->getPDO();
            $dbname = DB::connection()->getDatabaseName();
            echo "Connected successfully to the database. Database name is :".$dbname;
         } catch(Exception $e) {
            echo "Error in connecting to the database";
         }
    }
}
