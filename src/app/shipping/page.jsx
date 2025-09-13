import ShippingPage from "@/components/info/shipping";

export const metadata = {
  title: "Shipping Information | Premium Charcoal Products",
  description: "Review our shipping policies, delivery times, and international shipping options for our premium charcoal products. We ensure safe and timely delivery worldwide.",
  keywords: ["Indonesian charcoal supplier", "premium Indonesian charcoal export", "Indonesian coconut shell charcoal", "Indonesian hardwood charcoal", "Indonesian charcoal exporter"],

  openGraph: {
    title: "Shipping Information | Premium Charcoal Products",
    description: "Review our shipping policies, delivery times, and international shipping options for our premium charcoal products. We ensure safe and timely delivery worldwide.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Shipping() {
  return <ShippingPage />;
}
