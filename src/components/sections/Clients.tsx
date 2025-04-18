
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';

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
      slidesToScroll: 1,
      align: 'start',
      speed: 15
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
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            Our Trusted <span className="text-green-500">Clients</span>
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
                  <div className="aspect-square mb-4 relative group w-40 h-40 mx-auto">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-500/10 to-green-900/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-green-700/20" />
                    <div className="absolute inset-0 rounded-full border border-green-500/20 group-hover:border-green-500/40 transition-all duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <img 
                        src={client.logo} 
                        alt={client.name}
                        className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
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
