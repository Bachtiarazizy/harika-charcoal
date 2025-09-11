import { client } from "@/sanity/client";

const PRODUCTS_QUERY = `*[
  _type == "product" 
  && defined(slug.current)
]|order(featured desc, publishedAt desc)[0...6]{
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
  featured,
  status
}`;

const FEATURED_PRODUCTS_QUERY = `*[
  _type == "product" 
  && featured == true
  && defined(slug.current)
]|order(publishedAt desc)[0...3]{
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
  featured,
  status
}`;

const PRODUCT_BY_SLUG_QUERY = `*[
  _type == "product" 
  && slug.current == $slug
][0]{
  _id,
  title,
  slug,
  shortDescription,
  longDescription,
  category->{
    name,
    slug
  },
  "images": images[]{
    "image": {
      "asset": image.asset->{
        _ref,
        "url": url
      }
    },
    alt,
    title,
    isMain
  },
  grades[]{
    name,
    price,
    minOrder,
    specifications,
    availability
  },
  applications[]{
    name,
    description,
    icon,
    "image": image{
      "asset": asset->{
        _ref,
        "url": url
      },
      alt
    },
    benefits,
    order
  },
  packaging[]{
    type,
    size,
    material,
    containerLoad,
    description,
    "image": image{
      "asset": asset->{
        _ref,
        "url": url
      },
      alt
    },
    customAvailable
  },
  certifications[]{
    name,
    fullName,
    description,
    issuingBody,
    certificateNumber,
    validFrom,
    validTo,
    "certificateDocument": certificateDocument.asset->url,
    "logo": logo{
      "asset": asset->{
        _ref,
        "url": url
      },
      alt
    },
    priority
  },
  features[]{
    feature,
    description
  },
  featured,
  publishedAt,
  // SEO fields
  seoTitle,
  seoDescription,
  focusKeyword,
  keywords,
  "seoImage": seoImage{
    "asset": asset->{
      _ref,
      "url": url
    },
    alt
  },
  noIndex,
  canonicalUrl,
  structuredData
}`;

const options = { next: { revalidate: 30 } };

export async function getProducts() {
  try {
    const products = await client.fetch(PRODUCTS_QUERY, {}, options);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function getFeaturedProducts() {
  try {
    const products = await client.fetch(FEATURED_PRODUCTS_QUERY, {}, options);
    return products;
  } catch (error) {
    console.error("Error fetching featured products:", error);
    return [];
  }
}

export async function getProductBySlug(slug) {
  try {
    const product = await client.fetch(PRODUCT_BY_SLUG_QUERY, { slug }, options);
    return product;
  } catch (error) {
    console.error("Error fetching product by slug:", error);
    return null;
  }
}
