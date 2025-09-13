import { getProducts } from "@/sanity/queries/products";
import { getCategories } from "@/sanity/queries/categories";
import ProductsPage from "@/components/products-page/product-section";

export const metadata = {
  title: "Our Products | Premium Charcoal Collection",
  description: "Explore our complete range of premium charcoal products. From BBQ charcoal to shisha coal, find sustainable and high-quality charcoal solutions for all your needs.",
  keywords: ["BBQ Charcoal Supplier", "Indonesian Hookah & BBQ Charcoal", "Indonesian charcoal supplier", "Hookah Charcoal Supplier", "Indonesian charcoal exporter"],

  openGraph: {
    title: "Our Products | Premium Charcoal Collection",
    description: "Explore our complete range of premium charcoal products. From BBQ charcoal to shisha coal, find sustainable and high-quality charcoal solutions for all your needs.",
    type: "website",
  },
};

export default async function ProductsPageRoute() {
  // Fetch data on server-side
  const [products, categories] = await Promise.all([getProducts(), getCategories()]);

  return <ProductsPage initialProducts={products} categories={categories} />;
}
