import ExportTermsPage from "@/components/legal/export-terms";

export const metadata = {
  title: "Export Terms | Premium Charcoal Products",
  description: "Read our export terms detailing shipping, delivery, and business conditions for international orders of our premium charcoal products.",
  keywords: ["Indonesian charcoal supplier", "premium Indonesian charcoal export", "Indonesian coconut shell charcoal", "Indonesian hardwood charcoal", "Indonesian charcoal exporter"],
  openGraph: {
    title: "Privacy Policy | Premium Charcoal Products",
    description: "Read our export terms detailing shipping, delivery, and business conditions for international orders of our premium charcoal products.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ExportTerms() {
  return <ExportTermsPage />;
}
