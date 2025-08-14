<?php

namespace Database\Seeders;

use App\Models\HeroSection;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class HeroSectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        HeroSection::updateOrCreate(
            ['id' => 1],
            [
                'title' => 'Koperasi Desa Terpercaya',
                'subtitle' => 'Bergabunglah dengan KSP Smart untuk membangun masa depan finansial yang berkelanjutan bersama-sama.',
                'background_image' => '/assets/images/hero-bg.jpg',
                'background_type' => 'image',
                'cta_text' => 'Bergabung Sekarang',
                'cta_link' => '/keanggotaan',
                'badges' => [
                    [
                        'icon' => 'Shield',
                        'text' => 'Terdaftar Resmi',
                        'color' => 'green'
                    ],
                    [
                        'icon' => 'Users',
                        'text' => '1000+ Anggota',
                        'color' => 'blue'
                    ],
                    [
                        'icon' => 'Award',
                        'text' => 'Koperasi Sehat',
                        'color' => 'yellow'
                    ],
                    [
                        'icon' => 'TrendingUp',
                        'text' => 'Bunga Kompetitif',
                        'color' => 'purple'
                    ]
                ],
                'text_color' => '#ffffff',
                'overlay_opacity' => '0.5',
                'is_active' => true,
                'sort_order' => 1,
            ]
        );
    }
}
