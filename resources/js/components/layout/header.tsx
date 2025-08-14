import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { LogIn } from "lucide-react"

interface HeaderProps {
  className?: string
}

export default function Header({ className = "" }: HeaderProps) {
  const [scrollY, setScrollY] = useState(0)
  const [currentPath, setCurrentPath] = useState("")

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)

    // Set current path
    setCurrentPath(window.location.pathname)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => {
    if (path === "/" && currentPath === "/") return true
    if (path !== "/" && currentPath.includes(path)) return true
    return false
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/90 backdrop-blur-sm"
      } border-b border-blue-100 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-1">
            <img
              src="/assets/images/logo.png"
              alt="KSP Smart Logo"
              className="w-15 h-15 object-contain"
            />
            <div>
              <span className="text-xl font-bold text-blue-900">KSP Smart</span>
              <div className="text-xs text-blue-600 font-medium">Satrio Mulia Arthomoro</div>
            </div>
          </div>
          <div className="hidden lg:flex space-x-8">
            <a
              href="/"
              className={`transition-colors font-medium relative ${
                isActive("/")
                  ? "text-blue-600 after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Beranda
            </a>
            <a
              href="/tentang"
              className={`transition-colors font-medium relative ${
                isActive("/tentang")
                  ? "text-blue-600 after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Tentang
            </a>
            <a
              href="/layanan"
              className={`transition-colors font-medium relative ${
                isActive("/layanan")
                  ? "text-blue-600 after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Layanan
            </a>
            <a
              href="/prestasi"
              className={`transition-colors font-medium relative ${
                isActive("/prestasi")
                  ? "text-blue-600 after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Prestasi
            </a>
            <a
              href="/keanggotaan"
              className={`transition-colors font-medium relative ${
                isActive("/keanggotaan")
                  ? "text-blue-600 after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Keanggotaan
            </a>
            <a
              href="/kontak"
              className={`transition-colors font-medium relative ${
                isActive("/kontak")
                  ? "text-blue-600 after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Kontak
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg cursor-pointer"
              onClick={() => window.location.href = '/login'}
            >
              <LogIn className="w-4 h-4" />
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
