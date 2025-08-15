# 🏛️ KSP Smart - Sistem Manajemen Koperasi

Website resmi dan sistem manajemen untuk Koperasi Simpan Pinjam (KSP) Smart yang melayani kebutuhan finansial masyarakat desa dengan teknologi modern.

## ✨ Fitur Utama

### 🌐 Website Publik
- **Landing Page** yang responsif dan modern
- **Informasi Layanan** keuangan lengkap
- **Halaman Tentang** dengan statistik real-time
- **Formulir Keanggotaan** online
- **Halaman Kontak** dengan informasi lengkap
- **Prestasi & Pencapaian** koperasi

### 🎛️ Dashboard CMS
- **Manajemen Konten** yang mudah digunakan
- **Hero Section** editor dengan preview
- **Statistik** yang dapat dikustomisasi
- **Layanan** management dengan fitur lengkap
- **Pengaturan** website terpusat
- **Interface** yang user-friendly

## 🛠️ Teknologi

### Backend
- **Laravel 11** - PHP Framework
- **Inertia.js** - Modern monolith
- **MySQL** - Database
- **Authentication** - Laravel Breeze

### Frontend
- **React 18** - UI Library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Shadcn/ui** - Component library
- **Lucide React** - Icons
- **Vite** - Build tool

## 🚀 Instalasi

### Prerequisites
- PHP 8.2+
- Node.js 18+
- Composer
- MySQL

### Setup Project

1. **Clone repository**
```bash
git clone https://github.com/prassaaa/koperasi-smart.git
cd koperasi-smart
```

2. **Install dependencies**
```bash
# Backend dependencies
composer install

# Frontend dependencies
npm install
```

3. **Environment setup**
```bash
# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate
```

4. **Database setup**
```bash
# Configure database in .env file
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=koperasi_smart
DB_USERNAME=root
DB_PASSWORD=

# Run migrations and seeders
php artisan migrate --seed
```

5. **Build assets**
```bash
# Development
npm run dev

# Production
npm run build
```

6. **Start development server**
```bash
php artisan serve
```

## 📁 Struktur Project

```
koperasi-smart/
├── app/
│   ├── Http/Controllers/Dashboard/    # CMS Controllers
│   ├── Models/                        # Eloquent Models
│   └── ...
├── database/
│   ├── migrations/                    # Database migrations
│   └── seeders/                       # Sample data
├── resources/
│   ├── js/
│   │   ├── components/               # React components
│   │   ├── pages/                    # Page components
│   │   └── layouts/                  # Layout components
│   └── css/                          # Stylesheets
├── routes/
│   ├── web.php                       # Web routes
│   └── auth.php                      # Auth routes
└── public/                           # Static assets
```

## 🎨 Fitur CMS

### Dashboard Management
- **Settings** - Konfigurasi website
- **Hero Sections** - Banner utama
- **Statistics** - Data statistik
- **Services** - Layanan koperasi

### Content Features
- ✅ CRUD operations
- ✅ Real-time preview
- ✅ Batch operations
- ✅ Toggle active/featured
- ✅ Drag & drop sorting
- ✅ Image management

## 🌟 Halaman Website

1. **Home** (`/`) - Landing page dengan hero, statistik, layanan
2. **Tentang** (`/tentang`) - Informasi koperasi dan pencapaian
3. **Layanan** (`/layanan`) - Detail layanan keuangan
4. **Prestasi** (`/prestasi`) - Pencapaian dan penghargaan
5. **Keanggotaan** (`/keanggotaan`) - Formulir pendaftaran
6. **Kontak** (`/kontak`) - Informasi kontak dan lokasi

## 🔐 Authentication

- **Login** - `/login`
- **Register** - `/register`
- **Dashboard** - `/dashboard` (protected)

## 📱 Responsive Design

Website dioptimalkan untuk semua perangkat:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1280px+)

## 🎯 Target Pengguna

- **Masyarakat Desa** - Akses informasi dan layanan
- **Calon Anggota** - Pendaftaran online
- **Pengurus Koperasi** - Manajemen konten
- **Stakeholder** - Informasi transparansi

## 🤝 Kontribusi

1. Fork repository
2. Buat feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

Project ini menggunakan [MIT License](LICENSE).

## 📞 Kontak

**KSP Smart**
- 📧 Email: info@kspsmart.co.id
- 📱 WhatsApp: +62812-3456-7890
- 📍 Alamat: Jl. Raya Desa Satrio Mulia No. 123, Kec. Kalibaru, Kab. Banyuwangi

---

⭐ **Star repository ini jika bermanfaat!**
