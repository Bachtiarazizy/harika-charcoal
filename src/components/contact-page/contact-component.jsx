"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ArrowLeft, Mail, Phone, MapPin, Clock, Send, MessageSquare, Globe, Factory, Truck, Users } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
        inquiryType: "general",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email and we'll respond within 24 hours",
      contact: "charcoal@harikanusantara.com",
      action: "mailto:charcoal@harikanusantara.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our sales team",
      contact: "+90 542 179 3483",
      action: "tel:+905421793483",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Quick messages for urgent inquiries",
      contact: "+90 542 179 3483",
      action: "https://wa.me/905421793483",
    },
  ];

  const officeInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: ["Semarang, Cental Java, Indonesia"],
    },
    {
      icon: Factory,
      title: "Production Facility",
      details: ["Semarang, Cental Java, Indonesia"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 8:00 AM - 12:00 PM", "Sunday: Closed", "(GMT+7 Jakarta Time)"],
    },
  ];

  const inquiryTypes = [
    { value: "general", label: "General Inquiry", icon: MessageSquare },
    { value: "quote", label: "Request Quote", icon: Users },
    { value: "shipping", label: "Shipping & Logistics", icon: Truck },
    { value: "export", label: "Export Information", icon: Globe },
  ];

  return (
    <div className="bg-secondary min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h1 className="heading-2xl text-white leading-tight mb-6">Get In Touch</h1>
            <p className="body-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your charcoal needs? We're here to help with product inquiries, bulk orders, custom solutions, and export requirements. Let's start the conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="heading-lg text-primary mb-4">How to Reach Us</h2>
            <p className="body-base text-secondary max-w-2xl mx-auto">Choose your preferred method of communication. We're available through multiple channels to ensure you get the support you need.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.action}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary rounded-2xl p-8 shadow-sm hover:border-primary/20 hover:shadow-md transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <method.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="heading-sm text-primary mb-3">{method.title}</h3>
                <p className="body-sm text-secondary mb-4 leading-relaxed">{method.description}</p>
                <div className="body-base font-medium text-primary group-hover:text-primary/80 transition-colors">{method.contact}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <div className="mb-8">
                <h2 className="heading-lg text-primary mb-4">Send Us a Message</h2>
                <p className="body-base text-secondary">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inquiry Type */}
                <div>
                  <label className="block body-sm font-medium text-primary mb-3">Inquiry Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    {inquiryTypes.map((type) => (
                      <label
                        key={type.value}
                        className={`flex items-center gap-3 p-3 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                          formData.inquiryType === type.value ? "border-primary bg-primary/5" : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <input type="radio" name="inquiryType" value={type.value} checked={formData.inquiryType === type.value} onChange={handleInputChange} className="sr-only" />
                        <type.icon className={`w-4 h-4 ${formData.inquiryType === type.value ? "text-primary" : "text-gray-400"}`} />
                        <span className={`body-sm ${formData.inquiryType === type.value ? "text-primary font-medium" : "text-secondary"}`}>{type.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block body-sm font-medium text-primary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block body-sm font-medium text-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                {/* Company & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block body-sm font-medium text-primary mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block body-sm font-medium text-primary mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="+62 XXX XXXX XXXX"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block body-sm font-medium text-primary mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block body-sm font-medium text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-vertical"
                    placeholder="Please provide details about your requirements, quantities, delivery location, or any specific questions you have..."
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-primary-dark px-6 py-4 rounded-xl hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span className="body-base font-medium">Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span className="body-base font-medium">Send Message</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Submit Status */}
                {submitStatus === "success" && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-green-50 border border-green-200 rounded-xl">
                    <p className="text-green-700 body-sm">Thank you for your message! We'll get back to you within 24 hours.</p>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-red-700 body-sm">Sorry, there was an error sending your message. Please try again or contact us directly.</p>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Office Information */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <div className="mb-8">
                <h2 className="heading-lg text-primary mb-4">Office Information</h2>
                <p className="body-base text-secondary">Visit us at our locations or get in touch during business hours.</p>
              </div>

              <div className="space-y-8">
                {officeInfo.map((info, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="bg-secondary rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="heading-sm text-primary mb-3">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="body-sm text-secondary">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8 bg-secondary rounded-2xl h-64 flex items-center justify-center"
              >
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="body-sm text-gray-500">Interactive map will be integrated here</p>
                </div>
              </motion.div> */}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
