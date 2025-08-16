import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <h4 className="text-xl font-bold">Little Smiles Pediatric Dentistry</h4>
        </div>
        <p className="text-gray-400 mb-4">Creating healthy smiles for life</p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
          <p>123 Children's Way, Suite 200, Hometown, ST 12345</p>
          <a href="tel:+15551234567" className="text-green-400 hover:text-green-300">
            (555) 123-4567
          </a>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-800 text-sm text-gray-400">
          <p>&copy; 2024 Little Smiles Pediatric Dentistry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
