import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header, Footer } from "@/components/layout"
import {
  Users,
  Shield,
  Lightbulb,
  Leaf,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Award,
  Building2,
  FileText,
  Target,
  Handshake,
  Heart,
  Zap,
  Calendar,
  Briefcase,
  GraduationCap,
  Star,
  History,
  UserCheck,
  Banknote,
  Rocket,
  Crown,
} from "lucide-react"

interface Statistic {
  id: number;
  key: string;
  label: string;
  value: string;
  suffix?: string;
  icon: string;
  color: string;
  description?: string;
  show_counter_animation: boolean;
  animation_duration: number;
  is_active: boolean;
}

interface Props {
  statistics: Statistic[];
}

export default function TentangPage({ statistics = [] }: Props) {
  const [counters, setCounters] = useState({
    members: 0,
    years: 0,
    satisfaction: 0,
    assets: 0,
    branches: 0,
    employees: 0,
  })

  useEffect(() => {

    // Counter animation
    const animateCounters = () => {
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      const targets = {
        members: parseInt(statistics.find((s: Statistic) => s.key === 'members')?.value || '1250'),
        years: parseInt(statistics.find((s: Statistic) => s.key === 'years')?.value || '15'),
        satisfaction: parseInt(statistics.find((s: Statistic) => s.key === 'satisfaction')?.value || '98'),
        assets: parseInt(statistics.find((s: Statistic) => s.key === 'assets')?.value || '25'),
        branches: parseInt(statistics.find((s: Statistic) => s.key === 'branches')?.value || '5'),
        employees: parseInt(statistics.find((s: Statistic) => s.key === 'employees')?.value || '45'),
      }

      let step = 0
      const counterInterval = setInterval(() => {
        step++
        const progress = step / steps

        setCounters({
          members: Math.floor(targets.members * progress),
          years: Math.floor(targets.years * progress),
          satisfaction: Math.floor(targets.satisfaction * progress),
          assets: Math.floor(targets.assets * progress),
          branches: Math.floor(targets.branches * progress),
          employees: Math.floor(targets.employees * progress),
        })

        if (step >= steps) {
          clearInterval(counterInterval)
          setCounters(targets)
        }
      }, stepDuration)
    }

    setTimeout(animateCounters, 1000)
  }, [statistics])

  const timeline = [
    {
      year: "2012",
      title: "Pendirian KSP Smart",
      description: "Didirikan dengan 25 anggota pendiri dari warga Desa Arthomoro dengan modal awal Rp 50 juta",
      icon: Rocket,
    },
    {
      year: "2015",
      title: "Ekspansi Lokal",
      description: "Membuka layanan untuk 3 desa sekitar dengan 150+ anggota aktif",
      icon: Building2,
    },
    {
      year: "2018",
      title: "Digitalisasi Sederhana",
      description: "Meluncurkan sistem pencatatan digital dan WhatsApp banking untuk kemudahan anggota",
      icon: Lightbulb,
    },
    {
      year: "2020",
      title: "Adaptasi Pandemi",
      description: "Mempertahankan layanan dengan protokol kesehatan ketat dan bantuan UMKM lokal",
      icon: Shield,
    },
    {
      year: "2022",
      title: "Penghargaan Daerah",
      description: "Meraih penghargaan Koperasi Terbaik tingkat Kabupaten Banyuwangi",
      icon: Crown,
    },
    {
      year: "2024",
      title: "Platform Digital",
      description: "Meluncurkan website dan sistem online untuk melayani anggota lebih baik",
      icon: Award,
    },
  ]

  const management = [
    {
      name: "Bapak Suyono, S.E.",
      position: "Ketua Pengurus",
      experience: "15+ tahun",
      education: "Sarjana Ekonomi UNEJ",
      expertise: "Manajemen Koperasi & Pemberdayaan Masyarakat",
      image: "/assets/images/indonesian-senior-executive.png",
    },
    {
      name: "Ibu Siti Aminah, S.Pd.",
      position: "Sekretaris",
      experience: "10+ tahun",
      education: "Sarjana Pendidikan",
      expertise: "Administrasi & Pembukuan Koperasi",
      image: "/assets/images/indonesian-female-executive.png",
    },
    {
      name: "Bapak Ahmad Fauzi",
      position: "Bendahara",
      experience: "12+ tahun",
      education: "SMK Akuntansi",
      expertise: "Pengelolaan Keuangan & Simpan Pinjam",
      image: "/assets/images/indonesian-finance-director.png",
    },
    {
      name: "Ibu Dwi Rahayu, A.Md.",
      position: "Manager Operasional",
      experience: "8+ tahun",
      education: "Diploma Manajemen",
      expertise: "Operasional Harian & Pelayanan Anggota",
      image: "/assets/images/indonesian-operations-director.png",
    },
  ]

  const values = [
    {
      icon: Shield,
      title: "Kepercayaan & Transparansi",
      description:
        "Membangun kepercayaan melalui transparansi dalam pengelolaan keuangan, laporan rutin kepada anggota, dan keterbukaan informasi.",
      stats: "Laporan bulanan rutin",
      details: [
        "Rapat anggota tahunan (RAT) terbuka",
        "Laporan keuangan bulanan",
        "Buku kas harian yang dapat diakses anggota",
        "Audit internal setiap 6 bulan",
      ],
    },
    {
      icon: Users,
      title: "Gotong Royong & Kekeluargaan",
      description:
        "Menjalankan prinsip gotong royong dalam setiap kegiatan, membangun rasa kekeluargaan antar anggota, dan saling membantu dalam kesulitan.",
      stats: `${statistics.find((s: Statistic) => s.key === 'members')?.value || '1250'} anggota aktif`,
      details: [
        "Arisan bulanan untuk mempererat silaturahmi",
        "Bantuan sosial untuk anggota yang kesulitan",
        "Kegiatan bakti sosial rutin",
        "Program simpan pinjam tanpa bunga untuk darurat",
      ],
    },
    {
      icon: Lightbulb,
      title: "Inovasi Sederhana",
      description:
        "Mengadopsi teknologi sederhana yang mudah dipahami anggota, seperti WhatsApp banking dan pencatatan digital untuk kemudahan akses.",
      stats: "Layanan 6 hari seminggu",
      details: [
        "WhatsApp banking untuk info saldo",
        "Sistem pencatatan digital",
        "Website informasi koperasi",
        "Pelatihan digital untuk anggota",
      ],
    },
    {
      icon: Leaf,
      title: "Pemberdayaan Ekonomi Lokal",
      description:
        "Fokus pada pemberdayaan ekonomi warga desa melalui kredit UMKM, pelatihan usaha, dan dukungan pemasaran produk lokal.",
      stats: "120+ UMKM dibina",
      details: [
        "Kredit UMKM dengan bunga rendah",
        "Pelatihan kewirausahaan rutin",
        "Bantuan pemasaran produk lokal",
        "Kemitraan dengan pasar tradisional",
      ],
    },
  ]

  const achievements = [
    {
      year: "2022",
      title: "Koperasi Terbaik Kabupaten",
      issuer: "Dinas Koperasi Kabupaten Banyuwangi",
      description: "Penghargaan koperasi terbaik kategori simpan pinjam tingkat kabupaten",
      icon: Crown,
    },
    {
      year: "2023",
      title: "Koperasi Berprestasi",
      issuer: "Dinas Koperasi Provinsi Jawa Timur",
      description: "Masuk dalam 10 besar koperasi berprestasi tingkat provinsi",
      icon: TrendingUp,
    },
    {
      year: "2021",
      title: "Sertifikat Sehat",
      issuer: "Dinas Koperasi Kabupaten",
      description: "Sertifikat kesehatan koperasi dengan predikat sehat selama 3 tahun berturut-turut",
      icon: Award,
    },
    {
      year: "2023",
      title: "Penghargaan Pemberdayaan UMKM",
      issuer: "Kamar Dagang Banyuwangi",
      description: "Pengakuan atas kontribusi dalam pemberdayaan UMKM lokal",
      icon: Heart,
    },
    {
      year: "2022",
      title: "Koperasi Digital Terdepan",
      issuer: "Forum Koperasi Banyuwangi",
      description: "Penghargaan koperasi dengan inovasi digital terbaik di tingkat kabupaten",
      icon: Lightbulb,
    },
    {
      year: "2024",
      title: "Pelayanan Prima",
      issuer: "Asosiasi Koperasi Jawa Timur",
      description: "Penghargaan pelayanan prima dengan tingkat kepuasan anggota 96%",
      icon: UserCheck,
    },
  ]

  // Create stats array from database statistics
  const stats = [
    {
      number: counters.members,
      suffix: statistics.find((s: Statistic) => s.key === 'members')?.suffix || '+',
      label: statistics.find((s: Statistic) => s.key === 'members')?.label || 'Anggota Aktif',
      description: statistics.find((s: Statistic) => s.key === 'members')?.description || 'Total anggota aktif koperasi',
      icon: Users,
    },
    {
      number: counters.years,
      suffix: statistics.find((s: Statistic) => s.key === 'years')?.suffix || '+',
      label: statistics.find((s: Statistic) => s.key === 'years')?.label || 'Tahun Berpengalaman',
      description: statistics.find((s: Statistic) => s.key === 'years')?.description || 'Tahun melayani masyarakat',
      icon: Calendar,
    },
    {
      number: counters.satisfaction,
      suffix: statistics.find((s: Statistic) => s.key === 'satisfaction')?.suffix || '%',
      label: statistics.find((s: Statistic) => s.key === 'satisfaction')?.label || 'Tingkat Kepuasan',
      description: statistics.find((s: Statistic) => s.key === 'satisfaction')?.description || 'Tingkat kepuasan anggota',
      icon: Star,
    },
    {
      number: counters.assets,
      suffix: statistics.find((s: Statistic) => s.key === 'assets')?.suffix || 'M',
      label: statistics.find((s: Statistic) => s.key === 'assets')?.label || 'Total Aset',
      description: statistics.find((s: Statistic) => s.key === 'assets')?.description || 'Total aset koperasi',
      icon: Banknote,
    },
    {
      number: counters.branches,
      suffix: statistics.find((s: Statistic) => s.key === 'branches')?.suffix || '',
      label: statistics.find((s: Statistic) => s.key === 'branches')?.label || 'Cabang',
      description: statistics.find((s: Statistic) => s.key === 'branches')?.description || 'Jumlah kantor cabang',
      icon: Building2,
    },
    {
      number: counters.employees,
      suffix: statistics.find((s: Statistic) => s.key === 'employees')?.suffix || '+',
      label: statistics.find((s: Statistic) => s.key === 'employees')?.label || 'Karyawan',
      description: statistics.find((s: Statistic) => s.key === 'employees')?.description || 'Total karyawan profesional',
      icon: Briefcase,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Badge className="bg-blue-100 text-blue-800">
                <History className="w-4 h-4 mr-1" />
                Sejak 2012
              </Badge>
              <Badge className="bg-green-100 text-green-800">
                <Shield className="w-4 h-4 mr-1" />
                Terdaftar Resmi
              </Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              Tentang
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                KSP Smart
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Perjalanan {statistics.find((s: Statistic) => s.key === 'years')?.value || '15'}+ tahun membangun kepercayaan sebagai koperasi simpan pinjam terdepan di Desa Arthomoro. Dari
              25 anggota pendiri hingga {statistics.find((s: Statistic) => s.key === 'members')?.value || '1250'}+ anggota aktif yang tersebar di {statistics.find((s: Statistic) => s.key === 'branches')?.value || '5'} lokasi layanan.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">
                  {stat.number.toLocaleString()}
                  {stat.suffix}
                </div>
                <div className="text-xl font-semibold text-blue-100 mb-1">{stat.label}</div>
                <div className="text-sm text-blue-200">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Visi & Misi</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Fondasi Perjalanan Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Komitmen untuk memberdayakan ekonomi masyarakat desa melalui prinsip koperasi yang kuat
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
              <CardContent className="p-12">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Target className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-blue-900 mb-6">Visi Kami</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Menjadi koperasi simpan pinjam terdepan di wilayah Banyuwangi yang memberdayakan ekonomi masyarakat
                  desa melalui pelayanan yang mudah, terpercaya, dan bermanfaat bagi kesejahteraan anggota.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Koperasi terpercaya di Banyuwangi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Melayani 1000+ anggota pada 2030</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Ekspansi ke 10 desa sekitar</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
              <CardContent className="p-12">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Handshake className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-blue-900 mb-6">Misi Kami</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Memberikan layanan simpan pinjam yang mudah diakses, bunga yang wajar, dan pembinaan UMKM untuk
                  meningkatkan kesejahteraan ekonomi masyarakat desa.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Layanan simpan pinjam mudah dan terjangkau</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Edukasi keuangan untuk warga desa</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Pemberdayaan UMKM dan ekonomi lokal</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Nilai-Nilai Kami</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">DNA Perusahaan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empat pilar fundamental yang menjadi panduan dalam setiap keputusan dan tindakan kami
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <value.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-blue-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{value.description}</p>

                      <div className="flex items-center space-x-2 mb-4">
                        <Zap className="w-4 h-4 text-orange-500" />
                        <span className="text-sm font-semibold text-orange-600">{value.stats}</span>
                      </div>

                      <div className="space-y-2">
                        {value.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Perjalanan Kami</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">18+ Tahun Inovasi</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestone penting dalam perjalanan transformasi dari koperasi tradisional menjadi digital leader
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-blue-800"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                      <CardContent className="p-8">
                        <div
                          className={`flex items-center space-x-4 mb-4 ${index % 2 === 0 ? "flex-row-reverse space-x-reverse" : ""}`}
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <item.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-blue-600">{item.year}</div>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Tim Manajemen</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Pemimpin Berpengalaman</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dipimpin oleh para profesional berpengalaman dengan track record terbukti di industri keuangan dan
              koperasi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {management.map((person, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 text-center group"
              >
                <CardContent className="p-8">
                  <img
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                    className="w-24 h-24 rounded-full mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform"
                  />
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{person.name}</h3>
                  <div className="text-blue-600 font-semibold mb-3">{person.position}</div>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center space-x-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{person.experience}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <GraduationCap className="w-4 h-4" />
                      <span>{person.education}</span>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <div className="text-xs font-semibold text-blue-800 mb-1">Keahlian</div>
                    <div className="text-xs text-blue-600">{person.expertise}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Prestasi & Penghargaan</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Pengakuan Industri</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai penghargaan dan sertifikasi yang membuktikan komitmen kami terhadap excellence dan inovasi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-orange-600 mb-2">{achievement.year}</div>
                      <h3 className="text-lg font-bold text-blue-900 mb-2">{achievement.title}</h3>
                      <div className="text-sm font-semibold text-blue-600 mb-3">{achievement.issuer}</div>
                      <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bergabunglah dengan Keluarga Besar KSP Smart
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Jadilah bagian dari koperasi yang peduli dengan kesejahteraan warga desa. Konsultasi gratis dengan pengurus
            kami di kantor atau melalui WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg shadow-xl group">
              <Users className="w-5 h-5 mr-2" />
              Daftar Anggota Baru
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg group bg-transparent"
            >
              <FileText className="w-5 h-5 mr-2" />
              Info Lengkap Koperasi
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
