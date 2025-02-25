
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BlogPost } from "@/types/blog";

interface BlogListProps {
  posts: BlogPost[];
}

const BlogList = ({ posts }: BlogListProps) => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <motion.article
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="group relative rounded-xl bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <Link to={`/blog/${post.slug}`}>
            <img
              src={post.imageUrl}
              alt={post.title}
              className="h-48 w-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="p-6">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                <time dateTime={post.date}>{post.date}</time>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-romance-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600">{post.excerpt}</p>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  );
};

export default BlogList;
