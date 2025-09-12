"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Shield, Eye, Database, Lock, Users, Globe, Mail, Phone } from "lucide-react";

const PrivacyPolicyPage = () => {
  const lastUpdated = "January 15, 2024";

  const sections = [
    {
      id: "information-collection",
      title: "1. Information We Collect",
      content: [
        "We collect information you provide directly to us when you use our services, including personal information such as your name, email address, phone number, company name, and shipping address.",
        "We automatically collect certain information about your device and how you interact with our website, including IP address, browser type, operating system, and usage patterns.",
        "We may collect information from third parties, such as shipping carriers and payment processors, to fulfill orders and provide services.",
      ],
    },
    {
      id: "information-use",
      title: "2. How We Use Your Information",
      content: [
        "We use your information to process orders, arrange shipping, and provide customer support services.",
        "We communicate with you about your orders, respond to inquiries, and send important updates about our services.",
        "We analyze usage patterns to improve our website functionality and user experience.",
        "We may use your information for marketing purposes, but only with your explicit consent.",
      ],
    },
    {
      id: "information-sharing",
      title: "3. Information Sharing and Disclosure",
      content: [
        "We do not sell, trade, or rent your personal information to third parties for marketing purposes.",
        "We share information with trusted service providers who assist us in operating our business, such as shipping companies and payment processors.",
        "We may disclose information when required by law or to protect our rights, property, or safety.",
        "In the event of a business transfer, your information may be transferred as part of the transaction, subject to the same privacy protections.",
      ],
    },
    {
      id: "data-security",
      title: "4. Data Security",
      content: [
        "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
        "We use industry-standard encryption for sensitive data transmission and storage.",
        "Access to personal information is restricted to authorized personnel who need the information to perform their job functions.",
        "While we strive to protect your information, no method of transmission over the internet is 100% secure.",
      ],
    },
    {
      id: "data-retention",
      title: "5. Data Retention",
      content: [
        "We retain personal information for as long as necessary to fulfill the purposes for which it was collected and to comply with legal obligations.",
        "Order and shipping information is typically retained for 7 years to comply with tax and business record requirements.",
        "Marketing information is retained until you opt out or request deletion.",
        "You can request deletion of your personal information at any time, subject to legal requirements.",
      ],
    },
    {
      id: "your-rights",
      title: "6. Your Privacy Rights",
      content: [
        "You have the right to access, update, or delete your personal information held by us.",
        "You can opt out of marketing communications at any time by following unsubscribe instructions or contacting us directly.",
        "You have the right to request a copy of the personal information we hold about you.",
        "If you believe we have processed your information inappropriately, you have the right to file a complaint with relevant data protection authorities.",
      ],
    },
    {
      id: "cookies",
      title: "7. Cookies and Tracking Technologies",
      content: [
        "We use cookies and similar technologies to enhance your browsing experience and analyze website usage.",
        "Essential cookies are necessary for website functionality and cannot be disabled.",
        "Analytical cookies help us understand how visitors interact with our website to improve performance.",
        "You can control cookie settings through your browser preferences, though this may affect website functionality.",
      ],
    },
    {
      id: "international-transfers",
      title: "8. International Data Transfers",
      content: [
        "As an Indonesian company serving international customers, we may transfer personal information across borders.",
        "We ensure appropriate safeguards are in place when transferring data internationally.",
        "Data transfers comply with applicable data protection laws and regulations.",
        "We work with partners who maintain similar privacy and security standards.",
      ],
    },
    {
      id: "children-privacy",
      title: "9. Children's Privacy",
      content: [
        "Our services are not directed to children under 16 years of age, and we do not knowingly collect personal information from children.",
        "If we become aware that we have collected information from a child under 16, we will take steps to delete such information.",
        "Parents or guardians who believe their child has provided information to us should contact us immediately.",
      ],
    },
    {
      id: "policy-changes",
      title: "10. Changes to This Privacy Policy",
      content: [
        "We may update this privacy policy from time to time to reflect changes in our practices or applicable laws.",
        "We will notify you of significant changes through our website or direct communication.",
        "Your continued use of our services after policy changes indicates your acceptance of the updated terms.",
        "We encourage you to review this policy periodically to stay informed about our privacy practices.",
      ],
    },
    {
      id: "contact-privacy",
      title: "11. Contact Information",
      content: [
        "If you have questions about this privacy policy or our privacy practices, please contact us:",
        "Email: privacy@harikanusantara.com",
        "Phone: +90 542 179 3483",
        "Address: Semarang, Central Java, Indonesia",
        "We will respond to privacy inquiries within 30 days.",
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
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="heading-2xl text-white leading-tight mb-6">Privacy Policy</h1>
            <p className="body-lg text-white/90 leading-relaxed mb-8">Your privacy is important to us. This policy explains how we collect, use, and protect your personal information when you use our services.</p>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <span className="body-sm text-white/80">Last updated:</span>
              <span className="body-sm font-medium text-white">{lastUpdated}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
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
            <h2 className="heading-lg text-primary mb-4">Privacy Questions?</h2>
            <p className="body-base text-secondary leading-relaxed mb-6">If you have any questions about how we handle your personal information or want to exercise your privacy rights, please contact our privacy team.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="mailto:privacy@harikanusantara.com" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 group">
                <Mail className="w-4 h-4" />
                <span className="body-sm font-medium">Email Privacy Team</span>
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 group">
                <Phone className="w-4 h-4" />
                <span className="body-sm font-medium">Contact Us</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
