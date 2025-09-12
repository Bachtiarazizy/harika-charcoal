import PrivacyPolicyPage from "@/components/legal/privacy-policy";

export const metadata = {
  title: "Privacy Policy | Premium Charcoal Products",
  description: "Read our privacy policy to understand how we collect, use, and protect your personal information when you interact with our premium charcoal products and services.",
  openGraph: {
    title: "Privacy Policy | Premium Charcoal Products",
    description: "Read our privacy policy to understand how we collect, use, and protect your personal information when you interact with our premium charcoal products and services.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return <PrivacyPolicyPage />;
}
