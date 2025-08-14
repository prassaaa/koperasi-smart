<?php

namespace Database\Seeders;

use App\Models\Statistic;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StatisticSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $statistics = [
            [
                'key' => 'members',
                'label' => 'Anggota Aktif',
                'value' => '1250',
                'suffix' => '+',
                'icon' => 'Users',
                'color' => '#3B82F6',
                'description' => 'Total anggota aktif koperasi',
                'show_counter_animation' => true,
                'animation_duration' => 2000,
                'sort_order' => 1,
                'is_active' => true,
            ],
            [
                'key' => 'years',
                'label' => 'Tahun Berpengalaman',
                'value' => '15',
                'suffix' => '+',
                'icon' => 'Calendar',
                'color' => '#10B981',
                'description' => 'Tahun melayani masyarakat',
                'show_counter_animation' => true,
                'animation_duration' => 2000,
                'sort_order' => 2,
                'is_active' => true,
            ],
            [
                'key' => 'satisfaction',
                'label' => 'Tingkat Kepuasan',
                'value' => '98',
                'suffix' => '%',
                'icon' => 'Star',
                'color' => '#F59E0B',
                'description' => 'Tingkat kepuasan anggota',
                'show_counter_animation' => true,
                'animation_duration' => 2000,
                'sort_order' => 3,
                'is_active' => true,
            ],
            [
                'key' => 'assets',
                'label' => 'Total Aset',
                'value' => '25',
                'suffix' => 'M',
                'icon' => 'Banknote',
                'color' => '#8B5CF6',
                'description' => 'Total aset koperasi dalam miliar rupiah',
                'show_counter_animation' => true,
                'animation_duration' => 2000,
                'sort_order' => 4,
                'is_active' => true,
            ],
            [
                'key' => 'branches',
                'label' => 'Cabang',
                'value' => '5',
                'suffix' => '',
                'icon' => 'Building2',
                'color' => '#EF4444',
                'description' => 'Jumlah kantor cabang',
                'show_counter_animation' => true,
                'animation_duration' => 2000,
                'sort_order' => 5,
                'is_active' => true,
            ],
            [
                'key' => 'employees',
                'label' => 'Karyawan',
                'value' => '45',
                'suffix' => '+',
                'icon' => 'UserCheck',
                'color' => '#06B6D4',
                'description' => 'Total karyawan profesional',
                'show_counter_animation' => true,
                'animation_duration' => 2000,
                'sort_order' => 6,
                'is_active' => true,
            ],
        ];

        foreach ($statistics as $statistic) {
            Statistic::updateOrCreate(
                ['key' => $statistic['key']],
                $statistic
            );
        }
    }
}
