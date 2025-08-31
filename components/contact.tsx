import { Mail, MapPin, Phone, MessageSquare } from "lucide-react"

export function Contact() {
  const phone = "+91-9040153175"
  const whatsAppNumber = "919040153175"
  const email = "sahoo.mangal@gmail.com"
  const address = "shop 9, Plot no-3, Infocity Ave, Chandrasekharpur, Bhubaneswar, Odisha 751024"

  return (
    <section className="bg-gradient-to-br from-[#fff8f1] via-[#fbeee6] to-[#f7d9c4] py-16" id="contact">
      <div className="mx-auto max-w-5xl px-4 sm:px-8 py-12 md:py-16 rounded-2xl shadow-xl bg-white/90 backdrop-blur-md">
        <h2 className="font-sans text-3xl font-extrabold text-[#231f20] tracking-tight mb-8 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-[#d35400] mt-1" size={24} aria-hidden="true" />
              <div>
                <p className="text-base font-semibold text-[#231f20]">Address</p>
                <p className="text-[#231f20] text-lg">{address}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-[#27ae60] mt-1" size={24} aria-hidden="true" />
              <div>
                <p className="text-base font-semibold text-[#231f20]">Phone</p>
                <a className="text-[#231f20] underline text-lg hover:text-[#27ae60] transition" href={`tel:${phone.replace(/\s/g, "")}`}>
                  {phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MessageSquare className="text-[#25d366] mt-1" size={24} aria-hidden="true" />
              <div>
                <p className="text-base font-semibold text-[#231f20]">WhatsApp</p>
                <a
                  className="text-[#231f20] underline text-lg hover:text-[#25d366] transition"
                  href={`https://wa.me/${whatsAppNumber}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-[#2980b9] mt-1" size={24} aria-hidden="true" />
              <div>
                <p className="text-base font-semibold text-[#231f20]">Email</p>
                <a className="text-[#231f20] underline text-lg hover:text-[#2980b9] transition" href={`mailto:${email}`}>
                  {email}
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border-2 border-[#f7d9c4] shadow-lg bg-white flex items-center justify-center">
              <iframe
                title="Melbourne Pizza Location"
                className="h-full w-full min-h-[250px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.955825552988!2d85.8109802!3d20.343443499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190953feef17e5%3A0xfbcca2798d6281ab!2sMelbourne%20Pizza!5e0!3m2!1sen!2sin!4v1756597918079!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen={true}
              />
            </div>
            <a href='https://maps.app.goo.gl/NPHXFWWLWruDJPnq5' target='_blank' rel='noopener noreferrer' className='mt-4 inline-block px-5 py-2 rounded-full bg-[#231f20] text-white font-semibold shadow hover:bg-[#d35400] transition'>
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
