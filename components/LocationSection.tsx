import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock } from "lucide-react"
import Image from "next/image"

export default function LocationSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h3>
          <p className="text-lg text-gray-600">Conveniently located with easy parking</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Address</h4>
                      <p className="text-gray-600">
                        123 Children's Way, Suite 200<br />Hometown, ST 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <a href="tel:+15551234567" className="text-blue-600 hover:text-blue-700">
                        (555) 123-4567
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Office Hours</h4>
                      <div className="text-gray-600 text-sm">
                        <p>Monday - Thursday: 8:00 AM - 5:00 PM</p>
                        <p>Friday: 8:00 AM - 3:00 PM</p>
                        <p>Saturday: 9:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                        <p className="mt-2 text-red-600">Emergency calls accepted 24/7</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-green-900 mb-2">Parking Information</h5>
                    <p className="text-sm text-green-800">
                      Free parking is available in the lot behind our building. Additional street parking is also available.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-500">Google Maps Embed Would Go Here</p>
            </div>
            <div className="mt-4">
              <Image
                src="/pediatric-dental-office-exterior.png"
                alt="Little Smiles Pediatric Dentistry Office"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
