
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 bg-black/60">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-green-400"
        >
          Who We Are
        </motion.h2>
        <Card className="max-w-4xl mx-auto glass-card">
          <CardContent className="p-8">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 mb-6"
            >
              At Sharkedge Media, we believe in using technology to simplify growth. We're a team of digital strategists, developers, and creative minds building smart solutions for businesses around the world.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300"
            >
              From automating ad campaigns to creating powerful Meta API tools, we help you scale efficiently and intelligently.
            </motion.p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
