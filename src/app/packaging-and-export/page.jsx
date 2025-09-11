"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Package, Ship, Globe, Truck, Container, Shield, Clock, MapPin, FileCheck, Users, BarChart3, ArrowRight, Download, CheckCircle, Anchor, Plane } from "lucide-react";
import Button from "@/components/ui/button";
import { useState } from "react";

export default function PackagingExportPage() {
  const [activePackaging, setActivePackaging] = useState("standard");

  const packagingOptions = {
    standard: {
      name: "STANDARD PACKAGING",
      subtitle: "Cost-Effective Solution",
      options: [
        {
          type: "PP Woven Bags",
          capacity: "25kg",
          features: ["Moisture Resistant", "Durable Material", "Easy Handling"],
          loadCapacity: "18-20 MT per 20ft container",
          icon: Package,
        },
        {
          type: "Jumbo Bags",
          capacity: "1000kg",
          features: ["Bulk Loading", "Space Efficient", "Industrial Grade"],
          loadCapacity: "20-22 MT per 20ft container",
          icon: Container,
        },
      ],
    },
    premium: {
      name: "PREMIUM PACKAGING",
      subtitle: "Enhanced Protection & Branding",
      options: [
        {
          type: "Kraft Paper Bags",
          capacity: "20kg",
          features: ["Eco-Friendly", "Premium Finish", "Custom Branding"],
          loadCapacity: "16-18 MT per 20ft container",
          icon: Shield,
        },
        {
          type: "Vacuum Sealed",
          capacity: "10kg",
          features: ["Extended Shelf Life", "Premium Quality", "Retail Ready"],
          loadCapacity: "14-16 MT per 20ft container",
          icon: Package,
        },
      ],
    },
    custom: {
      name: "CUSTOM PACKAGING",
      subtitle: "Tailored to Your Requirements",
      options: [
        {
          type: "Private Label",
          capacity: "Variable",
          features: ["Your Brand", "Custom Design", "Market Ready"],
          loadCapacity: "Depends on packaging",
          icon: Users,
        },
        {
          type: "Retail Packaging",
          capacity: "5-15kg",
          features: ["Consumer Ready", "Display Optimized", "Marketing Support"],
          loadCapacity: "12-15 MT per 20ft container",
          icon: BarChart3,
        },
      ],
    },
  };

  const exportProcess = [
    {
      step: "01",
      title: "Order Confirmation",
      description: "Order details finalized with specifications and delivery terms",
      icon: FileCheck,
      duration: "1-2 days",
    },
    {
      step: "02",
      title: "Production & QC",
      description: "Manufacturing with rigorous quality control and testing",
      icon: Shield,
      duration: "7-14 days",
    },
    {
      step: "03",
      title: "Packaging & Labeling",
      description: "Professional packaging with proper labeling and documentation",
      icon: Package,
      duration: "2-3 days",
    },
    {
      step: "04",
      title: "Shipping & Logistics",
      description: "Coordinated shipping with tracking and delivery confirmation",
      icon: Ship,
      duration: "15-35 days",
    },
  ];

  const shippingMethods = [
    {
      method: "Sea Freight",
      icon: Ship,
      duration: "15-35 days",
      capacity: "20-22 MT",
      costEffective: true,
      description: "Most economical for large volumes",
    },
    {
      method: "Air Freight",
      icon: Plane,
      duration: "3-7 days",
      capacity: "5-10 MT",
      costEffective: false,
      description: "Fast delivery for urgent orders",
    },
    {
      method: "Land Transport",
      icon: Truck,
      duration: "5-15 days",
      capacity: "15-25 MT",
      costEffective: true,
      description: "Regional delivery within Asia",
    },
  ];

  const destinations = [
    { region: "Middle East", ports: ["Dubai", "Jeddah", "Kuwait"], volume: "40%" },
    { region: "Europe", ports: ["Rotterdam", "Hamburg", "Antwerp"], volume: "25%" },
    { region: "Asia Pacific", ports: ["Singapore", "Hong Kong", "Manila"], volume: "20%" },
    { region: "Americas", ports: ["Los Angeles", "New York", "Santos"], volume: "15%" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-image.png" alt="Packaging & Export" fill className="object-cover" priority quality={90} />
          <div className="absolute inset-0 bg-primary/70 z-10"></div>
        </div>

        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="text-xs font-semibold text-[#16a34a] tracking-wider uppercase mb-4">GLOBAL LOGISTICS SOLUTIONS</div>
              <h1 className="heading-xl text-primary leading-tight mb-6">
                PACKAGING & EXPORT
                <br />
                <span className="text-[#16a34a]">INFORMATION</span>
              </h1>
              <p className="body-lg text-secondary mb-8 leading-relaxed">Professional packaging solutions and comprehensive export services to deliver your charcoal safely and efficiently to destinations worldwide.</p>
              <div className="flex gap-4">
                <Button variant="primary" size="large">
                  <Download className="w-5 h-5 mr-2" />
                  Export Guide
                </Button>
                <Button variant="primaryOutline" size="large">
                  Get Shipping Quote
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packaging Options */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <div className="text-xs font-semibold text-secondary tracking-wider uppercase mb-6">PACKAGING SOLUTIONS</div>
              <h2 className="heading-xl text-primary leading-tight mb-6">FLEXIBLE PACKAGING OPTIONS</h2>
              <p className="body-lg text-secondary leading-relaxed max-w-2xl mx-auto">Choose from our range of packaging solutions designed to protect your investment and meet diverse market requirements.</p>
            </motion.div>
          </div>

          {/* Packaging Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {Object.entries(packagingOptions).map(([key, option]) => (
              <motion.button
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                onClick={() => setActivePackaging(key)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${activePackaging === key ? "bg-[#16a34a] text-white" : "bg-surface text-secondary hover:bg-surface-light hover:text-primary"}`}
              >
                <span className="body-sm font-medium">{option.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Active Packaging Content */}
          {Object.entries(packagingOptions).map(([key, option]) => (
            <div key={key} className={`${activePackaging === key ? "block" : "hidden"}`}>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-8">
                <h3 className="heading-lg text-primary text-center mb-2">{option.name}</h3>
                <p className="text-[#16a34a] font-semibold text-center">{option.subtitle}</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {option.options.map((pkg, index) => {
                  const IconComponent = pkg.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-primary rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-[#16a34a] rounded-xl flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="heading-sm text-primary mb-1">{pkg.type}</h4>
                          <p className="text-[#16a34a] font-semibold">{pkg.capacity}</p>
                        </div>
                      </div>

                      <div className="space-y-3 mb-4">
                        <div>
                          <span className="text-sm font-semibold text-secondary uppercase tracking-wide">Features:</span>
                          <ul className="mt-2 space-y-1">
                            {pkg.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-secondary">
                                <CheckCircle className="w-4 h-4 text-[#16a34a] flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-2 border-t border-surface">
                          <span className="text-sm font-semibold text-secondary">Container Capacity:</span>
                          <span className="text-sm text-primary ml-2">{pkg.loadCapacity}</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Export Process Timeline */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
            <div className="text-xs font-semibold text-secondary tracking-wider uppercase mb-6">EXPORT PROCESS</div>
            <h2 className="heading-xl text-primary leading-tight">FROM ORDER TO DELIVERY</h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-surface hidden lg:block"></div>

            <div className="space-y-8 lg:space-y-12">
              {exportProcess.map((step, index) => {
                const IconComponent = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} flex-col lg:gap-16`}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#16a34a] rounded-full border-4 border-primary z-10 hidden lg:block"></div>

                    {/* Content */}
                    <div className={`w-full lg:w-5/12 ${isEven ? "lg:text-right" : "lg:text-left"} text-center lg:text-left`}>
                      <div className="bg-surface rounded-2xl p-6">
                        <div className={`flex items-center gap-3 mb-4 ${isEven ? "lg:justify-end" : "lg:justify-start"} justify-center`}>
                          <div className={`w-10 h-10 bg-[#16a34a] rounded-lg flex items-center justify-center ${isEven ? "lg:order-2" : ""}`}>
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-2xl font-bold text-[#16a34a]">{step.step}</span>
                        </div>
                        <h3 className="heading-sm text-primary mb-2">{step.title}</h3>
                        <p className="body-sm text-secondary mb-3">{step.description}</p>
                        <div className="flex items-center gap-2 justify-center lg:justify-start">
                          <Clock className="w-4 h-4 text-[#16a34a]" />
                          <span className="text-sm font-medium text-[#16a34a]">{step.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="w-full lg:w-5/12"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Methods */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
            <div className="text-xs font-semibold text-secondary tracking-wider uppercase mb-6">LOGISTICS OPTIONS</div>
            <h2 className="heading-xl text-primary leading-tight mb-6">FLEXIBLE SHIPPING METHODS</h2>
            <p className="body-lg text-secondary leading-relaxed max-w-2xl mx-auto">Multiple shipping options to meet your timeline and budget requirements with reliable logistics partners worldwide.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shippingMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-primary rounded-2xl p-6 text-start hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-[#16a34a] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="heading-sm text-primary mb-3">{method.method}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-start gap-2 items-center">
                      <span className="text-sm text-secondary">Duration:</span>
                      <span className="text-sm font-medium text-primary">{method.duration}</span>
                    </div>
                    <div className="flex justify-start gap-2 items-center">
                      <span className="text-sm text-secondary">Capacity:</span>
                      <span className="text-sm font-medium text-primary">{method.capacity}</span>
                    </div>
                  </div>
                  <p className="body-sm text-secondary mb-4">{method.description}</p>
                  {method.costEffective && (
                    <div className="inline-flex items-center gap-1 bg-[#16a34a]/10 px-2 py-1 rounded-full">
                      <CheckCircle className="w-3 h-3 text-[#16a34a]" />
                      <span className="text-xs text-[#16a34a] font-medium">Cost Effective</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative min-h-[50vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-image.png" alt="Ready to Export" fill className="object-cover" quality={90} />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>

        <div className="relative z-20 h-full min-h-[50vh] flex items-center justify-center py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-6">
              <h2 className="heading-xl text-white leading-tight">READY TO START YOUR EXPORT ORDER?</h2>
              <p className="body-lg text-white/90 leading-relaxed max-w-2xl mx-auto">Get personalized packaging solutions and shipping quotes for your specific requirements. Our export specialists are ready to assist you.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="large">
                  <Package className="w-5 h-5 mr-2" />
                  Get Packaging Quote
                </Button>
                <Button variant="secondaryOutline" size="large">
                  <Ship className="w-5 h-5 mr-2" />
                  Calculate Shipping
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
