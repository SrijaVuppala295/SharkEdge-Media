
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Lightbulb, Rocket, Code2, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Lightbulb className="w-8 h-8 text-green-400" />,
      title: "Innovation First",
      description: "Leveraging cutting-edge AI and automation technologies to keep you ahead of the curve."
    },
    {
      icon: <Rocket className="w-8 h-8 text-green-400" />,
      title: "Scalable Growth",
      description: "Custom strategies that grow with your business, from startup to enterprise."
    },
    {
      icon: <Code2 className="w-8 h-8 text-green-400" />,
      title: "Technical Excellence",
      description: "Expert development team building robust, efficient solutions for your needs."
    },
    {
      icon: <Zap className="w-8 h-8 text-green-400" />,
      title: "Rapid Results",
      description: "Quick implementation and fast turnaround times for maximum impact."
    }
  ];

  return (
    <section id="about" className="py-24 bg-black/60">
      <div className="container mx-auto px-4">
      <motion.div 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="text-center mb-12"
>
<h2 className="text-5xl font-bold tracking-wide text-white mb-6">About Us</h2>

<div className="h-1 w-20 bg-green-500 mx-auto"></div>
</motion.div>

        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card mb-12 hover:shadow-green-500/20 transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-8">
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  At Sharkedge Media, we're not just another digital agency. We're your technology-driven growth partner, combining human creativity with artificial intelligence to deliver exceptional results.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our team of experts specializes in creating seamless, automated marketing solutions that drive real business growth while saving you time and resources.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card h-full hover:shadow-green-500/20 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-green-400 mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
