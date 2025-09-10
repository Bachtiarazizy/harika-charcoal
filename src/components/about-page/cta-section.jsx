"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Button from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="relative min-h-[60vh] lg:min-h-[70vh] overflow-hidden">
      {/* Background Image - Full Width */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-image.png" // Ganti dengan nama file gambar Anda dari public folder
          alt="Partner with Harika Charcoal Background"
          fill
          className="object-cover"
          priority={false}
          quality={90}
        />

        {/* Dark overlay untuk readability */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-8">
            <h2 className="heading-xl text-white leading-tight">PARTNER WITH HARIKA CHARCOAL</h2>
            <p className="body-lg text-white/90 leading-relaxed max-w-2xl mx-auto">Join our network of global distributors and experience premium Indonesian charcoal solutions backed by sustainable practices and uncompromising quality.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="primary" size="large">
                Partnership
              </Button>
              <button className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 group py-3">
                <span className="body-sm font-medium">Inquire</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
