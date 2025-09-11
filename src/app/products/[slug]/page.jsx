"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Download, FileText, ChevronRight, Star, Shield, Award, Globe, Truck, Clock, Thermometer, Flame, Target, BarChart3, CheckCircle, Zap, Factory, Leaf, Users, Phone, Mail, MapPin } from "lucide-react";
import Button from "@/components/ui/button";
import { useState } from "react";

export default function ProductDetailPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedGrade, setSelectedGrade] = useState("premium-a+");

  // Sample product data - in real app this would come from props/API
  const product = {
    id: "coconut-shell-premium",
    name: "Premium Coconut Shell Charcoal",
    category: "Coconut Shell",
    shortDesc: "Premium grade coconut shell charcoal with superior burning performance and minimal ash content.",
    longDesc:
      "Our Premium Coconut Shell Charcoal represents the pinnacle of sustainable charcoal production. Sourced from carefully selected coconut shells and processed using traditional Indonesian methods combined with modern quality control, this charcoal delivers exceptional performance for both commercial and domestic applications.",
    images: ["/coconut-shell-charcoal.jpg", "/coconut-shell-charcoal-2.jpg", "/coconut-shell-charcoal-3.jpg"],
    badges: ["Best Seller", "Premium Grade", "Eco-Friendly"],
    certifications: ["ISO 9001:2015", "FSC Certified", "SGS Tested", "HACCP"],

    grades: {
      "premium-a+": {
        name: "Premium A+",
        price: "$580-620/MT",
        minOrder: "18 MT",
        specifications: {
          moisture: "≤ 5%",
          ash: "≤ 3%",
          carbon: "≥ 75%",
          volatile: "≤ 20%",
          calorific: "7,200 kcal/kg",
          burning: "3-4 hours",
          ignition: "8-12 minutes",
          size: "2-6 cm",
        },
      },
      "grade-a": {
        name: "Grade A",
        price: "$520-560/MT",
        minOrder: "18 MT",
        specifications: {
          moisture: "≤ 7%",
          ash: "≤ 5%",
          carbon: "≥ 70%",
          volatile: "≤ 25%",
          calorific: "6,800 kcal/kg",
          burning: "2.5-3 hours",
          ignition: "10-15 minutes",
          size: "2-6 cm",
        },
      },
    },

    features: ["100% Natural coconut shell source", "Smokeless and odorless burning", "Long burning duration", "High calorific value", "Minimal ash production", "Environmentally sustainable", "Consistent size and quality", "Easy ignition"],

    applications: [
      { name: "BBQ & Grilling", desc: "Perfect for outdoor cooking and professional grilling" },
      { name: "Restaurant Use", desc: "Ideal for commercial kitchen and restaurant chains" },
      { name: "Industrial Applications", desc: "Suitable for industrial heating and processing" },
      { name: "Export Markets", desc: "Meets international quality standards for global trade" },
      { name: "Shisha & Hookah", desc: "Clean burning for premium smoking experience" },
      { name: "Home Cooking", desc: "Safe and efficient for domestic cooking needs" },
    ],

    packaging: [
      { type: "Standard", size: "25kg PP Bags", container: "18-20 MT per 20ft container" },
      { type: "Jumbo", size: "1000kg Jumbo Bags", container: "18-20 MT per 20ft container" },
      { type: "Custom", size: "Custom packaging available", container: "Based on requirements" },
    ],

    technicalSpecs: [
      {
        category: "Physical Properties",
        icon: Target,
        specs: [
          { label: "Moisture Content", value: "≤ 5%", standard: "ASTM D3173" },
          { label: "Ash Content", value: "≤ 3%", standard: "ASTM D3174" },
          { label: "Fixed Carbon", value: "≥ 75%", standard: "ASTM D3172" },
          { label: "Volatile Matter", value: "≤ 20%", standard: "ASTM D3175" },
        ],
      },
      {
        category: "Performance Metrics",
        icon: Flame,
        specs: [
          { label: "Calorific Value", value: "7,200 kcal/kg", standard: "ASTM D5865" },
          { label: "Burning Time", value: "3-4 hours", standard: "Internal Test" },
          { label: "Ignition Time", value: "8-12 minutes", standard: "Internal Test" },
          { label: "Maximum Temperature", value: "800°C", standard: "Internal Test" },
        ],
      },
      {
        category: "Size & Quality",
        icon: BarChart3,
        specs: [
          { label: "Size Range", value: "2-6 cm", standard: "Manual Sorting" },
          { label: "Uniform Shape", value: "≥ 85%", standard: "Visual Inspection" },
          { label: "Density", value: "0.4-0.6 g/cm³", standard: "ASTM D167" },
          { label: "Hardness", value: "High", standard: "Drop Test" },
        ],
      },
    ],
  };

  const tabs = [
    { id: "overview", name: "Overview", icon: FileText },
    { id: "specifications", name: "Specifications", icon: BarChart3 },
    { id: "applications", name: "Applications", icon: Target },
    { id: "packaging", name: "Packaging", icon: Truck },
  ];

  return (
    <div className="min-h-screen bg-secondary">
      {/* Breadcrumb & Back Navigation */}
      <section className="bg-primary border-b border-surface py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-300">
              <ArrowLeft className="w-4 h-4" />
              <span className="body-sm">Back to Products</span>
            </button>
            <ChevronRight className="w-4 h-4 text-secondary" />
            <span className="body-sm text-secondary">Coconut Shell</span>
            <ChevronRight className="w-4 h-4 text-secondary" />
            <span className="body-sm text-primary font-medium">Premium Coconut Shell Charcoal</span>
          </div>
        </div>
      </section>

      {/* Product Hero Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Product Images */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="space-y-4">
                {/* Main Image */}
                <div className="aspect-[4/3] bg-gray-600 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-600">
                    <FileText className="w-20 h-20 text-gray-400" />
                  </div>
                </div>

                {/* Thumbnail Images */}
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((index) => (
                    <div key={index} className="aspect-[4/3] bg-gray-500 rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-[#16a34a] transition-all">
                      <div className="w-full h-full flex items-center justify-center">
                        <FileText className="w-8 h-8 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Product Information */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {product.badges.map((badge, index) => (
                  <span key={index} className="px-3 py-1 bg-[#16a34a] text-white text-sm font-semibold rounded-full">
                    {badge}
                  </span>
                ))}
              </div>

              {/* Product Name & Category */}
              <div>
                <div className="text-sm font-semibold text-[#16a34a] uppercase tracking-wide mb-2">{product.category}</div>
                <h1 className="heading-xl text-primary leading-tight mb-4">{product.name}</h1>
                <p className="body-lg text-secondary leading-relaxed">{product.shortDesc}</p>
              </div>

              {/* Grade Selection */}
              <div className="space-y-4">
                <div className="text-sm font-semibold text-primary uppercase tracking-wide">Select Grade</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.entries(product.grades).map(([key, grade]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedGrade(key)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${selectedGrade === key ? "border-[#16a34a] bg-[#16a34a]/5" : "border-surface hover:border-[#16a34a]/50"}`}
                    >
                      <div className="font-semibold text-primary mb-1">{grade.name}</div>
                      <div className="text-lg font-bold text-[#16a34a] mb-1">{grade.price}</div>
                      <div className="text-sm text-secondary">Min. Order: {grade.minOrder}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-primary rounded-xl border border-surface">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{product.grades[selectedGrade].specifications.calorific}</div>
                  <div className="text-xs text-secondary">Calorific Value</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{product.grades[selectedGrade].specifications.burning}</div>
                  <div className="text-xs text-secondary">Burning Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{product.grades[selectedGrade].specifications.ash}</div>
                  <div className="text-xs text-secondary">Ash Content</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{product.grades[selectedGrade].specifications.carbon}</div>
                  <div className="text-xs text-secondary">Fixed Carbon</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="large" className="flex-1">
                  Request Quote
                </Button>
                <Button variant="primaryOutline" size="large">
                  <Download className="w-5 h-5 mr-2" />
                  Download Specs
                </Button>
                <Button variant="primaryOutline" size="large">
                  Request Sample
                </Button>
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-surface">
                <span className="text-sm font-semibold text-secondary">Certified:</span>
                {product.certifications.map((cert, index) => (
                  <span key={index} className="text-sm text-primary font-medium">
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-8 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${activeTab === tab.id ? "bg-[#16a34a] text-white" : "bg-surface text-secondary hover:bg-surface-light hover:text-primary"}`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="body-sm font-medium">{tab.name}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-8">
                <div className="">
                  {/* Description */}
                  <div className="space-y-6">
                    <h3 className="heading-base text-primary">Product Overview</h3>
                    <p className="body-base text-secondary leading-relaxed">{product.longDesc}</p>

                    <div>
                      <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">Key Features</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-[#16a34a] flex-shrink-0 mt-0.5" />
                            <span className="body-sm text-secondary">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Specifications Tab */}
            {activeTab === "specifications" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {product.technicalSpecs.map((category, categoryIndex) => {
                    const IconComponent = category.icon;
                    return (
                      <div key={categoryIndex} className="bg-secondary rounded-xl p-6 border border-surface">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 bg-[#16a34a] rounded-lg flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="heading-sm text-primary">{category.category}</h3>
                        </div>

                        <div className="space-y-4">
                          {category.specs.map((spec, specIndex) => (
                            <div key={specIndex} className="space-y-1">
                              <div className="flex justify-between items-start">
                                <span className="body-sm text-secondary">{spec.label}</span>
                                <span className="body-sm font-semibold text-primary">{spec.value}</span>
                              </div>
                              <div className="text-xs text-secondary/60">Standard: {spec.standard}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Applications Tab */}
            {activeTab === "applications" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="heading-base text-primary mb-4">Perfect for Various Applications</h3>
                  <p className="body-base text-secondary max-w-2xl mx-auto">Our premium coconut shell charcoal is versatile and suitable for multiple industries and applications.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {product.applications.map((app, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="bg-secondary rounded-xl p-6 border border-surface transition-all duration-300 hover:border-[#16a34a]/50 hover:shadow-lg">
                        <div className="w-12 h-12 bg-[#16a34a] rounded-lg flex items-center justify-center mb-4">
                          <Target className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="heading-sm text-primary mb-3 group-hover:text-[#16a34a] transition-colors">{app.name}</h4>
                        <p className="body-sm text-secondary leading-relaxed">{app.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Packaging Tab */}
            {activeTab === "packaging" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="heading-base text-primary mb-4">Packaging Options</h3>
                  <p className="body-base text-secondary max-w-2xl mx-auto">We offer various packaging solutions to meet your specific requirements and shipping needs.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {product.packaging.map((pack, index) => (
                    <div key={index} className="bg-secondary rounded-xl p-6 border border-surface">
                      <div className="w-12 h-12 bg-[#16a34a] rounded-lg flex items-center justify-center mb-4">
                        <Truck className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="heading-sm text-primary mb-3">{pack.type} Packaging</h4>
                      <div className="space-y-2">
                        <div className="text-sm text-secondary">
                          <strong className="text-primary">Size:</strong> {pack.size}
                        </div>
                        <div className="text-sm text-secondary">
                          <strong className="text-primary">Container:</strong> {pack.container}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-6">
            <h2 className="heading-lg text-primary">Ready to Order?</h2>
            <p className="body-base text-secondary max-w-2xl mx-auto">Get competitive pricing, request samples, or discuss custom specifications with our team.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="large">
                Get Quote Now
              </Button>
              <Button variant="primaryOutline" size="large">
                Contact Sales Team
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-surface">
              <div className="flex items-center gap-2 text-sm text-secondary">
                <Phone className="w-4 h-4" />
                <span>+62 123 456 7890</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-secondary">
                <Mail className="w-4 h-4" />
                <span>sales@company.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-secondary">
                <MapPin className="w-4 h-4" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
