"use client";
import { motion } from "framer-motion";
import { Leaf, Award, DollarSign, ChevronRight } from "lucide-react";

const WhyChooseSection = () => {
  const handleContactClick = () => {
    console.log("Contact clicked");
  };

  const handleInquireClick = () => {
    console.log("Inquire clicked");
  };

  const features = [
    {
      id: 1,
      icon: <Leaf className="w-8 h-8" />,
      title: "ECO-FRIENDLY AND SUSTAINABLE SOURCING",
      description: "We prioritize the environment in our sourcing.",
    },
    {
      id: 2,
      icon: <Award className="w-8 h-8" />,
      title: "CONSISTENT QUALITY FOR EVERY BATCH",
      description: "Our rigorous quality control ensures top-notch products.",
    },
    {
      id: 3,
      icon: <DollarSign className="w-8 h-8" />,
      title: "COMPETITIVE PRICING FOR ALL MARKETS",
      description: "Get the best value without compromising quality.",
    },
  ];

  return (
    <section className="bg-secondary py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-6">
            {/* Quality Label */}
            <div className="text-xs font-semibold text-secondary tracking-wider uppercase">QUALITY</div>

            {/* Main Heading */}
            <h2 className="heading-xl text-primary leading-tight max-w-4xl">WHY CHOOSE HARIKA CHARCOAL?</h2>

            {/* Description */}
            <p className="body-lg text-secondary leading-relaxed max-w-2xl">Experience the best in premium charcoal. Our commitment to sustainability and quality sets us apart.</p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {features.map((feature, index) => (
            <motion.div key={feature.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} viewport={{ once: true }} className="space-y-6">
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center text-primary">{feature.icon}</div>

              {/* Title */}
              <h3 className="heading-sm text-primary leading-tight">{feature.title}</h3>

              {/* Description */}
              <p className="body-sm text-secondary leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }} className="flex flex-col sm:flex-row gap-4 items-start">
          {/* Contact Button */}
          <button onClick={handleContactClick} className="inline-flex items-center justify-center px-6 py-3 border border-gray-500 rounded-full text-primary hover:border-gray-400 hover:bg-surface transition-all duration-300">
            <span className="body-sm font-medium">Contact</span>
          </button>

          {/* Inquire Button */}
          <button onClick={handleInquireClick} className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-300 group py-3">
            <span className="body-sm font-medium">Inquire</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
