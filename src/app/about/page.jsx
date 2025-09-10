import HeroSection from "@/components/about-page/hero-section";
import WhyChooseSection from "@/components/home-page/why-choose-section";
import StorySection from "@/components/about-page/story-section";
import ValueSection from "@/components/about-page/value-section";
import CtaSection from "@/components/about-page/cta-section";

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
