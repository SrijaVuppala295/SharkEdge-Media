
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    content: "Sharkedge Media transformed our social media presence. Their AI-powered solutions delivered remarkable results.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "E-commerce Manager",
    company: "GlobalStore",
    content: "The automation tools save us countless hours. Their expertise in Facebook APIs is unmatched.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Startup Founder",
    company: "InnovateTech",
    content: "Outstanding service and results. Their team went above and beyond to help us scale our marketing efforts.",
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
          Client Reviews
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
