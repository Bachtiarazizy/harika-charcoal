import FAQPage from "@/components/info/faq";

export const metadata = {
  title: "Frequently Asked Questions | Premium Charcoal Products",
  description: "Find answers to common questions about our premium charcoal products, including ordering, shipping, and product details.",
  keywords: ["Indonesian charcoal supplier", "premium Indonesian charcoal export", "Indonesian coconut shell charcoal", "Indonesian hardwood charcoal", "Indonesian charcoal exporter"],

  openGraph: {
    title: "Frequently Asked Questions | Premium Charcoal Products",
    description: "Find answers to common questions about our premium charcoal products, including ordering, shipping, and product details.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FAQ() {
  return <FAQPage />;
}
