import Image from "next/image"

export default function TeamSection() {
  return (
    <section className="py-16 px-4 bg-green-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Pediatric Dentist</h3>
          <p className="text-lg text-gray-600">Caring for your child's smile with expertise and compassion</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
              <Image
                src="/dental-hygienist-headshot.png"
                alt="Dr. Yani"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-xl font-semibold mb-2">Dr. Yani</h4>
            <p className="text-green-600 font-medium mb-3">Pediatric Dentist</p>
            <p className="text-gray-600 text-sm text-left max-w-xl mx-auto">
              Yani is a dedicated dental professional with a strong passion for pediatric dentistry. She earned her Doctor of Dental Surgery degree from a top-tier dental school, where she had the opportunity to provide care in rural and underserved communities—an experience that deepened her commitment to patient-focused care.
              <br /><br />
              After dental school, Yani completed an Advanced Education in General Dentistry (AEGD) residency, which solidified her passion for pediatric dentistry and inspired her to pursue advanced specialty training. She recently completed her pediatric dental residency, where she received focused training in preventive care, behavior guidance, and treating children with special health care needs.
              <br /><br />
              Yani is committed to helping children develop positive, comfortable experiences at the dentist and values building lasting relationships with families to support lifelong oral health. She is also fluent in Spanish, which allows her to provide inclusive care to a diverse patient population. Outside of dentistry, Yani enjoys staying active through running and hiking, as well as trying out new recipes and exploring different cuisines.
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
