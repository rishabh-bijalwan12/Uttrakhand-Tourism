import React from "react";

function About1() {
  return (
    <div className="max-w-5xl mx-auto p-6 sm:p-12 bg-gradient-to-r from-purple-100 via-white to-pink-100 rounded-lg shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-purple-800 mb-8 underline decoration-wavy decoration-pink-500">
        Explore the Beauty of Uttarakhand
      </h2>

      <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center mb-12">
        Welcome to the enchanting world of Uttarakhand, a land blessed with
        natural wonders, spiritual serenity, and cultural richness. Our
        platform is your gateway to discovering the most breathtaking places,
        exciting activities, and revered temples in this Himalayan paradise.
      </p>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-2xl font-bold text-purple-700 mb-4 underline decoration-dotted decoration-pink-400">
            Discover Popular Places
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Uttarakhand offers stunning hill stations like Nainital, Mussoorie,
            and Almora, providing panoramic views of Himalayan peaks. Visit the
            Valley of Flowers, a UNESCO World Heritage Site, renowned for its
            vibrant alpine flora.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-2xl font-bold text-purple-700 mb-4 underline decoration-dotted decoration-pink-400">
            Embark on Exciting Activities
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Engage in thrilling adventures like trekking pristine trails,
            white-water rafting, paragliding, and skiing in Auli's snow-clad
            slopes. Uttarakhand is a haven for adventure seekers.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-t from-pink-100 to-purple-50 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 mb-8">
        <h3 className="text-2xl font-bold text-purple-700 mb-4 underline decoration-dotted decoration-pink-400">
          Visit Sacred Temples
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          Discover the spiritual side of Uttarakhand by exploring the sacred
          Char Dham pilgrimage sites: Kedarnath, Badrinath, Yamunotri, and
          Gangotri. Nestled in picturesque landscapes, these temples offer both
          spiritual and visual delight.
        </p>
      </section>

      <p className="text-center text-lg sm:text-xl text-gray-700 leading-relaxed">
        Whether you seek adventure, spiritual solace, or simply wish to bask in
        the natural beauty, Uttarakhand offers something for everyone. Let our
        platform guide you in planning an unforgettable journey through this
        Himalayan gem.
      </p>
    </div>
  );
}

export default About1;
