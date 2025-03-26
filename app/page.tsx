"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Fish, Leaf, LineChart, Sprout, CircleDollarSign, Menu, X, Droplets, TreesIcon as Plant  } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Plant className="h-6 w-6 text-green-600" />
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">Agrimarliv</span>
                <span className="text-xs text-muted-foreground leading-tight">Technology Indonesia</span>
              </div>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection("hero")} className="text-sm font-medium text-primary">
              Beranda
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Tentang Kami
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Layanan
            </button>
            <button
              onClick={() => scrollToSection("technology")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Teknologi
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Kontak
            </button>
          </nav>
          <div className="flex items-center gap-4">
            <Button className="bg-green-600 hover:bg-green-700">Hubungi Kami</Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 inset-x-0 bg-background border-b shadow-lg z-50">
            <div className="container py-4 flex flex-col space-y-4">
              <button onClick={() => scrollToSection("hero")} className="text-sm font-medium py-2 text-primary">
                Beranda
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium py-2 text-muted-foreground transition-colors hover:text-primary"
              >
                Tentang Kami
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm font-medium py-2 text-muted-foreground transition-colors hover:text-primary"
              >
                Layanan
              </button>
              <button
                onClick={() => scrollToSection("technology")}
                className="text-sm font-medium py-2 text-muted-foreground transition-colors hover:text-primary"
              >
                Teknologi
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium py-2 text-muted-foreground transition-colors hover:text-primary"
              >
                Kontak
              </button>
            </div>
          </div>
        )}
      </header>
      <main className="flex-1">
        <section id="hero" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Plant className="h-8 w-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold">Agricultur Maritime Livestock</h2>
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Agrimarliv Technology Indonesia
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Teknologi cerdas berbasis IoT dan kecerdasan buatan (AI) untuk optimalisasi pertanian, perkebunan,
                    perikanan, dan peternakan di Indonesia.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Pelajari Lebih Lanjut
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Lihat Demo
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="Logo Agrimarliv no bg.png"
                  width={550}
                  height={550}
                  alt="Agrimarliv Integrated Solutions"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-600">
                  Tentang Kami
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Agrimarliv Technology Indonesia</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Kami adalah perusahaan teknologi yang mengintegrasikan solusi cerdas untuk sektor pertanian,
                  perkebunan, perikanan, dan peternakan meningkatkan produktivitas dan keberlanjutan sistem pangan
                  Indonesia.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-green-100 p-3">
                  <Sprout className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Didirikan 2025</h3>
                <p className="text-center text-muted-foreground">
                  Berpengalaman dalam bidang Riset dan Inovasi Teknologi
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-blue-100 p-3">
                  <LineChart className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">10+ Project IoT</h3>
                <p className="text-center text-muted-foreground">
                  Telah menyelesaikan puluhan project IoT di berbagai sektor
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-purple-100 p-3">
                  <svg
                    className="h-6 w-6 text-purple-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">10+ Ahli</h3>
                <p className="text-center text-muted-foreground">
                  Tim kami juga di dukung oleh ahli tanaman, IoT, Kecerdasan Buatan (AI), Cyber Security dan berbagai ahli dibidang teknologi lainnya
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-600">Visi</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Integrasi Tiga Sektor Utama</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nama Agrimarliv mencerminkan visi kami untuk mengintegrasikan tiga sektor utama dalam sistem pangan
                  berkelanjutan.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-green-100 p-4">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-center">Agriculture</h3>
                <p className="text-center text-muted-foreground">
                  <span className="font-semibold">Pertanian/Perkebunan</span> - Kami mengembangkan teknologi untuk
                  meningkatkan produktivitas tanaman pangan, hortikultura, dan perkebunan dengan pendekatan presisi dan
                  berkelanjutan.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-blue-100 p-4">
                  <Fish className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-center">Maritime</h3>
                <p className="text-center text-muted-foreground">
                  <span className="font-semibold">Perikanan</span> - Teknologi kami mendukung budidaya perikanan
                  air tawar dan laut dengan sistem monitoring kualitas air dan manajemen pakan otomatis.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-purple-100 p-4">
                  <svg
                    className="h-8 w-8 text-purple-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8 3v2M4 7h16M7 21h10a2 2 0 0 0 2-2V11H5v8a2 2 0 0 0 2 2z" />
                    <path d="M12 11v8M8 11v8M16 11v8" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-center">Livestock</h3>
                <p className="text-center text-muted-foreground">
                  <span className="font-semibold">Peternakan</span> - Kami menyediakan sistem pemantauan kesehatan
                  ternak, manajemen pemberian pakan, dan optimalisasi produksi dengan bantuan kecerdasan buatan.
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <p className="max-w-[900px] mx-auto text-muted-foreground md:text-lg">
                Dengan mengintegrasikan ketiga sektor ini, Agrimarliv menciptakan ekosistem teknologi yang komprehensif
                untuk mendukung sistem pangan yang lebih efisien, produktif, dan berkelanjutan di Indonesia.
              </p>
              <div className="mt-8">
                <Button className="bg-green-600 hover:bg-green-700">Pelajari Visi Kami</Button>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-600">
                  Layanan Kami
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Solusi Teknologi Terintegrasi</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Kami menyediakan berbagai solusi teknologi untuk meningkatkan efisiensi dan produktivitas di tiga
                  sektor utama.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <div className="flex flex-col items-start rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-green-100 p-3 mb-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Solusi Pertanian Cerdas</h3>
                <p className="text-muted-foreground mb-4">
                  Teknologi presisi untuk optimalisasi irigasi, pemupukan, dan pemantauan kesehatan tanaman.
                </p>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Sistem penyiraman otomatis
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Pemupukan presisi berbasis data
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Deteksi penyakit tanaman
                  </li>
                </ul>
                <Button variant="outline" className="mt-auto">
                  Pelajari Lebih Lanjut
                </Button>
              </div>
              <div className="flex flex-col items-start rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-blue-100 p-3 mb-4">
                  <Fish className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Sistem Akuakultur Digital</h3>
                <p className="text-muted-foreground mb-4">
                  Solusi pemantauan dan otomatisasi untuk budidaya perikanan air tawar dan laut yang optimal.
                </p>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Monitoring kualitas air realtime
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Sistem pemberian pakan otomatis
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Deteksi penyakit ikan
                  </li>
                </ul>
                <Button variant="outline" className="mt-auto">
                  Pelajari Lebih Lanjut
                </Button>
              </div>
              <div className="flex flex-col items-start rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-purple-100 p-3 mb-4">
                  <svg
                    className="h-6 w-6 text-purple-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8 3v2M4 7h16M7 21h10a2 2 0 0 0 2-2V11H5v8a2 2 0 0 0 2 2z" />
                    <path d="M12 11v8M8 11v8M16 11v8" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Manajemen Peternakan Cerdas</h3>
                <p className="text-muted-foreground mb-4">
                  Teknologi monitoring dan optimalisasi untuk meningkatkan kesehatan dan produktivitas ternak.
                </p>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Pemantauan kesehatan ternak
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Optimalisasi pakan dan nutrisi
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Prediksi hasil produksi
                  </li>
                </ul>
                <Button variant="outline" className="mt-auto">
                  Pelajari Lebih Lanjut
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="technology" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-600">
                  Teknologi Kami
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Inovasi untuk Sistem Pangan Modern</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Kami menggunakan teknologi terkini untuk memberikan solusi yang efisien, terintegrasi, dan
                  berkelanjutan.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-12">
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="IoT Technology"
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Internet of Things (IoT)</h3>
                  <p className="text-muted-foreground">
                    Jaringan sensor canggih yang memantau kondisi lingkungan, tanaman, air, dan ternak secara real-time
                    untuk pengambilan keputusan yang tepat.
                  </p>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-4 rounded-full bg-green-100 p-2">
                      <svg
                        className="h-4 w-4 text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">Sensor Multi-parameter</h4>
                      <p className="text-sm text-muted-foreground">
                        Memantau kelembaban, suhu, kualitas air, aktivitas ternak, dan banyak parameter lainnya.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 rounded-full bg-green-100 p-2">
                      <svg
                        className="h-4 w-4 text-green-600"
                        xmlns="bg3.png"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">Manajemen Jarak Jauh</h4>
                      <p className="text-sm text-muted-foreground">
                        Akses dan kontrol sistem dari mana saja melalui aplikasi mobile atau dashboard web.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 rounded-full bg-green-100 p-2">
                      <svg
                        className="h-4 w-4 text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">Otomatisasi Terintegrasi</h4>
                      <p className="text-sm text-muted-foreground">
                        Sistem yang dapat mengendalikan peralatan secara otomatis berdasarkan data yang terkumpul.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-16">
              <div className="flex flex-col justify-center space-y-4 order-2 md:order-1">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Kecerdasan Buatan & Big Data</h3>
                  <p className="text-muted-foreground">
                    Algoritma canggih yang menganalisis data dari ketiga sektor untuk menghasilkan prediksi dan
                    rekomendasi yang akurat.
                  </p>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-4 rounded-full bg-green-100 p-2">
                      <svg
                        className="h-4 w-4 text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">Deteksi Dini Masalah</h4>
                      <p className="text-sm text-muted-foreground">
                        Identifikasi penyakit tanaman, ikan, dan ternak melalui analisis gambar dan data dengan akurasi
                        tinggi.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 rounded-full bg-green-100 p-2">
                      <svg
                        className="h-4 w-4 text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">Prediksi Hasil Produksi</h4>
                      <p className="text-sm text-muted-foreground">
                        Model prediktif yang memperkirakan hasil panen, produksi perikanan, dan hasil peternakan.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 rounded-full bg-green-100 p-2">
                      <svg
                        className="h-4 w-4 text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">Sistem Pembelajaran Berkelanjutan</h4>
                      <p className="text-sm text-muted-foreground">
                        Platform yang terus belajar dan meningkatkan akurasi seiring dengan bertambahnya data dari
                        lapangan.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center order-1 md:order-2">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="AI and Big Data Analytics"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-16">
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Integrated Data Platform"
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Platform Integrasi Data</h3>
                  <p className="text-muted-foreground">
                    Ekosistem digital yang menghubungkan data dari sektor pertanian, maritim, dan peternakan untuk
                    optimalisasi dan sinergi.
                  </p>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-4 rounded-full bg-green-100 p-2">
                      <svg
                        className="h-4 w-4 text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">Dashboard Terpadu</h4>
                      <p className="text-sm text-muted-foreground">
                        Visualisasi data dari ketiga sektor dalam satu platform yang mudah digunakan.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 rounded-full bg-green-100 p-2">
                      <svg
                        className="h-4 w-4 text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">API Terbuka</h4>
                      <p className="text-sm text-muted-foreground">
                        Kemampuan untuk mengintegrasikan dengan sistem pihak ketiga dan alat analisis lainnya.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 rounded-full bg-green-100 p-2">
                      <svg
                        className="h-4 w-4 text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">Analisis Terintegrasi</h4>
                      <p className="text-sm text-muted-foreground">
                        Wawasan komprehensif yang menggabungkan data dari berbagai sumber untuk solusi yang holistik.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-600">
                  Keunggulan Kami
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Mengapa Memilih Agrimarliv?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Kami menawarkan solusi teknologi terintegrasi dengan berbagai keunggulan untuk seluruh rantai nilai
                  pangan.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
              <div className="flex flex-col items-center text-center rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-green-100 p-3 mb-4">
                  <svg
                    className="h-6 w-6 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Integrasi Tiga Sektor</h3>
                <p className="text-muted-foreground">
                  Solusi kami menghubungkan pertanian, perkebunan, perikanan, dan peternakan dalam satu ekosistem
                  teknologi.
                </p>
              </div>
              <div className="flex flex-col items-center text-center rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-green-100 p-3 mb-4">
                  <CircleDollarSign className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Imbal Hasil Tinggi</h3>
                <p className="text-muted-foreground">
                  Kami sudah menghitung keuntungan bagi hasil yang tinggi bagi para investor yang berminat untuk
                  investasi pengembangan lahan dan teknologi kami.
                </p>
              </div>
              <div className="flex flex-col items-center text-center rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-green-100 p-3 mb-4">
                  <svg
                    className="h-6 w-6 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Keamanan Data</h3>
                <p className="text-muted-foreground">
                  Kami menjamin keamanan data pelanggan dengan sistem enkripsi dan perlindungan data terkini.
                </p>
              </div>
              <div className="flex flex-col items-center text-center rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-green-100 p-3 mb-4">
                  <svg
                    className="h-6 w-6 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Tim Ahli Multi-disiplin</h3>
                <p className="text-muted-foreground">
                  Tim kami terdiri dari ahli pertanian, perikanan, peternakan, dan teknologi informasi yang
                  berpengalaman.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-600">
                    Hubungi Kami
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Siap Meningkatkan Produktivitas Anda?
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Hubungi kami untuk konsultasi gratis dan demo solusi terintegrasi kami.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg
                      className="mr-4 h-5 w-5 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <div>
                      <h3 className="font-bold">Telepon</h3>
                      <p className="text-muted-foreground">+62 21 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="mr-4 h-5 w-5 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-muted-foreground">info@agrimarliv.co.id</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="mr-4 h-5 w-5 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <div>
                      <h3 className="font-bold">Alamat</h3>
                      <p className="text-muted-foreground">Jl. Teknologi Terpadu No. 123, Jakarta Selatan, Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full max-w-md space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                  <div className="space-y-2 text-center">
                    <h3 className="text-2xl font-bold">Kirim Pesan</h3>
                    <p className="text-muted-foreground">
                      Isi formulir di bawah ini dan tim kami akan menghubungi Anda segera.
                    </p>
                  </div>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="first-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Nama Depan
                        </label>
                        <input
                          id="first-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="last-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Nama Belakang
                        </label>
                        <input
                          id="last-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Telepon
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="+62 812 3456 7890"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Pesan
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Tulis pesan Anda di sini..."
                      />
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">Kirim Pesan</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Desain_tanpa_judul__3_-removebg-preview-ZH12vYiMniTp165LKXHvEbqcjTtOKl.png"
                  alt="Agrimarliv Technology Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-bold leading-tight">Agrimarliv</span>
                  <span className="text-xs text-muted-foreground leading-tight">Technology Indonesia</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Solusi teknologi terintegrasi untuk pertanian, perkebunan, perikanan, dan peternakan yang lebih
                produktif dan berkelanjutan.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Layanan</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Solusi Pertanian Cerdas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Sistem Akuakultur Digital
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Manajemen Peternakan Cerdas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Konsultasi Terintegrasi
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Perusahaan</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Karir
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Kontak
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Hubungi Kami</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <svg
                    className="mr-2 h-4 w-4 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +62 21 1234 5678
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-2 h-4 w-4 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  info@agrimarliv.co.id
                </li>
              </ul>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Agrimarliv Technology Indonesia. Hak Cipta Dilindungi.
          </div>
        </div>
      </footer>
    </div>
  )
}

