"use client";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter subscription");
  };

  const handleJoinClick = () => {
    console.log("Join clicked");
  };

  const quickLinks = ["About Us", "Products", "Contact Us", "Blog", "FAQs"];

  const connectLinks = ["Support", "Careers", "Testimonials", "News", "Events"];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, label: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
    { icon: <Youtube className="w-5 h-5" />, label: "YouTube" },
  ];

  const footerBottomLinks = ["Privacy Policy", "Terms of Service", "Cookie Settings"];

  return (
    <footer className="bg-secondary border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Newsletter Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="lg:col-span-1">
            {/* Logo */}
            <div className="mb-6">
              <h3 className="heading-sm text-primary">Logo</h3>
            </div>

            {/* Newsletter Description */}
            <p className="body-sm text-secondary leading-relaxed mb-6">Subscribe to our newsletter for the latest updates on products and promotions.</p>

            {/* Newsletter Form */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email here"
                  className="flex-1 px-4 py-3 bg-surface border border-gray-600 rounded-lg text-primary placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors duration-300"
                />
                <button type="button" onClick={handleJoinClick} className="px-6 py-3 border border-gray-500 rounded-lg text-primary hover:border-gray-400 hover:bg-surface transition-all duration-300 whitespace-nowrap">
                  <span className="body-sm font-medium">Join</span>
                </button>
              </div>
            </div>

            {/* Privacy Notice */}
            <p className="body-sm text-muted mt-4 text-xs leading-relaxed">By subscribing, you accept our Privacy Policy and consent to receive updates.</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
            <h4 className="heading-sm text-primary mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="body-sm text-secondary hover:text-primary transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect With Us */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            <h4 className="heading-sm text-primary mb-6">Connect With Us</h4>
            <ul className="space-y-3">
              {connectLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="body-sm text-secondary hover:text-primary transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Follow Us */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
            <h4 className="heading-sm text-primary mb-6">Follow Us</h4>
            <ul className="space-y-4">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <a href="#" className="flex items-center gap-3 text-secondary hover:text-primary transition-colors duration-300 group">
                    <span className="group-hover:scale-110 transition-transform duration-300">{social.icon}</span>
                    <span className="body-sm">{social.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="body-sm text-secondary">© 2025 Harika Charcoal. All rights reserved.</p>

            {/* Footer Bottom Links */}
            <div className="flex flex-wrap items-center gap-6">
              {footerBottomLinks.map((link, index) => (
                <a key={index} href="#" className="body-sm text-secondary hover:text-primary transition-colors duration-300">
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
