
import React from "react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b", className)}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-gray-900">Sharkedge Media</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-gray-900">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-gray-900">
                About
              </button>
              <button onClick={() => scrollToSection("services")} className="text-gray-700 hover:text-gray-900">
                Services
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-gray-900">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
