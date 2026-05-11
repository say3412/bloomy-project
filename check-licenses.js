const fs = require('fs');
const path = require('path');

const pkgs = fs.readdirSync('node_modules').filter(f => !f.startsWith('.'));
const licenses = {};

pkgs.forEach(pkg => {
  try {
    const pkgPath = path.join('node_modules', pkg, 'package.json');
    if (fs.existsSync(pkgPath)) {
      const data = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
      licenses[pkg] = data.license || 'Unknown';
    }
  } catch (e) {}
});

const entries = Object.entries(licenses).sort();

// 라이선스별로 분류
const byLicense = {};
entries.forEach(([pkg, license]) => {
  if (!byLicense[license]) byLicense[license] = [];
  byLicense[license].push(pkg);
});

console.log('=== LICENSE SUMMARY ===\n');
Object.keys(byLicense).sort().forEach(license => {
  console.log(`${license}: ${byLicense[license].length} packages`);
  byLicense[license].forEach(pkg => console.log(`  - ${pkg}`));
  console.log('');
});

// 상업적 사용 검토
console.log('=== COMMERCIAL USE CHECK ===\n');
const nonCommercial = ['GPL', 'AGPL', 'SSPL'];
const restricted = entries.filter(([_, lic]) => nonCommercial.some(nc => lic.includes(nc)));

if (restricted.length > 0) {
  console.log('⚠️  CAUTION: Restrictive licenses found (may limit commercial use):');
  restricted.forEach(([pkg, lic]) => console.log(`  - ${pkg}: ${lic}`));
} else {
  console.log('✅ No GPL/AGPL/SSPL licenses found - safe for commercial use (with MIT conditions)');
}
