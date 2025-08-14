<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $services = [
            [
                'name' => 'Simpanan Sukarela',
                'description' => 'Simpanan yang dapat disetorkan dan diambil kapan saja sesuai kebutuhan anggota dengan bunga yang kompetitif.',
                'short_description' => 'Simpanan fleksibel dengan bunga kompetitif',
                'icon' => 'PiggyBank',
                'image' => '/assets/images/services/simpanan-sukarela.jpg',
                'interest_rate' => 8.50,
                'requirements' => 'KTP, Kartu Keluarga, Setoran awal minimal Rp 50.000',
                'admin_fee' => 5000,
                'category' => 'savings',
                'features' => [
                    'Setoran dan penarikan fleksibel',
                    'Bunga 8.5% per tahun',
                    'Tanpa biaya administrasi bulanan',
                    'Buku tabungan gratis'
                ],
                'color' => '#10B981',
                'sort_order' => 1,
                'is_featured' => true,
                'is_active' => true,
            ],
            [
                'name' => 'Pinjaman Usaha Mikro',
                'description' => 'Pinjaman untuk modal usaha mikro dan kecil dengan proses cepat dan bunga rendah untuk mengembangkan usaha anggota.',
                'short_description' => 'Modal usaha dengan bunga rendah',
                'icon' => 'Briefcase',
                'image' => '/assets/images/services/pinjaman-usaha.jpg',
                'interest_rate' => 12.00,
                'requirements' => 'KTP, Kartu Keluarga, Surat usaha, Jaminan sesuai plafon',
                'admin_fee' => 25000,
                'category' => 'loan',
                'features' => [
                    'Plafon hingga Rp 50 juta',
                    'Bunga 12% per tahun',
                    'Jangka waktu hingga 24 bulan',
                    'Proses persetujuan 3 hari kerja'
                ],
                'color' => '#3B82F6',
                'sort_order' => 2,
                'is_featured' => true,
                'is_active' => true,
            ],
            [
                'name' => 'Kredit Konsumtif',
                'description' => 'Pinjaman untuk kebutuhan konsumtif seperti pendidikan, kesehatan, renovasi rumah dengan syarat mudah.',
                'short_description' => 'Pinjaman untuk kebutuhan pribadi',
                'icon' => 'CreditCard',
                'image' => '/assets/images/services/kredit-konsumtif.jpg',
                'interest_rate' => 15.00,
                'requirements' => 'KTP, Kartu Keluarga, Slip gaji/surat keterangan penghasilan',
                'admin_fee' => 20000,
                'category' => 'loan',
                'features' => [
                    'Plafon hingga Rp 25 juta',
                    'Bunga 15% per tahun',
                    'Jangka waktu hingga 12 bulan',
                    'Tanpa jaminan untuk plafon tertentu'
                ],
                'color' => '#F59E0B',
                'sort_order' => 3,
                'is_featured' => false,
                'is_active' => true,
            ],
            [
                'name' => 'Simpanan Berjangka',
                'description' => 'Simpanan dengan jangka waktu tertentu yang memberikan bunga lebih tinggi untuk investasi jangka panjang.',
                'short_description' => 'Investasi jangka panjang dengan bunga tinggi',
                'icon' => 'TrendingUp',
                'image' => '/assets/images/services/simpanan-berjangka.jpg',
                'interest_rate' => 12.00,
                'requirements' => 'KTP, Kartu Keluarga, Setoran minimal Rp 1.000.000',
                'admin_fee' => 10000,
                'category' => 'savings',
                'features' => [
                    'Bunga hingga 12% per tahun',
                    'Jangka waktu 6, 12, 24 bulan',
                    'Setoran minimal Rp 1 juta',
                    'Dapat dijadikan jaminan pinjaman'
                ],
                'color' => '#8B5CF6',
                'sort_order' => 4,
                'is_featured' => true,
                'is_active' => true,
            ],
        ];

        foreach ($services as $service) {
            Service::updateOrCreate(
                ['name' => $service['name']],
                $service
            );
        }
    }
}
