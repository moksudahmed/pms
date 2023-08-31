<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FinancialTransaction extends Model
{
    protected $fillable = ['user_id', 'type', 'amount', 'transaction_date', 'description'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
