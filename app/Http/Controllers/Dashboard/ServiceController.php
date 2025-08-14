<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $services = Service::orderBy('sort_order')->get();

        return Inertia::render('dashboard/services/index', [
            'services' => $services,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('dashboard/services/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'short_description' => 'nullable|string|max:500',
            'icon' => 'nullable|string|max:50',
            'image' => 'nullable|string',
            'interest_rate' => 'nullable|numeric|min:0|max:100',
            'requirements' => 'nullable|string',
            'admin_fee' => 'nullable|numeric|min:0',
            'category' => 'required|string|in:savings,loan,general',
            'features' => 'nullable|array',
            'color' => 'nullable|string|max:7',
            'sort_order' => 'nullable|integer',
            'is_featured' => 'boolean',
            'is_active' => 'boolean',
        ]);

        Service::create($validated);

        return redirect()->route('dashboard.services.index')
            ->with('success', 'Layanan berhasil ditambahkan.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Service $service)
    {
        return Inertia::render('dashboard/services/show', [
            'service' => $service,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Service $service)
    {
        return Inertia::render('dashboard/services/edit', [
            'service' => $service,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Service $service)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'short_description' => 'nullable|string|max:500',
            'icon' => 'nullable|string|max:50',
            'image' => 'nullable|string',
            'interest_rate' => 'nullable|numeric|min:0|max:100',
            'requirements' => 'nullable|string',
            'admin_fee' => 'nullable|numeric|min:0',
            'category' => 'required|string|in:savings,loan,general',
            'features' => 'nullable|array',
            'color' => 'nullable|string|max:7',
            'sort_order' => 'nullable|integer',
            'is_featured' => 'boolean',
            'is_active' => 'boolean',
        ]);

        $service->update($validated);

        return redirect()->route('dashboard.services.index')
            ->with('success', 'Layanan berhasil diperbarui.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Service $service)
    {
        $service->delete();

        return redirect()->route('dashboard.services.index')
            ->with('success', 'Layanan berhasil dihapus.');
    }

    /**
     * Toggle active status
     */
    public function toggleActive(Service $service)
    {
        $service->update(['is_active' => !$service->is_active]);

        return redirect()->back()
            ->with('success', 'Status layanan berhasil diubah.');
    }

    /**
     * Toggle featured status
     */
    public function toggleFeatured(Service $service)
    {
        $service->update(['is_featured' => !$service->is_featured]);

        return redirect()->back()
            ->with('success', 'Status featured layanan berhasil diubah.');
    }
}
