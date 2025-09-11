import { client } from "@/sanity/client";

const CATEGORIES_QUERY = `*[
  _type == "category" 
  && defined(slug.current)
]|order(name asc){
  _id,
  name,
  slug,
  description
}`;

const options = { next: { revalidate: 60 } };

export async function getCategories() {
  try {
    const categories = await client.fetch(CATEGORIES_QUERY, {}, options);
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}
