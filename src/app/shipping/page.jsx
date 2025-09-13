import ShippingPage from "@/components/info/shipping";

export const metadata = {
  title: "Shipping Information | Premium Charcoal Products",
  description: "Review our shipping policies, delivery times, and international shipping options for our premium charcoal products. We ensure safe and timely delivery worldwide.",
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
