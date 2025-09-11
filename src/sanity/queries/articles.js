import { client } from "@/sanity/client";

const ARTICLES_QUERY = `*[
  _type == "article" 
  && status == "published"
  && defined(slug.current)
]|order(featured desc, publishedAt desc)[0...6]{
  _id,
  title,
  slug,
  excerpt,
  featuredImage{
    asset->{
      _ref,
      url
    },
    alt
  },
  category,
  publishedAt,
  readTime,
  featured,
  author->{
    name,
    slug
  },
  tags[]->{
    name,
    slug
  }
}`;

const FEATURED_ARTICLES_QUERY = `*[
  _type == "article" 
  && status == "published"
  && featured == true
  && defined(slug.current)
]|order(publishedAt desc)[0...3]{
  _id,
  title,
  slug,
  excerpt,
  featuredImage{
    asset->{
      _ref,
      url
    },
    alt
  },
  category,
  publishedAt,
  readTime,
  featured,
  author->{
    name,
    slug
  },
  tags[]->{
    name,
    slug
  }
}`;

const options = { next: { revalidate: 30 } };

export async function getArticles() {
  try {
    const articles = await client.fetch(ARTICLES_QUERY, {}, options);
    return articles;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}

export async function getFeaturedArticles() {
  try {
    const articles = await client.fetch(FEATURED_ARTICLES_QUERY, {}, options);
    return articles;
  } catch (error) {
    console.error("Error fetching featured articles:", error);
    return [];
  }
}

// Utils untuk format data
export function formatPublishDate(dateString) {
  if (!dateString) return "";

  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

export function getCategoryDisplayName(category) {
  const categoryMap = {
    "industry-news": "Industry News",
    "product-updates": "Product Updates",
    sustainability: "Sustainability",
    "export-guide": "Export Guide",
    "quality-standards": "Quality Standards",
    "market-insights": "Market Insights",
  };

  return categoryMap[category] || category;
}
