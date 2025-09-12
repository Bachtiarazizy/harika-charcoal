import QualityGuaranteePage from "@/components/legal/quality-guarantee";

export const metadata = {
  title: "Quality Guarantee | Premium Charcoal Products",
  description: "Read about our commitment to quality, including our quality assurance processes, certifications, and customer satisfaction policies for our premium charcoal products.",
  openGraph: {
    title: "Quality Guarantee | Premium Charcoal Products",
    description: "Read about our commitment to quality, including our quality assurance processes, certifications, and customer satisfaction policies for our premium charcoal products.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function QualityPage() {
  return <QualityGuaranteePage />;
}
