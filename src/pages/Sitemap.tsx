
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { generateSitemap } from "@/utils/sitemapGenerator";

const Sitemap = () => {
  const [sitemap, setSitemap] = useState("");

  useEffect(() => {
    // Récupérer le sitemap du localStorage ou le générer
    const storedSitemap = localStorage.getItem('sitemap');
    if (storedSitemap) {
      setSitemap(storedSitemap);
    } else {
      setSitemap(generateSitemap());
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Sitemap | RencontreCoquine.info</title>
        <meta name="robots" content="noindex, follow" />
        <meta httpEquiv="Content-Type" content="text/xml; charset=utf-8" />
      </Helmet>
      <pre style={{ display: 'none' }}>
        {sitemap}
      </pre>
    </>
  );
};

export default Sitemap;
