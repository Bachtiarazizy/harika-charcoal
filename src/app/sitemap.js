import { getArticles } from "@/sanity/queries/articles";
import { getProducts } from "@/sanity/queries/products";

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://charcoal.harikanusantara.com";

  // Helper function to safely create Date objects
  const safeDate = (date) => {
    try {
      if (!date) return new Date();

      let dateObj;
      if (date instanceof Date) {
        dateObj = date;
      } else {
        dateObj = new Date(date);
      }

      // Check if date is valid
      if (isNaN(dateObj.getTime())) {
        console.warn("Invalid date provided, using current date:", date);
        return new Date();
      }

      return dateObj;
    } catch (error) {
      console.error("Error creating date:", error, "Input:", date);
      return new Date();
    }
  };

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/export-terms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/shipping`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/quality`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/packaging`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  let productPages = [];
  let articlePages = [];

  try {
    // Dynamic product pages
    const products = await getProducts();
    productPages = products.map((product) => ({
      url: `${baseUrl}/products/${product.slug}`,
      lastModified: safeDate(product.updatedAt),
      changeFrequency: "weekly",
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Error fetching products for sitemap:", error);
  }

  try {
    // Dynamic Article pages
    const articles = await getArticles();
    articlePages = articles.map((article) => ({
      url: `${baseUrl}/articles/${article.slug}`,
      lastModified: safeDate(article.updatedAt),
      changeFrequency: "monthly",
      priority: 0.6,
    }));
  } catch (error) {
    console.error("Error fetching articles for sitemap:", error);
  }

  return [...staticPages, ...productPages, ...articlePages];
}
