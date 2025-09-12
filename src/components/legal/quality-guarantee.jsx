"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Award, Shield, CheckCircle, BarChart3, Microscope, FileCheck, Users, Target, Star, Clock, Thermometer } from "lucide-react";

const QualityGuaranteePage = () => {
  const lastUpdated = "January 15, 2024";

  const qualityStandards = [
    {
      parameter: "Moisture Content",
      bbqCharcoal: "≤ 8%",
      shishaCharcoal: "≤ 6%",
      industrialCharcoal: "≤ 10%",
      testMethod: "ASTM D3302",
    },
    {
      parameter: "Ash Content",
      bbqCharcoal: "≤ 4%",
      shishaCharcoal: "≤ 2.5%",
      industrialCharcoal: "≤ 6%",
      testMethod: "ASTM D3174",
    },
    {
      parameter: "Fixed Carbon",
      bbqCharcoal: "≥ 75%",
      shishaCharcoal: "≥ 85%",
      industrialCharcoal: "≥ 70%",
      testMethod: "ASTM D3172",
    },
    {
      parameter: "Volatile Matter",
      bbqCharcoal: "15-25%",
      shishaCharcoal: "8-15%",
      industrialCharcoal: "20-30%",
      testMethod: "ASTM D3175",
    },
  ];

  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management System certification ensuring consistent quality processes",
      icon: Award,
      status: "Certified",
      validUntil: "2025",
    },
    {
      name: "FSC Chain of Custody",
      description: "Forest Stewardship Council certification for sustainable sourcing",
      icon: Shield,
      status: "Available",
      validUntil: "On Request",
    },
    {
      name: "HALAL Certification",
      description: "Halal compliance certification for Muslim market requirements",
      icon: CheckCircle,
      status: "Certified",
      validUntil: "2024",
    },
    {
      name: "KOSHER Certification",
      description: "Kosher compliance certification available upon request",
      icon: Star,
      status: "Available",
      validUntil: "On Request",
    },
  ];

  const qualityProcess = [
    {
      step: "Raw Material Selection",
      description: "Carefully selected hardwood from sustainable sources, aged for optimal carbonization",
      icon: Target,
      checks: ["Species verification", "Moisture testing", "Visual inspection"],
    },
    {
      step: "Production Control",
      description: "Controlled carbonization process with continuous temperature and time monitoring",
      icon: Thermometer,
      checks: ["Temperature logging", "Time control", "Process parameters"],
    },
    {
      step: "Quality Testing",
      description: "Comprehensive laboratory testing of each production batch",
      icon: Microscope,
      checks: ["Chemical analysis", "Physical properties", "Burn performance"],
    },
    {
      step: "Final Inspection",
      description: "Visual inspection and packaging verification before shipment",
      icon: FileCheck,
      checks: ["Size grading", "Foreign matter", "Packaging integrity"],
    },
  ];

  const sections = [
    {
      id: "quality-commitment",
      title: "1. Our Quality Commitment",
      icon: Award,
      content: [
        "We are committed to delivering premium quality charcoal products that meet or exceed international standards and customer expectations.",
        "Our quality management system ensures consistent product quality through rigorous testing, process control, and continuous improvement.",
        "Every batch is tested and certified before shipment, with complete traceability from raw material to finished product.",
        "We stand behind our products with a comprehensive quality guarantee and responsive customer support.",
      ],
    },
    {
      id: "quality-parameters",
      title: "2. Quality Specifications",
      icon: BarChart3,
      content: [
        "All products are tested according to internationally recognized ASTM standards for coal and coke analysis.",
        "Each shipment includes a Certificate of Analysis showing actual test results for all key parameters.",
        "Third-party testing and inspection services are available through internationally recognized laboratories.",
        "Custom specifications can be developed to meet specific application requirements with advance notice.",
      ],
    },
    {
      id: "testing-procedures",
      title: "3. Testing Procedures and Standards",
      icon: Microscope,
      content: [
        "Our quality laboratory is equipped with modern testing equipment calibrated to international standards.",
        "All testing procedures follow ASTM (American Society for Testing and Materials) methods for accuracy and repeatability.",
        "Sampling procedures ensure representative samples are taken from each production batch for testing.",
        "Test results are recorded and maintained for traceability and quality audit purposes.",
        "Regular proficiency testing ensures our laboratory results are accurate and consistent.",
      ],
    },
    {
      id: "production-quality",
      title: "4. Production Quality Control",
      icon: Shield,
      content: [
        "Raw material inspection ensures only suitable hardwood species are used in production.",
        "Controlled carbonization process with continuous monitoring of temperature, time, and airflow parameters.",
        "In-process quality checks at critical control points throughout the production cycle.",
        "Finished product inspection includes visual examination, size grading, and foreign matter removal.",
        "Batch identification system allows complete traceability from raw material to finished product.",
      ],
    },
    {
      id: "quality-guarantee",
      title: "5. Quality Guarantee Terms",
      icon: CheckCircle,
      content: [
        "We guarantee that all products will meet the specifications agreed upon at the time of order confirmation.",
        "Any product not meeting guaranteed specifications will be replaced or credited at our expense.",
        "Quality claims must be made within 30 days of delivery with supporting laboratory test results.",
        "Third-party testing costs for valid quality claims will be reimbursed by us.",
        "Our liability for quality issues is limited to replacement or credit of non-conforming products.",
      ],
    },
    {
      id: "continuous-improvement",
      title: "6. Continuous Improvement",
      icon: Target,
      content: [
        "Regular review of quality data to identify trends and opportunities for improvement.",
        "Customer feedback is actively sought and incorporated into our quality improvement processes.",
        "Investment in modern equipment and technology to enhance product quality and consistency.",
        "Staff training programs ensure all personnel understand quality requirements and procedures.",
        "Annual quality management system audits to ensure continued compliance with ISO 9001 standards.",
      ],
    },
    {
      id: "customer-support",
      title: "7. Customer Quality Support",
      icon: Users,
      content: [
        "Technical support team available to assist with product selection and application guidance.",
        "Quality documentation provided with every shipment including test certificates and specifications.",
        "Custom testing services available for specific quality parameters upon request.",
        "Quality training and education programs available for customers and distributors.",
        "Responsive customer service for quality inquiries and technical support needs.",
      ],
    },
    {
      id: "environmental-quality",
      title: "8. Environmental and Sustainability Quality",
      content: [
        "Sustainable sourcing practices ensure raw materials come from responsibly managed forests.",
        "Production processes designed to minimize environmental impact while maintaining quality.",
        "Waste reduction and recycling programs implemented throughout our operations.",
        "Carbon footprint monitoring and reduction initiatives as part of our quality commitment.",
        "Compliance with all environmental regulations and industry best practices.",
      ],
    },
    {
      id: "claim-procedures",
      title: "9. Quality Claim Procedures",
      content: [
        "Quality claims should be submitted in writing within 30 days of product receipt.",
        "Include detailed description of the quality issue and supporting test data or photographs.",
        "Retain representative samples of the questioned material for potential analysis.",
        "We will respond to all quality claims within 5 business days of receipt.",
        "Resolution may include replacement products, credit, or technical consultation as appropriate.",
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
              <Award className="w-8 h-8 text-white" />
            </div>
            <h1 className="heading-2xl text-white leading-tight mb-6">Quality Guarantee</h1>
            <p className="body-lg text-white/90 leading-relaxed mb-8">Our commitment to delivering premium quality charcoal products with comprehensive quality assurance, testing procedures, and customer support.</p>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <span className="body-sm text-white/80">Last updated:</span>
              <span className="body-sm font-medium text-white">{lastUpdated}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quality Standards Table */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="heading-lg text-primary mb-4">Quality Specifications</h2>
            <p className="body-base text-secondary">Guaranteed quality parameters for all our charcoal products</p>
          </motion.div>

          <div className="overflow-x-auto">
            <motion.table initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="w-full bg-surface rounded-2xl overflow-hidden shadow-lg">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Parameter</th>
                  <th className="px-6 py-4 text-left font-semibold">BBQ Charcoal</th>
                  <th className="px-6 py-4 text-left font-semibold">Shisha Charcoal</th>
                  <th className="px-6 py-4 text-left font-semibold">Industrial Charcoal</th>
                  <th className="px-6 py-4 text-left font-semibold">Test Method</th>
                </tr>
              </thead>
              <tbody>
                {qualityStandards.map((standard, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-surface" : "bg-primary"}>
                    <td className="px-6 py-4 font-medium text-primary">{standard.parameter}</td>
                    <td className="px-6 py-4 text-secondary">{standard.bbqCharcoal}</td>
                    <td className="px-6 py-4 text-secondary">{standard.shishaCharcoal}</td>
                    <td className="px-6 py-4 text-secondary">{standard.industrialCharcoal}</td>
                    <td className="px-6 py-4 text-secondary font-mono text-sm">{standard.testMethod}</td>
                  </tr>
                ))}
              </tbody>
            </motion.table>
          </div>
        </div>
      </section>

      {/* Certifications */}
      {/* <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="heading-lg text-primary mb-4">Quality Certifications</h2>
            <p className="body-base text-secondary">International certifications ensuring quality and compliance</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-surface rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="heading-sm text-primary mb-2">{cert.name}</h3>
                <p className="body-sm text-secondary mb-4 leading-relaxed">{cert.description}</p>
                <div className="flex items-center justify-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${cert.status === "Certified" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>{cert.status}</span>
                  <span className="text-xs text-secondary">{cert.validUntil}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Quality Process */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="heading-lg text-primary mb-4">Quality Control Process</h2>
            <p className="body-base text-secondary">Our systematic approach to ensuring consistent quality</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityProcess.map((process, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="bg-surface rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <process.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="heading-sm text-primary mb-3">{process.step}</h3>
                <p className="body-sm text-secondary mb-4 leading-relaxed">{process.description}</p>
                <div className="space-y-2">
                  {process.checks.map((check, checkIndex) => (
                    <div key={checkIndex} className="flex items-center gap-2 text-xs text-secondary">
                      <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                      <span>{check}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Terms Content */}
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
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="heading-lg text-primary mb-4">Quality Questions or Claims?</h2>
            <p className="body-base text-secondary leading-relaxed mb-6">Our quality team is here to assist with technical support, quality documentation, or to address any quality concerns you may have.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="mailto:quality@harikanusantara.com" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 group">
                <Microscope className="w-4 h-4" />
                <span className="body-sm font-medium">Contact Quality Team</span>
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 group">
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                <span className="body-sm font-medium">General Contact</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QualityGuaranteePage;
