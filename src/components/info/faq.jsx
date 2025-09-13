"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, ChevronRight, HelpCircle, MessageCircle, Package, Ship, DollarSign, Shield, Globe, Clock, Users, Phone, Mail } from "lucide-react";
import { useState } from "react";

const FAQPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqCategories = [
    {
      category: "Product Information",
      icon: Package,
      faqs: [
        {
          question: "What types of charcoal do you produce?",
          answer:
            "We produce three main types of charcoal: BBQ Charcoal for grilling and outdoor cooking, Shisha Charcoal for hookah applications, and Industrial Charcoal for various industrial processes. Each type is manufactured to specific quality standards and specifications.",
        },
        {
          question: "What raw materials do you use?",
          answer:
            "We use premium hardwood species sourced from sustainably managed forests in Indonesia, including coconut shell, mixed hardwood, and other selected biomass materials. All raw materials are carefully inspected and aged before processing.",
        },
        {
          question: "What is the difference between your charcoal types?",
          answer:
            "BBQ Charcoal has high heat output and long burning time for grilling. Shisha Charcoal burns cleaner with minimal ash and no odor for hookah use. Industrial Charcoal is designed for specific industrial applications with customizable specifications.",
        },
        {
          question: "Can you customize products to our specifications?",
          answer: "Yes, we offer custom manufacturing services. We can adjust moisture content, ash content, size grading, and packaging to meet your specific requirements. Minimum order quantities apply for custom specifications.",
        },
        {
          question: "What quality certifications do you have?",
          answer: "We maintain ISO 9001:2015 certification for quality management. Additional certifications including HALAL, KOSHER, and FSC Chain of Custody are available upon request depending on market requirements.",
        },
      ],
    },
    {
      category: "Ordering & Pricing",
      icon: DollarSign,
      faqs: [
        {
          question: "What are your minimum order quantities?",
          answer: "Minimum orders are: BBQ Charcoal - 20 MT, Shisha Charcoal - 15 MT, Industrial Charcoal - 25 MT per shipment for export orders. Smaller quantities may be available at premium pricing for consolidation shipments.",
        },
        {
          question: "How do you calculate pricing?",
          answer: "Pricing is based on product type, specifications, order quantity, packaging requirements, and delivery terms. We provide detailed quotations including all costs. Prices are typically quoted FOB Semarang port in USD.",
        },
        {
          question: "What payment terms do you offer?",
          answer: "Standard payment terms are 30% advance payment upon order confirmation and 70% balance against copy of Bill of Lading. We also accept Letters of Credit at sight from recognized international banks.",
        },
        {
          question: "How long are your price quotations valid?",
          answer: "Price quotations are typically valid for 30 days from the date of issue. Extensions may be possible depending on market conditions and raw material price stability.",
        },
        {
          question: "Do you offer volume discounts?",
          answer: "Yes, we offer competitive pricing for larger volumes and long-term contracts. Please contact our sales team to discuss volume pricing and annual supply agreements.",
        },
      ],
    },
    {
      category: "Shipping & Logistics",
      icon: Ship,
      faqs: [
        {
          question: "What are your standard delivery terms?",
          answer: "We typically ship FOB (Free on Board) Semarang port. Other Incoterms including CFR, CIF, and EXW are available upon request. We can also arrange door-to-door delivery for certain destinations.",
        },
        {
          question: "What is your typical lead time?",
          answer: "Standard lead time is 14-21 days from order confirmation to vessel loading, depending on product type and order size. Custom specifications may require additional time.",
        },
        {
          question: "Which ports do you ship from?",
          answer: "Our primary loading port is Semarang, Central Java. We can also arrange shipments from other Indonesian ports including Jakarta and Surabaya depending on logistics requirements and costs.",
        },
        {
          question: "What shipping documents do you provide?",
          answer: "Standard documents include Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin, Quality Certificate, and Phytosanitary Certificate. Additional certificates can be provided upon request.",
        },
        {
          question: "How do you handle shipping delays?",
          answer: "We maintain close communication with shipping lines and provide regular updates on vessel schedules. In case of delays beyond our control, we inform customers immediately and work to minimize impact.",
        },
      ],
    },
    {
      category: "Quality & Testing",
      icon: Shield,
      faqs: [
        {
          question: "How do you ensure product quality?",
          answer: "We have a comprehensive quality control system including raw material inspection, in-process monitoring, laboratory testing of each batch, and final inspection before shipment. All processes follow ISO 9001 standards.",
        },
        {
          question: "What quality parameters do you test?",
          answer: "We test moisture content, ash content, fixed carbon, volatile matter, calorific value, and size distribution. All testing follows ASTM international standards for coal and coke analysis.",
        },
        {
          question: "Can customers request third-party inspection?",
          answer: "Yes, third-party inspection is available through internationally recognized agencies like SGS, Intertek, or Bureau Veritas. Inspection costs are typically borne by the requesting party.",
        },
        {
          question: "What happens if products don't meet specifications?",
          answer: "Products not meeting agreed specifications will be replaced or credited at our expense. Quality claims must be made within 30 days of delivery with supporting laboratory test results.",
        },
        {
          question: "Do you provide certificates with each shipment?",
          answer: "Yes, every shipment includes a Certificate of Analysis showing actual test results for all guaranteed parameters, along with other required documentation.",
        },
      ],
    },
    {
      category: "International Trade",
      icon: Globe,
      faqs: [
        {
          question: "Which countries do you export to?",
          answer: "We export to over 25 countries worldwide including Middle East, Europe, Asia Pacific, and Americas. Our main markets include UAE, Saudi Arabia, Germany, Netherlands, Singapore, and Philippines.",
        },
        {
          question: "Do you handle export documentation?",
          answer: "Yes, we handle all export documentation and procedures. We work with experienced freight forwarders and customs brokers to ensure smooth export processes.",
        },
        {
          question: "What about import requirements in destination countries?",
          answer: "Customers are responsible for import permits and compliance with destination country regulations. We provide necessary documentation and can assist with information about requirements.",
        },
        {
          question: "Do you attend international trade shows?",
          answer: "Yes, we participate in major international trade exhibitions including food industry shows, BBQ expos, and shisha trade fairs. Please contact us for our exhibition schedule.",
        },
        {
          question: "Can you arrange private labeling for export?",
          answer: "Yes, we offer private labeling and custom packaging services for export customers. This includes custom bag designs, labeling in local languages, and retail-ready packaging.",
        },
      ],
    },
  ];

  const quickStats = [
    { icon: Users, label: "Years Experience", value: "15+" },
    { icon: Globe, label: "Export Countries", value: "25+" },
    { icon: Package, label: "Products Shipped", value: "10,000+ MT" },
    { icon: Clock, label: "Response Time", value: "< 24 Hours" },
  ];

  return (
    <div className="bg-secondary min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="heading-2xl text-white leading-tight mb-6">Frequently Asked Questions</h1>
            <p className="body-lg text-white/90 leading-relaxed mb-8">
              Find answers to common questions about our charcoal products, ordering process, shipping procedures, and quality standards. Can't find what you're looking for? Contact our support team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      {/* <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="body-sm text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div key={categoryIndex} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: categoryIndex * 0.1 }} viewport={{ once: true }} className="bg-surface rounded-2xl p-8">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="heading-lg text-primary">{category.category}</h2>
                </div>

                {/* FAQs */}
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const uniqueIndex = `${categoryIndex}-${faqIndex}`;
                    const isOpen = openFAQ === uniqueIndex;

                    return (
                      <div key={faqIndex} className="border border-gray-200 rounded-xl overflow-hidden">
                        <button onClick={() => toggleFAQ(uniqueIndex)} className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-primary/5 transition-colors duration-200">
                          <span className="heading-sm text-primary pr-4">{faq.question}</span>
                          <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                        </button>

                        <motion.div
                          initial={false}
                          animate={{
                            height: isOpen ? "auto" : 0,
                            opacity: isOpen ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4 border-t border-gray-200">
                            <p className="body-base text-secondary leading-relaxed pt-4">{faq.answer}</p>
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center">
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="heading-lg text-primary mb-4">Still Have Questions?</h2>
            <p className="body-base text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our experienced team is ready to help with product information, technical support, or assistance with your order.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-surface rounded-2xl p-6 text-center">
                <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="heading-sm text-primary mb-2">Email Support</h3>
                <p className="body-sm text-secondary mb-3">Get detailed answers via email</p>
                <a href="mailto:charcoal@harikanusantara.com" className="text-primary hover:text-primary/80 transition-colors body-sm font-medium">
                  charcoal@harikanusantara.com
                </a>
              </div>

              <div className="bg-surface rounded-2xl p-6 text-center">
                <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="heading-sm text-primary mb-2">Phone Support</h3>
                <p className="body-sm text-secondary mb-3">Speak directly with our team</p>
                <a href="tel:+905421793483" className="text-primary hover:text-primary/80 transition-colors body-sm font-medium">
                  +90 542 179 3483
                </a>
              </div>

              <div className="bg-surface rounded-2xl p-6 text-center">
                <MessageCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="heading-sm text-primary mb-2">WhatsApp</h3>
                <p className="body-sm text-secondary mb-3">Quick chat for urgent questions</p>
                <a href="https://wa.me/905421793483" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors body-sm font-medium">
                  Start Chat
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 group">
                <Mail className="w-4 h-4" />
                <span className="body-sm font-medium">Contact Form</span>
              </Link>
              <Link href="/support" className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 group">
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                <span className="body-sm font-medium">Technical Support</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
