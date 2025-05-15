
import { Helmet } from "react-helmet";
import LegalContent from "@/components/LegalContent";
import Header from "@/components/Header";

const LegalNotice = () => {
  return (
    <>
      <Helmet>
        <title>Mentions Légales | RencontreCoquine.info</title>
        <meta name="description" content="Mentions légales et informations légales du site RencontreCoquine.info" />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://rencontrecoquine.info/mentions-legales" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8">
          <Header />
          <LegalContent />
        </div>
      </div>
    </>
  );
};

export default LegalNotice;
