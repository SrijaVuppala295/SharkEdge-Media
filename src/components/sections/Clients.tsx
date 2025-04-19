import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const clients = [
  {
    name: "Power Packs",
    logo: "3.png"
  },
  {
    name: "Heartly Organic",
    logo: "9.png"
  },
  {
    name: "Sarah Becker",
    logo: "11.png"
  },
  {
    name: "Sandra Harens",
    logo: "16.png"
  },
  {
    name: "Palm Fitness",
    logo: "22.png"
  },
  {
    name: "TeemVideo",
    logo: "26.png"
  },
  {
    name: "La Blan Co",
    logo: "28.png"
  },
  {
    name: "Katala",
    logo: "29.png"
  },
  {
    name: "Little Creatures",
    logo: "35.png"
  },
  {
    name: "Dreamery",
    logo: "39.png"
  },
  {
    name: "Tappt",
    logo: "40.png"
  },
  {
    name: "Circle Flow",
    logo: "42.png"
  }
];

const Clients = () => {
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true, 
      dragFree: true,
      skipSnaps: true,
      slidesToScroll: 1,
      align: 'start'
    }, 
    [Autoplay({ delay: 1000, stopOnInteraction: false })]
  );
  
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.3 }
    });
  }, [controls]);

  return (
    <section id="clients" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold tracking-wide text-white-500 mb-6">
            Our Trusted Clients
          </h2>

          <div className="h-1 w-20 bg-green-500 mx-auto"></div>
        </motion.div>
        
        <div className="overflow-hidden -mx-4 px-4" ref={emblaRef}>
          <div className="flex">
            {clients.map((client, index) => (
              <div key={client.name} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_20%] px-4">
                <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.05 }}
  className="text-center"
>
  <div className="relative group w-40 h-40 mx-auto">
    {/* Circle background */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-500/10 to-green-900/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-green-700/20" />
    <div className="absolute inset-0 rounded-full border border-green-500/20 group-hover:border-green-500/40 transition-all duration-300"></div>
    
    {/* Image */}
    <div className="absolute inset-0 flex items-center justify-center p-0">
      <img 
        src={client.logo} 
        alt={client.name}
        className="w-full h-full object-cover rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        style={{ filter: 'brightness(1.5)' }} // Optional: Increase brightness
      />
    </div>
  </div>
  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
    {client.name}
  </h3>
</motion.div>


              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
