
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Mail, MessageSquare, Phone, User, Building2, Calendar as CalendarIcon, Globe } from "lucide-react";
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
    website: "",
    preferredDate: "",
    preferredTime: "",
    projectType: "",
    budget: "",
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="book-call" className="py-20 relative overflow-hidden bg-black/90">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(0,0,0,0.9),rgba(0,50,0,0.5))]" />
      
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-400">
            Book a Strategy Call
          </h2>
          <p className="text-green-100/80 text-lg md:text-xl max-w-2xl mx-auto">
            Let's discuss how we can help grow your business with our proven strategies
          </p>
        </motion.div>

        <motion.form 
          variants={fadeInUp}
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto space-y-6 bg-black/40 backdrop-blur-lg p-8 rounded-xl border border-green-500/20"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-green-400">Full Name *</label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-green-500/50" />
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="pl-10 bg-black/40 border-green-500/20 focus:border-green-500/40 text-white placeholder:text-green-200/30"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-green-400">Email Address *</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-green-500/50" />
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="pl-10 bg-black/40 border-green-500/20 focus:border-green-500/40 text-white placeholder:text-green-200/30"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-green-400">Phone Number *</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-5 w-5 text-green-500/50" />
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (234) 567-8900"
                  className="pl-10 bg-black/40 border-green-500/20 focus:border-green-500/40 text-white placeholder:text-green-200/30"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-green-400">Company Name</label>
              <div className="relative">
                <Building2 className="absolute left-3 top-3 h-5 w-5 text-green-500/50" />
                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="pl-10 bg-black/40 border-green-500/20 focus:border-green-500/40 text-white placeholder:text-green-200/30"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-green-400">Website URL</label>
              <div className="relative">
                <Globe className="absolute left-3 top-3 h-5 w-5 text-green-500/50" />
                <Input
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://example.com"
                  className="pl-10 bg-black/40 border-green-500/20 focus:border-green-500/40 text-white placeholder:text-green-200/30"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-green-400">Project Type</label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full pl-10 bg-black/40 border-green-500/20 focus:border-green-500/40 text-white placeholder:text-green-200/30 rounded-md h-10"
              >
                <option value="">Select Project Type</option>
                <option value="marketing">Digital Marketing</option>
                <option value="branding">Branding</option>
                <option value="web">Web Development</option>
                <option value="social">Social Media</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-green-400">Preferred Date *</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-green-500/50" />
                <Input
                  name="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="pl-10 bg-black/40 border-green-500/20 focus:border-green-500/40 text-white"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-green-400">Preferred Time *</label>
              <div className="relative">
                <Clock className="absolute left-3 top-3 h-5 w-5 text-green-500/50" />
                <Input
                  name="preferredTime"
                  type="time"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="pl-10 bg-black/40 border-green-500/20 focus:border-green-500/40 text-white"
                  required
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-green-400">Project Details</label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-green-500/50" />
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project goals and requirements..."
                className="pl-10 bg-black/40 border-green-500/20 focus:border-green-500/40 text-white placeholder:text-green-200/30 min-h-[120px]"
              />
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-6 rounded-lg text-lg shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-300"
          >
            Schedule Your Call Now
          </Button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default BookCall;
