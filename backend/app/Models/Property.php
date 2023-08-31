<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Lumen\Auth\Authorizable;

class Property extends Model
{
    protected $fillable = ['title', 'description', 'type', 'location', 'price', 'landlord_id', 'agent_id'];

    public function rentalAgreements()
    {
        return $this->hasMany(RentalAgreement::class, 'property_id');
    }

    public function repairs()
    {
        return $this->hasMany(Repair::class, 'property_id');
    }

    public function landlord()
    {
        return $this->belongsTo(User::class, 'landlord_id');
    }

    public function agent()
    {
        return $this->belongsTo(User::class, 'agent_id');
    }
}

?>
