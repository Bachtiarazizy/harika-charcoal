"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Facebook, Twitter, Linkedin, Copy, CheckCircle, Info, AlertTriangle, Lightbulb, Quote, ExternalLink, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/client";
import { formatPublishDate, getCategoryDisplayName, getCategoryColor, formatRelativeDate } from "@/sanity/queries/articles";
import Button from "../ui/button";

const ArticleDetailPage = ({ article, relatedArticles = [] }) => {
  const [copied, setCopied] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);

  // Handle share functionality
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = article.title;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
  };

  // Portable Text components for rich content
  const portableTextComponents = {
    types: {
      image: ({ value }) => (
        <div className="my-8 lg:my-12">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100">
            <Image src={urlForImage(value).width(800).height(450).url()} alt={value.alt || ""} fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
          </div>
          {value.caption && <p className="text-sm text-secondary mt-3 text-center italic">{value.caption}</p>}
        </div>
      ),

      callout: ({ value }) => {
        const { type, title, content } = value;
        const calloutConfig = {
          info: {
            icon: Info,
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200",
            iconColor: "text-blue-600",
            titleColor: "text-blue-900",
          },
          warning: {
            icon: AlertTriangle,
            bgColor: "bg-amber-50",
            borderColor: "border-amber-200",
            iconColor: "text-amber-600",
            titleColor: "text-amber-900",
          },
          success: {
            icon: CheckCircle,
            bgColor: "bg-green-50",
            borderColor: "border-green-200",
            iconColor: "text-green-600",
            titleColor: "text-green-900",
          },
          tip: {
            icon: Lightbulb,
            bgColor: "bg-purple-50",
            borderColor: "border-purple-200",
            iconColor: "text-purple-600",
            titleColor: "text-purple-900",
          },
        };

        const config = calloutConfig[type] || calloutConfig.info;
        const IconComponent = config.icon;

        return (
          <div className={`my-6 p-6 rounded-2xl border ${config.bgColor} ${config.borderColor}`}>
            <div className="flex items-start gap-4">
              <IconComponent className={`w-6 h-6 ${config.iconColor} flex-shrink-0 mt-1`} />
              <div className="flex-1">
                {title && <h4 className={`font-semibold mb-2 ${config.titleColor}`}>{title}</h4>}
                <div className="text-gray-700 leading-relaxed">{content}</div>
              </div>
            </div>
          </div>
        );
      },

      quote: ({ value }) => (
        <blockquote className="my-8 lg:my-12">
          <div className="relative">
            <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
            <div className="pl-8 border-l-4 border-primary">
              <p className="text-xl lg:text-2xl font-medium text-gray-900 leading-relaxed mb-4">"{value.text}"</p>
              {(value.author || value.position) && (
                <div className="text-secondary">
                  {value.author && <cite className="font-semibold not-italic">— {value.author}</cite>}
                  {value.position && <span className="block text-sm mt-1">{value.position}</span>}
                </div>
              )}
            </div>
          </div>
        </blockquote>
      ),

      productHighlight: ({ value }) => {
        const product = value.product;
        if (!product) return null;

        const mainImage = product.images?.find((img) => img.isMain) || product.images?.[0];

        return (
          <div className="my-8 lg:my-12">
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/20">
              <h4 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Featured Product
              </h4>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {mainImage && (
                  <div className="w-full md:w-48 h-36 relative rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                    <Image src={urlForImage(mainImage.image).width(200).height(150).url()} alt={mainImage.alt || product.title} fill className="object-cover" sizes="200px" />
                  </div>
                )}
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-900 mb-2">{product.title}</h5>
                  <p className="text-secondary mb-4 leading-relaxed">{value.description || product.shortDescription}</p>
                  <Link href={`/products/${product.slug.current}`} className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
                    View Product Details
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      },
    },

    marks: {
      link: ({ children, value }) => {
        const rel = value.rel || (value.blank ? "noopener noreferrer" : "");
        return (
          <a href={value.href} target={value.blank ? "_blank" : "_self"} rel={rel} className="text-primary hover:text-primary/80 underline decoration-primary/30 hover:decoration-primary/60 transition-colors inline-flex items-center gap-1">
            {children}
            {value.blank && <ExternalLink className="w-3 h-3" />}
          </a>
        );
      },
    },

    block: {
      normal: ({ children }) => <p className="text-gray-700 leading-relaxed mb-6 text-lg">{children}</p>,
      h2: ({ children }) => <h2 className="heading-lg text-primary mt-12 mb-6 first:mt-0">{children}</h2>,
      h3: ({ children }) => <h3 className="heading-md text-primary mt-10 mb-4">{children}</h3>,
      h4: ({ children }) => <h4 className="heading-sm text-primary mt-8 mb-3">{children}</h4>,
      blockquote: ({ children }) => <blockquote className="border-l-4 border-primary pl-6 my-6 italic text-gray-600">{children}</blockquote>,
    },

    list: {
      bullet: ({ children }) => <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-gray-700">{children}</ul>,
      number: ({ children }) => <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-gray-700">{children}</ol>,
    },

    listItem: {
      bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
      number: ({ children }) => <li className="leading-relaxed">{children}</li>,
    },
  };

  return (
    <div className="bg-secondary min-h-screen">
      {/* Back Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/articles" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back to Articles</span>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {/* Category & Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {article.category && <span className={`px-3 py-1.5 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>{getCategoryDisplayName(article.category)}</span>}
            {article.featured && <span className="px-3 py-1.5 bg-primary text-white rounded-full text-sm font-medium">Featured</span>}
          </div>

          {/* Article Title */}
          <h1 className="heading-xl text-primary mb-6 leading-tight">{article.title}</h1>

          {/* Article Excerpt */}
          {article.excerpt && <p className="body-lg text-secondary mb-8 leading-relaxed">{article.excerpt}</p>}

          {/* Author & Meta Info */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-4">
              {/* Author Info */}
              {article.author && (
                <div className="flex items-center gap-3">
                  {article.author.image && (
                    <div className="w-12 h-12 relative rounded-full overflow-hidden bg-gray-200">
                      <Image src={urlForImage(article.author.image).width(48).height(48).url()} alt={article.author.image.alt || article.author.name} fill className="object-cover" sizes="48px" />
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-gray-900">{article.author.name}</p>
                    {article.author.bio && <p className="text-sm text-secondary">{article.author.bio.substring(0, 80)}...</p>}
                  </div>
                </div>
              )}
            </div>

            {/* Article Meta */}
            <div className="flex items-center gap-4 text-sm text-secondary">
              {article.publishedAt && (
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {formatPublishDate(article.publishedAt)}
                </div>
              )}
              {article.readTime && (
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {article.readTime} min read
                </div>
              )}
            </div>
          </div>

          {/* Share Button */}
          <div className="flex justify-end mb-8">
            <div className="relative">
              <button onClick={() => setShareOpen(!shareOpen)} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                <Share2 className="w-4 h-4" />
                <span className="font-medium">Share</span>
              </button>

              {shareOpen && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-lg border border-gray-200 p-4 min-w-48 z-10">
                  <div className="flex flex-col gap-3">
                    <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                      <Facebook className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">Facebook</span>
                    </a>
                    <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                      <Twitter className="w-5 h-5 text-blue-400" />
                      <span className="font-medium">Twitter</span>
                    </a>
                    <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                      <Linkedin className="w-5 h-5 text-blue-700" />
                      <span className="font-medium">LinkedIn</span>
                    </a>
                    <button onClick={handleCopyLink} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                      {copied ? <CheckCircle className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5 text-gray-600" />}
                      <span className="font-medium">{copied ? "Copied!" : "Copy Link"}</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        {article.featuredImage && (
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-12">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100">
              <Image src={urlForImage(article.featuredImage).width(800).height(450).url()} alt={article.featuredImage.alt || article.title} fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 800px" />
            </div>
          </motion.div>
        )}

        {/* Article Content */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="prose prose-lg max-w-none">
          {article.content && <PortableText value={article.content} components={portableTextComponents} />}
        </motion.div>

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-3 flex-wrap">
              <Tag className="w-5 h-5 text-secondary" />
              <span className="font-medium text-secondary">Tags:</span>
              {article.tags.map((tag) => (
                <Link key={tag._id} href={`/articles?tag=${tag.slug.current}`} className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm transition-colors">
                  {tag.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}

        {/* Updated Info */}
        {article.updatedAt && article.updatedAt !== article.publishedAt && (
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} className="mt-8 p-4 bg-gray-50 rounded-xl">
            <p className="text-sm text-secondary">
              <span className="font-medium">Last updated:</span> {formatPublishDate(article.updatedAt)}
            </p>
          </motion.div>
        )}
      </article>

      {/* Related Products */}
      {article.relatedProducts && article.relatedProducts.length > 0 && (
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
              <h2 className="heading-lg text-primary mb-8">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {article.relatedProducts.slice(0, 3).map((product) => {
                  const mainImage = product.images?.find((img) => img.isMain) || product.images?.[0];

                  return (
                    <Link key={product._id} href={`/products/${product.slug.current}`}>
                      <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
                        <div className="aspect-[4/3] relative bg-gray-100">
                          {mainImage && (
                            <Image
                              src={urlForImage(mainImage.image).width(400).height(300).url()}
                              alt={mainImage.alt || product.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          )}
                          {product.featured && <div className="absolute top-3 left-3 bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">Featured</div>}
                        </div>
                        <div className="p-6">
                          <h3 className="heading-sm text-primary mb-2 group-hover:text-primary/80 transition-colors">{product.title}</h3>
                          <p className="text-secondary text-sm leading-relaxed">{product.shortDescription}</p>
                          {product.category && <span className="inline-block mt-3 text-xs font-medium text-secondary/70 uppercase tracking-wider">{product.category.name}</span>}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.0 }}>
              <h2 className="heading-lg text-primary mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.slice(0, 3).map((relatedArticle) => (
                  <Link key={relatedArticle._id} href={`/articles/${relatedArticle.slug.current}`}>
                    <div className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="aspect-[4/3] relative bg-gray-100">
                        {relatedArticle.featuredImage && (
                          <Image
                            src={urlForImage(relatedArticle.featuredImage).width(400).height(300).url()}
                            alt={relatedArticle.featuredImage.alt || relatedArticle.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        )}
                        {relatedArticle.featured && <div className="absolute top-3 left-3 bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">Featured</div>}
                      </div>
                      <div className="p-6">
                        <h3 className="heading-sm text-primary mb-2 group-hover:text-primary/80 transition-colors">{relatedArticle.title}</h3>
                        <p className="text-secondary text-sm leading-relaxed mb-4">{relatedArticle.excerpt}</p>
                        <div className="flex items-center gap-3 text-xs text-secondary/70">
                          {relatedArticle.category && <span className={`px-2 py-1 rounded-full ${getCategoryColor(relatedArticle.category)}`}>{getCategoryDisplayName(relatedArticle.category)}</span>}
                          {relatedArticle.readTime && (
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {relatedArticle.readTime} min
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.2 }}>
            <h2 className="heading-lg text-white mb-6">Stay Updated</h2>
            <p className="body-lg text-white/80 mb-8 leading-relaxed">Subscribe to our newsletter for the latest industry insights and product updates.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="large">
                Subscribe to Newsletter
              </Button>
              <Button variant="secondaryOutline" size="large">
                <Link href="/articles" className="flex items-center gap-2">
                  Read More Articles
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetailPage;
