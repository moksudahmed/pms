<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RentalAgreement extends Model
{
    protected $fillable = ['tenant_id', 'property_id', 'lease_duration', 'rent_amount', 'move_in_date', 'status'];

    public function tenant()
    {
        return $this->belongsTo(User::class, 'tenant_id');
    }

    public function property()
    {
        return $this->belongsTo(Property::class, 'property_id');
    }
}
