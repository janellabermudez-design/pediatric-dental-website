import { Phone, MapPin, Clock, Star, Calendar, Shield, Heart, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function HomePage() {
  return (
  <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
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

      {/* Hero Section */}
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

      {/* Services Section */}
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
                  Early dental exams and guidance for babies and toddlers to establish healthy oral habits from the
                  start.
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

      {/* Meet the Team Section */}
  <section className="py-16 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Caring Team</h3>
            <p className="text-lg text-gray-600">Experienced professionals dedicated to your child's dental health</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                <Image
                  src="/pediatric-dentist-headshot.png"
                  alt="Dr. Sarah Johnson"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold mb-2">Dr. Sarah Johnson</h4>
              <p className="text-green-600 font-medium mb-3">Pediatric Dentist</p>
              <p className="text-gray-600 text-sm">
                Dr. Johnson has over 10 years of experience in pediatric dentistry. She believes in making every visit
                fun and educational, helping children develop positive relationships with dental care.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                <Image
                  src="/pediatric-dentist-headshot.png"
                  alt="Dr. Michael Chen"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold mb-2">Dr. Michael Chen</h4>
              <p className="text-green-600 font-medium mb-3">Pediatric Dentist</p>
              <p className="text-gray-600 text-sm">
                Dr. Chen specializes in treating children with special needs and dental anxiety. His patient, gentle
                approach helps even the most nervous children feel at ease.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                <Image
                  src="/dental-hygienist-headshot.png"
                  alt="Lisa Martinez"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold mb-2">Lisa Martinez</h4>
              <p className="text-green-600 font-medium mb-3">Dental Hygienist</p>
              <p className="text-gray-600 text-sm">
                Lisa loves working with kids and has a special talent for making cleanings fun. She's passionate about
                teaching children proper brushing and flossing techniques.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-lg p-8 text-center">
            <h4 className="text-2xl font-semibold mb-4">Our Philosophy</h4>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At Little Smiles Pediatric Dentistry, we believe that every child deserves a positive dental experience.
              We create a welcoming, fear-free environment where children feel safe and comfortable. Our goal is to
              establish healthy oral habits that will last a lifetime while making each visit enjoyable and educational.
            </p>
          </div>
        </div>
      </section>

      {/* Insurance & Payment Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Insurance & Payment Options</h3>
            <p className="text-lg text-gray-600">We make quality dental care accessible and affordable</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4">Accepted Insurance Plans</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Delta Dental</li>
                  <li>• Blue Cross Blue Shield</li>
                  <li>• Aetna</li>
                  <li>• Cigna</li>
                  <li>• MetLife</li>
                  <li>• United Healthcare</li>
                  <li>• And many more!</li>
                </ul>
                <p className="text-sm text-gray-500 mt-4">
                  Please call your insurance provider to confirm coverage and benefits before your visit.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4">Payment Methods</h4>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li>• Cash</li>
                  <li>• Credit Cards (Visa, MasterCard, American Express)</li>
                  <li>• Debit Cards</li>
                  <li>• CareCredit Financing</li>
                </ul>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-900 mb-2">No Insurance?</h5>
                  <p className="text-sm text-green-800">
                    We offer competitive self-pay rates and flexible payment plans. Contact us to discuss options that
                    work for your family.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
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
                          123 Children's Way, Suite 200
                          <br />
                          Hometown, ST 12345
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
                        Free parking is available in the lot behind our building. Additional street parking is also
                        available.
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

      {/* CTA Section */}
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

      {/* Footer */}
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
    </div>
  )
}
