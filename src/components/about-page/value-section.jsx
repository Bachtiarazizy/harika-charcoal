"use client";
import React from "react";
import { motion } from "framer-motion";
import { LeafyGreen, Award, DollarSign, Truck, Image as ImageIcon, ChevronRight } from "lucide-react";

export default function ValueSection() {
  const values = [
    {
      id: 1,
      icon: LeafyGreen,
      title: "ECO-FRIENDLY METHODS",
      description: "Sustainable sourcing practices that minimize environmental impact and supports local communities",
    },
    {
      id: 2,
      icon: Award,
      title: "CONSISTENT QUALITY",
      description: "Rigorous quality control measures ensuring premium standards for global markets",
    },
    {
      id: 3,
      icon: DollarSign,
      title: "COMPETITIVE PRICING",
      description: "Cost-effective solutions without compromising on superior product quality",
    },
    {
      id: 4,
      icon: Truck,
      title: "RELIABLE EXPORT",
      description: "Efficient logistics and dedicated support for seamless international transactions",
    },
  ];

  return (
    <section className="bg-[#2a2a2a] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div key={value.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} viewport={{ once: true }} className="group space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-start">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-bold text-sm leading-tight tracking-wide">{value.title}</h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }} className="flex flex-col sm:flex-row gap-4 items-start">
              {/* Contact Button */}
              <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-500 rounded-full text-primary hover:border-gray-400 hover:bg-surface transition-all duration-300">
                <span className="body-sm font-medium">Contact</span>
              </button>

              {/* Inquire Button */}
              <button className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-300 group py-3">
                <span className="body-sm font-medium">Inquire</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </div>

          {/* Right Side - Image Placeholder */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }} className="relative">
            <div className="aspect-[4/3] bg-gray-600 rounded-2xl flex items-center justify-center">
              <ImageIcon className="w-16 h-16 text-gray-400" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
