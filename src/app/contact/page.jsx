import ContactPage from "@/components/contact-page/contact-component";

export const metadata = {
  title: "Contact Us | Premium Charcoal Products",
  description: "Get in touch with our team for product inquiries, bulk orders, export information, and custom charcoal solutions. We're here to help with all your charcoal needs.",
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
