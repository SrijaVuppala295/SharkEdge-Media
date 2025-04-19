import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    { id: "about", label: "About Us" },
    { id: "reviews", label: "Testimonials" },
    { id: "faq", label: "FAQ" }
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-green-500/10 py-2"
          : "bg-transparent py-4",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-bold whitespace-nowrap"
        >
          <span className="text-green-400">SharkEdge</span>{" "}
          <span className="text-white">Media</span>
        </motion.div>

        <div className="hidden md:flex items-center justify-center">
          <div className="flex bg-black border border-white/10 px-6 py-2 rounded-full space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white font-semibold text-sm uppercase tracking-wide hover:text-green-400 transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-3 px-4"
          >
            <div className="bg-black/80 border border-white/10 backdrop-blur-md rounded-lg p-4 space-y-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ x: 5 }}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-white py-2 px-3 rounded hover:bg-green-500/10 hover:text-green-400 transition-colors uppercase tracking-wide text-sm"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
