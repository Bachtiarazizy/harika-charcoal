"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin, ChevronRight, Facebook, Twitter, Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: "BBQ Charcoal", href: "/products/bbq-charcoal" },
      { name: "Shisha Charcoal", href: "/products/shisha-charcoal" },
      { name: "Industrial Charcoal", href: "/products/industrial-charcoal" },
      { name: "All Products", href: "/products" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Story", href: "/about#story" },
      { name: "Sustainability", href: "/about#sustainability" },
      { name: "Certifications", href: "/about#certifications" },
    ],
    support: [
      { name: "Contact Us", href: "/contact" },
      { name: "FAQ", href: "/faq" },
      { name: "Shipping Info", href: "/shipping" },
      { name: "Technical Support", href: "/support" },
    ],
    legal: [
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Export Terms", href: "/export-terms" },
      { name: "Quality Guarantee", href: "/quality" },
    ],
  };

  const contactInfo = [
    {
      icon: Mail,
      text: "charcoal@harikanusantara.com",
      href: "mailto:charcoal@harikanusantara.com",
    },
    {
      icon: Phone,
      text: "+90 542 179 34 83",
      href: "tel:+905421793483",
    },
    {
      icon: MapPin,
      text: "Semarang, Central Java, Indonesia",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Company Info */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="space-y-8">
              {/* Company Logo & Description */}
              <div>
                <Link href="/" className="inline-block mb-6">
                  <div className="text-2xl font-bold text-white">Your Company</div>
                </Link>
                <p className="body-base text-white/80 leading-relaxed max-w-md">Premium charcoal products sourced sustainably from Indonesia. Quality you can trust for BBQ, shisha, and industrial applications worldwide.</p>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="heading-sm text-white mb-4">Get In Touch</h3>
                <div className="space-y-3">
                  {contactInfo.map((contact, index) => (
                    <motion.a
                      key={index}
                      href={contact.href}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                    >
                      <contact.icon className="w-5 h-5 flex-shrink-0" />
                      <span className="body-sm">{contact.text}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="heading-sm text-white mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
                    >
                      <social.icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Links */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="grid grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Products */}
              <div>
                <h3 className="heading-sm text-white mb-6">Products</h3>
                <ul className="space-y-3">
                  {footerLinks.products.map((link, index) => (
                    <motion.li key={index} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.05 }} viewport={{ once: true }}>
                      <Link href={link.href} className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group body-sm">
                        <span>{link.name}</span>
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="heading-sm text-white mb-6">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <motion.li key={index} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.05 }} viewport={{ once: true }}>
                      <Link href={link.href} className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group body-sm">
                        <span>{link.name}</span>
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="heading-sm text-white mb-6">Support</h3>
                <ul className="space-y-3">
                  {footerLinks.support.map((link, index) => (
                    <motion.li key={index} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.05 }} viewport={{ once: true }}>
                      <Link href={link.href} className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group body-sm">
                        <span>{link.name}</span>
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="heading-sm text-white mb-6">Legal</h3>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link, index) => (
                    <motion.li key={index} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.05 }} viewport={{ once: true }}>
                      <Link href={link.href} className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group body-sm">
                        <span>{link.name}</span>
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="heading-sm text-white mb-2">Stay Updated</h3>
              <p className="body-sm text-white/70">Get the latest updates on our products and industry insights</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:min-w-96">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all duration-300"
              />
              <button className="bg-white text-primary-dark px-6 py-3 rounded-xl hover:bg-white/90 transition-colors font-medium body-sm whitespace-nowrap">Subscribe</button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="body-sm text-white/70">© {currentYear} Harika Charcoal. All rights reserved.</p>
            </div>

            <div className="flex items-center gap-6 text-center">
              <Link href="/terms" className="body-sm text-white/70 hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="body-sm text-white/70 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/contact" className="body-sm text-white/70 hover:text-white transition-colors">
                Contact
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <span className="body-sm text-white/70">Made in</span>
              <span className="body-sm text-white font-medium">Indonesia</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.8 }} viewport={{ once: true }} className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/905421793483"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
        </a>
      </motion.div>
    </footer>
  );
};

export default Footer;
