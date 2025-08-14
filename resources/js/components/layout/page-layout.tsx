import { ReactNode } from "react"
import Header from "./header"
import Footer from "./footer"

interface PageLayoutProps {
  children: ReactNode
  className?: string
  headerClassName?: string
  footerClassName?: string
}

export default function PageLayout({ 
  children, 
  className = "", 
  headerClassName = "",
  footerClassName = ""
}: PageLayoutProps) {
  return (
    <div className={`min-h-screen bg-white ${className}`}>
      <Header className={headerClassName} />
      <main className="pt-16">
        {children}
      </main>
      <Footer className={footerClassName} />
    </div>
  )
}
