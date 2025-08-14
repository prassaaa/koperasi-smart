import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header, Footer } from "@/components/layout"
import {
  Shield,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  MessageCircle,
  Headphones,
  Building2,
  Car,
  Train,
  Navigation,
  CheckCircle,
  Send,
  Calendar,
  User,
  FileText,
  CreditCard,
  PiggyBank,
} from "lucide-react"

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Telepon & WhatsApp",
      description: "Hubungi kami langsung untuk konsultasi cepat",
      details: ["+62 333 421 567", "+62 812 3456 7890"],
      action: "Hubungi Sekarang",
      color: "from-green-500 to-green-700",
      available: "Senin-Sabtu 08:00-16:00",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Kirim pertanyaan melalui email",
      details: ["info@kspsmart.id", "admin@kspsmart.id"],
      action: "Kirim Email",
      color: "from-blue-500 to-blue-700",
      available: "Respon dalam 24 jam",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Chat",
      description: "Chat langsung via WhatsApp",
      details: ["WhatsApp Business", "Respon cepat"],
      action: "Mulai Chat",
      color: "from-purple-500 to-purple-700",
      available: "Senin-Sabtu 08:00-16:00",
    },
    {
      icon: Calendar,
      title: "Kunjungi Kantor",
      description: "Datang langsung ke kantor kami",
      details: ["Konsultasi langsung", "Pelayanan tatap muka"],
      action: "Lihat Lokasi",
      color: "from-orange-500 to-orange-700",
      available: "Senin-Sabtu 08:00-16:00",
    },
  ]

  const offices = [
    {
      name: "Kantor Pusat KSP Smart",
      type: "Head Office",
      address: "Jl. Raya Arthomoro No. 123, Desa Arthomoro, Kec. Sempu, Banyuwangi 68468",
      phone: "+62 333 421 567",
      email: "info@kspsmart.id",
      hours: "Senin-Sabtu: 08:00-16:00, Minggu: Tutup",
      services: ["Semua layanan", "Konsultasi gratis", "Ruang tunggu"],
      manager: "Bapak Suyono, S.E.",
      image: "/arthomoro-office.png",
      directions: {
        car: "20 menit dari pusat kota Banyuwangi",
        train: "30 menit dari Stasiun Banyuwangi Baru",
        bus: "Terminal Brawijaya 25 menit",
      },
    },
    {
      name: "Pos Pelayanan Desa Sumberejo",
      type: "Service Point",
      address: "Balai Desa Sumberejo, Kec. Sempu, Banyuwangi",
      phone: "+62 812 3456 7891",
      email: "sumberejo@kspsmart.id",
      hours: "Selasa & Jumat: 09:00-15:00",
      services: ["Simpan pinjam", "Konsultasi dasar", "Pembayaran cicilan"],
      manager: "Ibu Siti Aminah, S.Pd.",
      image: "/sumberejo-office.png",
      directions: {
        car: "15 menit dari Arthomoro",
        train: "35 menit dari Stasiun Banyuwangi",
        bus: "Angkutan desa tersedia",
      },
    },
    {
      name: "Pos Pelayanan Desa Kedayunan",
      type: "Service Point",
      address: "Balai Desa Kedayunan, Kec. Sempu, Banyuwangi",
      phone: "+62 812 3456 7892",
      email: "kedayunan@kspsmart.id",
      hours: "Rabu & Sabtu: 09:00-15:00",
      services: ["Simpan pinjam", "Konsultasi UMKM", "Pembayaran cicilan"],
      manager: "Bapak Ahmad Fauzi",
      image: "/kedayunan-office.png",
      directions: {
        car: "10 menit dari Arthomoro",
        train: "25 menit dari Stasiun Banyuwangi",
        bus: "Ojek online tersedia",
      },
    },
  ]

  const faqCategories = [
    {
      category: "Keanggotaan",
      icon: User,
      questions: [
        {
          q: "Bagaimana cara menjadi anggota KSP Smart?",
          a: "Anda dapat mendaftar dengan datang langsung ke kantor kami di Desa Arthomoro dengan membawa KTP, KK, dan pas foto 3x4. Biaya pendaftaran hanya Rp 25.000.",
        },
        {
          q: "Berapa simpanan wajib anggota?",
          a: "Simpanan wajib anggota adalah Rp 25.000 per bulan yang akan dikembalikan saat keluar dari keanggotaan beserta bagi hasil (SHU).",
        },
        {
          q: "Apakah ada syarat khusus untuk menjadi anggota?",
          a: "Syarat utama adalah warga desa atau sekitarnya, berusia minimal 17 tahun, memiliki KTP yang masih berlaku, dan mengisi formulir pendaftaran.",
        },
      ],
    },
    {
      category: "Simpanan",
      icon: PiggyBank,
      questions: [
        {
          q: "Berapa minimal setoran untuk simpanan sukarela?",
          a: "Minimal setoran untuk simpanan sukarela adalah Rp 50.000 dan dapat ditambah kapan saja sesuai kemampuan.",
        },
        {
          q: "Bagaimana cara menghitung bunga simpanan?",
          a: "Bunga dihitung berdasarkan saldo harian dengan rate 6% per tahun untuk simpanan sukarela dan 7-8% untuk simpanan berjangka.",
        },
        {
          q: "Apakah simpanan aman?",
          a: "Ya, semua simpanan anggota dikelola dengan transparansi penuh dan dilaporkan dalam rapat anggota tahunan (RAT).",
        },
      ],
    },
    {
      category: "Kredit",
      icon: CreditCard,
      questions: [
        {
          q: "Berapa lama proses persetujuan kredit?",
          a: "Proses persetujuan kredit UMKM maksimal 1 minggu, sedangkan kredit konsumtif maksimal 3 hari kerja setelah dokumen lengkap.",
        },
        {
          q: "Apakah bisa kredit tanpa jaminan?",
          a: "Ya, untuk kredit UMKM hingga Rp 10 juta bisa tanpa jaminan dengan syarat usaha sudah berjalan minimal 6 bulan.",
        },
        {
          q: "Bagaimana cara simulasi kredit?",
          a: "Anda dapat datang langsung ke kantor untuk simulasi kredit atau menghubungi kami via WhatsApp untuk perhitungan cicilan.",
        },
      ],
    },
    {
      category: "Layanan",
      icon: Globe,
      questions: [
        {
          q: "Bagaimana cara cek saldo via WhatsApp?",
          a: "Kirim pesan 'SALDO [Nomor Anggota]' ke WhatsApp resmi kami di +62 812 3456 7890 dan akan mendapat balasan otomatis.",
        },
        {
          q: "Apakah ada biaya untuk layanan WhatsApp?",
          a: "Tidak ada biaya tambahan untuk layanan informasi via WhatsApp, hanya tarif SMS/data sesuai provider Anda.",
        },
        {
          q: "Bagaimana keamanan data anggota?",
          a: "Kami menjaga kerahasiaan data anggota dengan ketat dan hanya digunakan untuk keperluan internal koperasi sesuai aturan yang berlaku.",
        },
      ],
    },
  ]

  const supportChannels = [
    {
      channel: "Customer Service",
      icon: Headphones,
      availability: "Senin-Sabtu 08:00-16:00",
      response: "Langsung",
      description: "Bantuan langsung untuk semua pertanyaan",
    },
    {
      channel: "WhatsApp Support",
      icon: MessageCircle,
      availability: "Senin-Sabtu 08:00-16:00",
      response: "< 30 menit",
      description: "Bantuan via WhatsApp untuk kemudahan",
    },
    {
      channel: "Pengaduan",
      icon: FileText,
      availability: "Senin-Sabtu 08:00-16:00",
      response: "< 24 jam",
      description: "Penanganan keluhan dan saran anggota",
    },
    {
      channel: "Konsultasi Keuangan",
      icon: Shield,
      availability: "Dengan janji",
      response: "Sesuai jadwal",
      description: "Konsultasi mendalam dengan pengurus",
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
              <Badge className="bg-green-100 text-green-800">
                <Headphones className="w-4 h-4 mr-1" />
                Pelayanan Ramah
              </Badge>
              <Badge className="bg-blue-100 text-blue-800">
                <Shield className="w-4 h-4 mr-1" />
                Respon Cepat
              </Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              Hubungi
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                KSP Smart
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Tim pengurus dan karyawan yang berpengalaman siap membantu Anda. Konsultasi gratis, pelayanan ramah, dan
              solusi terbaik untuk kebutuhan keuangan keluarga Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Cara Menghubungi</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Pilih Cara yang Mudah untuk Anda</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai cara mudah untuk terhubung dengan tim kami. Pilih yang paling nyaman dan sesuai kebutuhan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{method.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{method.description}</p>
                  <div className="space-y-2 mb-4">
                    {method.details.map((detail, idx) => (
                      <div key={idx} className="text-sm font-semibold text-blue-600">
                        {detail}
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-green-600 font-medium mb-6">{method.available}</div>
                  <Button className={`w-full bg-gradient-to-r ${method.color} text-white group`}>
                    {method.action}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Konsultasi Gratis</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Kirim Pesan Anda</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ceritakan kebutuhan keuangan Anda dan tim kami akan memberikan solusi terbaik dalam waktu 24 jam.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Formulir Konsultasi</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Masukkan nama lengkap"
                        className="border-gray-300"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nomor WhatsApp *</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+62 812 3456 7890"
                        className="border-gray-300"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="nama@email.com"
                        className="border-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Jenis Layanan</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg"
                      >
                        <option value="">Pilih layanan</option>
                        <option value="simpanan">Simpanan Sukarela</option>
                        <option value="kredit-umkm">Kredit UMKM</option>
                        <option value="kredit-konsumtif">Kredit Konsumtif</option>
                        <option value="konsultasi">Konsultasi Keuangan</option>
                        <option value="keanggotaan">Keanggotaan</option>
                        <option value="lainnya">Lainnya</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subjek</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Ringkasan pertanyaan Anda"
                      className="border-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pesan *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Ceritakan kebutuhan keuangan Anda secara detail..."
                      rows={5}
                      className="border-gray-300"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Support Channels */}
            <div className="space-y-8">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-6">Channel Support</h3>
                  <div className="space-y-6">
                    {supportChannels.map((channel, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                          <channel.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-blue-900 mb-1">{channel.channel}</h4>
                          <p className="text-gray-600 text-sm mb-2">{channel.description}</p>
                          <div className="flex items-center space-x-4 text-xs">
                            <span className="text-green-600 font-medium">{channel.availability}</span>
                            <span className="text-orange-600 font-medium">Response: {channel.response}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-6">Komitmen Layanan</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Response time maksimal 24 jam</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Konsultasi gratis tanpa komitmen</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Pelayanan ramah dan profesional</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">Kerahasiaan data terjamin 100%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Lokasi Kantor</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Kunjungi Kantor Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kantor pusat dan pos pelayanan di 3 lokasi strategis siap melayani Anda dengan fasilitas lengkap dan tim
              yang berpengalaman.
            </p>
          </div>

          <Tabs defaultValue="pusat" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              {offices.map((office, index) => (
                <TabsTrigger
                  key={index}
                  value={index === 0 ? "pusat" : office.name.toLowerCase().split(" ")[3]}
                  className="text-sm"
                >
                  <Building2 className="w-4 h-4 mr-2" />
                  {index === 0 ? "Pusat" : office.name.split(" ")[3]}
                </TabsTrigger>
              ))}
            </TabsList>

            {offices.map((office, index) => (
              <TabsContent key={index} value={index === 0 ? "pusat" : office.name.toLowerCase().split(" ")[3]}>
                <Card className="border-0 shadow-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className="p-8 lg:p-12">
                        <div className="flex items-center space-x-3 mb-6">
                          <Badge className="bg-blue-100 text-blue-800">{office.type}</Badge>
                          <h3 className="text-3xl font-bold text-blue-900">{office.name}</h3>
                        </div>

                        <div className="space-y-6">
                          <div className="flex items-start space-x-4">
                            <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                            <div>
                              <h4 className="font-bold text-blue-900 mb-1">Alamat</h4>
                              <p className="text-gray-600">{office.address}</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-4">
                            <Phone className="w-6 h-6 text-green-600 mt-1" />
                            <div>
                              <h4 className="font-bold text-blue-900 mb-1">Telepon</h4>
                              <p className="text-gray-600">{office.phone}</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-4">
                            <Mail className="w-6 h-6 text-purple-600 mt-1" />
                            <div>
                              <h4 className="font-bold text-blue-900 mb-1">Email</h4>
                              <p className="text-gray-600">{office.email}</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-4">
                            <Clock className="w-6 h-6 text-orange-600 mt-1" />
                            <div>
                              <h4 className="font-bold text-blue-900 mb-1">Jam Operasional</h4>
                              <p className="text-gray-600">{office.hours}</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-4">
                            <User className="w-6 h-6 text-blue-600 mt-1" />
                            <div>
                              <h4 className="font-bold text-blue-900 mb-1">Penanggung Jawab</h4>
                              <p className="text-gray-600">{office.manager}</p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-8">
                          <h4 className="font-bold text-blue-900 mb-4">Layanan Tersedia</h4>
                          <div className="flex flex-wrap gap-2">
                            {office.services.map((service, idx) => (
                              <Badge key={idx} className="bg-green-100 text-green-800">
                                {service}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="mt-8">
                          <h4 className="font-bold text-blue-900 mb-4">Akses Transportasi</h4>
                          <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                              <Car className="w-5 h-5 text-blue-600" />
                              <span className="text-gray-700">{office.directions.car}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Train className="w-5 h-5 text-green-600" />
                              <span className="text-gray-700">{office.directions.train}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Navigation className="w-5 h-5 text-orange-600" />
                              <span className="text-gray-700">{office.directions.bus}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                            <Navigation className="w-4 h-4 mr-2" />
                            Petunjuk Arah
                          </Button>
                          <Button
                            variant="outline"
                            className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                          >
                            <Calendar className="w-4 h-4 mr-2" />
                            Buat Janji
                          </Button>
                        </div>
                      </div>

                      <div className="bg-gray-100 p-8 lg:p-12 flex items-center justify-center">
                        <div className="text-center">
                          <Building2 className="w-24 h-24 text-blue-300 mx-auto mb-4" />
                          <p className="text-gray-500">Foto kantor akan segera tersedia</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">FAQ</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Pertanyaan Sering Diajukan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Temukan jawaban untuk pertanyaan yang paling sering ditanyakan oleh calon anggota dan anggota kami.
            </p>
          </div>

          <Tabs defaultValue="keanggotaan" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
              {faqCategories.map((category, index) => (
                <TabsTrigger key={index} value={category.category.toLowerCase()} className="text-sm">
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.category}
                </TabsTrigger>
              ))}
            </TabsList>

            {faqCategories.map((category, index) => (
              <TabsContent key={index} value={category.category.toLowerCase()}>
                <div className="space-y-6">
                  {category.questions.map((faq, idx) => (
                    <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-8">
                        <h3 className="text-lg font-bold text-blue-900 mb-4">{faq.q}</h3>
                        <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Tidak menemukan jawaban yang Anda cari?</p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <MessageCircle className="w-4 h-4 mr-2" />
              Hubungi Customer Service
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Siap Memulai Konsultasi?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Tim pengurus kami menunggu untuk membantu Anda menemukan solusi keuangan terbaik. Konsultasi gratis dan
            tanpa komitmen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg shadow-xl group">
              <Phone className="w-5 h-5 mr-2" />
              Hubungi Sekarang
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg group bg-transparent"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Kunjungi Kantor
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
