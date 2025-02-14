import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import StatsSection from "@/components/stats-section"
import ZohoEcosystem from "@/components/zoho-ecosystem"
import WhyZoho from "@/components/why-zoho"
import PromoBanner from "@/components/promo-banner"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <PromoBanner position="top" />
        <ServicesSection />
        <StatsSection />
        <ZohoEcosystem />
        <WhyZoho />
        <TestimonialsSection />
        <PromoBanner position="bottom" />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

