
import DatingSiteCard from "./DatingSiteCard";

const SiteList = () => {
  const sites = [
    {
      name: "Spiice",
      description:
        "La nouvelle plateforme tendance pour des rencontres coquines, avec une communauté active et des fonctionnalités innovantes.",
      rating: 5,
      affiliateLink: "https://spiice.rencontre-fan.com/?abc=703d1cecccb43f40&xa=n&acme=wid.85911&media=&source=Ticktok&s1=NomDuCompte&s2=Bio",
      users: "+500 000 utilisateurs",
      mainFeature: "Rencontres discrètes",
      prosList: ["Interface moderne et intuitive", "Communauté jeune et active", "Système de vérification avancé"],
      platform: "Mobile et Web",
      privacy: "Protection des données renforcée",
      logoUrl: "/lovable-uploads/5464b755-8f01-429c-83fd-eb700f419b4c.png",
    },
    {
      name: "JM Date",
      description:
        "Une plateforme de rencontres coquines qui met l'accent sur des connexions discrètes et des rencontres passionnées.",
      rating: 4.5,
      affiliateLink: "https://k.related-dating.com/?abc=2ab0b5837e6c2796&xa=n&acme=wid.85911&media=seo&tpls=3&v=sexy",
      users: "+1 million d'utilisateurs",
      mainFeature: "Rencontres adultes",
      prosList: ["Large communauté active", "Messagerie instantanée", "Profils détaillés"],
      platform: "Toutes plateformes",
      privacy: "Mode incognito disponible",
      logoUrl: "/lovable-uploads/bf6fe96a-7b07-4b5f-a8e9-61a9977d06ea.png",
    },
    {
      name: "Power Dating",
      description:
        "Un site de rencontres qui mise sur la qualité des profils et la facilité des rencontres rapides.",
      rating: 4.8,
      affiliateLink: "https://k.related-dating.com/?abc=4ef7627c47edba3a&xa=n&acme=wid.85911&media=seo&tpls=1",
      users: "+800 000 utilisateurs",
      mainFeature: "Rencontres rapides",
      prosList: ["Matching intelligent", "Rencontres express", "Profils vérifiés"],
      platform: "Web et applications",
      privacy: "Anonymat garanti",
      logoUrl: "/lovable-uploads/0cf2281f-d919-430e-ac86-f518fb2c0b13.png",
    },
    {
      name: "BeSexy",
      description:
        "La référence des sites libertins avec une communauté ouverte d'esprit et des événements exclusifs.",
      rating: 4.7,
      affiliateLink: "https://k.related-dating.com/?abc=dad1c2d8a4afc009&xa=n&acme=wid.85911&media=seo",
      users: "+600 000 utilisateurs",
      mainFeature: "Rencontres libertines",
      prosList: ["Événements privés", "Chat vidéo", "Photos privées"],
      platform: "Multi-plateforme",
      privacy: "Confidentialité maximale",
      logoUrl: "/lovable-uploads/365ab1bb-4f55-4356-987c-3e75a85f877f.png",
    },
    {
      name: "Infidèle",
      description:
        "La plateforme discrète dédiée aux rencontres extraconjugales, avec une sécurité et confidentialité maximales.",
      rating: 4.6,
      affiliateLink: "https://k.related-dating.com/?abc=0e1679787e276c50&xa=n&acme=wid.85911&media=seo&tpls=1",
      users: "+400 000 utilisateurs",
      mainFeature: "Rencontres extraconjugales",
      prosList: ["Double authentification", "Profils invisibles", "Messages cryptés"],
      platform: "Web sécurisé",
      privacy: "Système anti-trace",
      logoUrl: "/lovable-uploads/ce51fe8e-dfe9-4f07-8311-41a128f4e000.png",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {sites.map((site, index) => (
        <DatingSiteCard key={index} {...site} />
      ))}
    </div>
  );
};

export default SiteList;
