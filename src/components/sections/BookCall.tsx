import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, User, Briefcase, CalendarCheck, DollarSign } from "lucide-react";
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
    businessType: "",
    revenue: "",
    startDate: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Redirecting...",
      description: "You'll be taken to our booking page shortly.",
      duration: 3000,
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      businessType: "",
      revenue: "",
      startDate: "",
    });

    setTimeout(() => {
      window.open("https://calendly.com/admin-sharkedge/30min", "_blank");
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
         <h2 className="text-5xl font-bold tracking-wide text-white-500 mb-6"> Book a Strategy Call</h2>
         <div className="h-1 w-20 bg-green-500 mx-auto mb-6"></div>
        
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
            {/* Name */}
            <div className="space-y-2">
              <label className="text-white-400">Full Name </label>
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

            {/* Email */}
            <div className="space-y-2">
              <label className="text-white-400">Email Address </label>
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

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-white-400">Phone Number </label>
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

            {/* Business Type */}
            <div className="space-y-2">
              <label className="text-white-400">What does your business do? </label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-3 h-5 w-5 text-green-500/50" />
                <Input
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  placeholder="Coach, Consultant, Software, etc."
                  className="pl-10 bg-black/40 border-green-500/20 focus:border-green-500/40 text-white placeholder:text-green-200/30"
                  required
                />
              </div>
            </div>

            {/* Monthly Revenue */}
            <div className="space-y-2">
              <label className="text-white-400">Monthly Revenue</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-3 h-5 w-5 text-green-500/50" />
                <Input
                  name="revenue"
                  value={formData.revenue}
                  onChange={handleChange}
                  placeholder="$10,000"
                  className="pl-10 bg-black/40 border-green-500/20 focus:border-green-500/40 text-white placeholder:text-green-200/30"
                />
              </div>
            </div>

            {/* Start Date */}
            <div className="space-y-2">
              <label className="text-white-400">When are you ready to start?</label>
              <div className="relative">
                <CalendarCheck className="absolute left-3 top-3 h-5 w-5 text-green-500/50" />
                <Input
  name="startDate"
  type="date"
  value={formData.startDate}
  onChange={handleChange}
  className="pl-10 bg-black/40 border-green-500/20 focus:border-green-500/40 text-green-200/30 placeholder:text-green-200/30"
  required
/>


              </div>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-6 rounded-lg text-lg shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-300"
          >
            Book Your Call
          </Button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default BookCall;
