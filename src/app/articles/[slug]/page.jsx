// File: app/articles/[slug]/page.js

import { notFound } from "next/navigation";
import { getArticleBySlug, getArticles, generateArticleStructuredData } from "@/sanity/queries/articles";
import ArticleDetailPage from "@/components/articles-page/article-detail";

export async function generateMetadata({ params }) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
    };
  }

  const title = article.seoTitle || article.title;
  const description = article.seoDescription || article.excerpt;
  const images = [];

  if (article.socialImage?.asset?.url) {
    images.push({
      url: article.socialImage.asset.url,
      width: 1200,
      height: 630,
      alt: article.socialImage.alt || article.title,
    });
  } else if (article.featuredImage?.asset?.url) {
    images.push({
      url: article.featuredImage.asset.url,
      width: 1200,
      height: 630,
      alt: article.featuredImage.alt || article.title,
    });
  }

  return {
    title,
    description,
    keywords: article.keywords?.join(", ") || article.focusKeyword,
    authors: article.author ? [{ name: article.author.name }] : undefined,
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt || article.publishedAt,
    robots: article.noIndex ? "noindex,nofollow" : "index,follow",
    canonical: article.canonicalUrl,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt || article.publishedAt,
      authors: article.author ? [article.author.name] : undefined,
      tags: article.tags?.map((tag) => tag.name) || [],
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: images.map((img) => img.url),
    },
    alternates: {
      canonical: article.canonicalUrl || `/articles/${article.slug.current}`,
    },
  };
}

export default async function ArticleDetailPageRoute({ params }) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  // Get related articles (same category, exclude current article)
  const allArticles = await getArticles();
  const relatedArticles = allArticles.filter((a) => a._id !== article._id && a.category === article.category).slice(0, 3);

  // Generate structured data for SEO
  const structuredData = generateArticleStructuredData(article);

  return (
    <>
      {/* JSON-LD structured data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
      <ArticleDetailPage article={article} relatedArticles={relatedArticles} />
    </>
  );
}

// Optional: Generate static params for better performance
export async function generateStaticParams() {
  const articles = await getArticles(20); // Get first 20 articles for static generation

  return articles.map((article) => ({
    slug: article.slug.current,
  }));
}
