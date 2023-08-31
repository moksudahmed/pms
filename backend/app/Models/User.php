<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Lumen\Auth\Authorizable;

class User extends Model implements AuthenticatableContract, AuthorizableContract
{
    use Authenticatable, Authorizable, HasFactory;
   
    protected $fillable = ['first_name', 'last_name', 'email','role'];

    
    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
//    protected $fillable = [
  //      'name', 'email',
  //  ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var string[]
     */
    protected $hidden = [
        'password',
    ];

    public function rentalAgreements()
    {
        return $this->hasMany(RentalAgreement::class, 'tenant_id');
    }

    public function properties()
    {
        return $this->hasMany(Property::class, 'landlord_id');
    }

    public function messagesSent()
    {
        return $this->hasMany(Message::class, 'sender_id');
    }

    public function messagesReceived()
    {
        return $this->hasMany(Message::class, 'receiver_id');
    }

    public function notifications()
    {
        return $this->hasMany(Notification::class, 'user_id');
    }

    public function financialTransactions()
    {
        return $this->hasMany(FinancialTransaction::class, 'user_id');
    }
}
