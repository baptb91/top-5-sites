
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { generateSitemapIndex } from "@/utils/sitemapGenerator";

const SitemapIndex = () => {
  const [sitemapIndex, setSitemapIndex] = useState("");

  useEffect(() => {
    // Récupérer le sitemap-index du localStorage ou le générer
    const storedSitemapIndex = localStorage.getItem('sitemapIndex');
    if (storedSitemapIndex) {
      setSitemapIndex(storedSitemapIndex);
    } else {
      setSitemapIndex(generateSitemapIndex());
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Sitemap Index | RencontreCoquine.info</title>
        <meta name="robots" content="noindex, follow" />
        <meta httpEquiv="Content-Type" content="text/xml; charset=utf-8" />
      </Helmet>
      <pre style={{ display: 'none' }}>
        {sitemapIndex}
      </pre>
    </>
  );
};

export default SitemapIndex;
