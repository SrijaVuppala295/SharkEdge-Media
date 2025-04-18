
import React from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const clients = [
  {
    name: "TechVision",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&dpr=2&q=80"
  },
  {
    name: "InnovateX",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&dpr=2&q=80"
  },
  {
    name: "NextGen",
    logo: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&dpr=2&q=80"
  },
  {
    name: "AlphaGrowth",
    logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&dpr=2&q=80"
  },
  {
    name: "FutureScale",
    logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&dpr=2&q=80"
  },
  {
    name: "DigitalPrime",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&dpr=2&q=80"
  },
  {
    name: "VentureFirst",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&dpr=2&q=80"
  },
  {
    name: "PeakCapital",
    logo: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&dpr=2&q=80"
  },
  {
    name: "GrowthForge",
    logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&dpr=2&q=80"
  },
  {
    name: "TechForward",
    logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&dpr=2&q=80"
  }
];

const Clients = () => {
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true, 
      dragFree: true,
      skipSnaps: true,
      slidesToScroll: 1
    }, 
    [Autoplay({ delay: 500, stopOnInteraction: false })]
  );

  return (
    <section id="clients" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-light text-white mb-4">
            Our Trusted Clients
          </h2>
        </motion.div>
        
        <div className="overflow-hidden -mx-4" ref={emblaRef}>
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
                  <div className="aspect-square mb-4 relative group">
                    <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img 
                        src={client.logo} 
                        alt={client.name}
                        className="w-16 h-16 object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
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
