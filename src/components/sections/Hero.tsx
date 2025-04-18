import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const stats = [
    { end: 500, label: "Clients Served", prefix: "+" },
    { end: 95, label: "Success Rate", suffix: "%" },
    { end: 24, label: "Support", suffix: "/7" },
    { end: 100, label: "Satisfaction", suffix: "%" },
  ];

  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = stat.end / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.end) {
            current = stat.end;
            clearInterval(timer);
          }
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.round(current);
            return newCounts;
          });
        }, duration / steps);
      });
    }
  }, [isInView]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(0,0,0,0.9),rgba(0,50,0,0.5))]" />
      
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322c55e' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 py-16 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-green-400 via-green-200 to-emerald-400 bg-clip-text text-transparent mb-4">
            Digital Marketing
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-green-400 via-green-200 to-emerald-400 bg-clip-text text-transparent">
            & Growth Solutions
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          Transform your digital presence with AI-powered marketing solutions and cutting-edge social media automation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-6 rounded-lg text-lg shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-105"
          >
            Explore Services
          </Button>
        </motion.div>

        <motion.div 
          ref={statsRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
              className="glass-card p-6 hover:bg-black/50 transition-all duration-300 hover:scale-105 hover:shadow-green-500/20"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-4xl font-bold text-green-400 mb-2">
                {counts[index]}{stat.prefix || ''}{stat.suffix || ''}
              </h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
