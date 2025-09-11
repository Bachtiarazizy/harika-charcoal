"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Button from "../ui/button";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Function to check if a link is active
  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleGetQuote = () => {
    const subject = encodeURIComponent("Quote Request - Harika Spices");
    const body = encodeURIComponent(`Dear Harika Spices Team,

I am interested in getting a quote for your spice products. Please provide me with:

- Product catalog and pricing
- Minimum order quantities
- Export terms and conditions
- Delivery timeframes

Please contact me at your earliest convenience.

Best regards,
[Your Name]
[Your Company]
[Your Contact Information]`);

    window.location.href = `mailto:info@harikaspices.com?subject=${subject}&body=${body}`;
  };

  return (
    <nav className="absolute top-0 left-0 right-0 bg-transparent text-white z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png" // Ganti dengan path logo asli Anda
                alt="Company Logo"
                width={250}
                height={60}
                className="h-8 w-auto sm:h-10 md:h-12 object-contain"
                priority
              />
            </Link>
          </div>
          <div className="hidden lg:flex items-center space-x-6 ml-8">
            <Link href="/" className={`text-sm font-medium transition-colors duration-200 ${isActive("/") ? "text-[#16a34a]" : "text-[#d1d5db] hover:text-[#16a34a]"}`}>
              Home
            </Link>
            <Link href="/about" className={`text-sm font-medium transition-colors duration-200 ${isActive("/about") ? "text-[#16a34a]" : "text-[#d1d5db] hover:text-[#16a34a]"}`}>
              About Us
            </Link>
            <Link href="/products" className={`text-sm font-medium transition-colors duration-200 ${isActive("/products") ? "text-[#16a34a]" : "text-[#d1d5db] hover:text-[#16a34a]"}`}>
              Our Products
            </Link>
            <Link href="/export-process" className={`text-sm font-medium transition-colors duration-200 ${isActive("/export-process") ? "text-[#16a34a]" : "text-[#d1d5db] hover:text-[#16a34a]"}`}>
              Export Process
            </Link>
            <Link href="/articles" className={`text-sm font-medium transition-colors duration-200 ${isActive("/articles") ? "text-[#16a34a]" : "text-[#d1d5db] hover:text-[#16a34a]"}`}>
              Articles
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            {/* Desktop CTA Buttons - Using Button Component */}
            <Link href="/contact">
              <Button variant="primary" size="medium">
                Contact
              </Button>
            </Link>
            <Button variant="secondaryOutline" size="medium" onClick={handleGetQuote}>
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className="p-2 rounded-md hover:bg-[#374151]/20 transition-colors duration-200" aria-label="Toggle mobile menu">
              {isMobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`lg:hidden fixed inset-0 bg-[#0e1717]/80 backdrop-blur-sm transition-opacity duration-300 z-40 ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={closeMobileMenu} />

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-[#1f2937]/95 backdrop-blur-md shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-[#374151]/50">
            <Image src="/logo.png" alt="Company Logo" width={150} height={36} className="h-6 w-auto object-contain" priority />
            <button onClick={closeMobileMenu} className="p-2 rounded-md hover:bg-[#374151]/30 transition-colors duration-200" aria-label="Close mobile menu">
              <X size={20} className="text-white" />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex flex-col h-full">
            <div className="flex-1 px-4 py-6 space-y-2">
              <Link
                href="/"
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 border-b border-[#374151]/30 ${
                  isActive("/") ? "bg-[#16a34a]/20 text-[#16a34a] border-[#16a34a]/30" : "text-[#d1d5db] hover:bg-[#374151]/20 hover:text-[#16a34a]"
                }`}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 border-b border-[#374151]/30 ${
                  isActive("/about") ? "bg-[#16a34a]/20 text-[#16a34a] border-[#16a34a]/30" : "text-[#d1d5db] hover:bg-[#374151]/20 hover:text-[#16a34a]"
                }`}
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
              <Link
                href="/products"
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 border-b border-[#374151]/30 ${
                  isActive("/products") ? "bg-[#16a34a]/20 text-[#16a34a] border-[#16a34a]/30" : "text-[#d1d5db] hover:bg-[#374151]/20 hover:text-[#16a34a]"
                }`}
                onClick={closeMobileMenu}
              >
                Our Products
              </Link>
              <Link
                href="/export-process"
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 border-b border-[#374151]/30 ${
                  isActive("/export-process") ? "bg-[#16a34a]/20 text-[#16a34a] border-[#16a34a]/30" : "text-[#d1d5db] hover:bg-[#374151]/20 hover:text-[#16a34a]"
                }`}
                onClick={closeMobileMenu}
              >
                Export Process
              </Link>
              <Link
                href="/articles"
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 border-b border-[#374151]/30 ${
                  isActive("/articles") ? "bg-[#16a34a]/20 text-[#16a34a] border-[#16a34a]/30" : "text-[#d1d5db] hover:bg-[#374151]/20 hover:text-[#16a34a]"
                }`}
                onClick={closeMobileMenu}
              >
                Articles
              </Link>
              <Link
                href="/contact"
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 border-b border-[#374151]/30 ${
                  isActive("/contact") ? "bg-[#16a34a]/20 text-[#16a34a] border-[#16a34a]/30" : "text-[#d1d5db] hover:bg-[#374151]/20 hover:text-[#16a34a]"
                }`}
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </div>

            {/* Mobile CTA Button - Using Button Component */}
            <div className="p-4 border-t border-[#374151]/50">
              <Button
                variant="secondaryOutline"
                size="medium"
                className="w-full"
                onClick={() => {
                  handleGetQuote();
                  closeMobileMenu();
                }}
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
