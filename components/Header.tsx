import { Phone, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Little Smiles Pediatric Dentistry</h1>
              <p className="text-sm text-gray-600">Creating healthy smiles for life</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:+15551234567" className="flex items-center space-x-2 text-green-600 hover:text-green-700">
              <Phone className="w-4 h-4" />
              <span className="font-medium">(555) 123-4567</span>
            </a>
            <Button className="bg-green-500 hover:bg-green-600">Schedule Appointment</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
