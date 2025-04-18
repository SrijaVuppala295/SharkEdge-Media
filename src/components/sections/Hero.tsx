
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-16">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          Sharkedge Media
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
          Helping businesses grow with AI-powered marketing, automation & social API integrations.
        </p>
        <Button
          onClick={scrollToServices}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 rounded-lg text-lg"
        >
          Explore Services
        </Button>
      </div>
    </section>
  );
};

export default Hero;
