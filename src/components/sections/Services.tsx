
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquareCode, Facebook, Key, BarChart3, Brain } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Facebook,
    title: "Facebook Ad Campaign Setup",
    description: "Create and manage powerful Facebook & Instagram ad strategies.",
  },
  {
    icon: MessageSquareCode,
    title: "Messenger Bot & Automation",
    description: "Integrate smart chatbots to engage users and convert leads.",
  },
  {
    icon: Key,
    title: "Facebook Login Integration",
    description: "Simplify user sign-ups with secure Facebook Login APIs.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics Dashboards",
    description: "Build dashboards using Meta's Graph API to monitor data.",
  },
  {
    icon: Brain,
    title: "Content Automation Tools",
    description: "Auto-post, schedule, and manage content with AI.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-black/40">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-400">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card hover-scale h-full">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-green-400 mb-4" />
                  <CardTitle className="text-green-300">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
