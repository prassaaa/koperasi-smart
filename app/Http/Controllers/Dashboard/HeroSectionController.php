<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\HeroSection;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HeroSectionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $heroSections = HeroSection::orderBy('sort_order')->get();

        return Inertia::render('dashboard/hero-sections/index', [
            'heroSections' => $heroSections,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('dashboard/hero-sections/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'nullable|string',
            'background_image' => 'nullable|string',
            'background_type' => 'required|string|in:image,video,gradient',
            'cta_text' => 'nullable|string|max:100',
            'cta_link' => 'nullable|string|max:255',
            'badges' => 'nullable|array',
            'badges.*.icon' => 'nullable|string',
            'badges.*.text' => 'nullable|string',
            'badges.*.color' => 'nullable|string',
            'text_color' => 'nullable|string|max:7',
            'overlay_opacity' => 'nullable|string|max:3',
            'sort_order' => 'nullable|integer',
            'is_active' => 'boolean',
        ]);

        HeroSection::create($validated);

        return redirect()->route('dashboard.hero-sections.index')
            ->with('success', 'Hero section berhasil ditambahkan.');
    }

    /**
     * Display the specified resource.
     */
    public function show(HeroSection $heroSection)
    {
        return Inertia::render('dashboard/hero-sections/show', [
            'heroSection' => $heroSection,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(HeroSection $heroSection)
    {
        return Inertia::render('dashboard/hero-sections/edit', [
            'heroSection' => $heroSection,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, HeroSection $heroSection)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'nullable|string',
            'background_image' => 'nullable|string',
            'background_type' => 'required|string|in:image,video,gradient',
            'cta_text' => 'nullable|string|max:100',
            'cta_link' => 'nullable|string|max:255',
            'badges' => 'nullable|array',
            'badges.*.icon' => 'nullable|string',
            'badges.*.text' => 'nullable|string',
            'badges.*.color' => 'nullable|string',
            'text_color' => 'nullable|string|max:7',
            'overlay_opacity' => 'nullable|string|max:3',
            'sort_order' => 'nullable|integer',
            'is_active' => 'boolean',
        ]);

        $heroSection->update($validated);

        return redirect()->route('dashboard.hero-sections.index')
            ->with('success', 'Hero section berhasil diperbarui.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(HeroSection $heroSection)
    {
        $heroSection->delete();

        return redirect()->route('dashboard.hero-sections.index')
            ->with('success', 'Hero section berhasil dihapus.');
    }

    /**
     * Toggle active status
     */
    public function toggleActive(HeroSection $heroSection)
    {
        $heroSection->update(['is_active' => !$heroSection->is_active]);

        return redirect()->back()
            ->with('success', 'Status hero section berhasil diubah.');
    }
}
