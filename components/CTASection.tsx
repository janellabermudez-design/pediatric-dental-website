import { Button } from "@/components/ui/button"
import { Calendar, Phone } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-16 px-4 bg-green-600">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-white mb-4">Ready to Schedule Your Child's Visit?</h3>
        <p className="text-xl text-green-100 mb-8">
          Join hundreds of happy families who trust us with their children's dental care.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            <Calendar className="w-5 h-5 mr-2" />
            Schedule Online
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-700 bg-transparent">
            <Phone className="w-5 h-5 mr-2" />
            Call (555) 123-4567
          </Button>
        </div>
      </div>
    </section>
  )
}
