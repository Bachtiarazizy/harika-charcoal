import ArticlesPage from "@/components/articles-page/articles-listing";
import { getArticles } from "@/sanity/queries/articles";
// import { getArticleCategories } from "@/sanity/queries/categories";

export const metadata = {
  title: "Articles & Insights | Industry Knowledge Hub",
  description: "Stay informed with the latest charcoal industry insights, sustainability practices, quality standards, and expert knowledge. Discover trends and best practices from industry leaders.",
  keywords: "charcoal industry articles, sustainability insights, quality standards, export guidelines, market trends, industry knowledge",
  openGraph: {
    title: "Articles & Insights | Industry Knowledge Hub",
    description: "Stay informed with the latest charcoal industry insights, sustainability practices, quality standards, and expert knowledge. Discover trends and best practices from industry leaders.",
    type: "website",
    images: [
      {
        url: "/og-articles.jpg", // Add your articles OG image
        width: 1200,
        height: 630,
        alt: "Industry Articles & Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles & Insights | Industry Knowledge Hub",
    description: "Stay informed with the latest charcoal industry insights, sustainability practices, quality standards, and expert knowledge.",
    images: ["/og-articles.jpg"],
  },
};

export default async function ArticlesPageRoute() {
  // Fetch data on server-side
  const [articles] = await Promise.all([getArticles()]);

  return <ArticlesPage initialArticles={articles} />;
}
