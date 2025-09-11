"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FileText, ChevronRight, Calendar, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { getFeaturedArticles, formatPublishDate, getCategoryDisplayName } from "@/sanity/queries/articles";
import { urlForImage } from "@/sanity/client";

const ArticlesSection = ({ initialArticles = [] }) => {
  const [articles, setArticles] = useState(initialArticles);
  const [loading, setLoading] = useState(!initialArticles.length);
  const [error, setError] = useState(null);

  // Client-side fetch untuk articles
  useEffect(() => {
    async function fetchArticles() {
      // Jika sudah ada initial articles, skip fetch
      if (initialArticles.length > 0) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const fetchedArticles = await getFeaturedArticles();
        setArticles(fetchedArticles);
        setError(null);
      } catch (err) {
        console.error("Error fetching articles:", err);
        setError("Failed to load articles");
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, [initialArticles]);

  const handleViewAllClick = () => {
    window.location.href = "/articles";
  };

  const handleReadMoreClick = (slug) => {
    window.location.href = `/articles/${slug}`;
  };

  const handleSubscribeClick = () => {
    window.location.href = "/newsletter";
  };

  // Get article image
  const getArticleImage = (article) => {
    return article.featuredImage?.asset?.url || article.featuredImage?.asset?._ref;
  };

  const getArticleImageAlt = (article) => {
    return article.featuredImage?.alt || article.title;
  };

  // Loading skeleton
  const LoadingSkeleton = () =>
    Array.from({ length: 3 }).map((_, index) => (
      <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} viewport={{ once: true }} className="group cursor-pointer">
        <div className="transition-all duration-300">
          <div className="aspect-[4/3] bg-gray-600 relative overflow-hidden rounded-lg mb-4 animate-pulse">
            <div className="absolute inset-0 flex items-center justify-center bg-gray-600">
              <FileText className="w-16 h-16 text-gray-400" />
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="h-3 bg-gray-300 rounded animate-pulse w-20"></div>
              <div className="h-3 bg-gray-300 rounded animate-pulse w-16"></div>
            </div>
            <div className="h-6 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
          </div>
        </div>
      </motion.div>
    ));

  return (
    <section className="bg-secondary py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            {/* Articles Label */}
            <div className="text-xs font-semibold text-secondary tracking-wider uppercase mb-6">ARTICLES & INSIGHTS</div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Left: Main Heading */}
              <div>
                <h2 className="heading-xl text-primary leading-tight">STAY INFORMED WITH OUR LATEST ARTICLES</h2>
              </div>

              {/* Right: Description */}
              <div className="lg:pt-4">
                <p className="body-lg text-secondary leading-relaxed">
                  Explore our collection of expert articles covering everything from BBQ techniques to sustainability practices. Get insider tips, industry insights, and learn how to make the most of our premium charcoal products.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 lg:mb-12">
          {error ? (
            // Error state
            <div className="col-span-full text-center py-12">
              <p className="text-red-500 mb-4">{error}</p>
              <button onClick={() => window.location.reload()} className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors">
                Try Again
              </button>
            </div>
          ) : loading ? (
            // Loading state
            <LoadingSkeleton />
          ) : articles.length > 0 ? (
            // Articles list
            articles.map((article, index) => {
              const imageSource = getArticleImage(article);
              const imageAlt = getArticleImageAlt(article);

              return (
                <motion.div key={article._id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} viewport={{ once: true }} className="group cursor-pointer">
                  <Link href={`/articles/${article.slug.current}`}>
                    <div className="transition-all duration-300">
                      {/* Article Image */}
                      <div className="aspect-[4/3] bg-gray-600 relative overflow-hidden rounded-lg mb-4">
                        {imageSource ? (
                          <Image
                            src={urlForImage(imageSource).width(400).height(300).url()}
                            alt={imageAlt}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-gray-600">
                            <FileText className="w-16 h-16 text-gray-400" />
                          </div>
                        )}

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">{getCategoryDisplayName(article.category)}</div>

                        {/* Featured Badge */}
                        {article.featured && <div className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">Featured</div>}
                      </div>

                      {/* Article Info */}
                      <div className="space-y-3">
                        {/* Meta Info */}
                        <div className="flex items-center gap-4 text-xs text-secondary">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{formatPublishDate(article.publishedAt)}</span>
                          </div>
                          {article.readTime && (
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{article.readTime} min read</span>
                            </div>
                          )}
                        </div>

                        <h3 className="heading-sm text-primary leading-tight group-hover:text-primary-light transition-colors duration-300">{article.title}</h3>

                        <p className="body-sm text-secondary leading-relaxed">{article.excerpt}</p>

                        {/* Author */}
                        {article.author && <div className="text-xs text-secondary/70">by {article.author.name}</div>}

                        {/* Tags */}
                        {article.tags && article.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {article.tags.slice(0, 3).map((tag, tagIndex) => (
                              <span key={tagIndex} className="inline-block text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                {tag.name}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Read More Link */}
                        <div className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors duration-300 group-hover:translate-x-1 transform">
                          <span className="text-sm font-medium">Read More</span>
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })
          ) : (
            // Empty state
            <div className="col-span-full text-center py-12">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-secondary">No articles available</p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }} className="flex flex-col sm:flex-row gap-4 items-start">
          {/* View All Button */}
          <button onClick={handleViewAllClick} className="inline-flex items-center justify-center px-6 py-3 border border-gray-500 rounded-full text-primary hover:border-gray-400 hover:bg-surface transition-all duration-300 group">
            <span className="body-sm font-medium">View All Articles</span>
          </button>

          {/* Subscribe Button */}
          <button onClick={handleSubscribeClick} className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-300 group py-3">
            <span className="body-sm font-medium">Subscribe to Newsletter</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticlesSection;
