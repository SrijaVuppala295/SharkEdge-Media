
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Mail, MessageSquare, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const BookCall = () => {
  const features = [
    {
      icon: Clock,
      title: "30-Minute Strategy Call",
      description: "Free consultation to discuss your needs"
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Choose a time that works best for you"
    },
    {
      icon: MessageSquare,
      title: "Personalized Solutions",
      description: "Get tailored strategies for your business"
    }
  ];

  return (
    <section id="book-call" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(0,0,0,0.8),rgba(0,50,0,0.4))]" />
      
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.div 
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Book a Free Strategy Call
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Let's discuss how we can help grow your business with our proven strategies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="glass-card p-6 rounded-lg text-center hover-scale"
            >
              <feature.icon className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-green-400">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={fadeInUp}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-6 rounded-lg text-lg shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-300"
            onClick={() => window.open('https://calendly.com/your-link', '_blank')}
          >
            Schedule Your Call Now
          </Button>

          <div className="mt-8 flex items-center justify-center gap-6 text-gray-300">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-green-400 transition-colors">
              <Phone className="w-5 h-5" />
              +1 (234) 567-890
            </a>
            <a href="mailto:contact@example.com" className="flex items-center gap-2 hover:text-green-400 transition-colors">
              <Mail className="w-5 h-5" />
              contact@example.com
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BookCall;
