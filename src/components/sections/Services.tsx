
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquareCode, Facebook, Key, BarChart3, Brain } from "lucide-react";

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
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="w-10 h-10 text-indigo-600 mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
