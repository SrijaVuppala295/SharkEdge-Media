
import { motion } from "framer-motion";
import { Mail, Phone, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/90 text-gray-300 border-t border-green-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4 text-green-400">About Us</h3>
            <p className="text-sm">
              Sharkedge Media specializes in AI-powered marketing solutions and social API integrations, 
              helping businesses grow through innovative digital strategies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4 text-green-400">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <a href="mailto:support@sharkedgemedia.com" className="text-sm hover:text-green-400 transition-colors">
                  support@sharkedgemedia.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-green-400" />
                <a href="https://www.sharkedgemedia.com" className="text-sm hover:text-green-400 transition-colors">
                  www.sharkedgemedia.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4 text-green-400">Legal</h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm hover:text-green-400 transition-colors">Privacy Policy</a>
              <a href="#" className="block text-sm hover:text-green-400 transition-colors">Terms & Conditions</a>
              <a href="#" className="block text-sm hover:text-green-400 transition-colors">Cookie Policy</a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
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
