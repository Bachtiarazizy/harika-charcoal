import { client } from "@/sanity/client";

const PRODUCTS_QUERY = `*[
  _type == "product" 
  && status == "published"
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
  && status == "published"
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
