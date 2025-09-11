"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Thermometer, Flame, Clock, Zap, Shield, Award, Target, BarChart3, CheckCircle, ArrowRight, Download, FileText, ChevronDown, ChevronRight, Filter, Search, Star, Leaf, Globe, Factory } from "lucide-react";
import Button from "@/components/ui/button";
import { useState } from "react";

export default function CharcoalProductsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Product data with comprehensive information
  const products = [
    {
      id: "coconut-shell-premium",
      name: "Premium Coconut Shell Charcoal",
      category: "coconut",
      grade: "Premium A+",
      price: "$580-620/MT",
      image: "/coconut-shell-charcoal.jpg",
      featured: true,
      badges: ["Best Seller", "Premium Grade"],
      shortDesc: "Premium grade coconut shell charcoal with superior burning performance and minimal ash content.",
      applications: ["BBQ & Grilling", "Restaurants", "Export Markets", "Industrial Use"],
      specifications: {
        moisture: "≤ 5%",
        ash: "≤ 3%",
        carbon: "≥ 75%",
        calorific: "7,200 kcal/kg",
        burning: "3-4 hours",
        size: "2-6 cm",
      },
      features: ["Smokeless burning", "High calorific value", "Long burning duration", "Eco-friendly sourcing", "Consistent quality"],
      packaging: ["25kg PP bags", "Jumbo bags", "Custom packaging"],
      certifications: ["ISO 9001", "FSC Certified", "SGS Tested"],
    },
    {
      id: "coconut-shell-standard",
      name: "Standard Coconut Shell Charcoal",
      category: "coconut",
      grade: "Grade A",
      price: "$480-520/MT",
      image: "/coconut-shell-charcoal.jpg",
      featured: false,
      badges: ["Value Grade"],
      shortDesc: "High-quality coconut shell charcoal perfect for commercial and domestic use.",
      applications: ["Home BBQ", "Small Restaurants", "Local Markets"],
      specifications: {
        moisture: "≤ 7%",
        ash: "≤ 5%",
        carbon: "≥ 70%",
        calorific: "6,800 kcal/kg",
        burning: "2.5-3 hours",
        size: "2-6 cm",
      },
      features: ["Good burning performance", "Affordable pricing", "Reliable quality", "Wide availability"],
      packaging: ["25kg PP bags", "50kg bags"],
      certifications: ["SGS Tested"],
    },
    {
      id: "hexagonal-briquettes",
      name: "Hexagonal Charcoal Briquettes",
      category: "briquette",
      grade: "Premium Plus",
      price: "$520-560/MT",
      image: "/charcoal-briquettes.jpg",
      featured: true,
      badges: ["Innovation", "Even Heat"],
      shortDesc: "Precision-engineered hexagonal briquettes for optimal airflow and even heat distribution.",
      applications: ["Professional BBQ", "Restaurants", "Catering", "Export"],
      specifications: {
        moisture: "≤ 6%",
        ash: "≤ 4%",
        carbon: "≥ 70%",
        calorific: "6,800 kcal/kg",
        burning: "4-5 hours",
        size: "5x5x2 cm",
      },
      features: ["Perfect hexagonal shape", "Even heat distribution", "Long burning time", "Easy to stack", "Minimal smoke"],
      packaging: ["20kg cartons", "Custom retail packs"],
      certifications: ["ISO 9001", "HACCP", "SGS Tested"],
    },
    {
      id: "pillow-briquettes",
      name: "Pillow Charcoal Briquettes",
      category: "briquette",
      grade: "Premium",
      price: "$450-490/MT",
      image: "/charcoal-briquettes.jpg",
      featured: false,
      badges: ["Traditional Shape"],
      shortDesc: "Classic pillow-shaped briquettes ideal for home grilling and small commercial use.",
      applications: ["Home Grilling", "Small BBQ", "Camping"],
      specifications: {
        moisture: "≤ 7%",
        ash: "≤ 6%",
        carbon: "≥ 65%",
        calorific: "6,400 kcal/kg",
        burning: "3-4 hours",
        size: "6x4x3 cm",
      },
      features: ["Easy ignition", "Consistent shape", "Good value", "Widely compatible"],
      packaging: ["10kg bags", "20kg bags"],
      certifications: ["SGS Tested"],
    },
    {
      id: "hardwood-restaurant",
      name: "Restaurant Grade Wood Charcoal",
      category: "wood",
      grade: "Restaurant Grade",
      price: "$620-680/MT",
      image: "/wood-charcoal.jpg",
      featured: true,
      badges: ["Premium", "Restaurant Choice"],
      shortDesc: "Premium hardwood charcoal specifically crafted for professional culinary applications.",
      applications: ["Fine Dining", "Steakhouses", "Professional Kitchens", "Culinary Schools"],
      specifications: {
        moisture: "≤ 4%",
        ash: "≤ 2%",
        carbon: "≥ 80%",
        calorific: "7,500 kcal/kg",
        burning: "2.5-3 hours",
        size: "3-8 cm",
      },
      features: ["Pure hardwood source", "High temperature burn", "Minimal ash residue", "Fast ignition", "Blue flame characteristic"],
      packaging: ["15kg bags", "30kg bags", "Bulk containers"],
      certifications: ["ISO 9001", "HACCP", "FSC Certified"],
    },
    {
      id: "hardwood-bbq",
      name: "BBQ Grade Wood Charcoal",
      category: "wood",
      grade: "BBQ Grade",
      price: "$520-580/MT",
      image: "/wood-charcoal.jpg",
      featured: false,
      badges: ["BBQ Favorite"],
      shortDesc: "Traditional hardwood charcoal perfect for authentic barbecue flavor and grilling.",
      applications: ["BBQ Restaurants", "Home Grilling", "Outdoor Catering"],
      specifications: {
        moisture: "≤ 6%",
        ash: "≤ 4%",
        carbon: "≥ 75%",
        calorific: "7,200 kcal/kg",
        burning: "2-3 hours",
        size: "3-8 cm",
      },
      features: ["Authentic wood flavor", "Good heat output", "Natural wood aroma", "Traditional processing"],
      packaging: ["20kg bags", "40kg bags"],
      certifications: ["SGS Tested"],
    },
  ];

  const categories = [
    { id: "all", name: "All Products", icon: Globe, count: products.length },
    { id: "coconut", name: "Coconut Shell", icon: Leaf, count: products.filter((p) => p.category === "coconut").length },
    { id: "briquette", name: "Briquettes", icon: Target, count: products.filter((p) => p.category === "briquette").length },
    { id: "wood", name: "Wood Charcoal", icon: Factory, count: products.filter((p) => p.category === "wood").length },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeFilter === "all" || product.category === activeFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredProducts = products.filter((product) => product.featured);

  return (
    <div className="min-h-screen bg-secondary">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-image.png" alt="Premium Charcoal Products" fill className="object-cover" priority quality={90} />
          <div className="absolute inset-0 bg-primary/80 z-10"></div>
        </div>

        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="text-xs font-semibold text-[#16a34a] tracking-wider uppercase mb-4">PREMIUM CHARCOAL PRODUCTS</div>
              <h1 className="heading-xl text-primary leading-tight mb-6">
                DISCOVER OUR
                <br />
                <span className="text-[#16a34a]">CHARCOAL COLLECTION</span>
              </h1>
              <p className="body-lg text-secondary mb-8 leading-relaxed max-w-2xl">
                From premium coconut shell charcoal to precision-engineered briquettes and traditional wood charcoal. Each product crafted for specific applications with guaranteed quality and performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="large">
                  <Download className="w-5 h-5 mr-2" />
                  Download Product Catalog
                </Button>
                <Button variant="primaryOutline" size="large">
                  Request Samples
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="heading-lg text-primary mb-4">Featured Products</h2>
            <p className="body-base text-secondary max-w-2xl mx-auto">Our most popular and highest-performing charcoal products, trusted by professionals worldwide.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-surface"
              >
                {/* Product Image */}
                <div className="relative h-48 bg-gray-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileText className="w-16 h-16 text-gray-400" />
                  </div>
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {product.badges.map((badge, badgeIndex) => (
                      <span key={badgeIndex} className="px-2 py-1 bg-[#16a34a] text-white text-xs font-semibold rounded-full">
                        {badge}
                      </span>
                    ))}
                  </div>
                  <div className="absolute top-4 right-4">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-[#16a34a] uppercase tracking-wide">{product.grade}</span>
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                  </div>

                  <h3 className="heading-sm text-primary mb-3">{product.name}</h3>
                  <p className="body-sm text-secondary mb-4 line-clamp-2">{product.shortDesc}</p>

                  {/* Key Specs */}
                  <div className="grid grid-cols-2 gap-3 mb-4 p-3 bg-surface rounded-lg">
                    <div className="text-center">
                      <div className="text-xs text-secondary">Calorific Value</div>
                      <div className="text-sm font-semibold text-primary">{product.specifications.calorific}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-secondary">Burning Time</div>
                      <div className="text-sm font-semibold text-primary">{product.specifications.burning}</div>
                    </div>
                  </div>

                  <Button variant="primary" size="small" className="w-full" onClick={() => setSelectedProduct(product)}>
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="bg-primary border-b border-surface py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-surface border border-surface rounded-lg focus:outline-none focus:border-[#16a34a] transition-colors"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <motion.button
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    onClick={() => setActiveFilter(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${activeFilter === category.id ? "bg-[#16a34a] text-white" : "bg-surface text-secondary hover:bg-surface-light hover:text-primary"}`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="text-sm font-medium">{category.name}</span>
                    <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">{category.count}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* All Products Grid */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="heading-lg text-primary">All Products ({filteredProducts.length})</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-surface hover:border-[#16a34a]/30"
              >
                {/* Product Image */}
                <div className="relative h-48 bg-gray-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileText className="w-16 h-16 text-gray-400" />
                  </div>
                  {product.badges.length > 0 && (
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {product.badges.map((badge, badgeIndex) => (
                        <span key={badgeIndex} className="px-2 py-1 bg-[#16a34a] text-white text-xs font-semibold rounded-full">
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-[#16a34a] uppercase tracking-wide">{product.grade}</span>
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                  </div>

                  <h3 className="heading-sm text-primary mb-3">{product.name}</h3>
                  <p className="body-sm text-secondary mb-4">{product.shortDesc}</p>

                  {/* Applications */}
                  <div className="mb-4">
                    <div className="text-xs font-semibold text-secondary uppercase tracking-wide mb-2">Applications</div>
                    <div className="flex flex-wrap gap-1">
                      {product.applications.slice(0, 3).map((app, appIndex) => (
                        <span key={appIndex} className="px-2 py-1 bg-surface text-xs text-secondary rounded">
                          {app}
                        </span>
                      ))}
                      {product.applications.length > 3 && <span className="px-2 py-1 bg-surface text-xs text-secondary rounded">+{product.applications.length - 3} more</span>}
                    </div>
                  </div>

                  {/* Key Specifications */}
                  <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-primary rounded-lg border border-surface">
                    <div className="text-center">
                      <div className="text-xs text-secondary">Moisture</div>
                      <div className="text-sm font-semibold text-primary">{product.specifications.moisture}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-secondary">Ash</div>
                      <div className="text-sm font-semibold text-primary">{product.specifications.ash}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-secondary">Carbon</div>
                      <div className="text-sm font-semibold text-primary">{product.specifications.carbon}</div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="primary" size="small" className="flex-1" onClick={() => setSelectedProduct(product)}>
                      View Details
                    </Button>
                    <Button variant="primaryOutline" size="small">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-image.png" alt="Contact for Custom Solutions" fill className="object-cover" quality={90} />
          <div className="absolute inset-0 bg-black/70 z-10"></div>
        </div>

        <div className="relative z-20 h-full min-h-[60vh] flex items-center justify-center py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-6">
              <h2 className="heading-xl text-white leading-tight">READY TO ORDER OR NEED CUSTOM SOLUTIONS?</h2>
              <p className="body-lg text-white/90 leading-relaxed max-w-2xl mx-auto">Get competitive prices, custom specifications, or arrange product samples. Our team is ready to support your charcoal requirements.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="large">
                  Get Bulk Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="secondaryOutline" size="large">
                  <Download className="w-5 h-5 mr-2" />
                  Download Full Catalog
                </Button>
                <Button variant="secondaryOutline" size="large">
                  Request Samples
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Detail Modal (Simple version - you might want to make this a separate page) */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-primary rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-surface flex items-center justify-between">
              <h3 className="heading-base text-primary">{selectedProduct.name}</h3>
              <button onClick={() => setSelectedProduct(null)} className="text-secondary hover:text-primary transition-colors">
                ✕
              </button>
            </div>
            <div className="p-6">
              <p className="body-base text-secondary mb-4">
                This would contain detailed product information, full specifications, applications, packaging options, certifications, and contact forms. Consider making this a dedicated product detail page instead of a modal.
              </p>
              <Button variant="primary" onClick={() => setSelectedProduct(null)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
