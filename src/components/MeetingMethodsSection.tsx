
import React from "react";
import { motion } from "framer-motion";
import { Heart, Shield, MessageCircle, CalendarCheck, MapPin, Lock } from "lucide-react";

const MeetingMethodsSection = () => {
  const methods = [
    {
      title: "Messagerie Sécurisée",
      description:
        "Échangez en toute confiance grâce aux systèmes de messagerie cryptée. Envoyez des messages, photos et vidéos en privé.",
      icon: MessageCircle
    },
    {
      title: "Rencontres Locales",
      description:
        "Trouvez des partenaires près de chez vous grâce à la géolocalisation intelligente et aux suggestions personnalisées.",
      icon: MapPin
    },
    {
      title: "Événements Privés",
      description:
        "Participez à des soirées exclusives et des rencontres organisées entre membres sélectionnés.",
      icon: CalendarCheck
    },
    {
      title: "Confidentialité Garantie",
      description:
        "Votre vie privée est notre priorité. Profitez de fonctionnalités avancées pour protéger votre identité.",
      icon: Lock
    },
    {
      title: "Profils Vérifiés",
      description:
        "Interagissez uniquement avec des membres dont les profils ont été vérifiés par nos équipes.",
      icon: Shield
    },
    {
      title: "Compatibilité Avancée",
      description:
        "Notre système de matching vous propose les profils les plus compatibles avec vos critères.",
      icon: Heart
    }
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
          Fonctionnalités Essentielles pour vos Rencontres
        </motion.h2>
        <p className="mx-auto max-w-2xl text-gray-600">
          Découvrez les outils et méthodes qui font le succès de nos sites partenaires
        </p>
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
              {React.createElement(method.icon, { className: "h-6 w-6 text-romance-500" })}
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
