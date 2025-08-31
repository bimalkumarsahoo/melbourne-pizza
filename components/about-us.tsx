import React from "react";

export const AboutUs = React.forwardRef<HTMLDivElement>((props, ref) => (
  <section ref={ref} id="about-us" className="max-w-2xl mx-auto py-16 px-4 text-center">
    <h2 className="text-3xl font-bold mb-4">About Us</h2>
    <p className="text-lg text-gray-700 mb-2">
      <strong>Our Inspiration:</strong> Born from a passion for authentic flavors and a love for Melbourne’s vibrant food scene, we set out to create a pizza experience that blends tradition with creativity.
    </p>
    <p className="text-lg text-gray-700">
      <strong>Our USP:</strong> We use only the freshest ingredients, hand-stretched dough, and a wood-fired oven to craft pizzas that are both classic and innovative. Our cozy atmosphere and commitment to quality make every visit memorable.
    </p>
  </section>
));

AboutUs.displayName = "AboutUs";
