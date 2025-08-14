<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $settings = [
            // General Settings
            [
                'key' => 'site_name',
                'value' => 'KSP Smart',
                'type' => 'text',
                'group' => 'general',
                'label' => 'Nama Situs',
                'description' => 'Nama utama koperasi',
                'sort_order' => 1,
            ],
            [
                'key' => 'site_tagline',
                'value' => 'Satrio Mulia Arthomoro',
                'type' => 'text',
                'group' => 'general',
                'label' => 'Tagline',
                'description' => 'Tagline atau subtitle koperasi',
                'sort_order' => 2,
            ],
            [
                'key' => 'site_logo',
                'value' => '/assets/images/logo.png',
                'type' => 'image',
                'group' => 'general',
                'label' => 'Logo',
                'description' => 'Logo utama koperasi',
                'sort_order' => 3,
            ],
            [
                'key' => 'site_description',
                'value' => 'Koperasi simpan pinjam yang melayani masyarakat desa dengan prinsip gotong royong, kekeluargaan, dan kepercayaan.',
                'type' => 'textarea',
                'group' => 'general',
                'label' => 'Deskripsi Situs',
                'description' => 'Deskripsi singkat tentang koperasi',
                'sort_order' => 4,
            ],

            // Contact Information
            [
                'key' => 'contact_address',
                'value' => 'Jl. Raya Desa Satrio Mulia No. 123, Kec. Arthomoro, Kab. Makmur, Jawa Tengah 12345',
                'type' => 'textarea',
                'group' => 'contact',
                'label' => 'Alamat',
                'description' => 'Alamat lengkap kantor koperasi',
                'sort_order' => 1,
            ],
            [
                'key' => 'contact_phone',
                'value' => '(0274) 123-4567',
                'type' => 'text',
                'group' => 'contact',
                'label' => 'Telepon',
                'description' => 'Nomor telepon kantor',
                'sort_order' => 2,
            ],
            [
                'key' => 'contact_email',
                'value' => 'info@kspsmart.co.id',
                'type' => 'email',
                'group' => 'contact',
                'label' => 'Email',
                'description' => 'Email resmi koperasi',
                'sort_order' => 3,
            ],
            [
                'key' => 'contact_whatsapp',
                'value' => '+62812-3456-7890',
                'type' => 'text',
                'group' => 'contact',
                'label' => 'WhatsApp',
                'description' => 'Nomor WhatsApp untuk layanan',
                'sort_order' => 4,
            ],

            // Operating Hours
            [
                'key' => 'operating_hours_weekday',
                'value' => 'Senin - Jumat: 08:00 - 16:00 WIB',
                'type' => 'text',
                'group' => 'contact',
                'label' => 'Jam Operasional Hari Kerja',
                'description' => 'Jam buka hari Senin sampai Jumat',
                'sort_order' => 5,
            ],
            [
                'key' => 'operating_hours_saturday',
                'value' => 'Sabtu: 08:00 - 12:00 WIB',
                'type' => 'text',
                'group' => 'contact',
                'label' => 'Jam Operasional Sabtu',
                'description' => 'Jam buka hari Sabtu',
                'sort_order' => 6,
            ],

            // Social Media
            [
                'key' => 'social_facebook',
                'value' => 'https://facebook.com/kspsmart',
                'type' => 'url',
                'group' => 'social',
                'label' => 'Facebook',
                'description' => 'Link halaman Facebook',
                'sort_order' => 1,
            ],
            [
                'key' => 'social_instagram',
                'value' => 'https://instagram.com/kspsmart',
                'type' => 'url',
                'group' => 'social',
                'label' => 'Instagram',
                'description' => 'Link halaman Instagram',
                'sort_order' => 2,
            ],
            [
                'key' => 'social_youtube',
                'value' => 'https://youtube.com/@kspsmart',
                'type' => 'url',
                'group' => 'social',
                'label' => 'YouTube',
                'description' => 'Link channel YouTube',
                'sort_order' => 3,
            ],

            // Footer
            [
                'key' => 'footer_copyright',
                'value' => 'KSP Satrio Mulia Arthomoro. Semua hak dilindungi undang-undang.',
                'type' => 'text',
                'group' => 'footer',
                'label' => 'Copyright Text',
                'description' => 'Teks copyright di footer',
                'sort_order' => 1,
            ],
            [
                'key' => 'footer_legal_text',
                'value' => 'Terdaftar dan diawasi oleh Dinas Koperasi dan UMKM',
                'type' => 'text',
                'group' => 'footer',
                'label' => 'Legal Text',
                'description' => 'Teks legal di footer',
                'sort_order' => 2,
            ],
        ];

        foreach ($settings as $setting) {
            Setting::updateOrCreate(
                ['key' => $setting['key']],
                $setting
            );
        }
    }
}
