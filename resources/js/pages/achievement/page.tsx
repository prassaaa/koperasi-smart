import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Header, Footer } from "@/components/layout"
import {
  Users,
  Shield,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Award,
  FileText,
  Star,
  Crown,
  Trophy,
  Medal,
  Heart,
  Lightbulb,
  Building2,
  Globe,
  Calendar,
  Briefcase,
  GraduationCap,
  UserCheck,
  CreditCard,
  Leaf,
} from "lucide-react"

export default function PrestasiPage() {
  const [counters, setCounters] = useState({
    awards: 0,
    certifications: 0,
    years: 0,
    recognition: 0,
  })

  useEffect(() => {
    // Counter animation
    const animateCounters = () => {
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      const targets = { awards: 6, certifications: 3, years: 12, recognition: 8 }

      let step = 0
      const counterInterval = setInterval(() => {
        step++
        const progress = step / steps

        setCounters({
          awards: Math.floor(targets.awards * progress),
          certifications: Math.floor(targets.certifications * progress),
          years: Math.floor(targets.years * progress),
          recognition: Math.floor(targets.recognition * progress),
        })

        if (step >= steps) {
          clearInterval(counterInterval)
          setCounters(targets)
        }
      }, stepDuration)
    }

    setTimeout(animateCounters, 1000)
  }, [])

  const majorAchievements = [
    {
      year: "2022",
      title: "Koperasi Terbaik Kabupaten Banyuwangi",
      category: "Penghargaan Utama",
      issuer: "Dinas Koperasi Kabupaten Banyuwangi",
      description:
        "Penghargaan tertinggi untuk kategori koperasi simpan pinjam dengan pelayanan terbaik dan kontribusi signifikan terhadap pemberdayaan ekonomi masyarakat desa",
      impact: "Pengakuan sebagai koperasi teladan di tingkat kabupaten",
      icon: Crown,
      color: "from-yellow-400 to-orange-500",
      details: [
        "Penilaian berdasarkan kinerja keuangan dan pelayanan anggota",
        "Kompetisi dengan 50+ koperasi se-Kabupaten Banyuwangi",
        "Kriteria: tata kelola, transparansi, dan pemberdayaan anggota",
        "Mendapat apresiasi langsung dari Bupati Banyuwangi",
      ],
    },
    {
      year: "2023",
      title: "Koperasi Berprestasi Provinsi Jawa Timur",
      category: "Prestasi Regional",
      issuer: "Dinas Koperasi Provinsi Jawa Timur",
      description:
        "Masuk dalam 10 besar koperasi berprestasi tingkat provinsi dengan inovasi pelayanan dan pemberdayaan UMKM terbaik",
      impact: "Posisi strategis sebagai koperasi teladan di Jawa Timur",
      icon: TrendingUp,
      color: "from-blue-500 to-blue-700",
      details: [
        "Penilaian berdasarkan inovasi dan dampak sosial",
        "Sistem pelayanan WhatsApp banking yang mudah diakses",
        "Program pembinaan UMKM yang berkelanjutan",
        "Kemitraan dengan berbagai lembaga daerah",
      ],
    },
    {
      year: "2021",
      title: "Sertifikat Kesehatan Koperasi",
      category: "Sertifikasi Resmi",
      issuer: "Dinas Koperasi Kabupaten Banyuwangi",
      description:
        "Sertifikat kesehatan koperasi dengan predikat sehat yang mengakui pengelolaan keuangan yang baik dan transparansi operasional",
      impact: "Jaminan kepercayaan anggota terhadap pengelolaan koperasi",
      icon: Award,
      color: "from-green-500 to-green-700",
      details: [
        "Audit ketat terhadap laporan keuangan dan operasional",
        "Compliance dengan peraturan koperasi nasional",
        "Transparansi penuh dalam pengelolaan dana anggota",
        "Evaluasi berkala setiap tahun",
      ],
    },
    {
      year: "2023",
      title: "Penghargaan Pemberdayaan UMKM",
      category: "Dampak Sosial",
      issuer: "Kamar Dagang dan Industri Banyuwangi",
      description:
        "Pengakuan atas kontribusi terbaik dalam pemberdayaan UMKM lokal melalui program kredit usaha dan pelatihan kewirausahaan",
      impact: "Dampak positif untuk 120+ UMKM yang dibina dan dikembangkan",
      icon: Heart,
      color: "from-red-500 to-pink-600",
      details: [
        "Program kredit UMKM dengan bunga rendah",
        "Pelatihan kewirausahaan rutin setiap bulan",
        "Bantuan pemasaran produk lokal",
        "Kemitraan dengan pasar tradisional dan modern",
      ],
    },
  ]

  const certifications = [
    {
      title: "Sertifikat Badan Hukum",
      category: "Legal Entity",
      issuer: "Dinas Koperasi Kabupaten",
      year: "2012",
      validity: "Permanen",
      description: "Sertifikat pendirian koperasi yang sah",
      icon: Shield,
    },
    {
      title: "Sertifikat Kesehatan Koperasi",
      category: "Health Certificate",
      issuer: "Dinas Koperasi Kabupaten",
      year: "2023",
      validity: "2024",
      description: "Sertifikat kesehatan koperasi predikat sehat",
      icon: Award,
    },
    {
      title: "Izin Usaha Simpan Pinjam",
      category: "Business License",
      issuer: "Dinas Koperasi Kabupaten",
      year: "2012",
      validity: "Permanen",
      description: "Izin resmi untuk kegiatan simpan pinjam",
      icon: CreditCard,
    },
  ]

  const recognitions = [
    {
      year: "2022",
      title: "Koperasi Digital Terdepan",
      issuer: "Forum Koperasi Banyuwangi",
      category: "Technology",
    },
    {
      year: "2024",
      title: "Pelayanan Prima",
      issuer: "Asosiasi Koperasi Jawa Timur",
      category: "Service",
    },
    {
      year: "2023",
      title: "Koperasi Peduli Lingkungan",
      issuer: "Dinas Lingkungan Hidup Banyuwangi",
      category: "Environment",
    },
    {
      year: "2022",
      title: "Pemberdayaan Perempuan",
      issuer: "Dekranasda Banyuwangi",
      category: "Women Empowerment",
    },
    {
      year: "2021",
      title: "Koperasi Tangguh Pandemi",
      issuer: "Dinas Koperasi Provinsi Jatim",
      category: "Crisis Management",
    },
    {
      year: "2023",
      title: "Koperasi Sahabat UMKM",
      issuer: "Dinas Perdagangan Banyuwangi",
      category: "UMKM Support",
    },
  ]

  const milestones = [
    {
      year: "2012",
      title: "Pendirian KSP Smart",
      description: "Didirikan dengan 25 anggota pendiri",
      metric: "25 anggota",
      icon: Building2,
    },
    {
      year: "2015",
      title: "Ekspansi Lokal",
      description: "Melayani 3 desa sekitar",
      metric: "3 desa",
      icon: Globe,
    },
    {
      year: "2018",
      title: "Digitalisasi Sederhana",
      description: "Meluncurkan WhatsApp banking",
      metric: "Digital service",
      icon: Lightbulb,
    },
    {
      year: "2021",
      title: "Sertifikat Sehat Pertama",
      description: "Meraih sertifikat kesehatan koperasi",
      metric: "Certified healthy",
      icon: Award,
    },
    {
      year: "2022",
      title: "Koperasi Terbaik",
      description: "Penghargaan tingkat kabupaten",
      metric: "#1 Kabupaten",
      icon: Crown,
    },
    {
      year: "2024",
      title: "Platform Digital",
      description: "Meluncurkan website resmi",
      metric: "Online presence",
      icon: Shield,
    },
  ]

  const impactMetrics = [
    {
      title: "Anggota Diberdayakan",
      value: "485+",
      description: "Anggota aktif yang merasakan manfaat langsung",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "UMKM Berkembang",
      value: "120+",
      description: "UMKM yang mendapat bantuan modal dan pembinaan",
      icon: TrendingUp,
      color: "text-green-600",
    },
    {
      title: "Keluarga Terbantu",
      value: "50+",
      description: "Keluarga yang mendapat bantuan sosial dan pendidikan",
      icon: Heart,
      color: "text-purple-600",
    },
    {
      title: "Lapangan Kerja",
      value: "200+",
      description: "Lapangan kerja tercipta melalui program pemberdayaan",
      icon: Briefcase,
      color: "text-orange-600",
    },
  ]

  const stats = [
    {
      number: counters.awards,
      suffix: "+",
      label: "Penghargaan",
      description: "Kabupaten & Provinsi",
      icon: Trophy,
    },
    {
      number: counters.certifications,
      suffix: "+",
      label: "Sertifikasi",
      description: "Resmi pemerintah",
      icon: Medal,
    },
    {
      number: counters.years,
      suffix: "+",
      label: "Tahun Berprestasi",
      description: "Track record konsisten",
      icon: Calendar,
    },
    {
      number: counters.recognition,
      suffix: "+",
      label: "Pengakuan",
      description: "Media & komunitas",
      icon: Star,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Badge className="bg-yellow-100 text-yellow-800">
                <Crown className="w-4 h-4 mr-1" />
                Koperasi Terbaik 2022
              </Badge>
              <Badge className="bg-blue-100 text-blue-800">
                <Award className="w-4 h-4 mr-1" />
                6+ Penghargaan
              </Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              Prestasi &
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Penghargaan
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              12+ tahun dedikasi menghasilkan pengakuan dari pemerintah daerah dan provinsi. Komitmen terhadap pelayanan
              terbaik, transparansi, dan pemberdayaan masyarakat desa.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Major Achievements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Prestasi Utama</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Pencapaian Terbesar Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Penghargaan dan pengakuan yang membuktikan komitmen kami terhadap pelayanan terbaik dan pemberdayaan
              masyarakat
            </p>
          </div>

          <div className="space-y-12">
            {majorAchievements.map((achievement, index) => (
              <Card key={index} className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                <CardContent className="p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-1">
                      <div className="flex items-center space-x-4 mb-6">
                        <div
                          className={`w-20 h-20 bg-gradient-to-br ${achievement.color} rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform`}
                        >
                          <achievement.icon className="w-10 h-10 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-orange-600 mb-1">{achievement.year}</div>
                          <div className="text-xs text-blue-600 font-medium">{achievement.category}</div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-blue-900 mb-3">{achievement.title}</h3>
                      <div className="text-blue-600 font-semibold mb-4">{achievement.issuer}</div>
                      <div className="bg-blue-50 p-4 rounded-xl">
                        <div className="text-sm font-semibold text-blue-800 mb-1">Dampak</div>
                        <div className="text-sm text-blue-600">{achievement.impact}</div>
                      </div>
                    </div>

                    <div className="lg:col-span-2">
                      <p className="text-lg text-gray-600 leading-relaxed mb-6">{achievement.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {achievement.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                            <span className="text-gray-700 text-sm">{detail}</span>
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

      {/* Certifications */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Sertifikasi</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Legalitas Resmi</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sertifikasi dari pemerintah yang membuktikan komitmen kami terhadap tata kelola yang baik dan transparansi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <cert.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{cert.title}</h3>
                  <div className="text-blue-600 font-medium text-sm mb-3">{cert.category}</div>
                  <div className="text-gray-600 text-sm mb-4">{cert.description}</div>
                  <div className="space-y-2 text-xs text-gray-500">
                    <div>Diterbitkan: {cert.year}</div>
                    <div>Berlaku: {cert.validity}</div>
                    <div className="font-semibold text-blue-600">{cert.issuer}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Perjalanan Prestasi</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Milestone Bersejarah</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pencapaian penting dalam perjalanan 12+ tahun membangun koperasi yang terpercaya dan bermanfaat
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-blue-800"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                      <CardContent className="p-8">
                        <div
                          className={`flex items-center space-x-4 mb-4 ${index % 2 === 0 ? "flex-row-reverse space-x-reverse" : ""}`}
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <milestone.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-blue-600">{milestone.year}</div>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-blue-900 mb-3">{milestone.title}</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">{milestone.description}</p>
                        <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {milestone.metric}
                        </div>
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

      {/* Other Recognitions */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Pengakuan Lainnya</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Apresiasi Komunitas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai pengakuan dari institusi daerah yang menunjukkan konsistensi kinerja dan kontribusi kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recognitions.map((recognition, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-sm font-bold text-orange-600">{recognition.year}</div>
                    <Badge className="bg-blue-100 text-blue-800 text-xs">{recognition.category}</Badge>
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{recognition.title}</h3>
                  <div className="text-blue-600 font-medium text-sm">{recognition.issuer}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Dampak Sosial</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Kontribusi Nyata</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prestasi yang bermakna adalah dampak positif yang dirasakan langsung oleh masyarakat desa dan ekonomi
              lokal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <metric.icon className={`w-8 h-8 ${metric.color}`} />
                  </div>
                  <div className={`text-3xl font-bold mb-2 ${metric.color}`}>{metric.value}</div>
                  <h3 className="text-lg font-bold text-blue-900 mb-3">{metric.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Indicators */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Target & Pencapaian</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Roadmap Menuju 2030</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Komitmen berkelanjutan untuk mencapai target dan memberikan dampak yang lebih besar bagi masyarakat desa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-8">Target Strategis 2030</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Anggota Aktif</span>
                      <span className="font-semibold">485 / 1,000</span>
                    </div>
                    <Progress value={48.5} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Lokasi Layanan</span>
                      <span className="font-semibold">3 / 10</span>
                    </div>
                    <Progress value={30} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Aset Kelolaan</span>
                      <span className="font-semibold">8M / 25M</span>
                    </div>
                    <Progress value={32} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">UMKM Diberdayakan</span>
                      <span className="font-semibold">120 / 300</span>
                    </div>
                    <Progress value={40} className="h-3" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-8">Inisiatif Berkelanjutan</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Leaf className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 mb-1">Program Lingkungan</h4>
                      <p className="text-gray-600 text-sm">Kredit untuk usaha ramah lingkungan</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 mb-1">Program Edukasi</h4>
                      <p className="text-gray-600 text-sm">Pelatihan keuangan untuk warga desa</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <UserCheck className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 mb-1">Inklusi Keuangan</h4>
                      <p className="text-gray-600 text-sm">Akses keuangan untuk semua lapisan</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 mb-1">Inovasi Pelayanan</h4>
                      <p className="text-gray-600 text-sm">Teknologi sederhana untuk kemudahan</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Bergabunglah dengan Koperasi Berprestasi</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Jadilah bagian dari koperasi yang telah terbukti memberikan layanan terbaik dan berdampak positif bagi
            masyarakat desa. Raih prestasi bersama kami.
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
              Info Lengkap Prestasi
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
