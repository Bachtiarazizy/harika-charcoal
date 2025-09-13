import { client } from "@/sanity/client";

const ARTICLES_QUERY = `*[
  _type == "article" 
  && status == "published" 
  && defined(slug.current)
]|order(featured desc, publishedAt desc){
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
  updatedAt,
  readTime,
  featured,
  author->{
    _id,
    name,
    slug,
    bio,
    image{
      asset->{
        _ref,
        url
      },
      alt
    }
  },
  tags[]->{
    _id,
    name,
    slug
  },
  // SEO fields untuk meta tags
  seoTitle,
  seoDescription,
  focusKeyword
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
    _id,
    name,
    slug,
    bio,
    image{
      asset->{
        _ref,
        url
      },
      alt
    }
  },
  tags[]->{
    _id,
    name,
    slug
  }
}`;

const ARTICLE_BY_SLUG_QUERY = `*[
  _type == "article" 
  && slug.current == $slug 
  && status == "published"
][0]{
  _id,
  title,
  slug,
  excerpt,
  content,
  featuredImage{
    asset->{
      _ref,
      url
    },
    alt
  },
  category,
  publishedAt,
  updatedAt,
  readTime,
  featured,
  author->{
    _id,
    name,
    slug,
    bio,
    image{
      asset->{
        _ref,
        url
      },
      alt
    }
  },
  tags[]->{
    _id,
    name,
    slug
  },
  relatedProducts[]->{
    _id,
    title,
    slug,
    shortDescription,
    "images": images[]{
      "image": {
        "asset": image.asset->{
          _ref,
          "url": url
        }
      },
      alt,
      isMain
    },
    category->{
      name,
      slug
    },
    featured
  },
  // SEO fields
  seoTitle,
  seoDescription,
  focusKeyword,
  keywords,
  socialImage{
    asset->{
      _ref,
      url
    },
    alt
  },
  noIndex,
  canonicalUrl,
  structuredData
}`;

const ARTICLES_CATEGORIES_QUERY = `*[
  _type == "article" 
  && status == "published" 
  && defined(category)
]{
  category
} | order(category asc)`;

const options = { next: { revalidate: 30 } };

export async function getArticles(limit = null) {
  try {
    const query = limit ? `${ARTICLES_QUERY}[0...${limit}]` : ARTICLES_QUERY;
    const articles = await client.fetch(query, {}, options);
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

export async function getArticleBySlug(slug) {
  try {
    const article = await client.fetch(ARTICLE_BY_SLUG_QUERY, { slug }, options);
    return article;
  } catch (error) {
    console.error("Error fetching article by slug:", error);
    return null;
  }
}

export async function getArticleCategories() {
  try {
    const articlesWithCategories = await client.fetch(ARTICLES_CATEGORIES_QUERY, {}, options);
    const uniqueCategories = [...new Set(articlesWithCategories.map((item) => item.category).filter(Boolean))];
    return uniqueCategories.sort();
  } catch (error) {
    console.error("Error fetching article categories:", error);
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

export function formatRelativeDate(dateString) {
  if (!dateString) return "";

  const date = new Date(dateString);
  const now = new Date();
  const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) return "Today";
  if (diffInDays === 1) return "Yesterday";
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;
  return `${Math.floor(diffInDays / 365)} years ago`;
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

export function getCategoryColor(category) {
  const colorMap = {
    "industry-news": "bg-blue-100 text-blue-800",
    "product-updates": "bg-green-100 text-green-800",
    sustainability: "bg-emerald-100 text-emerald-800",
    "export-guide": "bg-purple-100 text-purple-800",
    "quality-standards": "bg-orange-100 text-orange-800",
    "market-insights": "bg-pink-100 text-pink-800",
  };

  return colorMap[category] || "bg-gray-100 text-gray-800";
}

// Generate structured data untuk SEO
export function generateArticleStructuredData(article) {
  if (!article) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.seoTitle || article.title,
    description: article.seoDescription || article.excerpt,
    image: article.socialImage?.asset?.url || article.featuredImage?.asset?.url,
    author: {
      "@type": "Person",
      name: article.author?.name,
      url: article.author?.slug ? `/authors/${article.author.slug.current}` : undefined,
    },
    publisher: {
      "@type": "Organization",
      name: "Your Company Name", // Ganti dengan nama company Anda
      logo: {
        "@type": "ImageObject",
        url: "https://yoursite.com/logo.png", // Ganti dengan logo URL
      },
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://yoursite.com/articles/${article.slug.current}`, // Ganti dengan domain Anda
    },
    keywords: article.keywords?.join(", ") || article.focusKeyword,
    articleSection: getCategoryDisplayName(article.category),
    wordCount: article.structuredData?.wordCount,
    timeRequired: article.readTime ? `PT${article.readTime}M` : undefined,
  };
}
