
import React from "react";
import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Reviews from "@/components/sections/Reviews";
import FAQ from "@/components/sections/FAQ";
import BookCall from "@/components/sections/BookCall";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Reviews />
      <FAQ />
      <BookCall />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
