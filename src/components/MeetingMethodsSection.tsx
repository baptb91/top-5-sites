
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const MeetingMethodsSection = () => {
  const methods = [
    {
      title: "Sites Coquins",
      description:
        "Les plateformes en ligne offrent un moyen discret et efficace de faire des rencontres pour adultes.",
    },
    {
      title: "Soirées Privées",
      description:
        "Participez à des soirées privées et des événements exclusifs pour faire des rencontres sans engagement.",
    },
    {
      title: "Applications Spécialisées",
      description:
        "Utilisez des applications dédiées aux rencontres coquines pour trouver des partenaires partageant vos envies.",
    },
  ];

  return (
    <section className="py-16">
      <div className="mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-3xl font-bold text-gray-900"
        >
          Comment Faire des Rencontres
        </motion.h2>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {methods.map((method, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-romance-100">
              <Heart className="h-6 w-6 text-romance-500" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              {method.title}
            </h3>
            <p className="text-gray-600">{method.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MeetingMethodsSection;
