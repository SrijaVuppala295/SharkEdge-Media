
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const reviews = [
  {
    name: "Ananya Sharma",
    role: "Marketing Head",
    company: "DigiBloom",
    content: "Their AI-driven strategies gave our brand a fresh boost online. Highly recommend their team!",
    rating: 5
  },
  {
    name: "Rohan Mehta",
    role: "Founder",
    company: "FreshCart India",
    content: "Amazing service. Our customer acquisition cost dropped significantly within two months.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Startup Founder",
    company: "InnovateTech",
    content: "Outstanding service and results. The team went above and beyond to help us scale fast with minimal spend.",
    rating: 5
  },
  {
    name: "Aditya Nair",
    role: "E-commerce Manager",
    company: "ShopEase",
    content: "The automations helped streamline our marketing flows. Slight learning curve, but worth it.",
    rating: 4
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    content: "Sharkedge Media transformed our social media presence. Their AI-powered solutions delivered remarkable results.",
    rating: 5
  },
  {
    name: "Pooja Iyer",
    role: "Digital Marketing Specialist",
    company: "TrendNova",
    content: "They truly understand the Indian market nuances. Impressed by the creative campaigns.",
    rating: 4
  },
  {
    name: "Vikram Desai",
    role: "Head of Sales",
    company: "UrbanGear",
    content: "Good strategies and very responsive team. Would have liked faster turnaround on a few requests.",
    rating: 4
  },
  {
    name: "Chloe Kim",
    role: "Digital Strategist",
    company: "VisionX",
    content: "Loved the creative approach and AI tools. Would love even more transparency in pricing tiers.",
    rating: 4
  },
  {
    name: "Neha Kapoor",
    role: "Growth Lead",
    company: "FinSure",
    content: "Their ad optimization literally doubled our lead quality in just a month. Solid partnership.",
    rating: 5
  }
];


const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-black/60">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-green-400"
        >
            <h2 className="text-5xl font-bold tracking-wide text-white mb-6">Testimonials</h2>

           <div className="h-1 w-20 bg-green-500 mx-auto"></div>
        </motion.h2>
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={review.name} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card hover-scale h-full">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <Quote className="w-8 h-8 text-green-400 opacity-50" />
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-green-400 fill-green-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-300 mb-6">{review.content}</p>
                      <div className="mt-auto">
                        <p className="font-semibold text-green-400">{review.name}</p>
                        <p className="text-sm text-gray-400">{review.role}</p>
                        <p className="text-sm text-gray-500">{review.company}</p>
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

export default Reviews;
