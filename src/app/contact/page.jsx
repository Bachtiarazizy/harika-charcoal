"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Users, Headphones, Globe, Building, User, FileText, Calendar, CheckCircle, ArrowRight } from "lucide-react";
import Button from "@/components/ui/button";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });

  const [selectedOffice, setSelectedOffice] = useState("jakarta");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const inquiryTypes = [
    { value: "general", label: "General Inquiry", icon: MessageCircle },
    { value: "quote", label: "Price Quote", icon: FileText },
    { value: "partnership", label: "Partnership", icon: Users },
    { value: "technical", label: "Technical Support", icon: Headphones },
  ];

  const offices = {
    jakarta: {
      name: "Jakarta Head Office",
      address: "Jl. Sudirman Kav. 25, Jakarta Pusat 10270, Indonesia",
      phone: "+62 21 2555-0123",
      email: "jakarta@harikacharcoal.com",
      hours: "Mon-Fri: 8:00 AM - 6:00 PM WIB",
      type: "Head Office & Export Division",
    },
    surabaya: {
      name: "Surabaya Production",
      address: "Jl. Raya Industri No. 45, Surabaya 60177, Indonesia",
      phone: "+62 31 8123-4567",
      email: "production@harikacharcoal.com",
      hours: "Mon-Sat: 7:00 AM - 7:00 PM WIB",
      type: "Manufacturing & Quality Control",
    },
    singapore: {
      name: "Singapore Representative",
      address: "1 Raffles Place #20-61, Singapore 048616",
      phone: "+65 6789-0123",
      email: "singapore@harikacharcoal.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM SGT",
      type: "Regional Sales & Distribution",
    },
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our export specialists",
      contact: "+62 21 2555-0123",
      availability: "24/7 Support Available",
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Inquiry",
      description: "Get detailed responses within 24 hours",
      contact: "export@harikacharcoal.com",
      availability: "Response within 24 hours",
      action: "Send Email",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant messaging with our team",
      contact: "Available on website",
      availability: "Business hours",
      action: "Start Chat",
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      description: "Book a consultation with our experts",
      contact: "Video/Phone meeting",
      availability: "Flexible scheduling",
      action: "Book Now",
    },
  ];

  const faqs = [
    {
      question: "What is your minimum order quantity?",
      answer: "Our minimum order quantity is 20ft container (18-22 MT depending on packaging).",
    },
    {
      question: "What are your payment terms?",
      answer: "We accept T/T, L/C at sight. Standard terms are 30% advance, 70% against shipping documents.",
    },
    {
      question: "How long does shipping take?",
      answer: "Sea freight typically takes 15-35 days depending on destination. Air freight is 3-7 days.",
    },
    {
      question: "Do you provide samples?",
      answer: "Yes, we provide free samples up to 5kg. Shipping costs are covered by the buyer.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-image.png" alt="Contact Harika Charcoal" fill className="object-cover" priority quality={90} />
          <div className="absolute inset-0 bg-primary/70 z-10"></div>
        </div>

        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[60vh] flex items-center">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="text-xs font-semibold text-[#16a34a] tracking-wider uppercase mb-4">GET IN TOUCH</div>
              <h1 className="heading-xl text-primary leading-tight mb-6">
                CONTACT OUR
                <br />
                <span className="text-[#16a34a]">EXPORT TEAM</span>
              </h1>
              <p className="body-lg text-secondary mb-8 leading-relaxed">Ready to start your charcoal import journey? Our experienced export specialists are here to assist you with quotations, specifications, and shipping arrangements.</p>
              <div className="flex gap-4">
                <Button variant="primary" size="large">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start Inquiry
                </Button>
                <Button variant="primaryOutline" size="large">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Direct
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
            <div className="text-xs font-semibold text-secondary tracking-wider uppercase mb-6">MULTIPLE WAYS TO REACH US</div>
            <h2 className="heading-xl text-primary leading-tight">CHOOSE YOUR PREFERRED CONTACT METHOD</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-primary rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-[#16a34a] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="heading-sm text-primary mb-2">{method.title}</h3>
                  <p className="body-sm text-secondary mb-3">{method.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm font-medium text-primary">{method.contact}</div>
                    <div className="text-xs text-secondary">{method.availability}</div>
                  </div>
                  <Button variant="secondaryOutline" size="small" className="w-full">
                    {method.action}
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Form & Office Info */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <div className="bg-surface rounded-2xl p-8">
                <div className="mb-8">
                  <h3 className="heading-lg text-primary mb-2">Send Us a Message</h3>
                  <p className="body-sm text-secondary">Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Inquiry Type Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-3">Type of Inquiry</label>
                    <div className="grid grid-cols-2 gap-2">
                      {inquiryTypes.map((type) => {
                        const IconComponent = type.icon;
                        return (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() => setFormData({ ...formData, inquiryType: type.value })}
                            className={`p-3 rounded-xl border text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                              formData.inquiryType === type.value ? "border-[#16a34a] bg-[#16a34a]/10 text-[#16a34a]" : "border-gray-300 text-secondary hover:border-[#16a34a]/50"
                            }`}
                          >
                            <IconComponent className="w-4 h-4" />
                            {type.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#16a34a] focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#16a34a] focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-primary mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#16a34a] focus:border-transparent"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#16a34a] focus:border-transparent"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-primary mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#16a34a] focus:border-transparent"
                      placeholder="Brief subject of your inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#16a34a] focus:border-transparent resize-none"
                      placeholder="Please provide details about your inquiry, including quantity requirements, destination, and timeline..."
                    ></textarea>
                  </div>

                  <Button type="submit" variant="primary" size="large" className="w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Office Information */}
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
              <div className="space-y-8">
                {/* Office Selector */}
                <div>
                  <h3 className="heading-lg text-primary mb-6">Our Offices</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {Object.entries(offices).map(([key, office]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedOffice(key)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedOffice === key ? "bg-[#16a34a] text-white" : "bg-surface text-secondary hover:bg-surface-light hover:text-primary"}`}
                      >
                        {office.name.split(" ")[0]}
                      </button>
                    ))}
                  </div>

                  {/* Active Office Details */}
                  {Object.entries(offices).map(([key, office]) => (
                    <div key={key} className={`${selectedOffice === key ? "block" : "hidden"} bg-surface rounded-2xl p-6`}>
                      <div className="space-y-4">
                        <div>
                          <h4 className="heading-sm text-primary mb-1">{office.name}</h4>
                          <p className="text-[#16a34a] text-sm font-medium">{office.type}</p>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-[#16a34a] flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm text-secondary">{office.address}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-[#16a34a] flex-shrink-0" />
                            <div>
                              <p className="text-sm font-medium text-primary">{office.phone}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-[#16a34a] flex-shrink-0" />
                            <div>
                              <p className="text-sm font-medium text-primary">{office.email}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-[#16a34a] flex-shrink-0" />
                            <div>
                              <p className="text-sm text-secondary">{office.hours}</p>
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-primary">
                          <div className="flex gap-3">
                            <Button variant="primaryOutline" size="small">
                              <Phone className="w-4 h-4 mr-2" />
                              Call Office
                            </Button>
                            <Button variant="secondaryOutline" size="small">
                              <Mail className="w-4 h-4 mr-2" />
                              Send Email
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* FAQ Section */}
                <div className="bg-surface rounded-2xl p-6">
                  <h4 className="heading-sm text-primary mb-4">Frequently Asked Questions</h4>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-primary pb-3 last:border-b-0 last:pb-0">
                        <h5 className="text-sm font-semibold text-primary mb-2">{faq.question}</h5>
                        <p className="text-sm text-secondary">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-primary">
                    <Button variant="secondaryOutline" size="small" className="w-full">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      View All FAQs
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Response Promise */}
      <section className="bg-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-8">
            <div className="w-20 h-20 bg-[#16a34a] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>

            <div>
              <h2 className="heading-lg text-primary mb-4">YOUR MESSAGE MATTERS TO US</h2>
              <p className="body-lg text-secondary leading-relaxed max-w-2xl mx-auto">
                We're committed to providing prompt, professional responses to all inquiries. Our export specialists will review your message and respond within 24 hours during business days.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Clock className="w-8 h-8 text-[#16a34a] mx-auto mb-2" />
                <div className="text-sm font-semibold text-primary">Quick Response</div>
                <div className="text-xs text-secondary">Within 24 hours</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-[#16a34a] mx-auto mb-2" />
                <div className="text-sm font-semibold text-primary">Expert Team</div>
                <div className="text-xs text-secondary">Export specialists</div>
              </div>
              <div className="text-center">
                <Globe className="w-8 h-8 text-[#16a34a] mx-auto mb-2" />
                <div className="text-sm font-semibold text-primary">Global Support</div>
                <div className="text-xs text-secondary">Worldwide service</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
