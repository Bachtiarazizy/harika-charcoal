"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Settings,
  HelpCircle,
  FileText,
  Download,
  Search,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  CheckCircle,
  AlertTriangle,
  Shield,
  Thermometer,
  Scale,
  Beaker,
  Package,
  Truck,
  Globe,
  Users,
  BookOpen,
  Video,
  ChevronRight,
  ExternalLink,
  Filter,
  Flame,
  Eye,
  Droplets,
} from "lucide-react";
import { useState } from "react";

const TechnicalSupportPage = () => {
  const [activeCategory, setActiveCategory] = useState("quality");
  const [searchQuery, setSearchQuery] = useState("");

  const supportCategories = [
    {
      id: "quality",
      title: "Quality Control",
      icon: Shield,
      description: "Quality testing, specifications, and certification support",
      color: "green",
    },
    {
      id: "storage",
      title: "Storage & Handling",
      icon: Package,
      description: "Proper storage methods and handling guidelines",
      color: "blue",
    },
    {
      id: "testing",
      title: "Product Testing",
      icon: Beaker,
      description: "Testing procedures, equipment, and interpretation",
      color: "purple",
    },
    {
      id: "applications",
      title: "Applications",
      icon: Flame,
      description: "Usage guidelines for different charcoal applications",
      color: "orange",
    },
    {
      id: "logistics",
      title: "Logistics Support",
      icon: Truck,
      description: "Shipping, documentation, and customs assistance",
      color: "indigo",
    },
    {
      id: "compliance",
      title: "Compliance",
      icon: FileText,
      description: "Regulatory compliance and certification guidance",
      color: "red",
    },
  ];

  const technicalGuides = {
    quality: [
      {
        title: "Moisture Content Testing",
        description: "Step-by-step guide for accurate moisture measurement",
        type: "guide",
        difficulty: "Intermediate",
        duration: "30 minutes",
        topics: ["Sample preparation", "Oven drying method", "Calculation procedures", "Quality standards"],
      },
      {
        title: "Ash Content Analysis",
        description: "Complete procedure for ash content determination",
        type: "guide",
        difficulty: "Advanced",
        duration: "4 hours",
        topics: ["Equipment setup", "Combustion process", "Weight calculations", "Result interpretation"],
      },
      {
        title: "Fixed Carbon Calculation",
        description: "Methods for determining fixed carbon content",
        type: "guide",
        difficulty: "Intermediate",
        duration: "45 minutes",
        topics: ["Proximate analysis", "Calculation formulas", "Quality implications", "Standard references"],
      },
      {
        title: "Calorific Value Testing",
        description: "Heat value determination using bomb calorimeter",
        type: "guide",
        difficulty: "Advanced",
        duration: "2 hours",
        topics: ["Calorimeter operation", "Sample preparation", "Heat calculations", "Quality correlation"],
      },
    ],
    storage: [
      {
        title: "Warehouse Storage Guidelines",
        description: "Best practices for charcoal storage in warehouses",
        type: "guide",
        difficulty: "Basic",
        duration: "15 minutes",
        topics: ["Temperature control", "Humidity management", "Ventilation requirements", "Stack arrangements"],
      },
      {
        title: "Container Loading Procedures",
        description: "Optimal loading techniques for export containers",
        type: "guide",
        difficulty: "Intermediate",
        duration: "30 minutes",
        topics: ["Weight distribution", "Moisture barriers", "Securing methods", "Documentation"],
      },
      {
        title: "Quality Preservation Methods",
        description: "Maintaining product quality during storage",
        type: "guide",
        difficulty: "Intermediate",
        duration: "20 minutes",
        topics: ["Moisture protection", "Air circulation", "Quality monitoring", "Shelf life factors"],
      },
      {
        title: "Handling Equipment Guidelines",
        description: "Safe operation of material handling equipment",
        type: "guide",
        difficulty: "Basic",
        duration: "25 minutes",
        topics: ["Forklift operations", "Conveyor systems", "Manual handling", "Safety procedures"],
      },
    ],
    testing: [
      {
        title: "Laboratory Setup Requirements",
        description: "Essential equipment and setup for quality testing",
        type: "guide",
        difficulty: "Advanced",
        duration: "1 hour",
        topics: ["Equipment specifications", "Calibration procedures", "Safety requirements", "Maintenance schedules"],
      },
      {
        title: "Sampling Procedures",
        description: "Proper sampling techniques for representative testing",
        type: "guide",
        difficulty: "Intermediate",
        duration: "20 minutes",
        topics: ["Random sampling", "Sample size determination", "Storage conditions", "Chain of custody"],
      },
      {
        title: "Test Result Interpretation",
        description: "Understanding and interpreting test results",
        type: "guide",
        difficulty: "Intermediate",
        duration: "35 minutes",
        topics: ["Standard comparisons", "Acceptable ranges", "Quality implications", "Corrective actions"],
      },
      {
        title: "Equipment Calibration",
        description: "Calibration procedures for testing equipment",
        type: "guide",
        difficulty: "Advanced",
        duration: "45 minutes",
        topics: ["Calibration standards", "Frequency schedules", "Documentation requirements", "Troubleshooting"],
      },
    ],
    applications: [
      {
        title: "BBQ Grilling Applications",
        description: "Optimal usage guidelines for BBQ charcoal",
        type: "guide",
        difficulty: "Basic",
        duration: "15 minutes",
        topics: ["Lighting techniques", "Temperature control", "Burning duration", "Safety considerations"],
      },
      {
        title: "Shisha Usage Guidelines",
        description: "Best practices for shisha charcoal application",
        type: "guide",
        difficulty: "Basic",
        duration: "10 minutes",
        topics: ["Heat distribution", "Flavor preservation", "Burning characteristics", "User safety"],
      },
      {
        title: "Industrial Applications",
        description: "Technical specifications for industrial use",
        type: "guide",
        difficulty: "Advanced",
        duration: "40 minutes",
        topics: ["Process requirements", "Quality specifications", "Performance optimization", "Cost considerations"],
      },
      {
        title: "Fuel Efficiency Optimization",
        description: "Maximizing fuel efficiency across applications",
        type: "guide",
        difficulty: "Intermediate",
        duration: "25 minutes",
        topics: ["Combustion optimization", "Heat management", "Waste reduction", "Performance monitoring"],
      },
    ],
    logistics: [
      {
        title: "Export Documentation",
        description: "Complete guide to export documentation requirements",
        type: "guide",
        difficulty: "Intermediate",
        duration: "30 minutes",
        topics: ["Required certificates", "Customs procedures", "Quality documents", "Shipping papers"],
      },
      {
        title: "Container Specifications",
        description: "Understanding container types and specifications",
        type: "guide",
        difficulty: "Basic",
        duration: "20 minutes",
        topics: ["Container types", "Weight limits", "Dimension requirements", "Special considerations"],
      },
      {
        title: "International Shipping Requirements",
        description: "Country-specific shipping requirements and regulations",
        type: "guide",
        difficulty: "Advanced",
        duration: "45 minutes",
        topics: ["Import regulations", "Certification requirements", "Customs procedures", "Documentation"],
      },
      {
        title: "Logistics Optimization",
        description: "Optimizing shipping costs and delivery times",
        type: "guide",
        difficulty: "Intermediate",
        duration: "35 minutes",
        topics: ["Route planning", "Cost optimization", "Transit time management", "Risk mitigation"],
      },
    ],
    compliance: [
      {
        title: "Food Safety Regulations",
        description: "Compliance with food-grade charcoal regulations",
        type: "guide",
        difficulty: "Advanced",
        duration: "50 minutes",
        topics: ["FDA regulations", "EU standards", "HACCP requirements", "Certification processes"],
      },
      {
        title: "Environmental Compliance",
        description: "Meeting environmental standards and regulations",
        type: "guide",
        difficulty: "Intermediate",
        duration: "40 minutes",
        topics: ["Emission standards", "Waste management", "Sustainability reporting", "Carbon footprint"],
      },
      {
        title: "Quality System Compliance",
        description: "ISO 9001 and other quality system requirements",
        type: "guide",
        difficulty: "Advanced",
        duration: "1 hour",
        topics: ["Documentation requirements", "Process control", "Audit procedures", "Continuous improvement"],
      },
      {
        title: "International Standards",
        description: "Understanding international charcoal standards",
        type: "guide",
        difficulty: "Intermediate",
        duration: "30 minutes",
        topics: ["ASTM standards", "ISO specifications", "Regional requirements", "Compliance verification"],
      },
    ],
  };

  const quickLinks = [
    {
      title: "Quality Certificates",
      description: "Download current quality certificates",
      icon: FileText,
      link: "#",
      type: "download",
    },
    {
      title: "Technical Data Sheets",
      description: "Product specifications and technical data",
      icon: BookOpen,
      link: "#",
      type: "download",
    },
    {
      title: "Testing Procedures",
      description: "Standard testing procedures and methods",
      icon: Beaker,
      link: "#",
      type: "download",
    },
    {
      title: "Safety Guidelines",
      description: "Handling and safety guidelines",
      icon: Shield,
      link: "#",
      type: "download",
    },
    {
      title: "Training Videos",
      description: "Educational videos and tutorials",
      icon: Video,
      link: "#",
      type: "external",
    },
    {
      title: "Compliance Documents",
      description: "Regulatory compliance documentation",
      icon: Globe,
      link: "#",
      type: "download",
    },
  ];

  const supportStats = [
    { icon: Clock, label: "Avg Response Time", value: "< 4 Hours" },
    { icon: Users, label: "Technical Experts", value: "12+" },
    { icon: Globe, label: "Languages Supported", value: "8" },
    { icon: CheckCircle, label: "Resolution Rate", value: "98%" },
  ];

  const getColorClasses = (color) => {
    const colors = {
      green: "text-green-600 bg-green-100",
      blue: "text-blue-600 bg-blue-100",
      purple: "text-purple-600 bg-purple-100",
      orange: "text-orange-600 bg-orange-100",
      indigo: "text-indigo-600 bg-indigo-100",
      red: "text-red-600 bg-red-100",
    };
    return colors[color] || colors.blue;
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      Basic: "text-green-600 bg-green-100",
      Intermediate: "text-yellow-600 bg-yellow-100",
      Advanced: "text-red-600 bg-red-100",
    };
    return colors[difficulty] || colors.Basic;
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">Technical Support Center</h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">Get expert technical assistance, access comprehensive documentation, and find solutions to optimize your charcoal operations</p>
          </motion.div>
        </div>
      </section>

      {/* Support Stats */}
      <section className="py-12 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {supportStats.map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="text-center text-white">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Search Technical Documentation</h2>
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search guides, procedures, specifications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Support Categories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Choose from our comprehensive technical support categories to find specific guidance and documentation</p>
          </motion.div>

          {/* Category Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {supportCategories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveCategory(category.id)}
                className={`text-left p-6 rounded-2xl transition-all duration-300 ${activeCategory === category.id ? "bg-white shadow-lg ring-2 ring-indigo-500" : "bg-white shadow hover:shadow-md"}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getColorClasses(category.color)}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Technical Guides */}
          <motion.div key={activeCategory} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{supportCategories.find((cat) => cat.id === activeCategory)?.title} Guides</h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {technicalGuides[activeCategory]?.map((guide, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">{guide.title}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(guide.difficulty)}`}>{guide.difficulty}</span>
                  </div>

                  <p className="text-gray-600 mb-4">{guide.description}</p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {guide.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {guide.topics.length} Topics
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="font-medium text-gray-900 mb-2">Topics Covered:</h5>
                    <div className="flex flex-wrap gap-2">
                      {guide.topics.slice(0, 3).map((topic, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          {topic}
                        </span>
                      ))}
                      {guide.topics.length > 3 && <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">+{guide.topics.length - 3} more</span>}
                    </div>
                  </div>

                  <button className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium">
                    <BookOpen className="w-4 h-4" />
                    Access Guide
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Access Resources</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Direct access to essential documents and resources</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-300 cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center group-hover:bg-indigo-200 transition-colors duration-300">
                    <link.icon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-gray-900">{link.title}</h3>
                      {link.type === "download" ? <Download className="w-4 h-4 text-gray-400" /> : <ExternalLink className="w-4 h-4 text-gray-400" />}
                    </div>
                    <p className="text-sm text-gray-600">{link.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="bg-indigo-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center">
            <Settings className="w-12 h-12 text-white mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Need Direct Technical Support?</h2>
            <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto">Our technical experts are ready to provide personalized assistance for complex technical challenges and specialized requirements.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <Mail className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Technical Email</h3>
                <p className="text-sm text-white/80 mb-3">Detailed technical inquiries</p>
                <a href="mailto:technical@harikanusantara.com" className="text-white hover:text-white/80 transition-colors text-sm font-medium">
                  technical@harikanusantara.com
                </a>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <Phone className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Technical Hotline</h3>
                <p className="text-sm text-white/80 mb-3">Urgent technical support</p>
                <a href="tel:+905421793483" className="text-white hover:text-white/80 transition-colors text-sm font-medium">
                  +90 542 179 3483
                </a>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <Video className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Video Consultation</h3>
                <p className="text-sm text-white/80 mb-3">Remote technical assistance</p>
                <button className="text-white hover:text-white/80 transition-colors text-sm font-medium">Schedule Call</button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-full hover:bg-white/90 transition-all duration-300 font-medium text-lg">
                <MessageCircle className="w-5 h-5" />
                Submit Support Request
              </Link>
              <Link href="/faq" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-indigo-600 transition-all duration-300 font-medium text-lg">
                <HelpCircle className="w-5 h-5" />
                Check FAQ
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TechnicalSupportPage;
