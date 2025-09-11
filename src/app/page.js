import HeroSection from "@/components/home-page/hero-section";
import DiscoverSection from "@/components/home-page/discover-section";
import ProductsSection from "@/components/home-page/product-section";
import SpecificationsSection from "@/components/home-page/specification-section";
import WhyChooseSection from "@/components/home-page/why-choose-section";
import ArticlesSection from "@/components/home-page/articles-section";
import { getFeaturedProducts } from "@/sanity/queries/products";
import { getFeaturedArticles } from "@/sanity/queries/articles";

export default async function HomePage() {
  const products = await getFeaturedProducts();
  const articles = await getFeaturedArticles();
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <DiscoverSection />
      <ProductsSection initialProducts={products} />
      <SpecificationsSection />
      <WhyChooseSection />
      <ArticlesSection initialArticles={articles} />
    </div>
  );
}
