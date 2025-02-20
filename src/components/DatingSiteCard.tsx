
import { Heart, Link, User, Users } from "lucide-react";
import { motion } from "framer-motion";

interface DatingSiteCardProps {
  name: string;
  description: string;
  rating: number;
  affiliateLink: string;
  users: string;
  mainFeature: string;
}

const DatingSiteCard = ({
  name,
  description,
  rating,
  affiliateLink,
  users,
  mainFeature,
}: DatingSiteCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
    >
      <div className="absolute right-4 top-4">
        <div className="flex items-center space-x-1">
          <Heart className="h-5 w-5 text-romance-500" />
          <span className="text-sm font-medium text-romance-500">{rating}/5</span>
        </div>
      </div>

      <h3 className="mb-2 text-xl font-semibold text-gray-900">{name}</h3>
      <p className="mb-4 text-sm text-gray-600">{description}</p>

      <div className="mb-4 space-y-2">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Users className="h-4 w-4" />
          <span>{users}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <User className="h-4 w-4" />
          <span>{mainFeature}</span>
        </div>
      </div>

      <a
        href={affiliateLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-2 rounded-full bg-romance-500 px-6 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-romance-600"
      >
        <Link className="h-4 w-4" />
        <span>Visiter le site</span>
      </a>
    </motion.div>
  );
};

export default DatingSiteCard;
