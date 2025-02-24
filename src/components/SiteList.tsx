import { motion } from "framer-motion";
import { Star, CheckCircle, Users, Shield, Clock, ThumbsUp } from "lucide-react";

const SiteList = () => {
  const sites = [
    {
      name: "Spiice",
      position: 1,
      rating: 5,
      description: "La nouvelle référence qui fait grimper la température !",
      longDescription: `
        🔥 Le petit nouveau qui fait fondre la concurrence ! Avec son interface moderne
        et son ambiance décontractée, Spiice réussit le parfait équilibre entre sérieux et légèreté.
        
        Imaginez Tinder qui aurait grandi et décidé de pimenter sa vie - c'est exactement ça !
        Mais attention, ici pas de "Swipe gauche, swipe droite" à l'aveugle, on est sur du dating
        de qualité.
      `,
      pros: [
        "Interface ultra moderne et intuitive",
        "Communauté jeune et dynamique",
        "Messagerie instantanée cryptée",
        "Photos privées sécurisées",
        "Système de vérification avancé"
      ],
      stats: {
        users: "+500 000 utilisateurs",
        success: "89% de matchs réussis",
        response: "Réponse moyenne < 2h"
      },
      affiliateLink: "https://spiice.rencontre-fan.com/?abc=703d1cecccb43f40&xa=n&acme=wid.85911&media=&source=Ticktok&s1=NomDuCompte&s2=Bio",
      logoUrl: "/lovable-uploads/5464b755-8f01-429c-83fd-eb700f419b4c.png",
    },
    {
      name: "JM Date",
      position: 2,
      rating: 4.5,
      description: "L'expert des rencontres passionnées et authentiques",
      longDescription: `
        🌟 Un classique qui se bonifie avec le temps ! JM Date, c'est comme un bon vin :
        de la qualité, du raffinement, et une expérience qui s'améliore avec l'âge.
        
        Si vous cherchez des rencontres matures et assumées, vous êtes au bon endroit.
        La plateforme privilégie les connexions authentiques aux rencontres superficielles.
      `,
      pros: [
        "Large communauté active",
        "Profils très détaillés",
        "Événements privés organisés",
        "Chat vidéo sécurisé",
        "Mode incognito disponible"
      ],
      stats: {
        users: "+1 million d'utilisateurs",
        success: "78% de rencontres réussies",
        response: "Support 24/7"
      },
      affiliateLink: "https://k.related-dating.com/?abc=2ab0b5837e6c2796&xa=n&acme=wid.85911&media=seo&tpls=3&v=sexy",
      logoUrl: "/lovable-uploads/bf6fe96a-7b07-4b5f-a8e9-61a9977d06ea.png",
    },
    {
      name: "Infidèles",
      position: 3,
      rating: 4.5,
      description: "Le site de référence pour les rencontres discrètes",
      longDescription: `
        🌙 Envie d'aventure sans compromis ? Infidèles est LA plateforme qui comprend 
        vos besoins et votre situation. Discrétion absolue et rencontres de qualité sont 
        au rendez-vous.

        Une communauté qui partage les mêmes attentes que vous, avec une interface 
        pensée pour préserver votre vie privée. Ici, pas de jugement, que des 
        possibilités !
      `,
      pros: [
        "Discrétion maximale garantie",
        "Mode fantôme disponible",
        "Suppression instantanée des conversations",
        "Géolocalisation intelligente",
        "Profils vérifiés manuellement"
      ],
      stats: {
        users: "+800 000 utilisateurs",
        success: "85% de satisfaction",
        response: "Réponse < 1h"
      },
      affiliateLink: "https://k.related-dating.com/?abc=0e1679787e276c50&xa=n&acme=wid.85911&media=seo&tpls=1",
      logoUrl: "/lovable-uploads/ce51fe8e-dfe9-4f07-8311-41a128f4e000.png",
    },
    {
      name: "BeSexy",
      position: 4,
      rating: 4.3,
      description: "L'univers libertin qui fait tomber les barrières",
      longDescription: `
        🔥 BeSexy, c'est l'endroit où la sensualité rencontre la liberté !
        Une plateforme libérée des conventions, où l'exploration et le plaisir
        sont les maîtres mots.

        Ici, pas de tabous : que vous soyez novice ou expérimenté, vous trouverez
        votre place dans cette communauté ouverte d'esprit et respectueuse.
      `,
      pros: [
        "Événements privés exclusifs",
        "Chat vidéo HD sécurisé",
        "Galeries photos privées",
        "Messagerie cryptée",
        "Communauté active 24/7"
      ],
      stats: {
        users: "+400 000 utilisateurs",
        success: "82% de matchs actifs",
        response: "Support 24/7"
      },
      affiliateLink: "https://k.related-dating.com/?abc=dad1c2d8a4afc009&xa=n&acme=wid.85911&media=seo",
      logoUrl: "/lovable-uploads/365ab1bb-4f55-4356-987c-3e75a85f877f.png",
    },
    {
      name: "Power Dating",
      position: 5,
      rating: 4.0,
      description: "La puissance des rencontres nouvelle génération",
      longDescription: `
        ⚡ Power Dating, c'est la plateforme qui électrise vos rencontres !
        Fini les sites traditionnels ennuyeux, place à une expérience
        dynamique et moderne.

        Imaginez un monde où chaque match est une nouvelle aventure excitante,
        où la chimie opère instantanément. C'est exactement ce que vous 
        trouverez ici !
      `,
      pros: [
        "Algorithme de matching avancé",
        "Profils ultra-détaillés",
        "Stories et contenus exclusifs",
        "Chat multimédia innovant",
        "Système de badges unique"
      ],
      stats: {
        users: "+350 000 utilisateurs",
        success: "80% de retours positifs",
        response: "Réponse < 2h"
      },
      affiliateLink: "https://k.related-dating.com/?abc=4ef7627c47edba3a&xa=n&acme=wid.85911&media=seo&tpls=1",
      logoUrl: "/lovable-uploads/0cf2281f-d919-430e-ac86-f518fb2c0b13.png",
    }
  ];

  return (
    <div className="space-y-16">
      {sites.map((site, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="relative rounded-2xl bg-white p-8 shadow-xl"
        >
          {/* Badge de position */}
          <div className="absolute -top-5 left-8 rounded-full bg-romance-500 px-6 py-2 text-white">
            <span className="text-lg font-bold">N°{site.position}</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Logo et notation */}
            <div className="text-center">
              <img 
                src={site.logoUrl} 
                alt={site.name} 
                className="mx-auto mb-4 h-20 w-auto"
              />
              <div className="flex items-center justify-center space-x-1">
                {Array.from({ length: Math.floor(site.rating) }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-romance-500 text-romance-500" />
                ))}
                {site.rating % 1 !== 0 && (
                  <Star className="h-5 w-5 fill-romance-500/50 text-romance-500" />
                )}
              </div>
              <p className="mt-2 text-sm text-gray-600">{site.rating}/5</p>
            </div>

            {/* Description principale */}
            <div className="lg:col-span-2">
              <h3 className="mb-2 text-2xl font-bold text-gray-900">{site.name}</h3>
              <p className="mb-4 text-lg font-medium text-romance-600">{site.description}</p>
              <p className="mb-6 whitespace-pre-line text-gray-600">{site.longDescription}</p>
              
              <h4 className="mb-3 text-lg font-semibold text-gray-900">Points forts :</h4>
              <ul className="mb-6 grid gap-2 md:grid-cols-2">
                {site.pros.map((pro, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-romance-500" />
                    <span className="text-gray-600">{pro}</span>
                  </li>
                ))}
              </ul>

              {/* Statistiques */}
              <div className="mb-6 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <Users className="mx-auto mb-2 h-6 w-6 text-romance-500" />
                  <p className="text-sm font-medium text-gray-900">{site.stats.users}</p>
                </div>
                <div className="text-center">
                  <ThumbsUp className="mx-auto mb-2 h-6 w-6 text-romance-500" />
                  <p className="text-sm font-medium text-gray-900">{site.stats.success}</p>
                </div>
                <div className="text-center">
                  <Clock className="mx-auto mb-2 h-6 w-6 text-romance-500" />
                  <p className="text-sm font-medium text-gray-900">{site.stats.response}</p>
                </div>
              </div>

              {/* Bouton d'action */}
              <a
                href={site.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 rounded-full bg-romance-500 px-8 py-3 text-white transition-colors duration-200 hover:bg-romance-600"
              >
                <span className="font-medium">Visiter {site.name}</span>
                <Shield className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SiteList;
