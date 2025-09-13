import ContactPage from "@/components/contact-page/contact-component";

export const metadata = {
  title: "Contact Us | Premium Charcoal Products",
  description: "Get in touch with our team for product inquiries, bulk orders, export information, and custom charcoal solutions. We're here to help with all your charcoal needs.",
  keywords: ["BBQ Charcoal Supplier", "Indonesian Hookah & BBQ Charcoal", "Indonesian charcoal supplier", "Hookah Charcoal Supplier", "Indonesian charcoal exporter"],

  openGraph: {
    title: "Contact Us | Premium Charcoal Products",
    description: "Get in touch with our team for product inquiries, bulk orders, export information, and custom charcoal solutions. We're here to help with all your charcoal needs.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPageRoute() {
  return <ContactPage />;
}
