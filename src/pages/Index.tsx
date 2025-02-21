
import { motion } from "framer-motion";
import Header from "@/components/Header";
import SiteList from "@/components/SiteList";
import MeetingMethodsSection from "@/components/MeetingMethodsSection";
import SeoContent from "@/components/SeoContent";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-white to-romance-50"
    >
      <div className="container mx-auto px-4 py-8">
        <Header />
        
        <section className="mb-20">
          <div className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-block rounded-full bg-romance-100 px-6 py-2 mb-6"
            >
              <span className="text-romance-600 font-semibold">Top 5</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl"
            >
              Top 5 des Meilleurs Sites de Rencontres Coquines
            </motion.h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Notre sélection exclusive des plateformes les plus performantes pour des rencontres 
              passionnées et discrètes. Découvrez les sites les mieux notés et testés par nos experts.
            </p>
          </div>
          <SiteList />
        </section>

        <div className="max-w-7xl mx-auto">
          <MeetingMethodsSection />
          <SeoContent />
        </div>
      </div>
    </motion.div>
  );
};

export default Index;
