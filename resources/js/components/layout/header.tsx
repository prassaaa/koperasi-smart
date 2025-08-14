import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { LogIn, Menu, X } from "lucide-react"

interface HeaderProps {
  className?: string
}

export default function Header({ className = "" }: HeaderProps) {
  const [scrollY, setScrollY] = useState(0)
  const [currentPath, setCurrentPath] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
    <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <nav
        className={`max-w-7xl mx-auto transition-all duration-500 ease-out ${
          scrollY > 50
            ? "bg-white/80 backdrop-blur-xl shadow-2xl shadow-blue-500/10 border border-white/20"
            : "bg-white/70 backdrop-blur-lg shadow-xl shadow-blue-500/5 border border-white/30"
        } rounded-2xl ${className}`}
      >
        <div className="px-6 lg:px-8">
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
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg cursor-pointer hidden sm:flex"
              onClick={() => window.location.href = '/login'}
            >
              <LogIn className="w-4 h-4" />
              Login
            </Button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-white/20 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/20 mt-2 pt-4 pb-4 px-6">
            <div className="flex flex-col space-y-4">
              <a
                href="/"
                className={`transition-colors font-medium ${
                  isActive("/") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Beranda
              </a>
              <a
                href="/tentang"
                className={`transition-colors font-medium ${
                  isActive("/tentang") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tentang
              </a>
              <a
                href="/layanan"
                className={`transition-colors font-medium ${
                  isActive("/layanan") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Layanan
              </a>
              <a
                href="/prestasi"
                className={`transition-colors font-medium ${
                  isActive("/prestasi") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Prestasi
              </a>
              <a
                href="/keanggotaan"
                className={`transition-colors font-medium ${
                  isActive("/keanggotaan") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Keanggotaan
              </a>
              <a
                href="/kontak"
                className={`transition-colors font-medium ${
                  isActive("/kontak") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kontak
              </a>
              <Button
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg cursor-pointer w-full mt-4"
                onClick={() => {
                  window.location.href = '/login'
                  setIsMobileMenuOpen(false)
                }}
              >
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Button>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}
