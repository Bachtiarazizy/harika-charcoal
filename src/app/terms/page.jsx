import TermsOfServicePage from "@/components/legal/terms-of-service-components";

export const metadata = {
  title: "Terms of Service | Premium Charcoal Products",
  description: "Read our comprehensive terms of service covering orders, shipping, product quality, and business terms for our premium charcoal products.",
  openGraph: {
    title: "Terms of Service | Premium Charcoal Products",
    description: "Read our comprehensive terms of service covering orders, shipping, product quality, and business terms for our premium charcoal products.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPageRoute() {
  return <TermsOfServicePage />;
}
