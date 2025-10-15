#!/usr/bin/env node

/**
 * Script de génération de pages HTML statiques pour les articles de blog
 * Optimisé pour l'indexation Google avec toutes les meta tags SEO
 */

const fs = require('fs');
const path = require('path');

// Configuration de base
const BASE_URL = 'https://www.rencontrecoquine.info';
const PUBLIC_DIR = path.resolve(__dirname, '../public');
const BLOG_DIR = path.join(PUBLIC_DIR, 'blog');

// Fonction pour assurer qu'un répertoire existe
function ensureDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`📁 Dossier créé: ${dirPath}`);
  }
}

// Fonction pour formater une date
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

// Fonction pour nettoyer le contenu markdown en texte brut
function stripMarkdown(markdown) {
  return markdown
    .replace(/#{1,6}\s+/g, '') // Supprimer les titres markdown
    .replace(/\*\*(.+?)\*\*/g, '$1') // Supprimer le gras
    .replace(/\*(.+?)\*/g, '$1') // Supprimer l'italique
    .replace(/\[(.+?)\]\(.+?\)/g, '$1') // Supprimer les liens
    .replace(/>\s+/g, '') // Supprimer les citations
    .replace(/`(.+?)`/g, '$1') // Supprimer le code inline
    .replace(/\n{3,}/g, '\n\n') // Normaliser les sauts de ligne
    .trim();
}

// Template HTML complet pour chaque article
function generateArticleHTML(article) {
  const { title, slug, excerpt, content, date, imageUrl, readTime } = article;
  const fullUrl = `${BASE_URL}/blog/${slug}`;
  const imageFullUrl = `${BASE_URL}${imageUrl}`;
  const dateFormatted = formatDate(date);
  const contentPlain = stripMarkdown(content);
  const contentPreview = contentPlain.substring(0, 500) + '...';

  return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} | Blog Rencontres Coquines</title>
    <meta name="description" content="${excerpt}">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="${fullUrl}">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${excerpt}">
    <meta property="og:image" content="${imageFullUrl}">
    <meta property="og:url" content="${fullUrl}">
    <meta property="og:site_name" content="Rencontre Coquine">
    <meta property="og:locale" content="fr_FR">
    <meta property="article:published_time" content="${date}">
    <meta property="article:modified_time" content="${date}">
    <meta property="article:author" content="Rencontre Coquine">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${excerpt}">
    <meta name="twitter:image" content="${imageFullUrl}">
    <meta name="twitter:site" content="@rencontrecoquine">
    <meta name="twitter:creator" content="@rencontrecoquine">
    
    <!-- JSON-LD Schema.org pour Article -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "${title}",
      "description": "${excerpt}",
      "image": {
        "@type": "ImageObject",
        "url": "${imageFullUrl}",
        "width": 1200,
        "height": 630
      },
      "datePublished": "${date}",
      "dateModified": "${date}",
      "author": {
        "@type": "Organization",
        "name": "Rencontre Coquine",
        "url": "${BASE_URL}"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Rencontre Coquine",
        "url": "${BASE_URL}",
        "logo": {
          "@type": "ImageObject",
          "url": "${BASE_URL}/logo.png",
          "width": 600,
          "height": 60
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "${fullUrl}"
      },
      "articleBody": "${contentPlain.replace(/"/g, '\\"').substring(0, 1000)}...",
      "wordCount": ${contentPlain.split(/\s+/).length},
      "timeRequired": "PT8M",
      "inLanguage": "fr-FR"
    }
    </script>
    
    <!-- Breadcrumb Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Accueil",
          "item": "${BASE_URL}"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "${BASE_URL}/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "${title}",
          "item": "${fullUrl}"
        }
      ]
    }
    </script>
    
    <!-- Styles minimalistes pour les robots et SEO -->
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6; 
            color: #333; 
            background: #fff;
            max-width: 800px; 
            margin: 0 auto; 
            padding: 20px;
        }
        header { margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #e5e7eb; }
        h1 { 
            font-size: 2em; 
            color: #1f2937; 
            margin-bottom: 15px; 
            line-height: 1.2;
        }
        .meta { 
            color: #6b7280; 
            font-size: 0.9em; 
            margin: 10px 0;
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
        }
        .meta span { display: inline-flex; align-items: center; gap: 5px; }
        img { 
            max-width: 100%; 
            height: auto; 
            border-radius: 8px;
            margin: 20px 0;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .content { 
            font-size: 1.1em; 
            line-height: 1.8;
            margin-top: 30px;
        }
        .content p { margin-bottom: 15px; }
        .cta {
            background: linear-gradient(135deg, #ec4899, #f97316);
            color: white;
            padding: 15px 30px;
            border-radius: 8px;
            text-align: center;
            margin: 30px 0;
            text-decoration: none;
            display: inline-block;
            font-weight: 600;
            box-shadow: 0 4px 12px rgba(236, 72, 153, 0.3);
        }
        footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            color: #6b7280;
            font-size: 0.9em;
        }
        @media (max-width: 768px) {
            body { padding: 15px; }
            h1 { font-size: 1.5em; }
        }
    </style>
</head>
<body>
    <header>
        <h1>${title}</h1>
        <div class="meta">
            <span>📅 ${dateFormatted}</span>
            <span>⏱️ ${readTime}</span>
            <span>✍️ Par Rencontre Coquine</span>
        </div>
    </header>
    
    <article>
        <img src="${imageUrl}" alt="${title}" loading="eager">
        
        <div class="content">
            <p><strong>${excerpt}</strong></p>
            <p>${contentPreview}</p>
        </div>
        
        <a href="${fullUrl}" class="cta">Lire l'article complet →</a>
    </article>
    
    <footer>
        <p>© 2025 Rencontre Coquine - Tous droits réservés</p>
        <p><a href="${BASE_URL}">Retour à l'accueil</a> | <a href="${BASE_URL}/blog">Tous les articles</a></p>
    </footer>
    
    <!-- Redirection automatique vers la SPA pour utilisateurs non-bots -->
    <script>
        // Liste exhaustive de User-Agents de bots pour éviter la redirection
        const botPattern = /bot|crawler|spider|googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot|facebookexternalhit|twitterbot|rogerbot|linkedinbot|embedly|quora|showyoubot|outbrain|pinterest|slackbot|vkshare|w3c_validator|whatsapp|telegram|prerender|phantomjs|headless/i;
        
        // Si ce n'est pas un bot, rediriger vers la version SPA
        if (!botPattern.test(navigator.userAgent)) {
            window.location.href = '${fullUrl}';
        }
    </script>
</body>
</html>`;
}

// Fonction pour lire les articles depuis le fichier TypeScript compilé
async function loadBlogPosts() {
  try {
    // Utiliser esbuild pour compiler et charger les articles TypeScript
    const esbuild = require('esbuild');
    const dataPath = path.resolve(__dirname, '../src/data/blogPosts.ts');
    
    const result = await esbuild.build({
      entryPoints: [dataPath],
      bundle: true,
      write: false,
      format: 'cjs',
      platform: 'node',
      target: 'node16',
      external: ['react', 'react-dom'], // Exclure React des dépendances
    });
    
    // Écrire temporairement le fichier compilé
    const tempFile = path.resolve(__dirname, './temp-blog-posts.cjs');
    fs.writeFileSync(tempFile, result.outputFiles[0].text);
    
    // Charger le module
    const { blogPosts } = require(tempFile);
    
    // Nettoyer le fichier temporaire
    fs.unlinkSync(tempFile);
    
    return blogPosts;
  } catch (error) {
    console.error('❌ Erreur lors du chargement des articles:', error);
    return [];
  }
}

// Fonction principale
async function generateBlogHTML() {
  console.log('🚀 Génération des pages HTML statiques pour le blog...\n');
  
  // Assurer que le dossier existe
  ensureDirectory(BLOG_DIR);
  
  // Charger les articles
  const blogPosts = await loadBlogPosts();
  
  if (!blogPosts || blogPosts.length === 0) {
    console.error('❌ Aucun article trouvé!');
    return;
  }
  
  console.log(`📝 ${blogPosts.length} articles trouvés\n`);
  
  let successCount = 0;
  let errorCount = 0;
  
  // Générer un fichier HTML pour chaque article
  for (const post of blogPosts) {
    try {
      const html = generateArticleHTML(post);
      const filename = `${post.slug}.html`;
      const filepath = path.join(BLOG_DIR, filename);
      
      fs.writeFileSync(filepath, html, 'utf8');
      console.log(`✅ Généré: ${filename}`);
      successCount++;
    } catch (error) {
      console.error(`❌ Erreur pour "${post.title}":`, error.message);
      errorCount++;
    }
  }
  
  console.log(`\n🎉 Génération terminée!`);
  console.log(`   ✅ Succès: ${successCount} fichiers`);
  if (errorCount > 0) {
    console.log(`   ❌ Erreurs: ${errorCount} fichiers`);
  }
  console.log(`\n📂 Fichiers générés dans: ${BLOG_DIR}`);
  
  // Afficher les URLs de test
  console.log('\n🔍 URLs de test:');
  blogPosts.slice(0, 3).forEach(post => {
    console.log(`   ${BASE_URL}/blog/${post.slug}.html`);
  });
  
  return { successCount, errorCount, total: blogPosts.length };
}

// Exécuter si appelé directement
if (require.main === module) {
  generateBlogHTML()
    .then(result => {
      if (result.errorCount === 0) {
        process.exit(0);
      } else {
        process.exit(1);
      }
    })
    .catch(error => {
      console.error('❌ Erreur fatale:', error);
      process.exit(1);
    });
}

// Export pour utilisation dans d'autres scripts
module.exports = { generateBlogHTML, generateArticleHTML };
