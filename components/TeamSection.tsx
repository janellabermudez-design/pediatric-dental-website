import Image from "next/image"

export default function TeamSection() {
  return (
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
  )
}
