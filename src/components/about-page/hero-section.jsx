"use client";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";
import Button from "../ui/button"; // Import Button component

const HeroSection = () => {
  const handleGetQuote = () => {
    // Your quote logic here
    console.log("Get quote clicked");
  };

  const handleDownloadCatalog = () => {
    // Your download logic here
    console.log("Download catalog clicked");
  };

  return (
    <section className="relative min-h-screen bg-primary overflow-hidden">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/hero-image.png" alt="Harika Charcoal Hero Background" fill className="object-cover" priority quality={90} />

        {/* Dark overlay untuk readability */}
        <div className="absolute inset-0 bg-primary/50 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl">
          {/* Main Heading */}
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="heading-xl uppercase text-center leading-tight tracking-wide text-primary mb-6">
            Premium Indonesian Charcoal for Global Markets
          </motion.h1>

          {/* Description */}
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="body-lg text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
            Harika Charcoal delivers sustainable, high-quality charcoal products from Indonesia to businesses worldwide. We specialize in eco-friendly production and premium charcoal solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-row gap-4 justify-center items-center">
            <Button variant="secondaryOutline" size="large" onClick={handleGetQuote}>
              Explore
            </Button>

            <Button variant="primary" size="large" onClick={handleDownloadCatalog}>
              Contact
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
