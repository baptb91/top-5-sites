// Fonction de debug pour vérifier les balises noindex
export const checkNoIndexTags = () => {
  console.log('🔍 VÉRIFICATION BALISES NOINDEX');
  console.log('================================');
  
  const metaTags = document.querySelectorAll('meta[name="robots"]');
  
  if (metaTags.length === 0) {
    console.log('⚠️  Aucune balise meta robots trouvée - utilise les paramètres par défaut');
    return;
  }
  
  metaTags.forEach((tag, index) => {
    const content = tag.getAttribute('content');
    console.log(`Meta robots ${index + 1}:`, content);
    
    if (content && content.includes('noindex')) {
      console.error('❌ NOINDEX DÉTECTÉ:', tag);
      console.error('   Contenu:', content);
      console.error('   Élément complet:', tag.outerHTML);
    } else {
      console.log('✅ Meta robots OK:', content);
    }
  });
  
  // Vérifier aussi les balises googlebot
  const googlebotTags = document.querySelectorAll('meta[name="googlebot"]');
  googlebotTags.forEach((tag, index) => {
    const content = tag.getAttribute('content');
    console.log(`Meta googlebot ${index + 1}:`, content);
    
    if (content && content.includes('noindex')) {
      console.error('❌ GOOGLEBOT NOINDEX DÉTECTÉ:', tag);
    } else {
      console.log('✅ Meta googlebot OK:', content);
    }
  });
  
  console.log('================================');
  
  return {
    hasNoIndex: Array.from(metaTags).some(tag => 
      tag.getAttribute('content')?.includes('noindex')
    ),
    totalMetaTags: metaTags.length
  };
};

// Auto-exécution en développement
if (typeof window !== 'undefined') {
  // Attendre que le DOM soit chargé
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(checkNoIndexTags, 1000);
    });
  } else {
    setTimeout(checkNoIndexTags, 1000);
  }
}