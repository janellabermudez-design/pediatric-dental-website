import { Button } from "@/components/ui/button"
import { Calendar, Phone } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="pt-6 pb-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center items-center mb-8 px-2 md:px-8">
          <Image
            src="/jungle-banner.png"
            alt="Jungle banner"
            width={1200}
            height={320}
            className="max-w-full h-auto rounded-lg"
            priority
          />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Gentle, Fun Dental Care for Your Little Ones
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          We create a welcoming, fear-free environment where children feel comfortable and excited about dental
          health. Our experienced pediatric team makes every visit a positive experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            <Calendar className="w-5 h-5 mr-2" />
            Book Your Child's Visit
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-green-500 text-green-600 hover:bg-green-50 bg-transparent"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call (555) 123-4567
          </Button>
        </div>
      </div>
    </section>
  )
}
