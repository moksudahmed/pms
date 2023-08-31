<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FinancialTransaction;
use Illuminate\Support\Facades\Auth;

class FinancialTransactionController extends Controller
{
    public function create(Request $request)
    {
        // Validate input data
        $validatedData = $request->validate([
            'user_id' => 'required|exists:users,id',
            'type' => 'required|in:Income,Expense',
            'amount' => 'required|numeric',
            'transaction_date' => 'required|date',
            'description' => 'required|string',
        ]);

        // Create a new financial transaction
        $transaction = new FinancialTransaction($validatedData);
        $transaction->save();

        return response()->json(['message' => 'Financial transaction created successfully']);
    }

    public function index()
    {
        // Get all financial transactions
        $transactions = FinancialTransaction::all();

        return response()->json($transactions);
    }

    public function show($id)
    {
        // Find the financial transaction
        $transaction = FinancialTransaction::findOrFail($id);

        return response()->json($transaction);
    }

    public function update(Request $request, $id)
    {
        // Find the financial transaction
        $transaction = FinancialTransaction::findOrFail($id);

        // Authorize the action
        $this->authorize('update', $transaction);

        // Validate input data
        $validatedData = $request->validate([
            'type' => 'required|in:Income,Expense',
            'amount' => 'required|numeric',
            'transaction_date' => 'required|date',
            'description' => 'required|string',
        ]);

        // Update the financial transaction
        $transaction->update($validatedData);

        return response()->json(['message' => 'Financial transaction updated successfully']);
    }

    public function destroy($id)
    {
        // Find the financial transaction
        $transaction = FinancialTransaction::findOrFail($id);

        // Authorize the action
        $this->authorize('delete', $transaction);

        // Delete the financial transaction
        $transaction->delete();

        return response()->json(['message' => 'Financial transaction deleted successfully']);
    }
}

?>