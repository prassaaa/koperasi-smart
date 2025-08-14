<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/tentang', function () {
    return Inertia::render('about/page');
})->name('about');

Route::get('/layanan', function () {
    return Inertia::render('service/page');
})->name('service');

Route::get('/prestasi', function () {
    return Inertia::render('achievement/page');
})->name('achievement');

Route::get('/keanggotaan', function () {
    return Inertia::render('membership/page');
})->name('membership');

Route::get('/kontak', function () {
    return Inertia::render('contact/page');
})->name('contact');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
