import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

// Fallback values
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "ocsjyuu6";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Keep false during development
  perspective: "published",
  stega: false,
});

const builder = imageUrlBuilder(client);

export function urlForImage(source) {
  if (!source) return null;

  try {
    return builder.image(source);
  } catch (error) {
    console.error("Error building image URL:", error);
    return null;
  }
}

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Don't use CDN for writes
});
