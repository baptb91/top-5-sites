
// This file exports all blog posts for easier imports across the application
import { BlogPost } from "../types/blog";
import { datingProfilePost } from "./blog-posts/datingProfilePost";
import { avoidErrorsPost } from "./blog-posts/avoidErrorsPost";
import { seductionSecretsPost } from "./blog-posts/seductionSecretsPost";
import { flirtingTechniquesPost } from "./blog-posts/flirtingTechniquesPost";
import { attractMoreMessagesPost } from "./blog-posts/attractMoreMessagesPost";
import { openingLinesPost } from "./blog-posts/openingLinesPost";
import { firstMessagePost } from "./blog-posts/firstMessagePost";
import { instantConnectionPost } from "./blog-posts/instantConnectionPost";
import { interestedSignsPost } from "./blog-posts/interestedSignsPost";
import { aiDatingPost } from "./blog-posts/aiDatingPost";
import { comparativeSitesPost } from "./blog-posts/comparativeSitesPost";


export const blogPosts: BlogPost[] = [
  comparativeSitesPost,
  aiDatingPost,
  interestedSignsPost,
  instantConnectionPost,
  datingProfilePost,
  avoidErrorsPost, 
  seductionSecretsPost,
  flirtingTechniquesPost,
  attractMoreMessagesPost,
  openingLinesPost,
  firstMessagePost
];
