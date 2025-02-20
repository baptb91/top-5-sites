
import { motion } from "framer-motion";
import Header from "@/components/Header";
import SiteList from "@/components/SiteList";
import MeetingMethodsSection from "@/components/MeetingMethodsSection";
import SeoContent from "@/components/SeoContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top 5 des Meilleurs Sites de Rencontres Coquines 2024",
  description: "Découvrez notre classement des meilleurs sites de rencontres pour adultes. Guide complet, avis et conseils pour des rencontres discrètes et passionnées.",
  keywords: "rencontres coquines, sites de rencontre, rencontres adultes, rencontres discrètes",
  openGraph: {
    title: "Top 5 des Meilleurs Sites de Rencontres Coquines 2024",
    description: "Guide complet des meilleurs sites de rencontres pour adultes",
    type: "website",
  }
};

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-white to-romance-50"
    >
      <div className="container mx-auto px-4">
        <Header />
        
        <section className="mb-16">
          <div className="mb-12 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-3xl font-bold text-gray-900"
            >
              Sites de Rencontres Coquines
            </motion.h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Découvrez notre sélection des meilleurs sites de rencontres pour adultes,
              soigneusement évalués pour des rencontres passionnées.
            </p>
          </div>
          <SiteList />
        </section>

        <MeetingMethodsSection />
        <SeoContent />
      </div>
    </motion.div>
  );
};

export default Index;
