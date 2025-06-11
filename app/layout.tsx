import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Temizvio - Hijyenin Dijital Hali",
  description:
    "Temizlik hizmetine ihtiyacı olan kişilerle profesyonel temizlikçileri bir araya getiren dijital platform. Yakında 81 ilde hizmetinizde!",
  keywords: "temizlik, temizlik hizmeti, ev temizliği, ofis temizliği, temizlikçi, dijital platform",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
