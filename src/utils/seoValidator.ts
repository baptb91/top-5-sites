// Script de validation SEO pour vérifier la cohérence des pages générées
import { blogPosts } from "@/data/blogPosts";
import { getStaticPagesConfig } from "./staticPageGenerator";

interface ValidationResult {
  isValid: boolean;
  issues: string[];
  pages: PageValidation[];
}

interface PageValidation {
  path: string;
  title: string;
  hasStaticFile: boolean;
  inSitemap: boolean;
  issues: string[];
}

export const validateSEOStructure = (): ValidationResult => {
  const staticPages = getStaticPagesConfig();
  const issues: string[] = [];
  const pageValidations: PageValidation[] = [];

  console.log('\n🔍 VALIDATION SEO - Structure du site');
  console.log('=====================================');

  // Validation des articles de blog
  console.log('\n📝 Articles de blog:');
  blogPosts.forEach(post => {
    const staticPage = staticPages.find(page => page.path === `/blog/${post.slug}`);
    const pageValidation: PageValidation = {
      path: `/blog/${post.slug}`,
      title: post.title,
      hasStaticFile: !!staticPage,
      inSitemap: true, // Assumé car généré automatiquement
      issues: []
    };

    if (!staticPage) {
      pageValidation.issues.push('Page statique manquante');
      issues.push(`❌ Article "${post.title}" - Page statique manquante`);
    } else {
      console.log(`✅ ${post.slug}`);
    }

    pageValidations.push(pageValidation);
  });

  // Validation des pages légales
  console.log('\n📄 Pages légales:');
  const legalPages = [
    '/mentions-legales',
    '/politique-confidentialite', 
    '/conditions-utilisation',
    '/politique-cookies'
  ];

  legalPages.forEach(pagePath => {
    const staticPage = staticPages.find(page => page.path === pagePath);
    const pageValidation: PageValidation = {
      path: pagePath,
      title: staticPage?.title || 'Titre manquant',
      hasStaticFile: !!staticPage,
      inSitemap: true,
      issues: []
    };

    if (!staticPage) {
      pageValidation.issues.push('Page statique manquante');
      issues.push(`❌ Page légale "${pagePath}" - Configuration manquante`);
    } else {
      console.log(`✅ ${pagePath}`);
    }

    pageValidations.push(pageValidation);
  });

  // Validation de la cohérence des slugs
  console.log('\n🔗 Validation des slugs:');
  const blogSlugs = blogPosts.map(post => post.slug);
  const uniqueSlugs = new Set(blogSlugs);
  
  if (blogSlugs.length !== uniqueSlugs.size) {
    issues.push('❌ Slugs dupliqués détectés dans les articles de blog');
    console.log('❌ Slugs dupliqués détectés');
  } else {
    console.log('✅ Tous les slugs sont uniques');
  }

  // Résumé
  console.log('\n📊 RÉSUMÉ DE VALIDATION:');
  console.log(`Total pages à valider: ${pageValidations.length}`);
  console.log(`Pages avec erreurs: ${pageValidations.filter(p => p.issues.length > 0).length}`);
  console.log(`Issues détectées: ${issues.length}`);

  if (issues.length === 0) {
    console.log('\n🎉 Validation réussie - Aucun problème détecté!');
  } else {
    console.log('\n⚠️ Issues à corriger:');
    issues.forEach(issue => console.log(`  ${issue}`));
  }

  return {
    isValid: issues.length === 0,
    issues,
    pages: pageValidations
  };
};

// URLs pour test manuel après déploiement
export const getTestUrls = (): string[] => {
  const baseUrl = 'https://www.rencontrecoquine.info';
  
  return [
    baseUrl,
    `${baseUrl}/blog`,
    ...blogPosts.slice(0, 3).map(post => `${baseUrl}/blog/${post.slug}`),
    `${baseUrl}/mentions-legales`,
    `${baseUrl}/sitemap-v2-index.xml`,
    `${baseUrl}/sitemap-v2-content.xml`
  ];
};

// Log des URLs de test
export const logTestUrls = () => {
  console.log('\n🧪 URLs À TESTER MANUELLEMENT APRÈS DÉPLOIEMENT:');
  console.log('===============================================');
  getTestUrls().forEach(url => console.log(`🔗 ${url}`));
  
  console.log('\n📝 ARTICLES À RÉINDEXER SI NÉCESSAIRE:');
  console.log('=====================================');
  blogPosts.forEach(post => {
    console.log(`🔗 https://www.rencontrecoquine.info/blog/${post.slug}`);
  });
};