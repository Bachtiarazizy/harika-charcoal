"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Ship, Globe, FileText, Package, Clock, Shield, MapPin, DollarSign, Truck, Anchor, Scale } from "lucide-react";

const ExportTermsPage = () => {
  const lastUpdated = "January 15, 2024";

  const sections = [
    {
      id: "general-conditions",
      title: "1. General Export Conditions",
      icon: Globe,
      content: [
        "All export sales are governed by these terms and conditions in addition to our general Terms of Service.",
        "Export terms take precedence over general terms where there are conflicts or differences.",
        "All international sales are subject to Indonesian export regulations and destination country import requirements.",
        "Prices quoted are valid for 30 days from the date of quotation unless otherwise specified.",
      ],
    },
    {
      id: "incoterms",
      title: "2. Delivery Terms (Incoterms 2020)",
      icon: Ship,
      content: [
        "FOB (Free on Board) - Semarang Port: Risk and title transfer to buyer when goods cross ship's rail at port of shipment. Buyer arranges and pays for ocean freight, insurance, and destination charges.",
        "CFR (Cost and Freight): We arrange and pay for ocean freight to named destination port. Risk transfers to buyer at port of shipment, but we cover freight costs.",
        "CIF (Cost, Insurance & Freight): Similar to CFR but we also provide marine insurance coverage for the shipment to destination port.",
        "EXW (Ex Works): Buyer takes responsibility from our warehouse. Minimum order quantities may be higher for EXW terms.",
      ],
    },
    {
      id: "pricing-payment",
      title: "3. Pricing and Payment Terms",
      icon: DollarSign,
      content: [
        "All export prices are quoted in USD (United States Dollars) unless otherwise agreed in writing.",
        "Payment terms: 30% advance payment upon order confirmation, 70% balance against copy of Bill of Lading or before delivery.",
        "Letter of Credit (L/C) at sight is accepted from recognized international banks. L/C charges are for buyer's account.",
        "Bank charges for international wire transfers are split - originating bank charges for buyer, receiving bank charges for seller.",
        "Price adjustments may apply for orders shipped more than 60 days after confirmation due to raw material cost fluctuations.",
      ],
    },
    {
      id: "minimum-orders",
      title: "4. Minimum Order Quantities",
      icon: Package,
      content: [
        "BBQ Charcoal: Minimum order 20 MT (metric tons) per shipment for export orders.",
        "Shisha Charcoal: Minimum order 15 MT per shipment, can be mixed sizes within the same product category.",
        "Industrial Charcoal: Minimum order 25 MT per shipment, specifications must be confirmed in advance.",
        "Mixed containers are accepted with prior agreement, minimum 20 MT total per container.",
        "Smaller quantities may be available at premium pricing, subject to consolidation opportunities.",
      ],
    },
    {
      id: "quality-specifications",
      title: "5. Quality Specifications and Testing",
      icon: Shield,
      content: [
        "All products meet international quality standards with certificates provided for each shipment.",
        "Standard quality parameters: moisture content ≤8%, ash content as specified per product type, fixed carbon content guaranteed.",
        "Third-party inspection is available upon request at buyer's expense through internationally recognized agencies.",
        "Quality claims must be made within 15 days of discharge at destination port with supporting documentation.",
        "We reserve the right to retain samples from each production batch for quality verification purposes.",
      ],
    },
    {
      id: "packaging-marking",
      title: "6. Packaging and Marking",
      icon: Package,
      content: [
        "Standard packaging: PP woven bags (25kg) or jumbo bags (1000kg) as specified in the order.",
        "Custom packaging and private labeling available with minimum order quantities and advance notice.",
        "All packages clearly marked with product specification, net weight, gross weight, and batch information.",
        "Shipping marks include destination port, consignee information, and package numbering as per buyer's instructions.",
        "Packaging costs are included in FOB prices unless special packaging is requested.",
      ],
    },
    {
      id: "documentation",
      title: "7. Export Documentation",
      icon: FileText,
      content: [
        "Standard documents provided: Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin, and Quality Certificate.",
        "Phytosanitary Certificate and Fumigation Certificate provided when required by destination country regulations.",
        "Additional certificates (HALAL, KOSHER, etc.) available upon request with advance notice and may incur additional costs.",
        "All documents prepared in English unless specific language requirements are requested.",
        "Original documents sent by courier to consignee or notify party as instructed.",
      ],
    },
    {
      id: "shipping-logistics",
      title: "8. Shipping and Logistics",
      icon: Truck,
      content: [
        "Standard lead time: 14-21 days from order confirmation to vessel loading, subject to production capacity.",
        "Vessel nomination and loading schedule coordinated with buyer or their shipping agent.",
        "Loading supervision available upon request to ensure proper handling and stowage.",
        "We are not responsible for demurrage charges unless caused by delays in our loading operations.",
        "Shipping schedule estimates are provided in good faith but are subject to vessel availability and port conditions.",
      ],
    },
    {
      id: "force-majeure",
      title: "9. Force Majeure",
      icon: Clock,
      content: [
        "Neither party shall be liable for delays or failures in performance due to force majeure events.",
        "Force majeure includes but is not limited to: natural disasters, government actions, labor strikes, port closures, and pandemic-related restrictions.",
        "The affected party must notify the other party within 7 days of the force majeure event.",
        "If force majeure continues for more than 60 days, either party may terminate the affected order without penalty.",
        "Any goods already produced will be delivered when circumstances permit or stored at buyer's expense.",
      ],
    },
    {
      id: "insurance-liability",
      title: "10. Insurance and Liability",
      icon: Shield,
      content: [
        "Marine insurance is buyer's responsibility unless CIF terms are specifically agreed.",
        "We maintain product liability insurance for our manufacturing operations.",
        "Our liability is limited to the FOB value of goods for any claims related to product quality or delivery delays.",
        "Consequential damages, lost profits, or indirect damages are excluded from our liability.",
        "Claims must be made in writing within 6 months of delivery date.",
      ],
    },
    {
      id: "regulatory-compliance",
      title: "11. Regulatory Compliance",
      icon: Scale,
      content: [
        "Buyer is responsible for obtaining all necessary import permits and licenses for destination country.",
        "We comply with all Indonesian export regulations and will provide required documentation.",
        "Buyer must inform us of any special requirements or restrictions in destination country before order confirmation.",
        "Changes in import regulations that affect our ability to export may result in order modification or cancellation.",
        "Both parties agree to comply with all applicable international trade sanctions and regulations.",
      ],
    },
    {
      id: "dispute-resolution",
      title: "12. Dispute Resolution",
      content: [
        "All export-related disputes shall be resolved through arbitration under Indonesian Arbitration Rules.",
        "Arbitration proceedings to be conducted in English language in Jakarta, Indonesia.",
        "Technical disputes regarding quality may be referred to independent testing laboratories for resolution.",
        "Mediation will be attempted before formal arbitration proceedings for commercial disputes.",
        "Indonesian law governs all export contracts unless specifically agreed otherwise.",
      ],
    },
    {
      id: "environmental-sustainability",
      title: "13. Environmental and Sustainability",
      content: [
        "All charcoal products are sourced from sustainably managed forestry operations in compliance with Indonesian regulations.",
        "We maintain FSC (Forest Stewardship Council) chain of custody certification upon request.",
        "Carbon footprint documentation available for customers with sustainability reporting requirements.",
        "Packaging materials are recyclable and we support take-back programs where feasible.",
        "We continuously work to improve our environmental performance and welcome customer collaboration on sustainability initiatives.",
      ],
    },
  ];

  return (
    <div className="bg-secondary min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Anchor className="w-8 h-8 text-white" />
            </div>
            <h1 className="heading-2xl text-white leading-tight mb-6">Export Terms & Conditions</h1>
            <p className="body-lg text-white/90 leading-relaxed mb-8">Comprehensive terms and conditions governing all international sales and export transactions. Please review carefully before placing orders.</p>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <span className="body-sm text-white/80">Last updated:</span>
              <span className="body-sm font-medium text-white">{lastUpdated}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Reference Cards */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="heading-lg text-primary mb-4">Quick Reference</h2>
            <p className="body-base text-secondary">Key export information at a glance</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Package, title: "Minimum Order", value: "20 MT", detail: "Per shipment" },
              { icon: Clock, title: "Lead Time", value: "14-21 Days", detail: "Production to loading" },
              { icon: MapPin, title: "Loading Port", value: "Semarang", detail: "Central Java, Indonesia" },
              { icon: DollarSign, title: "Payment", value: "30% + 70%", detail: "Advance + Balance" },
            ].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="bg-surface rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="heading-sm text-primary mb-1">{item.title}</h3>
                <p className="text-2xl font-bold text-primary mb-1">{item.value}</p>
                <p className="body-sm text-secondary">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div key={section.id} id={section.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} viewport={{ once: true, margin: "-100px" }} className="group">
                <div className="flex items-start gap-4 mb-6">
                  <h2 className="heading-md text-primary leading-tight">{section.title}</h2>
                </div>

                <div className="space-y-4 ml-14">
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
      <section className="bg-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center bg-surface rounded-2xl p-8">
            <Ship className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="heading-lg text-primary mb-4">Ready to Export?</h2>
            <p className="body-base text-secondary leading-relaxed mb-6">Our export specialists are ready to assist you with orders, documentation, and shipping arrangements. Contact us to discuss your requirements.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="mailto:charcoal@harikanusantara.com" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 group">
                <FileText className="w-4 h-4" />
                <span className="body-sm font-medium">Request Quote</span>
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 group">
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                <span className="body-sm font-medium">Contact Export Team</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ExportTermsPage;
