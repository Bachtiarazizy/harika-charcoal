"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Ship, Truck, Plane, Package, MapPin, Clock, DollarSign, FileText, Container, Anchor, Globe, Shield, Calculator, ChevronRight, CheckCircle } from "lucide-react";
import { useState } from "react";

const ShippingPage = () => {
  const [activeTab, setActiveTab] = useState("incoterms");

  const shippingMethods = [
    {
      method: "Sea Freight",
      icon: Ship,
      duration: "15-35 days",
      capacity: "20-22 MT",
      costLevel: "Most Economical",
      description: "Primary shipping method for bulk charcoal exports worldwide",
      advantages: ["Lowest cost per MT", "Large capacity", "Worldwide coverage", "Suitable for all product types"],
      suitableFor: "Large orders, cost-sensitive shipments, regular supply contracts",
    },
    {
      method: "Air Freight",
      icon: Plane,
      duration: "3-7 days",
      capacity: "5-10 MT",
      costLevel: "Premium",
      description: "Fast delivery option for urgent orders and samples",
      advantages: ["Fastest delivery", "High security", "Less handling", "Suitable for samples"],
      suitableFor: "Urgent orders, product samples, high-value shipments, time-critical delivery",
    },
    {
      method: "Land Transport",
      icon: Truck,
      duration: "5-15 days",
      capacity: "15-25 MT",
      costLevel: "Moderate",
      description: "Regional delivery within Asia Pacific using truck transport",
      advantages: ["Door-to-door service", "Flexible scheduling", "Good for regional markets", "Trackable shipments"],
      suitableFor: "Regional customers, ASEAN markets, combined sea-land routes",
    },
  ];

  const incoterms = [
    {
      term: "FOB",
      fullName: "Free on Board",
      port: "Semarang Port",
      description: "Our standard export terms. Risk transfers when goods cross ship's rail.",
      buyerResponsible: ["Ocean freight", "Marine insurance", "Destination charges", "Import duties"],
      sellerResponsible: ["Production", "Export packing", "Local transport", "Export clearance"],
      recommended: true,
    },
    {
      term: "CFR",
      fullName: "Cost and Freight",
      port: "Named Destination Port",
      description: "We arrange and pay ocean freight, but risk transfers at loading port.",
      buyerResponsible: ["Marine insurance", "Destination charges", "Import duties"],
      sellerResponsible: ["Production", "Export packing", "Ocean freight", "Export clearance"],
      recommended: false,
    },
    {
      term: "CIF",
      fullName: "Cost, Insurance & Freight",
      port: "Named Destination Port",
      description: "We arrange freight and basic insurance coverage to destination.",
      buyerResponsible: ["Destination charges", "Import duties", "Additional insurance"],
      sellerResponsible: ["Production", "Ocean freight", "Basic insurance", "Export clearance"],
      recommended: false,
    },
    {
      term: "EXW",
      fullName: "Ex Works",
      port: "Our Warehouse",
      description: "Buyer takes full responsibility from our factory gate.",
      buyerResponsible: ["All transport", "All insurance", "Export clearance", "Import duties"],
      sellerResponsible: ["Production only", "Make goods available"],
      recommended: false,
    },
  ];

  const shippingProcess = [
    {
      step: "Order Confirmation",
      duration: "Day 0",
      description: "Order details finalized with shipping terms and delivery schedule",
      icon: FileText,
      details: ["Contract signing", "Payment terms agreed", "Shipping instructions received"],
    },
    {
      step: "Production Planning",
      duration: "Days 1-3",
      description: "Production scheduled and raw materials allocated",
      icon: Package,
      details: ["Production slot reserved", "Materials prepared", "Quality specifications confirmed"],
    },
    {
      step: "Manufacturing",
      duration: "Days 4-14",
      description: "Charcoal production with quality control monitoring",
      icon: Shield,
      details: ["Controlled carbonization", "Quality testing", "Batch documentation"],
    },
    {
      step: "Packaging & QC",
      duration: "Days 15-17",
      description: "Professional packaging with final quality inspection",
      icon: Container,
      details: ["Size grading", "Packaging as specified", "Final quality check"],
    },
    {
      step: "Documentation",
      duration: "Days 18-19",
      description: "Export documents preparation and verification",
      icon: FileText,
      details: ["Export permits", "Quality certificates", "Shipping documents"],
    },
    {
      step: "Loading & Dispatch",
      duration: "Days 20-21",
      description: "Loading onto vessel with shipping notification",
      icon: Ship,
      details: ["Port delivery", "Loading supervision", "Bill of Lading issued"],
    },
  ];

  const destinations = [
    {
      region: "Middle East",
      mainPorts: ["Dubai, UAE", "Jeddah, Saudi Arabia", "Kuwait City, Kuwait"],
      transitTime: "12-18 days",
      frequency: "Weekly sailings",
      volume: "40% of exports",
      specialNotes: "HALAL certification often required",
    },
    {
      region: "Europe",
      mainPorts: ["Rotterdam, Netherlands", "Hamburg, Germany", "Antwerp, Belgium"],
      transitTime: "25-30 days",
      frequency: "Bi-weekly sailings",
      volume: "25% of exports",
      specialNotes: "EU import regulations compliance required",
    },
    {
      region: "Asia Pacific",
      mainPorts: ["Singapore", "Hong Kong", "Manila, Philippines"],
      transitTime: "7-14 days",
      frequency: "Multiple weekly sailings",
      volume: "20% of exports",
      specialNotes: "ASEAN trade agreements apply",
    },
    {
      region: "Americas",
      mainPorts: ["Los Angeles, USA", "New York, USA", "Santos, Brazil"],
      transitTime: "30-35 days",
      frequency: "Weekly sailings",
      volume: "15% of exports",
      specialNotes: "FDA regulations for food-grade products",
    },
  ];

  const tabContent = {
    incoterms: (
      <div className="space-y-6">
        {incoterms.map((term, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} className={`bg-surface rounded-2xl p-6 `}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-primary">{term.term}</h3>
                  {term.recommended && <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Recommended</span>}
                </div>
                <p className="text-gray-200 mb-2">
                  {term.fullName} - {term.port}
                </p>
                <p className="text-sm text-gray-100">{term.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Seller Responsibilities</h4>
                <ul className="space-y-2">
                  {term.sellerResponsible.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-100">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Buyer Responsibilities</h4>
                <ul className="space-y-2">
                  {term.buyerResponsible.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-100">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    ),
    process: (
      <div className="space-y-8">
        {shippingProcess.map((step, index) => (
          <motion.div key={index} initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} className="flex bg-surface p-6 rounded-2xl items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-lg font-semibold text-primary">{step.step}</h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">{step.duration}</span>
              </div>
              <p className="text-gray-100 mb-3">{step.description}</p>
              <ul className="space-y-1">
                {step.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-100">
                    <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    ),
    destinations: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {destinations.map((dest, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-surface rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-primary">{dest.region}</h3>
              <span className="ml-auto px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">{dest.volume}</span>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-gray-100 mb-1">Main Ports:</p>
                {dest.mainPorts.map((port, idx) => (
                  <p key={idx} className="text-sm text-gray-100 ml-4">
                    • {port}
                  </p>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-200">Transit Time:</p>
                  <p className="text-sm text-gray-300 font-medium">{dest.transitTime}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-200">Frequency:</p>
                  <p className="text-sm text-gray-300 font-medium">{dest.frequency}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-200 mb-1">Special Notes:</p>
                <p className="text-sm text-gray-300">{dest.specialNotes}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    ),
  };

  return (
    <div className="bg-secondary min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Ship className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">Global Shipping Solutions</h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">Reliable worldwide delivery of premium charcoal products with comprehensive logistics support and transparent shipping terms</p>
          </motion.div>
        </div>
      </section>

      {/* Shipping Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Shipping Methods</h2>
            <p className="text-lg text-primary/90 max-w-3xl mx-auto">Choose from our flexible shipping options designed to meet different delivery requirements and budgets</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {shippingMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-surface rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <method.icon className="w-6 h-6 text-primary-dark-75" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">{method.method}</h3>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-200">Duration:</span>
                    <span className="text-sm font-bold text-primary">{method.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-200">Capacity:</span>
                    <span className="text-sm font-bold text-primary">{method.capacity}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-200">Cost Level:</span>
                    <span className="text-sm font-bold text-green-600">{method.costLevel}</span>
                  </div>
                </div>

                <p className="text-gray-200 mb-6">{method.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-3">Key Advantages:</h4>
                  <ul className="space-y-1">
                    {method.advantages.map((advantage, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-200">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {advantage}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-primary mb-2">Best For:</h4>
                  <p className="text-sm text-gray-200">{method.suitableFor}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Information Tabs */}
      <section className="py-16 bg-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Shipping Information</h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">Comprehensive details about our shipping terms, process, and destinations</p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { key: "incoterms", label: "Incoterms", icon: FileText },
              { key: "process", label: "Shipping Process", icon: Clock },
              { key: "destinations", label: "Destinations", icon: Globe },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.key ? "bg-white text-primary-dark shadow-lg" : "border border-white text-white hover:bg-white hover:text-primary-dark transition-all duration-300"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {tabContent[activeTab]}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center">
            <Ship className="w-12 h-12 text-white mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Ship Your Order?</h2>
            <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto">Get a customized shipping quote for your charcoal order. Our logistics team will help you choose the best shipping solution for your needs.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/mailto:charcoal@harikanusantara.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary-dark px-8 py-4 rounded-full hover:bg-white/90 transition-all duration-300 font-medium text-lg"
              >
                <Calculator className="w-5 h-5" />
                Get Shipping Quote
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-primary-dark transition-all duration-300 font-medium text-lg">
                <ChevronRight className="w-5 h-5" />
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ShippingPage;
