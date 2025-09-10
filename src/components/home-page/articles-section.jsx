"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FileText, ChevronRight, Calendar, Clock } from "lucide-react";

const ArticlesSection = () => {
  const handleViewAllClick = () => {
    console.log("View All clicked");
  };

  const handleReadMoreClick = (articleId) => {
    console.log("Read More clicked for article:", articleId);
  };

  const articles = [
    {
      id: 1,
      title: "The Ultimate Guide to BBQ Charcoal Selection",
      description: "Learn how to choose the perfect charcoal for your grilling needs and achieve restaurant-quality results at home.",
      image: "/article-bbq-guide.jpg",
      category: "BBQ Tips",
      readTime: "5 min read",
      publishDate: "March 15, 2024",
    },
    {
      id: 2,
      title: "Sustainable Charcoal Production in Indonesia",
      description: "Discover how our eco-friendly manufacturing process contributes to environmental conservation while delivering premium quality.",
      image: "/article-sustainability.jpg",
      category: "Sustainability",
      readTime: "7 min read",
      publishDate: "March 10, 2024",
    },
    {
      id: 3,
      title: "Shisha Charcoal: What Makes the Perfect Session",
      description: "Everything you need to know about choosing and using charcoal for an exceptional shisha smoking experience.",
      image: "/article-shisha.jpg",
      category: "Shisha Guide",
      readTime: "4 min read",
      publishDate: "March 5, 2024",
    },
  ];

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
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => handleReadMoreClick(article.id)}
            >
              {/* Card tanpa background wrapper */}
              <div className="transition-all duration-300">
                {/* Article Image dengan rounded */}
                <div className="aspect-[4/3] bg-gray-600 relative overflow-hidden rounded-lg mb-4">
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-600">
                    <FileText className="w-16 h-16 text-gray-400" />
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">{article.category}</div>
                  {/* You can replace this with actual images */}
                  {/* 
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  */}
                </div>

                {/* Article Info tanpa background */}
                <div className="space-y-3">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-secondary">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{article.publishDate}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="heading-sm text-primary leading-tight group-hover:text-primary-light transition-colors duration-300">{article.title}</h3>
                  <p className="body-sm text-secondary leading-relaxed">{article.description}</p>

                  {/* Read More Link */}
                  <div className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors duration-300 group-hover:translate-x-1 transform ">
                    <span className="text-sm font-medium">Read More</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }} className="flex flex-col sm:flex-row gap-4 items-start">
          {/* View All Button */}
          <button onClick={handleViewAllClick} className="inline-flex items-center justify-center px-6 py-3 border border-gray-500 rounded-full text-primary hover:border-gray-400 hover:bg-surface transition-all duration-300 group">
            <span className="body-sm font-medium">View All Articles</span>
          </button>

          {/* Subscribe Button */}
          <button className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-300 group py-3">
            <span className="body-sm font-medium">Subscribe to Newsletter</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1  duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticlesSection;
