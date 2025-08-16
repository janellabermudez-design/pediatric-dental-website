import { Card, CardContent } from "@/components/ui/card"

export default function InsuranceSection() {
  return (
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
  )
}
