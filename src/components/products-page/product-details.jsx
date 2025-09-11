"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Mountain, ChevronRight, ArrowLeft, Check, Star, Package, Award, Flame, Factory, Users, Zap, Shield, Truck } from "lucide-react";
import { useState } from "react";
import { urlForImage } from "@/sanity/client";
import { PortableText } from "@portabletext/react";

const ProductDetailPage = ({ product }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedGradeIndex, setSelectedGradeIndex] = useState(0);

  if (!product) {
    return (
      <div className="bg-secondary min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Mountain className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-secondary">Product not found</p>
        </div>
      </div>
    );
  }

  const getMainImage = (image) => {
    return image?.image?.asset?.url || image?.image?.asset?._ref;
  };

  const selectedGrade = product.grades?.[selectedGradeIndex];
  const mainImages = product.images?.filter((img) => img.image) || [];

  // Icon mapping for applications
  const getApplicationIcon = (iconName) => {
    const icons = {
      flame: Flame,
      factory: Factory,
      users: Users,
      zap: Zap,
      shield: Shield,
      truck: Truck,
      package: Package,
    };
    return icons[iconName] || Flame;
  };

  // Specifications table data
  const getSpecificationsTableData = () => {
    if (!selectedGrade?.specifications) return [];

    const specs = selectedGrade.specifications;
    return [
      { label: "Moisture Content", value: specs.moisture },
      { label: "Ash Content", value: specs.ash },
      { label: "Fixed Carbon", value: specs.carbon },
      { label: "Volatile Matter", value: specs.volatile },
      { label: "Calorific Value", value: specs.calorific },
      { label: "Burning Time", value: specs.burning },
      { label: "Ignition Time", value: specs.ignition },
      { label: "Size Range", value: specs.size },
    ].filter((spec) => spec.value); // Only show specs that have values
  };

  return (
    <div className="bg-secondary min-h-screen">
      <section className="relative h-[80px] bg-primary border-b border-gray-200 text-white"></section>
      {/* Breadcrumb */}
      <section className="bg-primary ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-300" />
            <Link href="/products" className="text-gray-500 hover:text-primary transition-colors">
              Products
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-300" />
            <span className="text-primary font-medium">{product.title}</span>
          </nav>
        </div>
      </section>

      {/* Product Overview */}
      <section className="bg-primary py-4 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Product Images */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-4">
              {/* Main Image */}
              <div className="aspect-[4/3] bg-gray-600 relative overflow-hidden rounded-2xl">
                {mainImages.length > 0 ? (
                  <Image
                    src={urlForImage(getMainImage(mainImages[selectedImageIndex])).width(800).height(600).url()}
                    alt={mainImages[selectedImageIndex]?.alt || product.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-600">
                    <Mountain className="w-16 h-16 text-gray-400" />
                  </div>
                )}

                {/* Featured Badge */}
                {product.featured && <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">Featured</div>}
              </div>

              {/* Thumbnail Images */}
              {mainImages.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {mainImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${selectedImageIndex === index ? "border-primary" : "border-gray-200 hover:border-gray-300"}`}
                    >
                      <Image src={urlForImage(getMainImage(image)).width(80).height(80).url()} alt={image.alt || `${product.title} ${index + 1}`} width={80} height={80} className="object-cover w-full h-full" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-8">
              {/* Header */}
              <div>
                {product.category && <span className="inline-block text-sm font-medium text-primary/70 uppercase tracking-wider mb-3">{product.category.name}</span>}
                <h1 className="heading-xl text-primary leading-tight mb-4">{product.title}</h1>
                <p className="body-lg text-secondary leading-relaxed">{product.shortDescription}</p>
              </div>

              {/* Grade Selection */}
              {product.grades && product.grades.length > 0 && (
                <div>
                  <h3 className="heading-sm text-primary mb-4">Available Grades</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.grades.map((grade, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedGradeIndex(index)}
                        className={`px-4 py-2 rounded-full border-2 transition-all duration-300 ${selectedGradeIndex === index ? "border-primary bg-primary text-white" : "border-gray-200 text-secondary hover:border-gray-300"}`}
                      >
                        <span className="body-sm font-medium">{grade.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Selected Grade Info */}
              {selectedGrade && (
                <div className="bg-secondary rounded-2xl p-6 space-y-4">
                  <h4 className="heading-sm text-primary">{selectedGrade.name} Grade</h4>

                  {selectedGrade.price && (
                    <div>
                      <span className="body-sm text-secondary">Price Range:</span>
                      <p className="heading-sm text-primary">
                        ${selectedGrade.price.min} - ${selectedGrade.price.max}
                        <span className="body-sm text-secondary font-normal">/{selectedGrade.price.unit}</span>
                      </p>
                    </div>
                  )}

                  {selectedGrade.minOrder && (
                    <div>
                      <span className="body-sm text-secondary">Minimum Order:</span>
                      <p className="body-base text-primary font-medium">
                        {selectedGrade.minOrder.quantity} {selectedGrade.minOrder.unit}
                      </p>
                    </div>
                  )}

                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${selectedGrade.availability ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    <div className={`w-2 h-2 rounded-full ${selectedGrade.availability ? "bg-green-500" : "bg-red-500"}`} />
                    {selectedGrade.availability ? "Available" : "Out of Stock"}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Long Description */}
      {product.longDescription && (
        <section className="bg-secondary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="heading-lg text-primary mb-8">Product Details</h2>
              <div className="prose prose-gray max-w-none">
                <PortableText
                  value={product.longDescription}
                  components={{
                    block: {
                      normal: ({ children }) => <p className="body-base text-secondary leading-relaxed mb-6">{children}</p>,
                    },
                  }}
                />
              </div>
            </motion.div>

            {/* Key Features */}
            {product.features && product.features.length > 0 && (
              <div>
                <h3 className="heading-sm text-primary mb-4">Key Features</h3>
                <div className="space-y-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="body-base text-primary font-medium">{feature.feature}</p>
                        {feature.description && <p className="body-sm text-secondary mt-1">{feature.description}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Specifications Table */}
      {selectedGrade && getSpecificationsTableData().length > 0 && (
        <section className="py-16 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <div className="mb-8">
                <h2 className="heading-lg text-primary mb-4">Technical Specifications - {selectedGrade.name} Grade</h2>
                <p className="body-base text-secondary">Detailed technical specifications for the selected grade.</p>
              </div>

              <div className="bg-primary rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    
                    <thead>
                      <tr className="bg-secondary border-b border-gray-100">
                        <th className="text-left py-4 px-6 body-base font-semibold text-primary">Specification</th>
                        <th className="text-left py-4 px-6 body-base font-semibold text-primary">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getSpecificationsTableData().map((spec, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                          viewport={{ once: true }}
                          className="border-b border-gray-50 hover:bg-gray-25 transition-colors"
                        >
                          <td className="py-4 px-6 body-base text-secondary">{spec.label}</td>
                          <td className="py-4 px-6 body-base font-medium text-primary">{spec.value}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Applications */}
      {product.applications && product.applications.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-12">
              <h2 className="heading-lg text-primary mb-4">Applications</h2>
              <p className="body-base text-secondary">Discover the various ways this product can be used across different industries and applications.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.applications
                .sort((a, b) => (a.order || 0) - (b.order || 0))
                .map((application, index) => {
                  const IconComponent = getApplicationIcon(application.icon);
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-primary rounded-2xl p-6 shadow-sm border border-gray-100"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="heading-sm text-primary">{application.name}</h3>
                      </div>

                      {application.description && <p className="body-sm text-secondary leading-relaxed mb-4">{application.description}</p>}

                      {application.benefits && application.benefits.length > 0 && (
                        <div>
                          <h4 className="body-sm font-semibold text-primary mb-2">Benefits:</h4>
                          <ul className="space-y-1">
                            {application.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="body-sm text-secondary">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
            </div>
          </div>
        </section>
      )}

      {/* Packaging & Certifications */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Packaging */}
            {product.packaging && product.packaging.length > 0 && (
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <div className="flex items-center gap-3 mb-6">
                  <Package className="w-6 h-6 text-primary" />
                  <h2 className="heading-lg text-primary">Packaging Options</h2>
                </div>
                <div className="space-y-6">
                  {product.packaging.map((pkg, index) => (
                    <div key={index} className="border border-gray-100 rounded-xl p-6">
                      <h3 className="heading-sm text-primary mb-3">{pkg.type}</h3>
                      <div className="space-y-2 text-sm">
                        {pkg.size && (
                          <p>
                            <span className="font-medium">Size:</span> {pkg.size}
                          </p>
                        )}
                        {pkg.material && (
                          <p>
                            <span className="font-medium">Material:</span> {pkg.material}
                          </p>
                        )}
                        {pkg.containerLoad && (
                          <p>
                            <span className="font-medium">Container Load:</span> {pkg.containerLoad.quantity} per {pkg.containerLoad.containerType}
                          </p>
                        )}
                        {pkg.description && <p className="text-secondary mt-2">{pkg.description}</p>}
                        {pkg.customAvailable && (
                          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs mt-2">
                            <Check className="w-3 h-3" />
                            Custom packaging available
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Certifications */}
            {product.certifications && product.certifications.length > 0 && (
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-primary" />
                  <h2 className="heading-lg text-primary">Certifications</h2>
                </div>
                <div className="space-y-4">
                  {product.certifications
                    .sort((a, b) => (b.priority || 0) - (a.priority || 0))
                    .map((cert, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl">
                        {cert.logo && (
                          <div className="w-12 h-12 relative flex-shrink-0">
                            <Image src={urlForImage(cert.logo).width(48).height(48).url()} alt={cert.logo.alt || cert.name} fill className="object-contain" />
                          </div>
                        )}
                        <div className="flex-1">
                          <h3 className="body-base font-semibold text-primary mb-1">{cert.fullName || cert.name}</h3>
                          {cert.issuingBody && <p className="body-sm text-secondary mb-1">Issued by: {cert.issuingBody}</p>}
                          {cert.description && <p className="body-sm text-secondary">{cert.description}</p>}
                        </div>
                      </div>
                    ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
