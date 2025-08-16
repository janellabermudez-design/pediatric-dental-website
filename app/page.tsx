
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import ServicesSection from "@/components/ServicesSection"
import TeamSection from "@/components/TeamSection"
import InsuranceSection from "@/components/InsuranceSection"
import LocationSection from "@/components/LocationSection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <InsuranceSection />
      <LocationSection />
      <CTASection />
      <Footer />
    </div>
  )
}
