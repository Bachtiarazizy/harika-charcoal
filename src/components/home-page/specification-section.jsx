"use client";
import { motion } from "framer-motion";
import { Flame, Droplets, Clock, ChevronRight } from "lucide-react";

const SpecificationsSection = () => {
  const handleViewClick = () => {
    console.log("View clicked");
  };

  const handleLearnMoreClick = () => {
    console.log("Learn More clicked");
  };

  const specifications = [
    {
      id: 1,
      icon: <Flame className="w-8 h-8" />,
      title: "FIXED CARBON PERCENTAGE AND QUALITY STANDARDS",
      description: "Our charcoal boasts high fixed carbon percentages for superior performance.",
    },
    {
      id: 2,
      icon: <Droplets className="w-8 h-8" />,
      title: "MOISTURE AND ASH CONTENT DETAILS",
      description: "We ensure minimal moisture and ash for cleaner burning.",
    },
    {
      id: 3,
      icon: <Clock className="w-8 h-8" />,
      title: "BURNING TIME AND EFFICIENCY METRICS",
      description: "Our products are designed for extended burning times.",
    },
  ];

  return (
    <section className="bg-primary min-h-screen py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-6">
            {/* Specifications Label */}
            <div className="text-xs font-semibold text-secondary tracking-wider uppercase">SPECIFICATIONS</div>

            {/* Main Heading */}
            <h2 className="heading-xl text-primary leading-tight max-w-4xl mx-auto">PRODUCT SPECIFICATIONS AND GRADES OVERVIEW</h2>

            {/* Description */}
            <p className="body-lg text-secondary leading-relaxed max-w-2xl mx-auto">
              Explore the detailed specifications of our premium charcoal products. Each entry provides essential information to help you make informed purchasing decisions.
            </p>
          </motion.div>
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {specifications.map((spec, index) => (
            <motion.div key={spec.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} viewport={{ once: true }} className="text-center space-y-6">
              {/* Icon Container */}
              <div className="flex justify-center">
                <div className="w-16 h-16 flex items-center justify-center text-primary">{spec.icon}</div>
              </div>

              {/* Title */}
              <h3 className="heading-sm text-primary leading-tight px-2">{spec.title}</h3>

              {/* Description */}
              <p className="body-sm text-secondary leading-relaxed max-w-xs mx-auto">{spec.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          {/* View Button */}
          <button onClick={handleViewClick} className="inline-flex items-center justify-center px-6 py-3 border border-gray-500 rounded-full text-primary hover:border-gray-400 hover:bg-surface transition-all duration-300">
            <span className="body-sm font-medium">View</span>
          </button>

          {/* Learn More Button */}
          <button onClick={handleLearnMoreClick} className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-300 group py-3">
            <span className="body-sm font-medium">Learn More</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecificationsSection;
