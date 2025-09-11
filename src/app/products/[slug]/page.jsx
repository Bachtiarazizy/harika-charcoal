import ProductDetailPage from "@/components/products-page/product-details";
import { getProductBySlug, getProducts } from "@/sanity/queries/products";
import { notFound } from "next/navigation";

// Generate static params for all products
export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    slug: product.slug.current,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const seoTitle = product.seoTitle || `${product.title} | Premium Charcoal Products`;
  const seoDescription = product.seoDescription || product.shortDescription;
  const seoImage = product.seoImage || product.images?.[0];

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: product.keywords?.join(", ") || undefined,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      type: "website",
      images: seoImage
        ? [
            {
              url: seoImage.asset?.url || seoImage.image?.asset?.url,
              width: 1200,
              height: 630,
              alt: seoImage.alt || product.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: seoImage ? [seoImage.asset?.url || seoImage.image?.asset?.url] : undefined,
    },
    robots: {
      index: !product.noIndex,
      follow: !product.noIndex,
    },
    canonical: product.canonicalUrl || undefined,
  };
}

export default async function ProductDetailPageRoute({ params }) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailPage product={product} />;
}
