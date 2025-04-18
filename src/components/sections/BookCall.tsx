
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Mail, MessageSquare, Phone, User, Building2, Calendar as CalendarIcon } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const BookCall = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "Your call has been scheduled. We'll be in touch soon!",
      duration: 5000,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="book-call" className="py-20 relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(0,0,0,0.4),rgba(76,29,149,0.4))]" />
      
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple-200">
            Book a Free Strategy Call
          </h2>
          <p className="text-purple-100/80 text-lg md:text-xl max-w-2xl mx-auto">
            Let's discuss how we can help grow your business with our proven strategies
          </p>
        </motion.div>

        <motion.form 
          variants={fadeInUp}
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto space-y-6 bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-purple-500/20"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-purple-200">Full Name</label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="bg-white/5 border-purple-500/20 focus:border-purple-500/40 text-white placeholder:text-purple-200/50"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-purple-200">Email Address</label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="bg-white/5 border-purple-500/20 focus:border-purple-500/40 text-white placeholder:text-purple-200/50"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-purple-200">Phone Number</label>
              <Input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (234) 567-8900"
                className="bg-white/5 border-purple-500/20 focus:border-purple-500/40 text-white placeholder:text-purple-200/50"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-purple-200">Company Name</label>
              <Input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company"
                className="bg-white/5 border-purple-500/20 focus:border-purple-500/40 text-white placeholder:text-purple-200/50"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-purple-200">Preferred Date</label>
              <Input
                name="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={handleChange}
                className="bg-white/5 border-purple-500/20 focus:border-purple-500/40 text-white placeholder:text-purple-200/50"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-purple-200">Preferred Time</label>
              <Input
                name="preferredTime"
                type="time"
                value={formData.preferredTime}
                onChange={handleChange}
                className="bg-white/5 border-purple-500/20 focus:border-purple-500/40 text-white placeholder:text-purple-200/50"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-purple-200">Your Message</label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              className="bg-white/5 border-purple-500/20 focus:border-purple-500/40 text-white placeholder:text-purple-200/50 min-h-[120px]"
              required
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold px-8 py-6 rounded-lg text-lg shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300"
          >
            Schedule Your Call Now
          </Button>
        </motion.form>

        <motion.div 
          variants={fadeInUp}
          className="mt-8 flex items-center justify-center gap-6 text-purple-200/80"
        >
          <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-purple-200 transition-colors">
            <Phone className="w-5 h-5" />
            +1 (234) 567-890
          </a>
          <a href="mailto:contact@example.com" className="flex items-center gap-2 hover:text-purple-200 transition-colors">
            <Mail className="w-5 h-5" />
            contact@example.com
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BookCall;
