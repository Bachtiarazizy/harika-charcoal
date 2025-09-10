"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mountain, ChevronRight } from "lucide-react";

const ProductsSection = () => {
  const handleSpecsClick = () => {
    console.log("Specs clicked");
  };

  const handleDetailsClick = () => {
    console.log("Details clicked");
  };

  const products = [
    {
      id: 1,
      title: "COCONUT SHELL CHARCOAL",
      description: "Perfect for BBQs, offering a clean burn.",
      image: "/coconut-shell-charcoal.jpg",
    },
    {
      id: 2,
      title: "CHARCOAL BRIQUETTES (SHISHA & BBQ)",
      description: "Versatile briquettes for an exceptional smoking experience.",
      image: "/charcoal-briquettes.jpg",
    },
    {
      id: 3,
      title: "WOOD CHARCOAL",
      description: "Ideal for grilling, providing rich flavors.",
      image: "/wood-charcoal.jpg",
    },
  ];

  return (
    <section className="bg-secondary py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            {/* Products Label */}
            <div className="text-xs font-semibold text-secondary tracking-wider uppercase mb-6">PRODUCTS</div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Left: Main Heading */}
              <div>
                <h2 className="heading-xl text-primary leading-tight">EXPLORE OUR PREMIUM CHARCOAL PRODUCT RANGE</h2>
              </div>

              {/* Right: Description */}
              <div className="lg:pt-4">
                <p className="body-lg text-secondary leading-relaxed">
                  Discover our diverse selection of high-quality charcoal products sourced sustainably from Indonesia. Each product is designed to meet the needs of BBQ enthusiasts and shisha lovers alike. Experience the superior burning
                  performance and eco-friendliness of our offerings.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 lg:mb-12">
          {products.map((product, index) => (
            <motion.div key={product.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} viewport={{ once: true }} className="group cursor-pointer">
              {/* Card tanpa background wrapper */}
              <div className="transition-all duration-300">
                {/* Product Image dengan rounded */}
                <div className="aspect-[4/3] bg-gray-600 relative overflow-hidden rounded-2xl mb-4">
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-600">
                    <Mountain className="w-16 h-16 text-gray-400" />
                  </div>
                  {/* You can replace this with actual images */}
                  {/* 
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  */}
                </div>

                {/* Product Info tanpa background */}
                <div className="space-y-3">
                  <h3 className="heading-sm text-primary leading-tight">{product.title}</h3>
                  <p className="body-sm text-secondary leading-relaxed">{product.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }} className="flex flex-col sm:flex-row gap-4 items-start">
          {/* Specs Button */}
          <button onClick={handleSpecsClick} className="inline-flex items-center justify-center px-6 py-3 border border-gray-500 rounded-full text-primary hover:border-gray-400 hover:bg-surface transition-all duration-300 group">
            <span className="body-sm font-medium">Specs</span>
          </button>

          {/* Details Button */}
          <button onClick={handleDetailsClick} className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-300 group py-3">
            <span className="body-sm font-medium">Details</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
