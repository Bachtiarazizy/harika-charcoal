import HeroSection from "@/components/about-page/hero-section";
import WhyChooseSection from "@/components/home-page/why-choose-section";
import StorySection from "@/components/about-page/story-section";
import ValueSection from "@/components/about-page/value-section";
import CtaSection from "@/components/about-page/cta-section";

export const metadata = {
  title: "About Us - Premium Indonesian Charcoal Supplier",
  description: "Learn more about Harika Charcoal, a leading Indonesian charcoal supplier committed to sustainability, quality, and customer satisfaction.",
  keywords: ["BBQ Charcoal Supplier", "Indonesian Hookah & BBQ Charcoal", "Indonesian charcoal supplier", "Hookah Charcoal Supplier", "Indonesian charcoal exporter"],
};

const AboutPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <WhyChooseSection />
      <StorySection />
      <ValueSection />
      <CtaSection />
    </div>
  );
};

export default AboutPage;
