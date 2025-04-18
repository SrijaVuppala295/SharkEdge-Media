
import React from 'react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const clients = [
  {
    name: "TechGlobe Solutions",
    description: "Digital Transformation & AI Integration",
    year: "2023",
    project: "Complete digital overhaul and AI implementation"
  },
  {
    name: "EcoSmart Industries",
    description: "Social Media Management & Content Strategy",
    year: "2023",
    project: "Sustainable marketing campaign"
  },
  {
    name: "FinanceFlow Corp",
    description: "Marketing Automation & Analytics",
    year: "2022",
    project: "Automated marketing workflow"
  },
  {
    name: "HealthTech Solutions",
    description: "Digital Marketing & Brand Development",
    year: "2022",
    project: "Healthcare brand transformation"
  },
  {
    name: "RetailPro Stores",
    description: "E-commerce & Social Media Marketing",
    year: "2023",
    project: "Online retail presence expansion"
  }
];

const Clients = () => {
  return (
    <section id="clients" className="py-24 bg-black/60">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-green-400"
        >
          Our Trusted Clients
        </motion.h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {clients.map((client, index) => (
              <CarouselItem key={client.name} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card hover-scale h-full">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-green-400 mb-2">{client.name}</h3>
                      <p className="text-gray-300 mb-2">{client.description}</p>
                      <div className="text-sm text-gray-400">
                        <p>Year: {client.year}</p>
                        <p className="mt-1">{client.project}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Clients;
