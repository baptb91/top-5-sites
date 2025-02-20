
import DatingSiteCard from "./DatingSiteCard";

const SiteList = () => {
  const sites = [
    {
      name: "JM Date",
      description:
        "Une plateforme de rencontre innovante qui met l'accent sur des connexions authentiques et des relations significatives.",
      rating: 4.5,
      affiliateLink: "https://k.related-dating.com/?abc=2ab0b5837e6c2796&xa=n&acme=wid.85911&media=seo&tpls=3&v=sexy",
      users: "+1 million d'utilisateurs",
      mainFeature: "Matchmaking intelligent",
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
