
// This file exports all blog posts for easier imports across the application
import { BlogPost } from "@/types/blog";
import { datingProfilePost } from "./blog-posts/datingProfilePost";
import { avoidErrorsPost } from "./blog-posts/avoidErrorsPost";
import { seductionSecretsPost } from "./blog-posts/seductionSecretsPost";
import { flirtingTechniquesPost } from "./blog-posts/flirtingTechniquesPost";
import { attractMoreMessagesPost } from "./blog-posts/attractMoreMessagesPost";
import { openingLinesPost } from "./blog-posts/openingLinesPost";
import { firstMessagePost } from "./blog-posts/firstMessagePost";
import { instantConnectionPost } from "./blog-posts/instantConnectionPost";

// Logging pour le débogage
console.log("Loaded blog posts with slugs:", [
  instantConnectionPost.slug,
  datingProfilePost.slug,
  avoidErrorsPost.slug,
  seductionSecretsPost.slug,
  flirtingTechniquesPost.slug,
  attractMoreMessagesPost.slug,
  openingLinesPost.slug,
  firstMessagePost.slug
]);

// Vérifions spécifiquement le slug de flirtingTechniquesPost
console.log("flirtingTechniquesPost slug:", flirtingTechniquesPost.slug);
console.log("Full flirtingTechniquesPost:", flirtingTechniquesPost);

export const blogPosts: BlogPost[] = [
  instantConnectionPost, // Ajout du nouvel article en tête de liste
  datingProfilePost,
  avoidErrorsPost, 
  seductionSecretsPost,
  flirtingTechniquesPost,
  attractMoreMessagesPost,
  openingLinesPost,
  firstMessagePost
];
