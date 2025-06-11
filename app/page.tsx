import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Shield, Clock, Users, Target, Eye, Mail, Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/temizvio-logo.png"
                alt="Temizvio Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <h1 className="text-2xl font-bold text-[#1D2D50]">Temizvio</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-[#6F1D1B] transition-colors">
                Ana Sayfa
              </Link>
              <Link href="/iletisim" className="text-gray-700 hover:text-[#6F1D1B] transition-colors">
                İletişim
              </Link>
            </nav>
            <Button asChild className="bg-[#6F1D1B] hover:bg-[#6F1D1B]/90">
              <Link href="/iletisim">Bize Ulaşın</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-[#1D2D50] text-white px-4 py-2 text-sm">Yakında 81 İlde Hizmetinizde!</Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-[#1D2D50] mb-6">Hijyenin Dijital Hali</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Temizlik artık parmaklarınızın ucunda! Evinize, işinize, hayatınıza temizlik getiren platform çok yakında.
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-[#6F1D1B] hover:bg-[#6F1D1B]/90 px-8 py-3">
              <Link href="/iletisim">Bize Ulaşın</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What is Temizvio Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-[#1D2D50] mb-4">Temizvio Nedir?</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-[#6F1D1B] to-[#1D2D50] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-[#6F1D1B]">Temizvio</strong>, temizlik hizmetine ihtiyacı olan kişilerle (ev
                sahipleri, çalışan bireyler, ofisler, apartman yöneticileri vb.) profesyonel temizlikçiler, bağımsız
                çalışanlar ve temizlik şirketlerini bir araya getiren dijital bir platformdur.
              </p>

              <div className="grid gap-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-[#6F1D1B] mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Kullanıcılar konumlarını girerek kendilerine en yakın temizlik hizmeti sağlayıcılarını görebilir.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-[#6F1D1B] mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Fiyat aralıklarını karşılaştırabilir, yorum ve puanlara göre seçim yapabilirler.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-[#6F1D1B] mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Temizlik hizmeti veren birey ve kurumlar platforma ilan vererek hizmet verebilecekleri mahalleleri
                    belirtir.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-[#6F1D1B] mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Temizlik öncesi, sırası ve sonrası süreç takibi, güvenli ödeme ve puanlama işlemleri.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Temizlik Hizmetleri"
                width={500}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#6F1D1B] text-white p-4 rounded-xl shadow-lg">
                <Clock className="w-8 h-8 mb-2" />
                <p className="font-semibold">7/24 Hizmet</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#6F1D1B] to-[#1D2D50] text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Yakında 81 İlde Hizmetinizde!</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Web sitemiz çok yakında yayında olacak. İlk etapta Türkiye genelindeki tüm illerde erişilebilir olmayı
            hedefliyoruz.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold">81</div>
              <div className="text-sm opacity-80">İl</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">7/24</div>
              <div className="text-sm opacity-80">Hizmet</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm opacity-80">Güvenli</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">∞</div>
              <div className="text-sm opacity-80">Temizlik</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 text-[#6F1D1B] mr-3" />
                  <h4 className="text-2xl font-bold text-[#1D2D50]">Vizyon</h4>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Türkiye'nin en büyük temizlik hizmetleri platformu olmak; güvenilir, hızlı ve dijital temizlik
                  deneyimi sunmak.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-[#6F1D1B] mr-3" />
                  <h4 className="text-2xl font-bold text-[#1D2D50]">Misyon</h4>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    • Temizlik hizmetini ulaşılabilir, şeffaf ve etkili hale getirmek.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    • Temizlik sektöründe çalışan bireylere ve şirketlere yeni bir kazanç kapısı oluşturmak.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-[#1D2D50] mb-6">Hazır mısınız?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Temizlik hizmetlerinin geleceğine katılın. Hem hizmet alın, hem de hizmet verin!
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-[#6F1D1B] hover:bg-[#6F1D1B]/90 px-8 py-3">
              <Link href="/iletisim">İletişime Geç</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1D2D50] text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/images/temizvio-logo.png"
                  alt="Temizvio Logo"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
                <h5 className="text-xl font-bold">Temizvio</h5>
              </div>
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
