import HeroSection from "@/components/home-page/hero-section";
import DiscoverSection from "@/components/home-page/discover-section";
import ProductsSection from "@/components/home-page/product-section";
import SpecificationsSection from "@/components/home-page/specification-section";
import WhyChooseSection from "@/components/home-page/why-choose-section";
import ArticlesSection from "@/components/home-page/articles-section";

const HarikaCharcoalLanding = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <DiscoverSection />
      <ProductsSection />
      <SpecificationsSection />
      <WhyChooseSection />
      <ArticlesSection />
    </div>
  );
};

export default HarikaCharcoalLanding;
