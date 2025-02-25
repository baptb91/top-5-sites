
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BlogPost } from "@/types/blog";

interface BlogListProps {
  posts: BlogPost[];
}

const BlogList = ({ posts }: BlogListProps) => {
  return (
    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <motion.article
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group flex flex-col h-full rounded-2xl bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <Link to={`/blog/${post.slug}`} className="flex flex-col h-full">
            <div className="relative">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="flex-grow p-8">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <time dateTime={post.date} className="font-medium">
                  {post.date}
                </time>
                <span className="font-medium">{post.readTime}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-romance-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  );
};

export default BlogList;
