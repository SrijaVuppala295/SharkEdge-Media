
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const clients = [
  {
    name: "TechGlobe Solutions",
    description: "Digital Transformation & AI Integration",
    year: "2023",
    project: "Complete digital overhaul and AI implementation",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&dpr=2&q=80"
  },
  {
    name: "EcoSmart Industries",
    description: "Social Media Management & Content Strategy",
    year: "2023",
    project: "Sustainable marketing campaign",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&dpr=2&q=80"
  },
  {
    name: "FinanceFlow Corp",
    description: "Marketing Automation & Analytics",
    year: "2022",
    project: "Automated marketing workflow",
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&dpr=2&q=80"
  },
  {
    name: "HealthTech Solutions",
    description: "Digital Marketing & Brand Development",
    year: "2022",
    project: "Healthcare brand transformation",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&dpr=2&q=80"
  },
  {
    name: "RetailPro Stores",
    description: "E-commerce & Social Media Marketing",
    year: "2023",
    project: "Online retail presence expansion",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&dpr=2&q=80"
  }
];

const Clients = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);

  return (
    <section id="clients" className="py-24 bg-gradient-to-br from-indigo-900 to-purple-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-purple-200"
        >
          Our Trusted Clients
        </motion.h2>
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {clients.map((client, index) => (
              <div key={client.name} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="h-full bg-white/10 backdrop-blur-lg border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                        <img 
                          src={client.image} 
                          alt={client.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-purple-300 mb-2">{client.name}</h3>
                      <p className="text-gray-300 mb-2">{client.description}</p>
                      <div className="text-sm text-gray-400">
                        <p>Year: {client.year}</p>
                        <p className="mt-1">{client.project}</p>
                      </div>
                    </CardContent>
                  </Card>
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
