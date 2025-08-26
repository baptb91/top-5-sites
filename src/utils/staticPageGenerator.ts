import { blogPosts } from "@/data/blogPosts";

interface StaticPageConfig {
  path: string;
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  content: string;
  image?: string;
  lastModified?: string;
  schemaData?: any;
}

const baseUrl = "https://www.rencontrecoquine.info";

// Configuration pour chaque page statique
export const getStaticPagesConfig = (): StaticPageConfig[] => {
  const pages: StaticPageConfig[] = [
    {
      path: "/",
      title: "Top Sites Rencontres Coquines en 2025 | Classement + Avis",
      description: "Découvrez notre classement exclusif des meilleurs sites coquins en 2025. Avis détaillés, tests réels et comparatif des fonctionnalités pour trouver votre plateforme idéale.",
      canonical: baseUrl,
      keywords: "rencontres coquines, site rencontre coquine, rencontres adultes, rencontres libertines, conseils rencontres coquines, meilleur site libertin, comparatif sites libertins",
      image: "/lovable-uploads/1b8df8e6-53e1-442d-9478-19e1f51a73c2.png",
      lastModified: new Date().toISOString(),
      content: `
        <main>
          <h1>Meilleurs Sites de Rencontres Coquines en 2025</h1>
          <p>Découvrez notre sélection exclusive des sites de rencontres coquines les plus performants en 2025. Notre équipe d'experts a testé et analysé chaque plateforme pour vous offrir un classement complet et objectif.</p>
          
          <section class="featured-sites">
            <h2>Sites Recommandés</h2>
            <p>Voici notre top des meilleures plateformes pour des rencontres adultes en toute discrétion. Chaque site a été évalué selon des critères stricts : sécurité, qualité des profils, fonctionnalités et tarifs.</p>
            
            <div class="site-grid">
              <div class="site-card">
                <h3>JM Date</h3>
                <p>La référence française pour les rencontres coquines. Interface moderne, nombreux membres actifs et système de matching avancé.</p>
              </div>
              
              <div class="site-card">
                <h3>C-Date</h3>
                <p>Plateforme internationale reconnue pour sa discrétion et ses fonctionnalités premium dédiées aux rencontres occasionnelles.</p>
              </div>
              
              <div class="site-card">
                <h3>Wyylde</h3>
                <p>Communauté libertine française avec événements réels et système de vérification des profils pour plus de sécurité.</p>
              </div>
            </div>
          </section>
          
          <section class="advantages">
            <h2>Pourquoi Utiliser Notre Classement ?</h2>
            <ul>
              <li>Tests réels effectués par notre équipe d'experts</li>
              <li>Analyses objectives basées sur 62 critères précis de sécurité, qualité et performance</li>
              <li>Mises à jour régulières du classement selon les évolutions du marché</li>
              <li>Conseils personnalisés selon vos besoins et préférences spécifiques</li>
              <li>Comparatifs détaillés des fonctionnalités et tarifs</li>
              <li>Évaluations de la sécurité et de la discrétion des plateformes</li>
            </ul>
          </section>
          
          <section class="guide">
            <h2>Comment Choisir le Bon Site de Rencontres Coquines ?</h2>
            <p>Le choix d'un site de rencontres coquines dépend de plusieurs facteurs essentiels que nous analysons dans notre classement :</p>
            
            <h3>Critères de Sécurité</h3>
            <p>La sécurité de vos données personnelles est primordiale. Nous évaluons les mesures de protection, le cryptage SSL, la vérification des profils et les politiques de confidentialité de chaque plateforme.</p>
            
            <h3>Qualité de la Communauté</h3>
            <p>Une communauté active et respectueuse améliore considérablement vos chances de rencontres réussies. Nous analysons le ratio hommes/femmes, l'activité des membres et la qualité des profils.</p>
            
            <h3>Fonctionnalités et Ergonomie</h3>
            <p>L'interface utilisateur, les outils de recherche, les options de communication et la compatibilité mobile sont des éléments déterminants pour une expérience optimale.</p>
            
            <h3>Tarification et Rapport Qualité/Prix</h3>
            <p>Nous comparons les différentes formules d'abonnement, les fonctionnalités incluses et la transparence des tarifs pour vous aider à faire le meilleur choix économique.</p>
          </section>
          
          <section class="methodology">
            <h2>Notre Méthodologie d'Évaluation</h2>
            <p>Chaque site de notre classement est testé selon une méthodologie rigoureuse développée par nos experts en rencontres en ligne :</p>
            
            <h3>Phase de Test Anonyme</h3>
            <p>Nos testeurs créent des profils anonymes et utilisent réellement chaque plateforme pendant plusieurs semaines pour évaluer l'expérience utilisateur authentique.</p>
            
            <h3>Analyse Technique Approfondie</h3>
            <p>Nous examinons la sécurité, la vitesse de chargement, la stabilité des serveurs et la protection des données personnelles de chaque site.</p>
            
            <h3>Évaluation de la Modération</h3>
            <p>La qualité de la modération, la gestion des faux profils et la réactivité du service client sont des critères essentiels pour garantir votre sécurité.</p>
          </section>
          
          <section class="tips">
            <h2>Conseils pour Maximiser Vos Chances de Succès</h2>
            <p>Au-delà du choix de la plateforme, voici nos conseils d'experts pour optimiser vos rencontres :</p>
            
            <h3>Optimisez Votre Profil</h3>
            <p>Un profil attractif et authentique est la clé du succès. <a href="/blog">Découvrez nos conseils détaillés</a> pour créer un profil irrésistible qui attire les bonnes personnes.</p>
            
            <h3>Maîtrisez l'Art du Premier Message</h3>
            <p>Le premier contact est déterminant. Apprenez les techniques qui fonctionnent réellement pour engager la conversation et créer une connexion immédiate.</p>
            
            <h3>Restez Vigilant et Sécurisé</h3>
            <p>La discrétion et la sécurité sont primordiales dans les rencontres coquines. Suivez nos recommandations pour protéger votre vie privée tout en profitant pleinement de l'expérience.</p>
          </section>
        </main>
      `,
      schemaData: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "RencontreCoquine.info",
        "url": baseUrl,
        "description": "Guide et classement des meilleurs sites de rencontres coquines en France"
      }
    },
    {
      path: "/blog",
      title: "Blog Conseils Rencontres Coquines | RencontreCoquine.info",
      description: "Découvrez nos conseils d'experts pour réussir vos rencontres coquines : techniques de séduction, profils attractifs, premiers messages et plus encore.",
      canonical: `${baseUrl}/blog`,
      keywords: "conseils rencontres coquines, techniques séduction, profil attractif, premier message, drague en ligne",
      image: "/lovable-uploads/1b8df8e6-53e1-442d-9478-19e1f51a73c2.png",
      lastModified: new Date().toISOString(),
      content: `
        <main>
          <h1>Blog Conseils Rencontres Coquines</h1>
          <p>Retrouvez tous nos conseils d'experts pour optimiser vos rencontres en ligne. De la création du profil parfait aux techniques de séduction avancées, notre blog vous accompagne dans votre quête de rencontres réussies.</p>
          
          <section class="latest-articles">
            <h2>Derniers Articles</h2>
            ${blogPosts.slice(0, 6).map(post => `
              <article class="blog-preview">
                <h3><a href="/blog/${post.slug}">${post.title}</a></h3>
                <p>${post.excerpt}</p>
                <div class="meta">
                  <time datetime="${post.date}">${new Date(post.date).toLocaleDateString('fr-FR')}</time>
                  <span>${post.readTime}</span>
                </div>
              </article>
            `).join('')}
          </section>
          
          <section class="topics">
            <h2>Thématiques Populaires</h2>
            <ul>
              <li>Création de profils attractifs</li>
              <li>Techniques de premier message</li>
              <li>Conseils de séduction en ligne</li>
              <li>Éviter les erreurs courantes</li>
              <li>Optimiser ses chances de réussite</li>
            </ul>
          </section>
        </main>
      `,
      schemaData: {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Blog RencontreCoquine.info",
        "url": `${baseUrl}/blog`,
        "description": "Conseils et guides pour réussir ses rencontres coquines en ligne"
      }
    },
    // Pages légales
    {
      path: "/mentions-legales",
      title: "Mentions Légales | RencontreCoquine.info",
      description: "Mentions légales et informations légales du site RencontreCoquine.info",
      canonical: `${baseUrl}/mentions-legales`,
      content: `
        <main>
          <h1>Mentions Légales</h1>
          <section>
            <h2>Informations légales</h2>
            <p>Le présent site web est édité par RencontreCoquine.info, un site d'information et de comparaison de sites de rencontres pour adultes.</p>
            
            <h3>Hébergement</h3>
            <p>Ce site est hébergé par Netlify, Inc.</p>
            
            <h3>Propriété intellectuelle</h3>
            <p>Tous les contenus présents sur ce site (textes, images, graphismes, logo, icônes, sons, logiciels) sont la propriété exclusive de RencontreCoquine.info, à l'exception des marques et logos des sites partenaires qui appartiennent à leurs propriétaires respectifs.</p>
            
            <h3>Responsabilité</h3>
            <p>Les informations contenues sur ce site sont données à titre informatif et peuvent être modifiées sans préavis. RencontreCoquine.info ne peut être tenu responsable des dommages directs ou indirects causés par l'utilisation des informations présentes sur ce site.</p>
          </section>
        </main>
      `
    },
    {
      path: "/politique-confidentialite",
      title: "Politique de Confidentialité | RencontreCoquine.info",
      description: "Notre politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles.",
      canonical: `${baseUrl}/politique-confidentialite`,
      content: `
        <main>
          <h1>Politique de Confidentialité</h1>
          <section>
            <h2>Collecte des données</h2>
            <p>Nous collectons uniquement les données nécessaires au fonctionnement de notre service de comparaison et d'information.</p>
            
            <h3>Utilisation des données</h3>
            <p>Les données collectées sont utilisées exclusivement pour améliorer votre expérience utilisateur et vous fournir des informations pertinentes.</p>
            
            <h3>Protection des données</h3>
            <p>Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé.</p>
            
            <h3>Vos droits</h3>
            <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données personnelles.</p>
          </section>
        </main>
      `
    },
    {
      path: "/conditions-utilisation",
      title: "Conditions d'Utilisation | RencontreCoquine.info",
      description: "Conditions générales d'utilisation du site RencontreCoquine.info",
      canonical: `${baseUrl}/conditions-utilisation`,
      content: `
        <main>
          <h1>Conditions d'Utilisation</h1>
          <section>
            <h2>Acceptation des conditions</h2>
            <p>En utilisant ce site, vous acceptez pleinement et sans réserve les présentes conditions générales d'utilisation.</p>
            
            <h3>Utilisation du site</h3>
            <p>Ce site est destiné à fournir des informations et comparatifs sur les sites de rencontres pour adultes. Son utilisation est réservée aux personnes majeures.</p>
            
            <h3>Contenu</h3>
            <p>Tous les contenus présents sur ce site sont fournis à titre informatif. Nous nous efforçons de maintenir des informations exactes et à jour, mais ne garantissons pas leur exhaustivité.</p>
            
            <h3>Liens externes</h3>
            <p>Ce site peut contenir des liens vers des sites externes. Nous ne sommes pas responsables du contenu de ces sites tiers.</p>
          </section>
        </main>
      `
    },
    {
      path: "/politique-cookies",
      title: "Politique des Cookies | RencontreCoquine.info",
      description: "Information sur l'utilisation des cookies sur RencontreCoquine.info",
      canonical: `${baseUrl}/politique-cookies`,
      content: `
        <main>
          <h1>Politique des Cookies</h1>
          <section>
            <h2>Qu'est-ce qu'un cookie ?</h2>
            <p>Un cookie est un petit fichier texte stocké sur votre ordinateur lors de la visite d'un site web pour améliorer votre expérience de navigation.</p>
            
            <h3>Types de cookies utilisés</h3>
            <ul>
              <li><strong>Cookies techniques :</strong> Nécessaires au fonctionnement du site</li>
              <li><strong>Cookies analytiques :</strong> Pour comprendre l'utilisation du site</li>
              <li><strong>Cookies de préférences :</strong> Pour mémoriser vos choix</li>
            </ul>
            
            <h3>Gestion des cookies</h3>
            <p>Vous pouvez à tout moment désactiver les cookies dans les paramètres de votre navigateur. Cependant, cela pourrait affecter certaines fonctionnalités du site.</p>
          </section>
        </main>
      `
    }
  ];

  // Ajouter les pages de blog
  blogPosts.forEach(post => {
    pages.push({
      path: `/blog/${post.slug}`,
      title: `${post.title} | RencontreCoquine.info`,
      description: post.excerpt,
      canonical: `${baseUrl}/blog/${post.slug}`,
      keywords: `${post.title.toLowerCase()}, conseils rencontres, séduction, rencontres coquines`,
      image: post.imageUrl,
      lastModified: post.date,
      content: `
        <main>
          <article>
            <header>
              <h1>${post.title}</h1>
              <div class="meta">
                <time datetime="${post.date}">${new Date(post.date).toLocaleDateString('fr-FR')}</time>
                <span>${post.readTime}</span>
              </div>
            </header>
            
            ${post.imageUrl ? `<img src="${post.imageUrl}" alt="${post.title}" class="article-image" />` : ''}
            
            <div class="content">
              ${post.content.substring(0, 2000).replace(/#{1,6}\s/g, '').replace(/\*\*/g, '').replace(/\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')}...
              
              <h2>Articles Connexes</h2>
              <ul>
                <li><a href="/blog">Tous nos conseils rencontres</a></li>
                <li><a href="/">Meilleurs sites de rencontres coquines</a></li>
                <li><a href="/mentions-legales">Informations légales</a></li>
              </ul>
              
              <p><em>Contenu interactif complet disponible avec JavaScript activé.</em></p>
            </div>
            
            <footer>
              <nav>
                <a href="/blog">← Retour au blog</a>
              </nav>
            </footer>
          </article>
        </main>
      `,
      schemaData: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "image": post.imageUrl ? `${baseUrl}${post.imageUrl}` : undefined,
        "datePublished": post.date,
        "dateModified": post.date,
        "author": {
          "@type": "Organization",
          "name": "RencontreCoquine.info"
        },
        "publisher": {
          "@type": "Organization",
          "name": "RencontreCoquine.info",
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/lovable-uploads/1b8df8e6-53e1-442d-9478-19e1f51a73c2.png`
          }
        }
      }
    });
  });

  return pages;
};

// Générer le HTML complet pour une page
export const generateStaticHTML = (pageConfig: StaticPageConfig): string => {
  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${pageConfig.title}</title>
  <meta name="description" content="${pageConfig.description}" />
  ${pageConfig.keywords ? `<meta name="keywords" content="${pageConfig.keywords}" />` : ''}
  <meta name="author" content="RencontreCoquine.info" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  
  <link rel="icon" type="image/png" href="/lovable-uploads/1b8df8e6-53e1-442d-9478-19e1f51a73c2.png" />
  <link rel="apple-touch-icon" href="/lovable-uploads/1b8df8e6-53e1-442d-9478-19e1f51a73c2.png" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="${pageConfig.path === '/' ? 'website' : 'article'}" />
  <meta property="og:url" content="${pageConfig.canonical}" />
  <meta property="og:title" content="${pageConfig.title}" />
  <meta property="og:description" content="${pageConfig.description}" />
  ${pageConfig.image ? `<meta property="og:image" content="${baseUrl}${pageConfig.image}" />` : ''}
  <meta property="og:site_name" content="RencontreCoquine.info" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${pageConfig.title}" />
  <meta name="twitter:description" content="${pageConfig.description}" />
  ${pageConfig.image ? `<meta name="twitter:image" content="${baseUrl}${pageConfig.image}" />` : ''}
  
  <link rel="canonical" href="${pageConfig.canonical}" />
  
  ${pageConfig.lastModified ? `<meta name="last-modified" content="${pageConfig.lastModified}" />` : ''}
  
  <!-- Schema.org -->
  ${pageConfig.schemaData ? `<script type="application/ld+json">${JSON.stringify(pageConfig.schemaData)}</script>` : ''}
  
  <!-- Sitemap links -->
  <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
  <link rel="sitemap" type="application/xml" href="/sitemap-index.xml" />
  
  <!-- Preload critical resources -->
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  
  <!-- Basic styles for static content -->
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; margin: 0; padding: 20px; max-width: 1200px; margin: 0 auto; }
    h1 { color: #d946ef; font-size: 2rem; margin-bottom: 1rem; }
    h2 { color: #333; margin-top: 2rem; }
    h3 { color: #666; }
    .meta { color: #888; font-size: 0.9rem; margin: 1rem 0; }
    .site-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; margin: 2rem 0; }
    .site-card, .blog-preview { border: 1px solid #e5e7eb; padding: 1.5rem; border-radius: 8px; }
    .article-image { width: 100%; max-width: 600px; height: auto; margin: 1rem 0; }
    a { color: #d946ef; text-decoration: none; }
    a:hover { text-decoration: underline; }
    .js-only { display: none; }
    .no-js main { display: block !important; }
  </style>
</head>

<body class="no-js">
  <!-- Static content for search engines -->
  <noscript>
    <div style="background: #fef3c7; padding: 1rem; margin-bottom: 2rem; border-radius: 8px;">
      <p><strong>JavaScript désactivé :</strong> Cette page fonctionne mieux avec JavaScript activé pour une expérience interactive complète.</p>
    </div>
  </noscript>
  
  <!-- Static content visible to search engines -->
  <div id="static-content">
    <header>
      <nav style="margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 1px solid #e5e7eb;">
        <a href="/" style="font-size: 1.5rem; font-weight: bold; color: #d946ef;">RencontreCoquine.info</a>
        <div style="margin-top: 0.5rem;">
          <a href="/" style="margin-right: 1rem;">Accueil</a>
          <a href="/blog" style="margin-right: 1rem;">Blog</a>
        </div>
      </nav>
    </header>
    
    ${pageConfig.content}
    
    <footer style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #e5e7eb; color: #666; font-size: 0.9rem;">
      <p>&copy; 2025 RencontreCoquine.info - Tous droits réservés</p>
      <div style="margin-top: 1rem;">
        <a href="/mentions-legales" style="margin-right: 1rem;">Mentions légales</a>
        <a href="/politique-confidentialite" style="margin-right: 1rem;">Confidentialité</a>
        <a href="/conditions-utilisation" style="margin-right: 1rem;">CGU</a>
        <a href="/politique-cookies">Cookies</a>
      </div>
    </footer>
  </div>

  <!-- SPA root for JavaScript users -->
  <div id="root"></div>
  
  <!-- JavaScript detection and SPA initialization -->
  <script>
    // Mark as JS-enabled
    document.body.classList.remove('no-js');
    document.body.classList.add('js-enabled');
    
    // Hide static content when SPA loads
    window.addEventListener('DOMContentLoaded', function() {
      setTimeout(function() {
        const staticContent = document.getElementById('static-content');
        const root = document.getElementById('root');
        if (root && root.innerHTML.trim()) {
          if (staticContent) staticContent.style.display = 'none';
        }
      }, 100);
    });
  </script>
  
  <!-- Load SPA -->
  <script src="https://cdn.gpteng.co/gptengineer.js" type="module"></script>
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>`;
};