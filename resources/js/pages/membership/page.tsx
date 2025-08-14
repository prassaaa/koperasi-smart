import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Header, Footer } from "@/components/layout"
import {
  Users,
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  FileText,
  Crown,
  Gift,
  TrendingUp,
  PiggyBank,
  CreditCard,
  Calculator,
  Smartphone,
  Zap,
  UserPlus,
  Target,
} from "lucide-react"

export default function KeanggotaanPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    occupation: "",
    income: "",
    membershipType: "",
    referral: "",
  })

  useEffect(() => {
    // Testimonial rotation
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 4) // 4 testimonials
    }, 5000)

    return () => {
      clearInterval(testimonialInterval)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Membership application:", formData)
  }

  const membershipTypes = [
    {
      type: "Anggota Biasa",
      price: "Rp 25.000",
      period: "Per bulan (simpanan wajib)",
      description: "Paket dasar untuk warga desa yang ingin bergabung dengan koperasi",
      color: "from-blue-500 to-blue-700",
      popular: true,
      benefits: [
        "Simpanan pokok Rp 25.000",
        "Buku anggota & kartu member",
        "Akses semua layanan koperasi",
        "Konsultasi keuangan gratis",
        "Bunga simpanan 6% per tahun",
        "Kredit UMKM bunga rendah",
        "Bagi hasil (SHU) tahunan",
        "Ikut rapat anggota tahunan",
      ],
      services: ["Simpanan sukarela", "Kredit UMKM", "Kredit konsumtif", "Konsultasi keuangan"],
    },
    {
      type: "Anggota Luar Biasa",
      price: "Rp 50.000",
      period: "Per bulan (simpanan wajib)",
      description: "Paket untuk anggota yang ingin kontribusi lebih besar dengan benefit tambahan",
      color: "from-purple-500 to-purple-700",
      popular: false,
      benefits: [
        "Simpanan pokok Rp 50.000",
        "Kartu member premium",
        "Prioritas dalam pelayanan",
        "Konsultasi keuangan mendalam",
        "Bunga simpanan 7% per tahun",
        "Kredit dengan limit lebih tinggi",
        "Bagi hasil (SHU) lebih besar",
        "Undangan acara khusus koperasi",
        "Pelatihan kewirausahaan gratis",
        "Bantuan pemasaran produk UMKM",
      ],
      services: [
        "Semua layanan anggota biasa",
        "Kredit dengan plafon lebih tinggi",
        "Pelatihan bisnis",
        "Networking UMKM",
        "Konsultasi bisnis",
      ],
    },
  ]

  const memberBenefits = [
    {
      icon: PiggyBank,
      title: "Bunga Kompetitif",
      description: "Bunga simpanan 6-7% per tahun, lebih tinggi dari bank pada umumnya",
      stats: "6% - 7%",
    },
    {
      icon: Shield,
      title: "Keamanan Terjamin",
      description: "Dikelola dengan transparansi penuh dan laporan rutin kepada anggota",
      stats: "100% Transparan",
    },
    {
      icon: CreditCard,
      title: "Kredit Mudah",
      description: "Proses kredit cepat dengan bunga rendah dan syarat yang mudah",
      stats: "1 Minggu Proses",
    },
    {
      icon: Smartphone,
      title: "Layanan WhatsApp",
      description: "Informasi saldo dan transaksi melalui WhatsApp untuk kemudahan",
      stats: "24/7 Info",
    },
    {
      icon: Calculator,
      title: "Konsultasi Gratis",
      description: "Konsultasi keuangan dan bisnis gratis dari pengurus berpengalaman",
      stats: "Gratis Selamanya",
    },
    {
      icon: Gift,
      title: "Bagi Hasil (SHU)",
      description: "Pembagian sisa hasil usaha setiap tahun sesuai partisipasi anggota",
      stats: "Setiap Tahun",
    },
  ]

  const registrationSteps = [
    {
      step: 1,
      title: "Datang ke Kantor",
      description: "Kunjungi kantor KSP Smart di Desa Arthomoro atau pos pelayanan terdekat",
      icon: Target,
      duration: "Kapan saja",
    },
    {
      step: 2,
      title: "Isi Formulir",
      description: "Lengkapi formulir pendaftaran dan siapkan dokumen persyaratan",
      icon: FileText,
      duration: "10 menit",
    },
    {
      step: 3,
      title: "Verifikasi Data",
      description: "Pengurus akan memverifikasi data dan dokumen yang Anda berikan",
      icon: CheckCircle,
      duration: "1 hari",
    },
    {
      step: 4,
      title: "Bayar Simpanan Pokok",
      description: "Bayar simpanan pokok dan mulai menikmati layanan koperasi",
      icon: CreditCard,
      duration: "Langsung aktif",
    },
  ]

  const testimonials = [
    {
      name: "Pak Suyono",
      role: "Petani",
      company: "Desa Arthomoro",
      content:
        "Sejak bergabung dengan KSP Smart 3 tahun lalu, usaha tani saya berkembang pesat. Kredit UMKM dengan bunga rendah sangat membantu membeli bibit dan pupuk berkualitas.",
      rating: 5,
      image: "/assets/images/member-suyono.png",
      memberSince: "2021",
      achievement: "Hasil panen naik 200%",
    },
    {
      name: "Ibu Siti",
      role: "Pedagang",
      company: "Pasar Arthomoro",
      content:
        "Simpanan di KSP Smart memberikan bunga yang bagus. Uang saya berkembang dan bisa untuk modal tambahan jualan. Pelayanannya juga ramah dan mudah dipahami.",
      rating: 5,
      image: "/assets/images/member-siti.png",
      memberSince: "2020",
      achievement: "Modal usaha bertambah 150%",
    },
    {
      name: "Pak Ahmad",
      role: "Tukang Bangunan",
      company: "Desa Sumberejo",
      content:
        "Kredit renovasi rumah dari KSP Smart sangat membantu. Prosesnya cepat, bunganya wajar, dan cicilan bisa disesuaikan dengan kemampuan. Terima kasih KSP Smart!",
      rating: 5,
      image: "/assets/images/member-ahmad.png",
      memberSince: "2022",
      achievement: "Rumah renovasi total",
    },
    {
      name: "Ibu Dwi",
      role: "Ibu Rumah Tangga",
      company: "Desa Kedayunan",
      content:
        "Bagi hasil (SHU) dari KSP Smart setiap tahun membantu biaya sekolah anak-anak. Senang bisa ikut berkembang bersama koperasi yang amanah dan transparan.",
      rating: 5,
      image: "/assets/images/member-dwi.png",
      memberSince: "2019",
      achievement: "Biaya pendidikan anak terpenuhi",
    },
  ]

  const memberStats = [
    {
      number: "485",
      label: "Anggota Aktif",
      description: "Warga desa dan sekitarnya",
      icon: Users,
    },
    {
      number: "96%",
      label: "Tingkat Kepuasan",
      description: "Berdasarkan survei anggota",
      icon: Star,
    },
    {
      number: "Rp 8M+",
      label: "Total Simpanan",
      description: "Aset yang dikelola untuk anggota",
      icon: PiggyBank,
    },
    {
      number: "120+",
      label: "UMKM Berkembang",
      description: "Mendapat bantuan modal usaha",
      icon: TrendingUp,
    },
  ]

  const requirements = [
    {
      category: "Dokumen Wajib",
      items: ["KTP yang masih berlaku", "Kartu Keluarga (KK)", "Pas foto 3x4 (2 lembar)", "Fotocopy KTP dan KK"],
    },
    {
      category: "Persyaratan Umum",
      items: [
        "Warga desa atau sekitarnya",
        "Berusia minimal 17 tahun",
        "Memiliki penghasilan tetap/usaha",
        "Sanggup membayar simpanan wajib",
      ],
    },
    {
      category: "Dokumen Pendukung",
      items: [
        "Surat keterangan usaha (jika ada)",
        "Slip gaji (jika karyawan)",
        "Surat nikah (jika sudah menikah)",
        "Rekomendasi dari tetangga/RT",
      ],
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
              <Badge className="bg-green-100 text-green-800">
                <UserPlus className="w-4 h-4 mr-1" />
                Pendaftaran Mudah
              </Badge>
              <Badge className="bg-blue-100 text-blue-800">
                <Gift className="w-4 h-4 mr-1" />
                Benefit Menarik
              </Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              Bergabung dengan
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Keluarga Besar
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Jadilah bagian dari 485+ anggota yang telah merasakan manfaat koperasi yang amanah dan transparan. Nikmati
              bunga kompetitif, kredit mudah, dan bagi hasil tahunan.
            </p>
          </div>
        </div>
      </section>

      {/* Member Stats */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {memberStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-blue-100 mb-1">{stat.label}</div>
                <div className="text-sm text-blue-200">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Jenis Keanggotaan</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Pilih Jenis Keanggotaan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dua pilihan keanggotaan dengan benefit yang disesuaikan dengan kemampuan dan kebutuhan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {membershipTypes.map((membership, index) => (
              <Card
                key={index}
                className={`border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden ${
                  membership.popular ? "ring-2 ring-blue-500 scale-105" : ""
                }`}
              >
                {membership.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 text-sm font-bold">
                    <Crown className="w-4 h-4 inline mr-1" />
                    TERPOPULER
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${membership.color} rounded-3xl flex items-center justify-center mx-auto mb-6`}
                    >
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">{membership.type}</h3>
                    <div className="text-3xl font-bold text-blue-600 mb-1">{membership.price}</div>
                    <div className="text-sm text-gray-500 mb-4">{membership.period}</div>
                    <p className="text-gray-600 leading-relaxed">{membership.description}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <h4 className="font-bold text-blue-900">Benefit Utama:</h4>
                    {membership.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4 mb-8">
                    <h4 className="font-bold text-blue-900">Layanan Tersedia:</h4>
                    {membership.services.map((service, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <Zap className="w-4 h-4 text-orange-500" />
                        <span className="text-gray-700 text-sm">{service}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full bg-gradient-to-r ${membership.color} text-white py-4 text-lg shadow-xl group`}
                  >
                    Pilih Jenis Ini
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Member Benefits */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Keunggulan Anggota</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Mengapa Bergabung dengan Kami?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nikmati berbagai keunggulan yang hanya bisa didapatkan oleh anggota KSP Smart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memberBenefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
                  <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-bold">
                    {benefit.stats}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Proses Pendaftaran</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">4 Langkah Mudah</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proses pendaftaran yang simpel dan cepat. Dalam hitungan hari, Anda sudah bisa menikmati semua layanan
              kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {registrationSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>
                <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Persyaratan</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Dokumen yang Diperlukan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Siapkan dokumen-dokumen berikut untuk mempercepat proses pendaftaran dan verifikasi keanggotaan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-blue-900 mb-6">{req.category}</h3>
                  <div className="space-y-4">
                    {req.items.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Daftar Sekarang</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Formulir Pendaftaran</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Isi formulir di bawah ini untuk memulai proses pendaftaran. Pengurus kami akan menghubungi Anda dalam 24
              jam.
            </p>
          </div>

          <Card className="border-0 shadow-2xl">
            <CardContent className="p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Nama Lengkap *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama lengkap sesuai KTP"
                      className="border-gray-300 py-4"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="nama@email.com (opsional)"
                      className="border-gray-300 py-4"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Nomor WhatsApp *</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+62 812 3456 7890"
                      className="border-gray-300 py-4"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Pekerjaan *</label>
                    <select
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-lg"
                      required
                    >
                      <option value="">Pilih pekerjaan</option>
                      <option value="petani">Petani</option>
                      <option value="pedagang">Pedagang</option>
                      <option value="tukang">Tukang/Buruh</option>
                      <option value="pns">PNS/Guru</option>
                      <option value="wirausaha">Wirausaha/UMKM</option>
                      <option value="ibu-rumah-tangga">Ibu Rumah Tangga</option>
                      <option value="karyawan">Karyawan Swasta</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Penghasilan per Bulan *</label>
                    <select
                      name="income"
                      value={formData.income}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-lg"
                      required
                    >
                      <option value="">Pilih range penghasilan</option>
                      <option value="< 1 juta">Kurang dari Rp 1 juta</option>
                      <option value="1-2 juta">Rp 1 - 2 juta</option>
                      <option value="2-3 juta">Rp 2 - 3 juta</option>
                      <option value="3-5 juta">Rp 3 - 5 juta</option>
                      <option value="5-10 juta">Rp 5 - 10 juta</option>
                      <option value="> 10 juta">Lebih dari Rp 10 juta</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Jenis Keanggotaan *</label>
                    <select
                      name="membershipType"
                      value={formData.membershipType}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-lg"
                      required
                    >
                      <option value="">Pilih jenis keanggotaan</option>
                      <option value="biasa">Anggota Biasa - Rp 25.000/bulan</option>
                      <option value="luar-biasa">Anggota Luar Biasa - Rp 50.000/bulan</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Referensi (Opsional)</label>
                  <Input
                    name="referral"
                    value={formData.referral}
                    onChange={handleInputChange}
                    placeholder="Nama anggota yang merekomendasikan (jika ada)"
                    className="border-gray-300 py-4"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Jika ada anggota yang merekomendasikan, sebutkan namanya untuk kemudahan verifikasi
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-bold text-blue-900 mb-4">Langkah Selanjutnya:</h4>
                  <div className="space-y-2 text-sm text-blue-800">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>Pengurus akan menghubungi Anda dalam 24 jam</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>Verifikasi dokumen dan data diri</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>Pembayaran simpanan pokok</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>Aktivasi keanggotaan dan akses layanan</span>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-6 text-xl shadow-xl"
                >
                  <UserPlus className="w-6 h-6 mr-3" />
                  Daftar Sekarang
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Member Testimonials */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Testimoni Anggota</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Cerita Sukses Anggota</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dengarkan pengalaman nyata dari anggota yang telah merasakan manfaat bergabung dengan KSP Smart
            </p>
          </div>

          <Card className="border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <img
                    src={testimonials[activeTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[activeTestimonial].name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg"
                  />
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="font-bold text-blue-900 text-xl mb-2">{testimonials[activeTestimonial].name}</div>
                  <div className="text-blue-600 font-medium mb-1">{testimonials[activeTestimonial].role}</div>
                  <div className="text-gray-500 text-sm mb-4">{testimonials[activeTestimonial].company}</div>
                  <div className="space-y-2">
                    <Badge className="bg-green-100 text-green-800">
                      Member sejak {testimonials[activeTestimonial].memberSince}
                    </Badge>
                    <div className="text-sm font-semibold text-orange-600">
                      {testimonials[activeTestimonial].achievement}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2">
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Siap Menjadi Bagian dari Kami?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Bergabunglah dengan ratusan anggota yang telah merasakan manfaat koperasi yang amanah dan transparan.
            Pendaftaran mudah, benefit menarik, masa depan finansial lebih cerah.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg shadow-xl group">
              <UserPlus className="w-5 h-5 mr-2" />
              Daftar Anggota Baru
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg group bg-transparent"
            >
              <Phone className="w-5 h-5 mr-2" />
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
