"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { AlertTriangle, Home, Search, ArrowLeft, RefreshCw, Mail, Phone, MessageCircle, Package, Ship, HelpCircle, Settings, ChevronRight, Flame, Shield, Globe } from "lucide-react";
import { useState } from "react";

const ErrorPages = ({ type, onReset, error }) => {
  const [currentPage, setCurrentPage] = useState("404");

  const popularLinks = [
    { name: "Our Products", href: "/products", icon: Package },
    { name: "Shipping Info", href: "/shipping", icon: Ship },
    { name: "Quality Control", href: "/quality", icon: Shield },
    { name: "Technical Support", href: "/support", icon: Settings },
    { name: "FAQ", href: "/faq", icon: HelpCircle },
    { name: "Contact Us", href: "/contact", icon: Mail },
  ];

  const quickActions = [
    {
      title: "Go to Homepage",
      description: "Return to our main page",
      icon: Home,
      href: "/",
      primary: true,
    },
    {
      title: "Browse Products",
      description: "Explore our charcoal products",
      icon: Package,
      href: "/products",
      primary: false,
    },
    {
      title: "Contact Support",
      description: "Get help from our team",
      icon: MessageCircle,
      href: "/contact",
      primary: false,
    },
  ];

  // 404 Not Found Page
  const NotFoundPage = () => (
    <div className="bg-secondary min-h-screen flex items-center justify-center py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {/* 404 Animation */}
          <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-8">
            <div className="relative">
              <h1 className="text-8xl md:text-9xl font-bold text-gray-200 select-none">404</h1>
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
                  <Flame className="w-8 h-8 text-red-600" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Page Not Found</h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">The page you're looking for seems to have gone up in smoke! Don't worry, our charcoal is more reliable than our web pages. Let's get you back on track.</p>
          </motion.div>

          {/* Quick Actions */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                href={action.href}
                className={`p-6 rounded-2xl transition-all duration-300 hover:transform hover:scale-105 ${action.primary ? "bg-primary text-white hover:bg-primary" : "bg-secondary text-primary hover:shadow-lg border border-gray-200"}`}
              >
                <action.icon className={`w-8 h-8 mx-auto mb-3 ${action.primary ? "text-white" : "text-gray-300"}`} />
                <h3 className="font-semibold mb-2">{action.title}</h3>
                <p className={`text-sm ${action.primary ? "text-primary" : "text-gray-300"}`}>{action.description}</p>
              </Link>
            ))}
          </motion.div>

          {/* Popular Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.0 }}>
            <h3 className="text-xl font-semibold text-primary mb-6">Popular Pages</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {popularLinks.map((link, index) => (
                <Link key={index} href={link.href} className="flex items-center gap-3 p-4 bg-primary rounded-xl hover:shadow-md transition-all duration-300 group">
                  <link.icon className="w-5 h-5 text-primary" />
                  <span className="text-primary group-hover:text-primary transition-colors">{link.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );

  // 500 Server Error Page
  const ServerErrorPage = () => (
    <div className="bg-secondary min-h-screen flex items-center justify-center py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {/* 500 Animation */}
          <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-8">
            <div className="relative">
              <h1 className="text-8xl md:text-9xl font-bold text-gray-200 select-none">500</h1>
              <motion.div
                animate={{
                  rotate: [0, -5, 5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Server Error</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Our servers are having a moment - like charcoal in the rain! We're working hard to get everything burning bright again. Please try again in a few minutes.</p>
          </motion.div>

          {/* Error Details */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="bg-primary rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-primary mb-4">What can you do?</h3>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <RefreshCw className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-primary">Refresh the page</h4>
                  <p className="text-sm text-gray-300">Sometimes a simple refresh can solve the issue</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ArrowLeft className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-primary">Go back</h4>
                  <p className="text-sm text-gray-300">Return to the previous page you were viewing</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-primary">Contact support</h4>
                  <p className="text-sm text-gray-300">If the problem persists, let our team know</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={onReset || (() => window.location.reload())} className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full hover:bg-primary transition-all duration-300 font-medium">
              <RefreshCw className="w-5 h-5" />
              Try Again
            </button>
            <Link href="/" className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-medium">
              <Home className="w-5 h-5" />
              Go to Homepage
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gray-100 text-gray-900 px-8 py-4 rounded-full hover:bg-gray-200 transition-all duration-300 font-medium">
              <Mail className="w-5 h-5" />
              Contact Support
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );

  // General Error Page
  const GeneralErrorPage = () => (
    <div className="bg-secondary min-h-screen flex items-center justify-center py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {/* Error Animation */}
          <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-8">
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-24 h-24 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto"
            >
              <AlertTriangle className="w-12 h-12 text-yellow-600" />
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Oops! Something Went Wrong</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Don't worry, even the best charcoal sometimes needs a little adjustment. We're looking into this issue and will have it fixed soon.</p>
          </motion.div>

          {/* Error Code Display */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="bg-primary rounded-2xl p-6 mb-8 max-w-md mx-auto border border-gray-200">
            <div className="text-sm text-primary mb-2">Error Code</div>
            <div className="text-2xl font-mono font-bold text-primary">ERR_GENERAL</div>
            <div className="text-sm text-primary mt-2">{new Date().toISOString()}</div>
          </motion.div>

          {/* Help Options */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-primary rounded-2xl p-6 text-center border border-gray-200">
              <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-primary mb-2">Call Us</h3>
              <p className="text-sm text-gray-300 mb-3">Speak directly with our team</p>
              <a href="tel:+905421793483" className="text-primary hover:text-primary font-medium">
                +90 542 179 3483
              </a>
            </div>

            <div className="bg-primary rounded-2xl p-6 text-center border border-gray-200">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-primary mb-2">Email Support</h3>
              <p className="text-sm text-gray-300 mb-3">Send us detailed information</p>
              <a href="mailto:support@harikanusantara.com" className="text-primary hover:text-primary font-medium">
                Email Us
              </a>
            </div>

            <div className="bg-primary rounded-2xl p-6 text-center border border-gray-200">
              <MessageCircle className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-primary mb-2">Live Chat</h3>
              <p className="text-sm text-gray-300 mb-3">Quick help via WhatsApp</p>
              <a href="https://wa.me/905421793483" className="text-primary hover:text-primary font-medium">
                Start Chat
              </a>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.0 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => window.history.back()} className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full hover:bg-primary transition-all duration-300 font-medium">
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
            <Link href="/" className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-medium">
              <Home className="w-5 h-5" />
              Homepage
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );

  // Page Selector for Demo
  const PageSelector = () => (
    <div className="fixed top-4 left-4 z-50 bg-white rounded-lg shadow-lg p-4">
      <h3 className="font-semibold text-gray-900 mb-3">Error Page Demo</h3>
      <div className="space-y-2">
        {[
          { id: "404", name: "404 Not Found" },
          { id: "500", name: "500 Server Error" },
          { id: "general", name: "General Error" },
        ].map((page) => (
          <button key={page.id} onClick={() => setCurrentPage(page.id)} className={`block w-full text-left px-3 py-2 rounded transition-colors ${currentPage === page.id ? "bg-primary text-primary" : "hover:bg-gray-100"}`}>
            {page.name}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative">
      {currentPage === "404" && <NotFoundPage />}
      {currentPage === "500" && <ServerErrorPage />}
      {currentPage === "general" && <GeneralErrorPage />}
    </div>
  );
};

export default ErrorPages;
