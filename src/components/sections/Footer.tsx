
import { motion } from "framer-motion";
import { Mail, Phone, Globe, Github, Linkedin, Twitter } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-black/90 text-gray-300 border-t border-green-500/20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div
            variants={fadeInUp}
            className="glass-card p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4 text-green-400">About Us</h3>
            <p className="text-sm">
              Sharkedge Media specializes in AI-powered marketing solutions and social API integrations, 
              helping businesses grow through innovative digital strategies.
            </p>
            <motion.div 
              className="flex space-x-4 mt-4"
              variants={staggerContainer}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-green-400 hover:text-green-300 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="glass-card p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4 text-green-400">Contact Info</h3>
            <div className="space-y-3">
              {[
                { icon: Mail, text: "support@sharkedgemedia.com", href: "mailto:support@sharkedgemedia.com" },
                { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
                { icon: Globe, text: "www.sharkedgemedia.com", href: "https://www.sharkedgemedia.com" }
              ].map((item) => (
                <motion.a
                  key={item.text}
                  href={item.href}
                  className="flex items-center space-x-3 hover:text-green-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <item.icon className="w-5 h-5 text-green-400" />
                  <span className="text-sm">{item.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="glass-card p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4 text-green-400">Legal</h3>
            <div className="space-y-2">
              {["Privacy Policy", "Terms & Conditions", "Cookie Policy"].map((text) => (
                <motion.a
                  key={text}
                  href="#"
                  className="block text-sm hover:text-green-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {text}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-green-500/20 text-center"
        >
          <p className="text-sm">
            © {new Date().getFullYear()} Sharkedge Media. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
