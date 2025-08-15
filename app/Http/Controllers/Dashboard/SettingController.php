<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $settings = Setting::where('is_active', true)
            ->orderBy('group')
            ->orderBy('sort_order')
            ->get()
            ->groupBy('group');

        return Inertia::render('dashboard/settings/index', [
            'settings' => $settings,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('dashboard/settings/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'key' => 'required|string|unique:settings,key',
            'value' => 'nullable|string',
            'type' => 'required|string|in:text,textarea,email,url,number,boolean,image,json',
            'group' => 'required|string',
            'label' => 'nullable|string',
            'description' => 'nullable|string',
            'sort_order' => 'nullable|integer',
            'is_active' => 'boolean',
        ]);

        Setting::create($validated);

        return redirect()->route('dashboard.settings.index')
            ->with('success', 'Setting berhasil ditambahkan.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Setting $setting)
    {
        return Inertia::render('dashboard/settings/show', [
            'setting' => $setting,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Setting $setting)
    {
        return Inertia::render('dashboard/settings/edit', [
            'setting' => $setting,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Setting $setting)
    {
        $validated = $request->validate([
            'key' => 'required|string|unique:settings,key,' . $setting->id,
            'value' => 'nullable|string',
            'type' => 'required|string|in:text,textarea,email,url,number,boolean,image,json',
            'group' => 'required|string',
            'label' => 'nullable|string',
            'description' => 'nullable|string',
            'sort_order' => 'nullable|integer',
            'is_active' => 'boolean',
        ]);

        $setting->update($validated);

        return redirect()->route('dashboard.settings.index')
            ->with('success', 'Setting berhasil diperbarui.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Setting $setting)
    {
        $setting->delete();

        return redirect()->route('dashboard.settings.index')
            ->with('success', 'Setting berhasil dihapus.');
    }

    /**
     * Update multiple settings at once
     */
    public function updateBatch(Request $request)
    {
        $settings = $request->validate([
            'settings' => 'required|array',
            'settings.*.key' => 'required|string',
            'settings.*.value' => 'nullable|string',
        ]);

        foreach ($settings['settings'] as $settingData) {
            Setting::where('key', $settingData['key'])
                ->update(['value' => $settingData['value']]);
        }

        return redirect()->back()
            ->with('success', 'Settings berhasil diperbarui.');
    }
}
