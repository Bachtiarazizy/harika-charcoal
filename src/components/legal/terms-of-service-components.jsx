"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ArrowLeft, FileText, Scale, Shield, Globe } from "lucide-react";

const TermsOfServicePage = () => {
  const lastUpdated = "January 15, 2024";

  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      icon: FileText,
      content: [
        "By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement.",
        "If you do not agree to abide by the above, please do not use this service. These Terms of Service may be updated from time to time without notice.",
      ],
    },
    {
      id: "services",
      title: "2. Description of Services",
      icon: Globe,
      content: [
        "We provide premium charcoal products sourced sustainably from Indonesia, including BBQ charcoal, shisha coal, and industrial charcoal solutions.",
        "Our services include product consultation, bulk ordering, custom packaging solutions, and international shipping arrangements.",
        "All product specifications, pricing, and availability are subject to change without prior notice.",
      ],
    },
    {
      id: "orders",
      title: "3. Orders and Payment",
      icon: Scale,
      content: [
        "All orders are subject to acceptance and product availability. We reserve the right to refuse or cancel any order at our discretion.",
        "Prices are quoted in USD and are subject to change without notice. Payment terms will be agreed upon during the order process.",
        "Minimum order quantities apply to all products as specified in individual product listings.",
        "Custom packaging and special orders may require additional lead time and costs.",
      ],
    },
    {
      id: "shipping",
      title: "4. Shipping and Delivery",
      icon: Shield,
      content: [
        "Shipping terms are typically FOB (Free on Board) from our facilities in Indonesia unless otherwise agreed.",
        "Delivery times are estimates and may vary based on destination, customs clearance, and shipping conditions.",
        "Risk of loss and title pass to the buyer upon delivery to the carrier at the shipping point.",
        "We are not responsible for delays caused by customs, weather, or other circumstances beyond our control.",
      ],
    },
    {
      id: "quality",
      title: "5. Product Quality and Specifications",
      content: [
        "All products meet or exceed the specifications listed in our product documentation and certificates.",
        "Quality certifications and test reports are available upon request for all shipped products.",
        "We stand behind the quality of our products and will work to resolve any quality-related issues.",
        "Claims regarding product quality must be made within 30 days of delivery with supporting documentation.",
      ],
    },
    {
      id: "liability",
      title: "6. Limitation of Liability",
      content: [
        "Our liability shall not exceed the purchase price of the products involved in any claim.",
        "We are not liable for indirect, consequential, or incidental damages arising from the use of our products.",
        "Buyers are responsible for ensuring products meet their specific application requirements.",
        "We recommend testing products in small quantities before placing large orders.",
      ],
    },
    {
      id: "intellectual",
      title: "7. Intellectual Property",
      content: [
        "All content on this website, including text, graphics, logos, and images, is our property or used with permission.",
        "You may not reproduce, distribute, or create derivative works from our content without written permission.",
        "Product specifications and technical data are proprietary and confidential information.",
        "Use of our trademarks or trade names requires prior written authorization.",
      ],
    },
    {
      id: "privacy",
      title: "8. Privacy and Data Protection",
      content: [
        "We respect your privacy and handle personal information in accordance with applicable data protection laws.",
        "Information collected is used solely for business purposes including order processing and customer service.",
        "We do not sell or share customer information with third parties except as necessary for order fulfillment.",
        "Customers have the right to access, modify, or delete their personal information upon request.",
      ],
    },
    {
      id: "termination",
      title: "9. Termination",
      content: [
        "These terms remain in effect until terminated by either party with written notice.",
        "We may terminate access to our services immediately for breach of these terms.",
        "Upon termination, all outstanding obligations including payment for delivered goods remain in effect.",
        "Provisions regarding liability, intellectual property, and confidentiality survive termination.",
      ],
    },
    {
      id: "governing",
      title: "10. Governing Law",
      content: [
        "These terms are governed by the laws of the Republic of Indonesia.",
        "Any disputes arising from these terms or our business relationship shall be resolved through arbitration.",
        "The arbitration shall be conducted in English and held in Jakarta, Indonesia.",
        "Both parties agree to binding arbitration as the exclusive means of dispute resolution.",
      ],
    },
    {
      id: "contact",
      title: "11. Contact Information",
      content: [
        "For questions about these Terms of Service, please contact us through the following channels:",
        "Email: legal@harikanusantara.com",
        "Phone: +90 542 1793483",
        "Address: Semarang, Central Java, Indonesia",
        "We will respond to all inquiries within 2 business days.",
      ],
    },
  ];

  return (
    <div className="bg-secondary min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="heading-2xl text-white leading-tight mb-6">Terms of Service</h1>
            <p className="body-lg text-white/90 leading-relaxed mb-8">Please read these terms and conditions carefully before using our services. By accessing our website and services, you agree to be bound by these terms.</p>
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <span className="body-sm text-white/80">Last updated:</span>
              <span className="body-sm font-medium text-white">{lastUpdated}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group cursor-pointer"
              >
                <div className="flex items-start gap-4 mb-6">
                  <h2 className="heading-md text-primary leading-tight">{section.title}</h2>
                </div>

                <div className="space-y-4">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="body-base text-secondary leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-secoqndary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center bg-primary rounded-2xl p-8">
            <h2 className="heading-lg text-primary mb-4">Questions About Our Terms?</h2>
            <p className="body-base text-secondary leading-relaxed mb-6">If you have any questions about these Terms of Service, please don't hesitate to contact us. We're here to help clarify any concerns you may have.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 group">
              <span className="body-sm font-medium">Contact Us</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;
