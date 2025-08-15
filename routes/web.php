<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'heroSection' => App\Models\HeroSection::getActive(),
        'statistics' => App\Models\Statistic::getActive(),
        'services' => App\Models\Service::getFeatured(),
        'settings' => [
            'general' => App\Models\Setting::getByGroup('general'),
            'contact' => App\Models\Setting::getByGroup('contact'),
            'social' => App\Models\Setting::getByGroup('social'),
        ],
    ]);
})->name('home');

Route::get('/tentang', function () {
    return Inertia::render('about/page');
})->name('about');

Route::get('/layanan', function () {
    return Inertia::render('service/page', [
        'services' => App\Models\Service::getActive(),
        'settings' => [
            'general' => App\Models\Setting::getByGroup('general'),
            'contact' => App\Models\Setting::getByGroup('contact'),
        ],
    ]);
})->name('service');

Route::get('/prestasi', function () {
    return Inertia::render('achievement/page');
})->name('achievement');

Route::get('/keanggotaan', function () {
    return Inertia::render('membership/page');
})->name('membership');

Route::get('/kontak', function () {
    return Inertia::render('contact/page', [
        'settings' => [
            'general' => App\Models\Setting::getByGroup('general'),
            'contact' => App\Models\Setting::getByGroup('contact'),
            'social' => App\Models\Setting::getByGroup('social'),
        ],
    ]);
})->name('contact');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    // CMS Management Routes
    Route::prefix('dashboard')->name('dashboard.')->group(function () {
        // Settings Management
        Route::resource('settings', App\Http\Controllers\Dashboard\SettingController::class);
        Route::post('settings/batch', [App\Http\Controllers\Dashboard\SettingController::class, 'updateBatch'])
            ->name('settings.batch');

        // Hero Sections Management
        Route::resource('hero-sections', App\Http\Controllers\Dashboard\HeroSectionController::class);
        Route::patch('hero-sections/{heroSection}/toggle-active', [App\Http\Controllers\Dashboard\HeroSectionController::class, 'toggleActive'])
            ->name('hero-sections.toggle-active');

        // Statistics Management
        Route::resource('statistics', App\Http\Controllers\Dashboard\StatisticController::class);
        Route::patch('statistics/{statistic}/toggle-active', [App\Http\Controllers\Dashboard\StatisticController::class, 'toggleActive'])
            ->name('statistics.toggle-active');
        Route::post('statistics/batch', [App\Http\Controllers\Dashboard\StatisticController::class, 'updateBatch'])
            ->name('statistics.batch');

        // Services Management
        Route::resource('services', App\Http\Controllers\Dashboard\ServiceController::class);
        Route::patch('services/{service}/toggle-active', [App\Http\Controllers\Dashboard\ServiceController::class, 'toggleActive'])
            ->name('services.toggle-active');
        Route::patch('services/{service}/toggle-featured', [App\Http\Controllers\Dashboard\ServiceController::class, 'toggleFeatured'])
            ->name('services.toggle-featured');
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
