import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, slideInFromRight, staggerContainer } from "@/lib/animations";

const Navigation = ({ className }: { className?: string }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    setIsMobileMenuOpen(false);
    element?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "clients", label: "Our Clients" },
    { id: "reviews", label: "Reviews" },
    { id: "contact", label: "Book a Call" }
  ].map((item, index) => ({
    ...item,
    delay: index * 0.1,
  }));

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? 
          "bg-black/80 backdrop-blur-md border-b border-green-500/20 py-2" : 
          "bg-transparent py-4",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <motion.span 
              className="text-2xl font-bold text-gradient"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sharkedge Media
            </motion.span>
          </motion.div>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-green-400 hover:text-green-300 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>

          <div className="hidden md:block">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="flex items-center space-x-8"
            >
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  custom={i}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-gray-300 hover:text-green-400 transition-colors capitalize group"
                >
                  {item.label}
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4"
            >
              <motion.div 
                variants={slideInFromRight}
                initial="initial"
                animate="animate"
                exit="exit"
                className="glass-card rounded-lg p-4 space-y-2"
              >
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    variants={fadeInUp}
                    custom={i}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    whileHover={{ x: 10 }}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-2 text-gray-300 hover:text-green-400 hover:bg-green-500/10 rounded transition-colors capitalize"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
