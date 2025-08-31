import React from "react";

const founders = [
  {
    name: "Mangal Kumar Sahoo",
    role: "Founder & Head Chef",
    image: "/placeholder-user.jpg",
    intro:
      "With a passion for authentic Italian flavors and a vision to bring Melbourne’s vibrant food culture to Bhubaneswar, Bimal leads the team with creativity and dedication."
  },
  {
    name: "Bimal Sahoo",
    role: "Co-Founder & Operations",
    image: "/placeholder-user.jpg",
    intro:
      "Mangal ensures every guest enjoys a seamless and memorable experience, blending operational excellence with a love for great food and people."
  },
  {
    name: "Priya Sahoo",
    role: "Partner & Brand Strategist",
    image: "/placeholder-user.jpg",
    intro:
      "Priya crafts the brand’s story and visual identity, making sure Melbourne Pizza stands out for its quality, warmth, and innovation."
  }
];

export function FoundersSection() {
  return (
    <section className="py-16" id="founders">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <h2 className="text-3xl font-extrabold text-[#231f20] tracking-tight mb-10 text-center">Founders & Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {founders.map((f, i) => (
            <div
              key={f.name}
              className="bg-white/90 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={f.image}
                alt={f.name}
                className="w-28 h-28 rounded-full object-cover shadow-lg mb-4 border-4 border-[#f7d9c4]"
              />
              <h3 className="text-xl font-bold text-[#d35400] mb-1">{f.name}</h3>
              <p className="text-sm font-semibold text-[#231f20] mb-2">{f.role}</p>
              <p className="text-gray-700 text-base leading-relaxed">{f.intro}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
