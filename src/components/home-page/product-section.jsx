"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Mountain, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { getFeaturedProducts } from "@/sanity/queries/products";
import { urlForImage } from "@/sanity/client";

const ProductsSection = ({ initialProducts = [] }) => {
  const [products, setProducts] = useState(initialProducts);
  const [loading, setLoading] = useState(!initialProducts.length);
  const [error, setError] = useState(null);

  // Client-side fetch untuk products
  useEffect(() => {
    async function fetchProducts() {
      // Jika sudah ada initial products, skip fetch
      if (initialProducts.length > 0) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const fetchedProducts = await getFeaturedProducts();
        setProducts(fetchedProducts);
        setError(null);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [initialProducts]);

  const handleSpecsClick = () => {
    // Navigate to specifications page or open modal
    window.location.href = "/specifications";
  };

  const handleDetailsClick = () => {
    // Navigate to products page
    window.location.href = "/products";
  };

  // Get main image for each product
  const getMainImage = (product) => {
    const mainImage = product.images?.find((img) => img.isMain) || product.images?.[0];
    return mainImage?.image?.asset?.url || mainImage?.image?.asset?._ref;
  };

  const getImageAlt = (product) => {
    const mainImage = product.images?.find((img) => img.isMain) || product.images?.[0];
    return mainImage?.alt || product.title;
  };

  // Loading skeleton
  const LoadingSkeleton = () =>
    Array.from({ length: 3 }).map((_, index) => (
      <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} viewport={{ once: true }} className="group cursor-pointer">
        <div className="transition-all duration-300">
          <div className="aspect-[4/3] bg-gray-600 relative overflow-hidden rounded-2xl mb-4 animate-pulse">
            <div className="absolute inset-0 flex items-center justify-center bg-gray-600">
              <Mountain className="w-16 h-16 text-gray-400" />
            </div>
          </div>
          <div className="space-y-3">
            <div className="h-6 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2"></div>
          </div>
        </div>
      </motion.div>
    ));

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
          {error ? (
            // Error state
            <div className="col-span-full text-center py-12">
              <p className="text-red-500 mb-4">{error}</p>
              <button onClick={() => window.location.reload()} className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors">
                Try Again
              </button>
            </div>
          ) : loading ? (
            // Loading state
            <LoadingSkeleton />
          ) : products.length > 0 ? (
            // Products list
            products.map((product, index) => {
              const imageSource = getMainImage(product);
              const imageAlt = getImageAlt(product);

              return (
                <motion.div key={product._id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} viewport={{ once: true }} className="group cursor-pointer">
                  <Link href={`/products/${product.slug.current}`}>
                    <div className="transition-all duration-300">
                      {/* Product Image */}
                      <div className="aspect-[4/3] bg-gray-600 relative overflow-hidden rounded-2xl mb-4">
                        {imageSource ? (
                          <Image
                            src={urlForImage(imageSource).width(400).height(300).url()}
                            alt={imageAlt}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-gray-600">
                            <Mountain className="w-16 h-16 text-gray-400" />
                          </div>
                        )}

                        {/* Featured Badge */}
                        {product.featured && <div className="absolute top-3 left-3 bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">Featured</div>}
                      </div>

                      {/* Product Info */}
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <h3 className="heading-sm text-primary leading-tight flex-1">{product.title}</h3>
                        </div>
                        <p className="body-sm text-secondary leading-relaxed">{product.shortDescription}</p>
                        {product.category && <span className="inline-block text-xs font-medium text-secondary/70 uppercase tracking-wider">{product.category.name}</span>}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })
          ) : (
            // Empty state
            <div className="col-span-full text-center py-12">
              <Mountain className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-secondary">No products available</p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }} className="flex flex-col sm:flex-row gap-4 items-start">
          {/* Specs Button */}
          <button onClick={handleSpecsClick} className="inline-flex items-center justify-center px-6 py-3 border border-gray-500 rounded-full text-primary hover:border-gray-400 hover:bg-surface transition-all duration-300 group">
            <span className="body-sm font-medium">Specs</span>
          </button>

          {/* Details Button */}
          <button onClick={handleDetailsClick} className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-300 group py-3">
            <span className="body-sm font-medium">View All Products</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
