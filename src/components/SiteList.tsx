
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
      logoUrl: "/lovable-uploads/bf6fe96a-7b07-4b5f-a8e9-61a9977d06ea.png",
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
