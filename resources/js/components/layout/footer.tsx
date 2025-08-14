import { Badge } from "@/components/ui/badge"
import { Shield, Award } from "lucide-react"

interface FooterProps {
  className?: string
}

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`bg-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-1 mb-6">
              <img
                src="/assets/images/logo.png"
                alt="KSP Smart Logo"
                className="w-15 h-15 object-contain"
              />
              <div>
                <span className="text-xl font-bold">KSP Smart</span>
                <div className="text-xs text-blue-300">Satrio Mulia Arthomoro</div>
              </div>
            </div>
            <p className="text-blue-200 mb-4 leading-relaxed">
              Koperasi simpan pinjam yang melayani masyarakat desa dengan prinsip gotong royong, kekeluargaan, dan
              kepercayaan.
            </p>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-blue-300" />
              <span className="text-sm text-blue-300">Terdaftar & Diawasi Dinas Koperasi</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Layanan Utama</h4>
            <ul className="space-y-3 text-blue-200">
              <li className="hover:text-white transition-colors cursor-pointer">Simpanan Sukarela</li>
              <li className="hover:text-white transition-colors cursor-pointer">Pinjaman Usaha Mikro</li>
              <li className="hover:text-white transition-colors cursor-pointer">Kredit Konsumtif</li>
              <li className="hover:text-white transition-colors cursor-pointer">Simpanan Berjangka</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Informasi</h4>
            <ul className="space-y-3 text-blue-200">
              <li className="hover:text-white transition-colors cursor-pointer">Tentang Kami</li>
              <li className="hover:text-white transition-colors cursor-pointer">Visi & Misi</li>
              <li className="hover:text-white transition-colors cursor-pointer">Pengurus</li>
              <li className="hover:text-white transition-colors cursor-pointer">Prestasi</li>
              <li className="hover:text-white transition-colors cursor-pointer">Berita</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Bantuan</h4>
            <ul className="space-y-3 text-blue-200">
              <li className="hover:text-white transition-colors cursor-pointer">Cara Daftar</li>
              <li className="hover:text-white transition-colors cursor-pointer">Syarat & Ketentuan</li>
              <li className="hover:text-white transition-colors cursor-pointer">Tanya Jawab</li>
              <li className="hover:text-white transition-colors cursor-pointer">Kontak</li>
              <li className="hover:text-white transition-colors cursor-pointer">Pengaduan</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-200 mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} KSP Satrio Mulia Arthomoro. Semua hak dilindungi undang-undang.</p>
              <p className="text-sm">Terdaftar dan diawasi oleh Dinas Koperasi dan UMKM</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-green-100 text-green-800">
                <Shield className="w-3 h-3 mr-1" />
                Koperasi Sehat
              </Badge>
              <Badge className="bg-blue-100 text-blue-800">
                <Award className="w-3 h-3 mr-1" />
                Berprestasi 2023
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
