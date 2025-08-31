
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import Image from "next/image"

export default function MenuPage() {

  return (
    <main className="bg-white font-serif min-h-screen" style={{ fontFamily: 'var(--font-premium, \"Inter\", \"Playfair Display\", serif)' }}>
      <Navbar />
      <div className="pt-2">
        <header className="mx-auto max-w-6xl px-4 sm:px-6 py-10 md:py-14 text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#d35400] via-[#231f20] to-[#d35400] drop-shadow-lg" style={{ fontFamily: 'var(--font-premium, \"Playfair Display\", serif)' }}>Menu</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-800/80 font-medium">Explore our dine‑in menu and curated categories.</p>
        </header>

        <div className="mx-auto max-w-3xl mb-14 animate-fade-in">
          <Accordion type="single" collapsible className="rounded-2xl border-2 border-[#231f20]/10 bg-white/90 shadow-xl backdrop-blur-md">
            <AccordionItem value="dine-in">
              <AccordionTrigger className="text-xl font-bold text-[#231f20] hover:text-[#d35400] transition-colors duration-200 no-underline px-6 py-3">Dine-In Menu</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-3">
                  {[1,2,3,4,5].map((n) => (
                    <div key={n} className="flex flex-col items-center bg-gradient-to-br from-[#fbeee6] to-white rounded-2xl p-8 shadow-xl border border-[#231f20]/10 hover:scale-105 transition-transform duration-300 mb-4 mx-2">
                      <Image
                        src={`/menu/menu-${n}.png`}
                        alt={`Dine-In Menu Page ${n}`}
                        width={220}
                        height={320}
                        className="rounded-2xl mb-4 shadow-lg w-full h-auto object-cover border border-[#d35400]/20"
                        priority={n === 1}
                      />
                      <div className="font-extrabold text-xl text-[#231f20] mt-2 tracking-wide" style={{ fontFamily: 'var(--font-premium, \"Playfair Display\", serif)' }}>Menu Page {n}</div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mx-auto max-w-3xl animate-fade-in-up">
          <Accordion type="multiple" className="rounded-2xl border-2 border-[#231f20]/10 bg-white/90 shadow-xl divide-y divide-gray-100 backdrop-blur-md">
            {/* Veg Pizza */}
            {/* Veg Pizza */}
            <AccordionItem value="veg-pizza">
              <AccordionTrigger className="text-xl font-bold text-[#231f20] hover:text-[#d35400] transition-colors duration-200 no-underline px-6 py-3">Veg Pizza</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-3">
                  <div className="flex flex-col items-center bg-gradient-to-br from-[#fbeee6] to-white rounded-2xl p-8 shadow-xl border border-[#231f20]/10 hover:scale-105 transition-transform duration-300 mb-4 mx-2">
                    <Image src="/items/margherita.png" alt="Margherita" width={140} height={140} className="rounded-2xl mb-4 shadow-lg border border-[#d35400]/20" />
                    <div className="font-extrabold text-2xl text-[#231f20] tracking-wide" style={{ fontFamily: 'var(--font-premium, \"Playfair Display\", serif)' }}>Margherita</div>
                    <div className="text-gray-700 text-base mb-2">Classic cheese & tomato, fresh basil</div>
                    <div className="font-extrabold text-[#d35400] text-xl mt-1">₹299</div>
                  </div>
                  <div className="flex flex-col items-center bg-gradient-to-br from-[#fbeee6] to-white rounded-2xl p-8 shadow-xl border border-[#231f20]/10 hover:scale-105 transition-transform duration-300 mb-4 mx-2">
                    <Image src="/items/veg-supreme.png" alt="Veg Supreme" width={140} height={140} className="rounded-2xl mb-4 shadow-lg border border-[#d35400]/20" />
                    <div className="font-extrabold text-2xl text-[#231f20] tracking-wide" style={{ fontFamily: 'var(--font-premium, \"Playfair Display\", serif)' }}>Veg Supreme</div>
                    <div className="text-gray-700 text-base mb-2">Loaded with veggies & cheese</div>
                    <div className="font-extrabold text-[#d35400] text-xl mt-1">₹349</div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            {/* Non-Veg Pizza */}
            <AccordionItem value="non-veg-pizza">
              <AccordionTrigger className="text-xl font-bold text-[#231f20] hover:text-[#d35400] transition-colors duration-200 no-underline px-6 py-3">Non-Veg Pizza</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-3">
                  <div className="flex flex-col items-center bg-gradient-to-br from-[#fbeee6] to-white rounded-2xl p-8 shadow-xl border border-[#231f20]/10 hover:scale-105 transition-transform duration-300 mb-4 mx-2">
                    <Image src="/items/pepperoni.png" alt="Pepperoni" width={140} height={140} className="rounded-2xl mb-4 shadow-lg border border-[#d35400]/20" />
                    <div className="font-extrabold text-2xl text-[#231f20] tracking-wide" style={{ fontFamily: 'var(--font-premium, \"Playfair Display\", serif)' }}>Pepperoni</div>
                    <div className="text-gray-700 text-base mb-2">Spicy pepperoni & cheese</div>
                    <div className="font-extrabold text-[#d35400] text-xl mt-1">₹399</div>
                  </div>
                  <div className="flex flex-col items-center bg-gradient-to-br from-[#fbeee6] to-white rounded-2xl p-8 shadow-xl border border-[#231f20]/10 hover:scale-105 transition-transform duration-300 mb-4 mx-2">
                    <Image src="/items/bbq-chicken.png" alt="BBQ Chicken" width={140} height={140} className="rounded-2xl mb-4 shadow-lg border border-[#d35400]/20" />
                    <div className="font-extrabold text-2xl text-[#231f20] tracking-wide" style={{ fontFamily: 'var(--font-premium, \"Playfair Display\", serif)' }}>BBQ Chicken</div>
                    <div className="text-gray-700 text-base mb-2">BBQ chicken, onions, peppers</div>
                    <div className="font-extrabold text-[#d35400] text-xl mt-1">₹429</div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            {/* Wraps, Pasta & Snacks */}
            <AccordionItem value="wraps-pasta-snacks">
              <AccordionTrigger className="text-xl font-bold text-[#231f20] hover:text-[#d35400] transition-colors duration-200 no-underline px-6 py-3">Wraps, Pasta & Snacks</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-3">
                  <div className="flex flex-col items-center bg-gradient-to-br from-[#fbeee6] to-white rounded-2xl p-8 shadow-xl border border-[#231f20]/10 hover:scale-105 transition-transform duration-300 mb-4 mx-2">
                    <Image src="/items/white-pasta.png" alt="White Sauce Pasta" width={140} height={140} className="rounded-2xl mb-4 shadow-lg border border-[#d35400]/20" />
                    <div className="font-extrabold text-2xl text-[#231f20] tracking-wide" style={{ fontFamily: 'var(--font-premium, \"Playfair Display\", serif)' }}>White Sauce Pasta</div>
                    <div className="text-gray-700 text-base mb-2">Creamy pasta with veggies</div>
                    <div className="font-extrabold text-[#d35400] text-xl mt-1">₹249</div>
                  </div>
                  <div className="flex flex-col items-center bg-gradient-to-br from-[#fbeee6] to-white rounded-2xl p-8 shadow-xl border border-[#231f20]/10 hover:scale-105 transition-transform duration-300 mb-4 mx-2">
                    <Image src="/items/garlic-bread.png" alt="Garlic Bread" width={140} height={140} className="rounded-2xl mb-4 shadow-lg border border-[#d35400]/20" />
                    <div className="font-extrabold text-2xl text-[#231f20] tracking-wide" style={{ fontFamily: 'var(--font-premium, \"Playfair Display\", serif)' }}>Garlic Bread</div>
                    <div className="text-gray-700 text-base mb-2">Toasted bread with garlic & herbs</div>
                    <div className="font-extrabold text-[#d35400] text-xl mt-1">₹149</div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            {/* Beverages */}
            <AccordionItem value="beverages">
              <AccordionTrigger className="text-xl font-bold text-[#231f20] hover:text-[#d35400] transition-colors duration-200 no-underline px-6 py-3">Beverages</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-3">
                  <div className="flex flex-col items-center bg-gradient-to-br from-[#fbeee6] to-white rounded-2xl p-8 shadow-xl border border-[#231f20]/10 hover:scale-105 transition-transform duration-300 mb-4 mx-2">
                    <Image src="/items/cola.png" alt="Cola" width={100} height={100} className="rounded-2xl mb-4 shadow-lg border border-[#d35400]/20" />
                    <div className="font-extrabold text-2xl text-[#231f20] tracking-wide" style={{ fontFamily: 'var(--font-premium, \"Playfair Display\", serif)' }}>Cola</div>
                    <div className="text-gray-700 text-base mb-2">Chilled soft drink</div>
                    <div className="font-extrabold text-[#d35400] text-xl mt-1">₹59</div>
                  </div>
                  <div className="flex flex-col items-center bg-gradient-to-br from-[#fbeee6] to-white rounded-2xl p-8 shadow-xl border border-[#231f20]/10 hover:scale-105 transition-transform duration-300 mb-4 mx-2">
                    <Image src="/items/cold-drink.png" alt="Cold Drink" width={100} height={100} className="rounded-2xl mb-4 shadow-lg border border-[#d35400]/20" />
                    <div className="font-extrabold text-2xl text-[#231f20] tracking-wide" style={{ fontFamily: 'var(--font-premium, \"Playfair Display\", serif)' }}>Cold Drink</div>
                    <div className="text-gray-700 text-base mb-2">Assorted beverages</div>
                    <div className="font-extrabold text-[#d35400] text-xl mt-1">₹49</div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            {/* Dessert */}
            <AccordionItem value="dessert">
              <AccordionTrigger className="text-xl font-bold text-[#231f20] hover:text-[#d35400] transition-colors duration-200 no-underline px-6 py-3">Dessert</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-3">
                  <div className="flex flex-col items-center bg-gradient-to-br from-[#fbeee6] to-white rounded-2xl p-8 shadow-xl border border-[#231f20]/10 hover:scale-105 transition-transform duration-300 mb-4 mx-2">
                    <Image src="/items/brownie.png" alt="Brownie" width={110} height={110} className="rounded-2xl mb-4 shadow-lg border border-[#d35400]/20" />
                    <div className="font-extrabold text-2xl text-[#231f20] tracking-wide" style={{ fontFamily: 'var(--font-premium, \"Playfair Display\", serif)' }}>Choco Brownie</div>
                    <div className="text-gray-700 text-base mb-2">Rich chocolate dessert</div>
                    <div className="font-extrabold text-[#d35400] text-xl mt-1">₹129</div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            {/* Combos */}
            <AccordionItem value="combos">
              <AccordionTrigger className="text-xl font-bold text-[#231f20] hover:text-[#d35400] transition-colors duration-200 no-underline px-6 py-3">Combos</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-3">
                  <div className="flex flex-col items-center bg-gradient-to-br from-[#fbeee6] to-white rounded-2xl p-8 shadow-xl border border-[#231f20]/10 hover:scale-105 transition-transform duration-300 mb-4 mx-2">
                    <Image src="/items/veg-supreme.png" alt="Veg Combo" width={110} height={110} className="rounded-2xl mb-4 shadow-lg border border-[#d35400]/20" />
                    <div className="font-extrabold text-2xl text-[#231f20] tracking-wide" style={{ fontFamily: 'var(--font-premium, \"Playfair Display\", serif)' }}>Veg Combo</div>
                    <div className="text-gray-700 text-base mb-2">Veg pizza + drink + dessert</div>
                    <div className="font-extrabold text-[#d35400] text-xl mt-1">₹499</div>
                  </div>
                  <div className="flex flex-col items-center bg-gradient-to-br from-[#fbeee6] to-white rounded-2xl p-8 shadow-xl border border-[#231f20]/10 hover:scale-105 transition-transform duration-300 mb-4 mx-2">
                    <Image src="/items/bbq-chicken.png" alt="Non-Veg Combo" width={110} height={110} className="rounded-2xl mb-4 shadow-lg border border-[#d35400]/20" />
                    <div className="font-extrabold text-2xl text-[#231f20] tracking-wide" style={{ fontFamily: 'var(--font-premium, \"Playfair Display\", serif)' }}>Non-Veg Combo</div>
                    <div className="text-gray-700 text-base mb-2">Non-veg pizza + drink + dessert</div>
                    <div className="font-extrabold text-[#d35400] text-xl mt-1">₹549</div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <Footer />
    </main>
  )
}
