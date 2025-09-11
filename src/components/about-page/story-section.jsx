"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../ui/button";
import { LeafyGreen } from "lucide-react";

const StorySection = () => {
  const handleLearnMore = () => {
    // Your learn more logic here
    console.log("Learn more clicked");
  };

  const handleContact = () => {
    // Your contact logic here
    console.log("Contact clicked");
  };

  return (
    <section className="bg-primary py-16 lg:py-24 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-8 order-2 lg:order-1">
            {/* Heading */}
            <div className="space-y-4">
              <h2 className="heading-xl text-primary uppercase leading-tight">Sustainably Connecting Indonesia to the World</h2>
            </div>

            {/* Description */}
            <p className="body-lg text-secondary leading-relaxed max-w-lg">
              Founded with a mission to connect Indonesia’s natural resources with the world, Harika Charcoal started as a small initiative to promote eco-friendly alternatives in the charcoal industry. Through dedication and innovation, we
              have grown into a trusted supplier for global businesses, exporting to various markets while empowering local communities and supporting sustainable production practices.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="relative hidden lg:block order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Main Image */}
              <div className="aspect-[4/3] relative">
                <Image
                  src="/hero-image.png" // Replace with your actual image
                  alt="Harika Charcoal Sustainable Excellence"
                  fill
                  className="object-cover"
                  quality={90}
                />

                {/* Overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#4169E1] rounded-xl p-4 sm:p-6 shadow-xl backdrop-blur-sm"
              >
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">95.60%</div>
                  <div className="text-xs sm:text-sm text-white/80 font-medium">Quality Assurance</div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#16a34a]/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#4169E1]/10 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
