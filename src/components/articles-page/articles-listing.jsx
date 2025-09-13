"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, ChevronRight, Filter, Grid, List, Search, Download, ArrowRight, Clock, Calendar, User } from "lucide-react";
import { useEffect, useState } from "react";
import { getArticles, formatPublishDate, getCategoryDisplayName } from "@/sanity/queries/articles";
import { urlForImage } from "@/sanity/client";
import Button from "../ui/button";

const ArticlesPage = ({ initialArticles = [], categories = [] }) => {
  const [articles, setArticles] = useState(initialArticles);
  const [loading, setLoading] = useState(!initialArticles.length);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);

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
        const fetchedArticles = await getArticles();
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

  // Get featured image for each article
  const getFeaturedImage = (article) => {
    return article.featuredImage?.asset?.url || article.featuredImage?.asset?._ref;
  };

  const getImageAlt = (article) => {
    return article.featuredImage?.alt || article.title;
  };

  // Filter articles based on search and category
  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || article.excerpt?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Loading skeleton
  const LoadingSkeleton = ({ count = 6 }) =>
    Array.from({ length: count }).map((_, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        viewport={{ once: true }}
        className={`group cursor-pointer ${viewMode === "list" ? "flex gap-4" : ""}`}
      >
        <div className="transition-all duration-300">
          <div className={`bg-gray-600 relative overflow-hidden rounded-2xl mb-4 animate-pulse ${viewMode === "list" ? "w-48 h-36" : "aspect-[4/3]"}`}>
            <div className="absolute inset-0 flex items-center justify-center bg-gray-600">
              <BookOpen className="w-16 h-16 text-gray-400" />
            </div>
          </div>
          {viewMode === "list" && (
            <div className="flex-1 space-y-3">
              <div className="h-6 bg-gray-300 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2"></div>
              <div className="flex gap-4">
                <div className="h-3 bg-gray-200 rounded animate-pulse w-16"></div>
                <div className="h-3 bg-gray-200 rounded animate-pulse w-20"></div>
              </div>
            </div>
          )}
        </div>
        {viewMode === "grid" && (
          <div className="space-y-3">
            <div className="h-6 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2"></div>
            <div className="flex gap-4">
              <div className="h-3 bg-gray-200 rounded animate-pulse w-16"></div>
              <div className="h-3 bg-gray-200 rounded animate-pulse w-20"></div>
            </div>
          </div>
        )}
      </motion.div>
    ));

  // Article Card Component
  const ArticleCard = ({ article, index }) => {
    const imageSource = getFeaturedImage(article);
    const imageAlt = getImageAlt(article);

    return (
      <motion.div
        key={article._id}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        viewport={{ once: true }}
        className={`group cursor-pointer ${viewMode === "list" ? "flex gap-6 items-start" : ""}`}
      >
        <Link href={`/articles/${article.slug.current}`}>
          <div className="transition-all duration-300">
            {/* Article Image */}
            <div className={`bg-gray-600 relative overflow-hidden rounded-2xl mb-4 ${viewMode === "list" ? "w-48 h-36 flex-shrink-0" : "aspect-[4/3]"}`}>
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
                  <BookOpen className="w-16 h-16 text-gray-400" />
                </div>
              )}

              {/* Featured Badge */}
              {article.featured && <div className="absolute top-3 left-3 bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">Featured</div>}

              {/* Read Time Overlay */}
              {article.readTime && (
                <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTime} min
                </div>
              )}
            </div>

            {/* Article Info */}
            <div className={`space-y-3 ${viewMode === "list" ? "flex-1" : ""}`}>
              <div className="flex items-start justify-between">
                <h3 className="heading-sm text-primary leading-tight flex-1">{article.title}</h3>
              </div>
              <p className="body-sm text-secondary leading-relaxed line-clamp-2">{article.excerpt}</p>

              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-secondary/70">
                {article.category && <span className="inline-block font-medium uppercase tracking-wider">{getCategoryDisplayName(article.category)}</span>}
                {article.publishedAt && (
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {formatPublishDate(article.publishedAt)}
                  </div>
                )}
                {article.author && (
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {article.author.name}
                  </div>
                )}
              </div>

              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {article.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span key={tag._id || tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                      {tag.name}
                    </span>
                  ))}
                  {article.tags.length > 3 && <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">+{article.tags.length - 3} more</span>}
                </div>
              )}

              {viewMode === "list" && (
                <div className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mt-4">
                  <span className="body-sm font-medium">Read Article</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              )}
            </div>
          </div>
        </Link>
      </motion.div>
    );
  };

  return (
    <div className="bg-secondary min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-image.png" alt="Industry Insights & Articles" fill className="object-cover" priority quality={90} />
          <div className="absolute inset-0 bg-primary/80 z-10"></div>
        </div>

        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="text-xs font-semibold text-[#16a34a] tracking-wider uppercase mb-4">INDUSTRY INSIGHTS & KNOWLEDGE</div>
              <h1 className="heading-xl text-primary leading-tight mb-6">
                STAY INFORMED WITH
                <br />
                <span className="text-[#16a34a]">EXPERT ARTICLES</span>
              </h1>
              <p className="body-lg text-secondary mb-8 leading-relaxed max-w-2xl">
                Discover the latest industry trends, quality standards, sustainability practices, and expert insights from the charcoal industry. Stay ahead with our comprehensive knowledge base.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="large">
                  <Download className="w-5 h-5 mr-2" />
                  Download Industry Report
                </Button>
                <Button variant="primaryOutline" size="large">
                  Subscribe to Newsletter
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters and Controls */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-8 lg:mb-12">
            {/* Search and View Toggle */}
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start lg:items-center justify-between mb-6">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div className="flex items-center gap-4">
                {/* View Mode Toggle */}
                <div className="flex items-center gap-2 p-1 bg-white rounded-full border border-gray-200">
                  <button onClick={() => setViewMode("grid")} className={`p-2 rounded-full transition-colors ${viewMode === "grid" ? "bg-primary text-white" : "text-gray-500 hover:text-gray-700"}`}>
                    <Grid className="w-4 h-4" />
                  </button>
                  <button onClick={() => setViewMode("list")} className={`p-2 rounded-full transition-colors ${viewMode === "list" ? "bg-primary text-white" : "text-gray-500 hover:text-gray-700"}`}>
                    <List className="w-4 h-4" />
                  </button>
                </div>

                {/* Filter Toggle */}
                <button onClick={() => setShowFilters(!showFilters)} className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:border-gray-400 transition-colors">
                  <Filter className="w-4 h-4" />
                  <span className="body-sm font-medium">Filter</span>
                </button>
              </div>
            </div>

            {/* Category Filters */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap gap-2 p-4 bg-white rounded-lg border border-gray-200"
              >
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === "all" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                >
                  All Categories
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                  >
                    {getCategoryDisplayName(category)}
                  </button>
                ))}
              </motion.div>
            )}

            {/* Results Count */}
            <div className="text-sm text-secondary">{loading ? "Loading..." : `${filteredArticles.length} articles found`}</div>
          </motion.div>

          {/* Articles Grid/List */}
          <div className={`gap-6 mb-8 lg:mb-12 ${viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "flex flex-col space-y-6"}`}>
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
              <LoadingSkeleton count={viewMode === "grid" ? 6 : 4} />
            ) : filteredArticles.length > 0 ? (
              // Articles list
              filteredArticles.map((article, index) => <ArticleCard key={article._id} article={article} index={index} />)
            ) : (
              // Empty state
              <div className="col-span-full text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-secondary mb-2">No articles found</p>
                {(searchTerm || selectedCategory !== "all") && (
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("all");
                    }}
                    className="text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlesPage;
