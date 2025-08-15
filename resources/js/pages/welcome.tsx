import { useState, useEffect } from "react"
import { usePage } from '@inertiajs/react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Header, Footer } from "@/components/layout"
import { useTypewriter } from "@/hooks/use-typewriter"
import {
  Users,
  Shield,
  Lightbulb,
  Leaf,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Award,
  Building2,
  CreditCard,
  PiggyBank,
  Calculator,
  Phone,
  Mail,
  MapPin,
  Clock,
  FileText,
  BarChart3,
  Target,
  Handshake,
  Heart,
  Zap,
  ChevronRight,
  MessageCircle,
  Video,
  Camera,
  Share2,
} from "lucide-react"

interface HeroSection {
  id: number;
  title: string;
  subtitle?: string;
  cta_text?: string;
  cta_link?: string;
  background_image?: string;
  background_type: string;
  text_color: string;
  overlay_opacity: string;
  badges?: Array<{
    icon: string;
    text: string;
    color: string;
  }>;
  is_active: boolean;
}

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

interface Service {
  id: number;
  name: string;
  description: string;
  short_description?: string;
  icon: string;
  image?: string;
  interest_rate?: number;
  requirements?: string;
  admin_fee?: number;
  category: string;
  features?: string[];
  color: string;
  sort_order: number;
  is_featured: boolean;
  is_active: boolean;
}

interface CmsSettings {
  general?: Record<string, string>;
  contact?: Record<string, string>;
  social?: Record<string, string>;
  footer?: Record<string, string>;
}

interface PageProps {
  cmsSettings?: CmsSettings;
  [key: string]: unknown;
}

interface Props {
  heroSection: HeroSection;
  statistics: Statistic[];
  services: Service[];
}

export default function KoperasiLandingPage({ heroSection, statistics, services }: Props) {
  // Get CMS settings from shared data
  const page = usePage();
  const cmsSettings = (page.props as PageProps).cmsSettings || {};
  const [isVisible, setIsVisible] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [activeService, setActiveService] = useState(0)

  // Typewriter effect for hero title with loop
  const { displayText: typewriterText, isDeleting } = useTypewriter({
    text: heroSection?.title || "Koperasi Desa Terpercaya",
    speed: 60,
    delay: 800,
    loop: true,
    deleteSpeed: 30,
    deleteDelay: 1500,
  })
  const [counters, setCounters] = useState({
    members: 0,
    years: 0,
    satisfaction: 0,
    assets: 0,
  })

  useEffect(() => {
    setIsVisible(true)

    // Testimonial rotation
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 6)
    }, 5000)

    // Service rotation
    const serviceInterval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 4)
    }, 4000)



    // Counter animation
    const animateCounters = () => {
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      // Get targets from database statistics or use defaults
      const targets = {
        members: parseInt(statistics.find((s: Statistic) => s.key === 'members')?.value || '1250'),
        years: parseInt(statistics.find((s: Statistic) => s.key === 'years')?.value || '15'),
        satisfaction: parseInt(statistics.find((s: Statistic) => s.key === 'satisfaction')?.value || '98'),
        assets: parseInt(statistics.find((s: Statistic) => s.key === 'assets')?.value || '25'),
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
        })

        if (step >= steps) {
          clearInterval(counterInterval)
          setCounters(targets)
        }
      }, stepDuration)
    }

    // Start counter animation after component mounts
    setTimeout(animateCounters, 1000)

    return () => {
      clearInterval(testimonialInterval)
      clearInterval(serviceInterval)
    }
  }, [statistics])

  const testimonials = [
    {
      name: "Ibu Sari Wulandari",
      role: "Pemilik Warung Kelontong",
      company: "Warung Sari Rejeki",
      content:
        "Berkat pinjaman dari KSP Smart, warung saya bisa berkembang pesat. Prosesnya mudah dan bunganya terjangkau untuk usaha kecil seperti saya.",
      rating: 5,
      image: "/assets/images/placeholder-hc11n.png",
    },
    {
      name: "Pak Budi Santoso",
      role: "Petani & Peternak",
      company: "Kelompok Tani Makmur",
      content:
        "KSP Smart membantu saya membeli bibit unggul dan pakan ternak. Sekarang hasil panen meningkat 40% dan ternak saya lebih sehat.",
      rating: 5,
      image: "/assets/images/indonesian-businessman.png",
    },
    {
      name: "Ibu Maya Sinta",
      role: "Pengrajin Batik",
      company: "Batik Desa Indah",
      content:
        "Dengan modal dari KSP Smart, usaha batik saya bisa memproduksi lebih banyak dan menjual online. Omzet naik 3 kali lipat!",
      rating: 5,
      image: "/assets/images/young-indonesian-entrepreneur.png",
    },
    {
      name: "Pak Ahmad Fauzi",
      role: "Ketua RT 05",
      company: "Desa Arthomoro",
      content:
        "KSP Smart sangat membantu warga desa kami. Pelayanannya ramah dan prosedurnya tidak ribet. Cocok untuk masyarakat desa.",
      rating: 5,
      image: "/assets/images/senior-indonesian-cooperative-leader.png",
    },
    {
      name: "Ibu Rina Kartika",
      role: "Guru SD",
      company: "SD Negeri Arthomoro",
      content:
        "Simpanan di KSP Smart memberikan bunga yang lebih baik dari bank. Saya merasa aman karena dikelola oleh orang-orang desa sendiri.",
      rating: 5,
      image: "/assets/images/indonesian-woman-cfo.png",
    },
    {
      name: "Pak Joko Widodo",
      role: "Tukang Ojek & Bengkel",
      company: "Bengkel Joko Motor",
      content:
        "Kredit motor dari KSP Smart membantu saya beli motor baru untuk ojek. Cicilan ringan dan bisa disesuaikan dengan penghasilan harian.",
      rating: 5,
      image: "/assets/images/placeholder-vmqrb.png",
    },
  ]

  // Map services from database to component format
  const mappedServices = services.map((service: Service) => ({
    icon: service.icon === 'PiggyBank' ? PiggyBank :
          service.icon === 'CreditCard' ? CreditCard :
          service.icon === 'Building2' ? Building2 :
          service.icon === 'Calculator' ? Calculator :
          service.icon === 'Briefcase' ? Building2 :
          service.icon === 'TrendingUp' ? TrendingUp : PiggyBank,
    title: service.name,
    description: service.short_description || service.description,
    features: service.features || [],
    color: service.color ? `bg-[${service.color}]` : "bg-blue-500",
  }))

  const achievements = [
    {
      icon: Award,
      title: "Koperasi Berprestasi Tingkat Kabupaten",
      description: "Penghargaan dari Dinas Koperasi dan UMKM Kabupaten",
      year: "2023",
    },
    {
      icon: Shield,
      title: "Sertifikat Sehat Koperasi",
      description: "Penilaian kesehatan koperasi kategori sehat",
      year: "2023",
    },
    {
      icon: TrendingUp,
      title: "Pertumbuhan Aset Terbaik",
      description: "Koperasi dengan pertumbuhan aset tertinggi se-kecamatan",
      year: "2022",
    },
    {
      icon: Heart,
      title: "Koperasi Peduli Masyarakat",
      description: "Penghargaan program CSR dan pemberdayaan masyarakat",
      year: "2023",
    },
  ]

  const values = [
    {
      icon: Shield,
      title: "Kepercayaan & Transparansi",
      description:
        "Laporan keuangan terbuka untuk semua anggota, pengelolaan yang jujur dan akuntabel sesuai prinsip koperasi",
      stats: "Laporan bulanan rutin",
    },
    {
      icon: Users,
      title: "Gotong Royong & Kekeluargaan",
      description: "Semangat gotong royong dalam membangun ekonomi desa bersama-sama untuk kesejahteraan bersama",
      stats: `${statistics.find((s: Statistic) => s.key === 'members')?.value || '1250'} anggota aktif`,
    },
    {
      icon: Lightbulb,
      title: "Pelayanan Sederhana & Mudah",
      description: "Proses yang tidak ribet, pelayanan ramah, dan mudah dipahami oleh masyarakat desa",
      stats: "Pelayanan 6 hari seminggu",
    },
    {
      icon: Leaf,
      title: "Berkelanjutan & Peduli Lingkungan",
      description: "Mendukung usaha ramah lingkungan dan pembangunan desa yang berkelanjutan",
      stats: "5+ program lingkungan",
    },
  ]

  // Create stats array from database statistics
  const stats = [
    {
      number: counters.members,
      suffix: statistics.find((s: Statistic) => s.key === 'members')?.suffix || '+',
      label: statistics.find((s: Statistic) => s.key === 'members')?.label || 'Anggota Aktif',
      description: statistics.find((s: Statistic) => s.key === 'members')?.description || 'Total anggota aktif koperasi',
    },
    {
      number: counters.years,
      suffix: statistics.find((s: Statistic) => s.key === 'years')?.suffix || '+',
      label: statistics.find((s: Statistic) => s.key === 'years')?.label || 'Tahun Berpengalaman',
      description: statistics.find((s: Statistic) => s.key === 'years')?.description || 'Tahun melayani masyarakat',
    },
    {
      number: counters.satisfaction,
      suffix: statistics.find((s: Statistic) => s.key === 'satisfaction')?.suffix || '%',
      label: statistics.find((s: Statistic) => s.key === 'satisfaction')?.label || 'Tingkat Kepuasan',
      description: statistics.find((s: Statistic) => s.key === 'satisfaction')?.description || 'Tingkat kepuasan anggota',
    },
    {
      number: counters.assets,
      suffix: statistics.find((s: Statistic) => s.key === 'assets')?.suffix || 'M',
      label: statistics.find((s: Statistic) => s.key === 'assets')?.label || 'Total Aset',
      description: statistics.find((s: Statistic) => s.key === 'assets')?.description || 'Total aset koperasi',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-28 sm:pt-24 lg:pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-2 mb-6">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 text-xs sm:text-sm">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  Koperasi Berprestasi 2023
                </Badge>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs sm:text-sm">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  Sehat & Terpercaya
                </Badge>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  {typewriterText}
                  <span className={`animate-pulse font-thin ${isDeleting ? 'text-red-500' : 'text-blue-600'} opacity-80`}>|</span>
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {heroSection?.subtitle || "KSP Satrio Mulia Arthomoro melayani kebutuhan finansial masyarakat desa dengan prinsip gotong royong, kekeluargaan, dan kepercayaan. Bersama membangun ekonomi desa yang mandiri."}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Bunga simpanan 6-8%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Proses mudah & cepat</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Pelayanan ramah</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Dikelola warga desa</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg shadow-xl group"
                  onClick={() => window.location.href = heroSection?.cta_link || '/keanggotaan'}
                >
                  <Users className="w-5 h-5 mr-2" />
                  {heroSection?.cta_text || "Daftar Jadi Anggota"}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg group bg-transparent"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Hubungi Kami
                </Button>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 shadow-2xl">
                  <img
                    src="/assets/images/indonesian-cooperative-meeting.png"
                    alt="Rapat Anggota KSP Smart"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-6 h-6 text-green-500" />
                    <div>
                      <div className="text-sm font-bold text-gray-900">{services.find((s: Service) => s.category === 'savings')?.interest_rate || '8.5'}% p.a</div>
                      <div className="text-xs text-gray-500">Bunga Simpanan</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center space-x-2">
                    <Users className="w-6 h-6 text-blue-500" />
                    <div>
                      <div className="text-sm font-bold text-gray-900">{statistics.find((s: Statistic) => s.key === 'members')?.value || '1250'}</div>
                      <div className="text-xs text-gray-500">Anggota Aktif</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">
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

      {/* Services Section */}
      <section id="layanan" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Layanan Kami</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Layanan Keuangan Desa</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Melayani kebutuhan finansial masyarakat desa dengan proses yang mudah, bunga terjangkau, dan pelayanan
              yang ramah
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {mappedServices.map((service, index) => (
              <Card
                key={index}
                className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group ${
                  index === activeService ? "ring-2 ring-blue-500 scale-105" : ""
                }`}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-blue-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature: string, idx: number) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white group">
                        Pelajari Lebih Lanjut
                        <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-blue-100 text-blue-800 mb-4">Tentang Kami</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">12+ Tahun Melayani Desa</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                KSP Satrio Mulia Arthomoro didirikan tahun 2012 oleh warga Desa Arthomoro dengan semangat gotong royong.
                Kami berkomitmen membangun ekonomi desa yang mandiri dan sejahtera melalui layanan keuangan yang mudah
                diakses.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-blue-900 mb-2">Visi Kami</h4>
                    <p className="text-gray-600">
                      Menjadi koperasi simpan pinjam terpercaya yang membantu mewujudkan kesejahteraan masyarakat desa
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Handshake className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-blue-900 mb-2">Misi Kami</h4>
                    <p className="text-gray-600">
                      Memberikan layanan keuangan yang mudah, terjangkau, dan sesuai dengan kebutuhan masyarakat desa
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <FileText className="w-5 h-5 mr-2" />
                  Profil Koperasi
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Laporan Keuangan
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="flex justify-center">
                <img
                  src="/assets/images/logo.png"
                  alt="Logo KSP Smart"
                  className="w-full h-auto max-w-sm rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Progress indicators */}
              <div className="absolute top-8 right-8 bg-white rounded-2xl p-4 shadow-xl">
                <h5 className="font-bold text-blue-900 mb-3">Pertumbuhan Aset</h5>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>2025</span>
                    <span className="font-bold">8.5M</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="nilai" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Nilai-Nilai Kami</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Prinsip Koperasi Desa</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empat nilai utama yang menjadi landasan dalam melayani masyarakat desa dengan sepenuh hati
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <value.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-blue-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{value.description}</p>
                      <div className="flex items-center space-x-2">
                        <Zap className="w-4 h-4 text-orange-500" />
                        <span className="text-sm font-semibold text-orange-600">{value.stats}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="prestasi" className="py-20 bg-gradient-to-br from-blue-50 to-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Prestasi & Penghargaan</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Pengakuan & Prestasi</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai penghargaan yang kami terima sebagai bukti komitmen melayani masyarakat desa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm font-bold text-orange-600 mb-2">{achievement.year}</div>
                  <h3 className="text-lg font-bold text-blue-900 mb-3">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="keanggotaan" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Testimoni Anggota</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Cerita Sukses Warga Desa</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dengarkan pengalaman nyata dari warga desa yang telah merasakan manfaat bergabung dengan KSP Smart
            </p>
          </div>

          <div className="relative">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-12">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="lg:w-1/3 text-center">
                    <img
                      src={testimonials[activeTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[activeTestimonial].name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 shadow-lg"
                    />
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="font-bold text-blue-900 text-lg">{testimonials[activeTestimonial].name}</div>
                    <div className="text-blue-600 font-medium">{testimonials[activeTestimonial].role}</div>
                    <div className="text-gray-500 text-sm">{testimonials[activeTestimonial].company}</div>
                  </div>

                  <div className="lg:w-2/3">
                    <blockquote className="text-xl text-gray-700 leading-relaxed italic">
                      "{testimonials[activeTestimonial].content}"
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? "bg-blue-600 w-8" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Hubungi Kami</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Siap Bergabung dengan Kami?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Pengurus dan staff kami siap membantu Anda. Kunjungi kantor kami atau hubungi melalui telepon dan
              WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Hubungi Kami</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap *</label>
                      <Input placeholder="Masukkan nama lengkap" className="border-gray-300" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nomor WhatsApp *</label>
                      <Input placeholder="+62 812 3456 7890" className="border-gray-300" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <Input type="email" placeholder="nama@email.com" className="border-gray-300" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Keperluan</label>
                      <select className="w-full p-3 border border-gray-300 rounded-lg">
                        <option>Informasi Simpanan</option>
                        <option>Pengajuan Pinjaman</option>
                        <option>Daftar Anggota Baru</option>
                        <option>Lainnya</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                    <Textarea placeholder="Sampaikan keperluan Anda..." rows={4} className="border-gray-300" />
                  </div>
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Informasi Kontak</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Alamat Kantor</h4>
                      <p className="text-blue-100">{cmsSettings.contact?.contact_address || 'Jl. Raya Desa Arthomoro No. 45, Kec. Kalibaru, Kab. Banyuwangi'}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Telepon & WhatsApp</h4>
                      <p className="text-blue-100">{cmsSettings.contact?.contact_phone || '+62 333 123 456'}</p>
                      <p className="text-blue-100">{cmsSettings.contact?.contact_whatsapp || '+62 812 3456 7890'}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Email</h4>
                      <p className="text-blue-100">{cmsSettings.contact?.contact_email || 'info@kspsmart.id'}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Jam Operasional</h4>
                      <p className="text-blue-100">{cmsSettings.contact?.operating_hours_weekday || 'Senin - Jumat: 08:00 - 16:00 WIB'}</p>
                      <p className="text-blue-100">{cmsSettings.contact?.operating_hours_saturday || 'Sabtu: 08:00 - 12:00 WIB'}</p>
                      <p className="text-blue-100">Minggu: Tutup</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h4 className="font-bold text-white mb-4">Media Sosial</h4>
                <div className="flex space-x-4">
                  {cmsSettings.social?.social_facebook && (
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white border-0"
                      onClick={() => window.open(cmsSettings.social?.social_facebook || '', '_blank')}
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Facebook
                    </Button>
                  )}
                  {cmsSettings.social?.social_instagram && (
                    <Button
                      size="sm"
                      className="bg-pink-600 hover:bg-pink-700 text-white border-0"
                      onClick={() => window.open(cmsSettings.social?.social_instagram || '', '_blank')}
                    >
                      <Camera className="w-4 h-4 mr-2" />
                      Instagram
                    </Button>
                  )}
                  {cmsSettings.social?.social_youtube && (
                    <Button
                      size="sm"
                      className="bg-red-600 hover:bg-red-700 text-white border-0"
                      onClick={() => window.open(cmsSettings.social?.social_youtube || '', '_blank')}
                    >
                      <Video className="w-4 h-4 mr-2" />
                      YouTube
                    </Button>
                  )}
                  {cmsSettings.contact?.contact_whatsapp && (
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 text-white border-0"
                      onClick={() => window.open(`https://wa.me/${cmsSettings.contact?.contact_whatsapp?.replace(/[^0-9]/g, '') || ''}`, '_blank')}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
