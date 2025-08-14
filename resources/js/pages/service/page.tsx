import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header, Footer } from "@/components/layout"
import {
  Users,
  Shield,
  ArrowRight,
  CheckCircle,
  Building2,
  CreditCard,
  PiggyBank,
  Calculator,
  Phone,
  FileText,
  Award,
  Zap,
  ChevronRight,
  GraduationCap,
  Smartphone,
  BarChart3,
  TrendingUp,
} from "lucide-react"

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

interface Props {
  services: Service[];
}

export default function LayananPage({ services }: Props) {
  const [loanAmount, setLoanAmount] = useState(50000000)
  const [loanTerm, setLoanTerm] = useState(12)
  const [savingsAmount, setSavingsAmount] = useState(5000000)
  const [savingsTerm, setSavingsTerm] = useState(12)

  // Map services from database to component format
  const mappedServices = services.map((service: Service) => ({
    id: service.id.toString(),
    icon: service.icon === 'PiggyBank' ? PiggyBank :
          service.icon === 'CreditCard' ? CreditCard :
          service.icon === 'Building2' ? Building2 :
          service.icon === 'Calculator' ? Calculator :
          service.icon === 'Briefcase' ? Building2 :
          service.icon === 'TrendingUp' ? TrendingUp : PiggyBank,
    title: service.name,
    subtitle: service.short_description || service.description.substring(0, 50) + '...',
    description: service.description,
    features: service.features || [],
    color: service.color ? `bg-[${service.color}]` : "bg-blue-500",
    gradient: service.color ? `from-[${service.color}] to-[${service.color}]` : "from-blue-500 to-blue-700",
    benefits: service.features || [],
    requirements: service.requirements ? service.requirements.split('\n').filter(Boolean) : [],
    interestRates: service.interest_rate ? [
      { term: "Standard", rate: `${service.interest_rate}%` }
    ] : [],
    loanTypes: service.admin_fee ? [
      { type: "Standard", amount: "Sesuai kemampuan", rate: `${service.interest_rate || 0}%` }
    ] : [],
  }))



  const additionalServices = [
    {
      icon: Shield,
      title: "Simpanan Wajib",
      description: "Simpanan wajib anggota yang dibayar setiap bulan untuk memperkuat modal koperasi",
      features: ["Rp 25.000/bulan", "Dapat SHU", "Bisa diambil keluar", "Bukti keanggotaan"],
    },
    {
      icon: Smartphone,
      title: "Layanan WhatsApp",
      description: "Informasi saldo dan transaksi melalui WhatsApp untuk kemudahan anggota",
      features: ["Cek saldo via WA", "Info cicilan", "Pengaduan mudah", "Gratis 24 jam"],
    },
    {
      icon: BarChart3,
      title: "Pembagian SHU",
      description: "Sisa Hasil Usaha dibagikan kepada anggota setiap tahun sesuai partisipasi",
      features: ["Dibagi setiap tahun", "Sesuai partisipasi", "Transparan", "Menguntungkan"],
    },
    {
      icon: GraduationCap,
      title: "Pelatihan UMKM",
      description: "Program pelatihan kewirausahaan dan pembinaan UMKM untuk anggota",
      features: ["Pelatihan gratis", "Materi praktis", "Sertifikat", "Networking"],
    },
  ]

  const calculateLoanPayment = () => {
    const monthlyRate = 0.015 // 1.5% per bulan
    const payment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -loanTerm))
    return payment
  }

  const calculateSavingsReturn = () => {
    const annualRate = 0.06 // 6% per tahun
    const monthlyRate = annualRate / 12
    const futureValue = savingsAmount * Math.pow(1 + monthlyRate, savingsTerm)
    return futureValue - savingsAmount
  }

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
                <Shield className="w-4 h-4 mr-1" />
                Terdaftar Resmi
              </Badge>
              <Badge className="bg-green-100 text-green-800">
                <Award className="w-4 h-4 mr-1" />
                Terpercaya
              </Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              Layanan Keuangan
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Terpercaya
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Solusi keuangan yang mudah dan terpercaya untuk warga desa. Dari simpanan hingga kredit usaha, semua
              tersedia dengan proses yang mudah dan bunga yang wajar.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Layanan Utama</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Produk Unggulan Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empat layanan utama yang dirancang khusus untuk memenuhi kebutuhan keuangan warga desa dan UMKM lokal
            </p>
          </div>

          <Tabs defaultValue="simpanan" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
              {mappedServices.map((service) => (
                <TabsTrigger key={service.id} value={service.id} className="text-sm">
                  <service.icon className="w-4 h-4 mr-2" />
                  {service.title.split(" ")[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {mappedServices.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                      >
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-blue-900">{service.title}</h3>
                        <p className="text-blue-600 font-medium">{service.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">{service.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature: string, idx: number) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        size="lg"
                        className={`bg-gradient-to-r ${service.gradient} text-white px-8 py-4 shadow-xl group`}
                      >
                        <FileText className="w-5 h-5 mr-2" />
                        Ajukan Sekarang
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 bg-transparent"
                      >
                        <Calculator className="w-5 h-5 mr-2" />
                        Simulasi
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <Card className="border-0 shadow-xl">
                      <CardContent className="p-8">
                        <h4 className="text-xl font-bold text-blue-900 mb-6">Keunggulan Produk</h4>
                        <div className="space-y-4">
                          {service.benefits.map((benefit: string, idx: number) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <Zap className="w-5 h-5 text-orange-500 mt-0.5" />
                              <span className="text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-xl">
                      <CardContent className="p-8">
                        <h4 className="text-xl font-bold text-blue-900 mb-6">Persyaratan</h4>
                        <div className="space-y-4">
                          {service.requirements.map((req: string, idx: number) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                              <span className="text-gray-700">{req}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Service-specific details */}
                {service.id === "simpanan" && service.interestRates && (
                  <div className="mt-12">
                    <Card className="border-0 shadow-xl">
                      <CardContent className="p-8">
                        <h4 className="text-2xl font-bold text-blue-900 mb-6">Suku Bunga Simpanan</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {service.interestRates.map((rate, idx) => (
                            <div key={idx} className="text-center p-4 bg-blue-50 rounded-xl">
                              <div className="text-sm text-blue-600 mb-2">{rate.term}</div>
                              <div className="text-2xl font-bold text-blue-900">{rate.rate}</div>
                              <div className="text-xs text-gray-500">per tahun</div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {service.id === "kredit-umkm" && service.loanTypes && (
                  <div className="mt-12">
                    <Card className="border-0 shadow-xl">
                      <CardContent className="p-8">
                        <h4 className="text-2xl font-bold text-blue-900 mb-6">Jenis Kredit UMKM</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {service.loanTypes.map((loan, idx) => (
                            <div key={idx} className="text-center p-6 border-2 border-green-200 rounded-xl">
                              <h5 className="text-lg font-bold text-green-700 mb-2">{loan.type}</h5>
                              <div className="text-sm text-gray-600 mb-2">{loan.amount}</div>
                              <div className="text-xl font-bold text-green-600">{loan.rate}</div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Kalkulator Finansial</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Simulasi Produk</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hitung estimasi keuntungan simpanan atau cicilan kredit dengan kalkulator sederhana kami
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Savings Calculator */}
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                    <PiggyBank className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900">Kalkulator Simpanan</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Jumlah Simpanan</label>
                    <Input
                      type="number"
                      value={savingsAmount}
                      onChange={(e) => setSavingsAmount(Number(e.target.value))}
                      className="text-lg"
                    />
                    <div className="text-sm text-gray-500 mt-1">Rp {savingsAmount.toLocaleString("id-ID")}</div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Jangka Waktu (bulan)</label>
                    <Input
                      type="number"
                      value={savingsTerm}
                      onChange={(e) => setSavingsTerm(Number(e.target.value))}
                      className="text-lg"
                    />
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h4 className="font-bold text-blue-900 mb-4">Proyeksi Keuntungan</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Pokok Simpanan:</span>
                        <span className="font-semibold">Rp {savingsAmount.toLocaleString("id-ID")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Bunga (6% p.a):</span>
                        <span className="font-semibold text-green-600">
                          Rp {calculateSavingsReturn().toLocaleString("id-ID")}
                        </span>
                      </div>
                      <div className="border-t pt-3 flex justify-between">
                        <span className="font-bold text-blue-900">Total Penerimaan:</span>
                        <span className="font-bold text-blue-900 text-xl">
                          Rp {(savingsAmount + calculateSavingsReturn()).toLocaleString("id-ID")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Loan Calculator */}
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900">Kalkulator Kredit</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Jumlah Pinjaman</label>
                    <Input
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="text-lg"
                    />
                    <div className="text-sm text-gray-500 mt-1">Rp {loanAmount.toLocaleString("id-ID")}</div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Jangka Waktu (bulan)</label>
                    <Input
                      type="number"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(Number(e.target.value))}
                      className="text-lg"
                    />
                  </div>

                  <div className="bg-green-50 p-6 rounded-xl">
                    <h4 className="font-bold text-blue-900 mb-4">Estimasi Cicilan</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Pokok Pinjaman:</span>
                        <span className="font-semibold">Rp {loanAmount.toLocaleString("id-ID")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Bunga (1.5% per bulan):</span>
                        <span className="font-semibold">1.5%</span>
                      </div>
                      <div className="border-t pt-3 flex justify-between">
                        <span className="font-bold text-blue-900">Cicilan per Bulan:</span>
                        <span className="font-bold text-blue-900 text-xl">
                          Rp {calculateLoanPayment().toLocaleString("id-ID")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Layanan Tambahan</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Layanan Pendukung</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Layanan pendukung untuk melengkapi kebutuhan anggota dan meningkatkan kesejahteraan bersama
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white w-full group">
                    Pelajari Lebih Lanjut
                    <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Cara Bergabung</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Proses Mudah & Cepat</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hanya 4 langkah sederhana untuk menjadi anggota dan menikmati semua layanan KSP Smart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Datang ke Kantor",
                description: "Kunjungi kantor KSP Smart atau hubungi pengurus untuk informasi",
                icon: Building2,
              },
              {
                step: "02",
                title: "Isi Formulir",
                description: "Lengkapi formulir pendaftaran dan siapkan dokumen persyaratan",
                icon: FileText,
              },
              {
                step: "03",
                title: "Verifikasi Data",
                description: "Tim kami akan memverifikasi data dan dokumen yang Anda berikan",
                icon: CheckCircle,
              },
              {
                step: "04",
                title: "Mulai Bertransaksi",
                description: "Selamat! Anda sudah bisa menikmati semua layanan koperasi",
                icon: Zap,
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform">
                    <process.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Siap Memulai Perjalanan Finansial Anda?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Bergabunglah dengan 485+ anggota yang telah merasakan kemudahan layanan keuangan KSP Smart. Konsultasi
            gratis dengan pengurus kami di kantor atau melalui WhatsApp.
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
