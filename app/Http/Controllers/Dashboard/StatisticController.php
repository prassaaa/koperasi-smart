<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Statistic;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StatisticController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $statistics = Statistic::orderBy('sort_order')->get();

        return Inertia::render('dashboard/statistics/index', [
            'statistics' => $statistics,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('dashboard/statistics/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'key' => 'required|string|unique:statistics,key',
            'label' => 'required|string|max:255',
            'value' => 'required|string|max:50',
            'suffix' => 'nullable|string|max:10',
            'icon' => 'nullable|string|max:50',
            'color' => 'nullable|string|max:7',
            'description' => 'nullable|string',
            'show_counter_animation' => 'boolean',
            'animation_duration' => 'nullable|integer|min:500|max:5000',
            'sort_order' => 'nullable|integer',
            'is_active' => 'boolean',
        ]);

        Statistic::create($validated);

        return redirect()->route('dashboard.statistics.index')
            ->with('success', 'Statistik berhasil ditambahkan.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Statistic $statistic)
    {
        return Inertia::render('dashboard/statistics/show', [
            'statistic' => $statistic,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Statistic $statistic)
    {
        return Inertia::render('dashboard/statistics/edit', [
            'statistic' => $statistic,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Statistic $statistic)
    {
        $validated = $request->validate([
            'key' => 'required|string|unique:statistics,key,' . $statistic->id,
            'label' => 'required|string|max:255',
            'value' => 'required|string|max:50',
            'suffix' => 'nullable|string|max:10',
            'icon' => 'nullable|string|max:50',
            'color' => 'nullable|string|max:7',
            'description' => 'nullable|string',
            'show_counter_animation' => 'boolean',
            'animation_duration' => 'nullable|integer|min:500|max:5000',
            'sort_order' => 'nullable|integer',
            'is_active' => 'boolean',
        ]);

        $statistic->update($validated);

        return redirect()->route('dashboard.statistics.index')
            ->with('success', 'Statistik berhasil diperbarui.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Statistic $statistic)
    {
        $statistic->delete();

        return redirect()->route('dashboard.statistics.index')
            ->with('success', 'Statistik berhasil dihapus.');
    }

    /**
     * Toggle active status
     */
    public function toggleActive(Statistic $statistic)
    {
        $statistic->update(['is_active' => !$statistic->is_active]);

        return redirect()->back()
            ->with('success', 'Status statistik berhasil diubah.');
    }

    /**
     * Update multiple statistics at once
     */
    public function updateBatch(Request $request)
    {
        $statistics = $request->validate([
            'statistics' => 'required|array',
            'statistics.*.id' => 'required|integer|exists:statistics,id',
            'statistics.*.value' => 'required|string|max:50',
        ]);

        foreach ($statistics['statistics'] as $statisticData) {
            Statistic::where('id', $statisticData['id'])
                ->update(['value' => $statisticData['value']]);
        }

        return redirect()->back()
            ->with('success', 'Statistik berhasil diperbarui.');
    }
}
