
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Globe } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-24 bg-black/40">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-green-400"
        >
          Let's Work Together
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-green-400">Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    className="bg-black/40 border-green-500/20 text-gray-200 placeholder:text-gray-500"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-black/40 border-green-500/20 text-gray-200 placeholder:text-gray-500"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    className="bg-black/40 border-green-500/20 text-gray-200 placeholder:text-gray-500 min-h-[150px]"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-black">
                  Send Message
                </Button>
              </form>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:support@sharkedgemedia.com">support@sharkedgemedia.com</a>
                </div>
                <div className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors">
                  <Globe className="w-5 h-5" />
                  <a href="https://www.sharkedgemedia.com" target="_blank" rel="noopener noreferrer">
                    www.sharkedgemedia.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
