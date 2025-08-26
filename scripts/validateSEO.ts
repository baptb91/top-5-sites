#!/usr/bin/env tsx

// Script de validation SEO à lancer après les corrections
import { validateSEOStructure, logTestUrls } from '../src/utils/seoValidator';

console.log('🔍 VALIDATION SEO POST-CORRECTIONS');
console.log('==================================');

// Lancer la validation
const result = validateSEOStructure();

// Afficher les URLs de test
logTestUrls();

console.log('\n📋 CHECKLIST POST-PUBLICATION:');
console.log('==============================');
console.log('1. ✅ Publier le site');
console.log('2. ⏳ Attendre 10 minutes');
console.log('3. 🔍 Tester 3-4 URLs manuellement');
console.log('4. 🗺️ Soumettre sitemap dans Search Console');
console.log('5. ⏰ Attendre 24-48h pour indexation');
console.log('6. 🔄 Réindexer manuellement si nécessaire');

process.exit(result.isValid ? 0 : 1);