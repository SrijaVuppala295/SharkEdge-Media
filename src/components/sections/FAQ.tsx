import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive suite of digital marketing services including social media management, AI-powered content creation, automation solutions, and API integrations for various social platforms."
  },
  {
    question: "How do you measure success?",
    answer: "We track key performance indicators (KPIs) specific to your goals, including engagement rates, conversion rates, ROI, and other relevant metrics to ensure we're delivering measurable results."
  },
  {
    question: "What makes your approach unique?",
    answer: "Our unique blend of AI technology and human expertise allows us to deliver scalable, personalized marketing solutions that drive real business growth."
  },
  {
    question: "How long does it take to see results?",
    answer: "While results vary by project, most clients see initial improvements within 30-60 days. We provide regular updates and analytics to track progress."
  },
  {
    question: "Do you offer custom solutions?",
    answer: "Yes, we create tailored strategies based on your specific business needs, goals, and target audience to ensure maximum effectiveness."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center" // This centers the header and line
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-20 bg-green-500 mx-auto mb-12"></div> {/* Center the line */}
        </motion.div>

        {/* Center the accordion as a whole */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-black/80 border border-transparent rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 px-6 py-4"
                >
                  <AccordionTrigger className="text-green-400 text-lg font-semibold hover:text-green-300 transition-colors relative">
                    <span>{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-white text-lg">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
