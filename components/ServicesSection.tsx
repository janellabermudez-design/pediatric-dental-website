import { Card, CardContent } from "@/components/ui/card"
import { Shield, Heart, Users, Star, Phone } from "lucide-react"

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h3>
          <p className="text-lg text-gray-600">Comprehensive dental care designed specifically for children</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Preventive Care</h4>
              <p className="text-gray-600">
                Regular cleanings, fluoride treatments, and dental sealants to keep teeth healthy and cavity-free.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Infant Oral Health</h4>
              <p className="text-gray-600">
                Early dental exams and guidance for babies and toddlers to establish healthy oral habits from the start.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Restorative Care</h4>
              <p className="text-gray-600">
                Gentle fillings, crowns, and other treatments to restore your child's smile with minimal discomfort.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Sedation Options</h4>
              <p className="text-gray-600">
                Safe sedation methods to help anxious children feel comfortable during dental procedures.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Emergency Care</h4>
              <p className="text-gray-600">
                Prompt treatment for dental emergencies to relieve pain and protect your child's oral health.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Orthodontic Evaluations</h4>
              <p className="text-gray-600">
                Early assessment of tooth alignment and bite to determine if orthodontic treatment may be needed.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
