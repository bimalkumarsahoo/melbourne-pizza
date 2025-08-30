import { Mail, MapPin, Phone, MessageSquare } from "lucide-react"

export function Contact() {
  const phone = "+91 98765 43210"
  const whatsAppNumber = "919876543210"
  const email = "hello@melbournepizza.in"
  const address = "Nayapalli, Bhubaneswar, Odisha 751012"

  return (
    <section className="bg-gray-50" id="contact">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-16">
        <h2 className="font-sans text-2xl font-bold text-gray-900">Contact Us</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="text-gray-900" size={20} aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-gray-900">Address</p>
                <p className="text-gray-900">{address}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="text-gray-900" size={20} aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-gray-900">Phone</p>
                <a className="text-gray-900 underline" href={`tel:${phone.replace(/\s/g, "")}`}>
                  {phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MessageSquare className="text-gray-900" size={20} aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-gray-900">WhatsApp</p>
                <a
                  className="text-gray-900 underline"
                  href={`https://wa.me/${whatsAppNumber}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="text-gray-900" size={20} aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-gray-900">Email</p>
                <a className="text-gray-900 underline" href={`mailto:${email}`}>
                  {email}
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="aspect-[4/3] overflow-hidden rounded-lg border border-gray-50">
              <iframe
                title="Melbourne Pizza Location"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Nayapalli%2C%20Bhubaneswar%2C%20Odisha%20751012&output=embed"
              />
            </div>
            <p className="mt-2 text-xs text-gray-900">Map location is illustrative. Replace with your exact address.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
