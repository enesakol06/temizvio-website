import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Users, Building, MessageCircle, Mail, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/temizvio-logo.png"
                alt="Temizvio Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <h1 className="text-2xl font-bold text-[#1D2D50]">Temizvio</h1>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-[#6F1D1B] transition-colors">
                Ana Sayfa
              </Link>
              <Link href="/iletisim" className="text-[#6F1D1B] font-semibold">
                İletişim
              </Link>
            </nav>
            <Button asChild className="bg-[#6F1D1B] hover:bg-[#6F1D1B]/90">
              <Link href="/">Ana Sayfa</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D2D50] mb-6">Bize Ulaşın</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Sorularınız mı var? Temizlik hizmeti almak veya vermek mi istiyorsunuz? Size yardımcı olmaktan mutluluk
            duyarız!
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <MessageCircle className="w-16 h-16 text-[#6F1D1B] mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-[#1D2D50] mb-4">İletişim Formu</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Aşağıdaki formu doldurarak bizimle iletişime geçebilirsiniz. En kısa sürede size geri dönüş yapacağız.
            </p>
          </div>

          <div className="max-w-md mx-auto mb-12 text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <Mail className="w-5 h-5 text-[#6F1D1B]" />
                <a href="mailto:temizvioofficial@gmail.com" className="hover:text-[#6F1D1B] transition-colors">
                  temizvioofficial@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Instagram className="w-5 h-5 text-[#6F1D1B]" />
                <a
                  href="https://instagram.com/temizvio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#6F1D1B] transition-colors"
                >
                  @temizvio
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl border-0">
              <CardContent className="p-0">
                <iframe
                  src="https://forms.gle/X9c2VT62hNx68syb9?embedded=true"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="rounded-lg"
                >
                  Yükleniyor…
                </iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <Building className="w-12 h-12 text-[#6F1D1B] mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-[#1D2D50] mb-3">Kurumsal Müşteriler</h4>
                <p className="text-gray-600">Ofisler, apartmanlar ve büyük işletmeler için özel çözümler sunuyoruz.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-[#6F1D1B] mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-[#1D2D50] mb-3">Bireysel Müşteriler</h4>
                <p className="text-gray-600">Ev temizliği için güvenilir ve profesyonel hizmet sağlayıcıları.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <Sparkles className="w-12 h-12 text-[#6F1D1B] mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-[#1D2D50] mb-3">Özel Hizmetler</h4>
                <p className="text-gray-600">Taşınma, tadilat sonrası ve özel etkinlik temizlikleri.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1D2D50] text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Image
                  src="/images/temizvio-logo.png"
                  alt="Temizvio Logo"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
                <h5 className="text-xl font-bold">Temizvio</h5>
              </Link>
              <p className="text-gray-300 mb-4">Hijyenin dijital hali - Temizlik artık parmaklarınızın ucunda.</p>
            </div>

            <div>
              <h6 className="font-semibold mb-4">Hızlı Linkler</h6>
              <div className="space-y-2">
                <Link href="/" className="block text-gray-300 hover:text-white transition-colors">
                  Ana Sayfa
                </Link>
                <Link href="/iletisim" className="block text-gray-300 hover:text-white transition-colors">
                  İletişim
                </Link>
              </div>
            </div>

            <div>
              <h6 className="font-semibold mb-4">İletişim</h6>
              <div className="space-y-2">
                <p className="text-gray-300">
                  Web sitemiz yakında yayında!
                  <br />
                  Sorularınız için iletişim formunu kullanabilirsiniz.
                </p>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:temizvioofficial@gmail.com" className="hover:text-white transition-colors">
                    temizvioofficial@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Instagram className="w-4 h-4" />
                  <a
                    href="https://instagram.com/temizvio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    @temizvio
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 Temizvio. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
