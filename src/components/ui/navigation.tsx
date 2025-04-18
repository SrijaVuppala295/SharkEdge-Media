
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

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
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "services", label: "SERVICES" },
    { id: "about", label: "ABOUT" },
    { id: "clients", label: "OUR CLIENTS" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-black/80 backdrop-blur-md py-2" : "bg-transparent py-4",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <span className="text-3xl font-light tracking-wider">
              <span className="text-white">SharkEdge</span>{" "}
              <span className="text-green-500">Media</span>
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-light text-white hover:text-green-400 transition-colors tracking-[0.2em]"
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 border border-green-500 text-white hover:bg-green-500 hover:text-black transition-colors duration-300 rounded-full text-sm font-light tracking-[0.2em]"
            >
              CONTACT US
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 bg-black/90 backdrop-blur-md rounded-lg p-4"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-white hover:text-green-400 transition-colors text-sm font-light tracking-[0.2em]"
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection("contact")}
              className="w-full mt-2 px-4 py-2 border border-green-500 text-white hover:bg-green-500 hover:text-black transition-colors duration-300 rounded-full text-sm font-light tracking-[0.2em]"
            >
              CONTACT US
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;

