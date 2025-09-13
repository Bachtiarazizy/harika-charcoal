"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Products",
      href: "/products",
      dropdown: [
        { name: "BBQ Charcoal", href: "/products/bbq-charcoal" },
        { name: "Shisha Charcoal", href: "/products/shisha-charcoal" },
        { name: "Industrial Charcoal", href: "/products/industrial-charcoal" },
      ],
    },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <Link href="/" className="flex items-center">
                <Image src="/logo.png" alt="Harika Charcoal Logo" width={160} height={40} className="h-8 w-auto" />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isScrolled ? "text-gray-700 hover:text-primary hover:bg-primary/5" : "text-white hover:text-primary-light hover:bg-white/10"
                    }`}
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{
                        opacity: activeDropdown === link.name ? 1 : 0,
                        y: activeDropdown === link.name ? 0 : 10,
                        scale: activeDropdown === link.name ? 1 : 0.95,
                      }}
                      transition={{ duration: 0.2 }}
                      className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 ${activeDropdown === link.name ? "pointer-events-auto" : "pointer-events-none"}`}
                    >
                      {link.dropdown.map((item) => (
                        <Link key={item.name} href={item.href} className="block px-4 py-3 text-sm text-gray-700 hover:text-primary hover:bg-primary/5 transition-colors">
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Phone Number */}
              <motion.a
                href="tel:+905421793483"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${isScrolled ? "text-gray-600 hover:text-primary" : "text-white/90 hover:text-white"}`}
              >
                <Phone className="w-4 h-4" />
                <span>+90 542 179 34 83</span>
              </motion.a>

              {/* CTA Button */}
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
                <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
                  Get Quote
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
        >
          <div className="px-4 py-6 space-y-4">
            {/* Mobile Navigation Links */}
            {navLinks.map((link, index) => (
              <motion.div key={link.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }} transition={{ duration: 0.3, delay: index * 0.1 }}>
                <Link href={link.href} onClick={() => setIsOpen(false)} className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors font-medium">
                  {link.name}
                </Link>

                {/* Mobile Dropdown */}
                {link.dropdown && (
                  <div className="ml-4 mt-2 space-y-2">
                    {link.dropdown.map((item) => (
                      <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}

            {/* Mobile Contact Info */}
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <a href="tel:+905421793483" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">
                <Phone className="w-5 h-5" />
                <span className="font-medium">+90 542 179 34 83</span>
              </a>

              <Link href="/contact" onClick={() => setIsOpen(false)} className="block w-full bg-primary hover:bg-primary-dark text-white text-center px-6 py-3 rounded-lg font-medium transition-colors">
                Get Quote
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
