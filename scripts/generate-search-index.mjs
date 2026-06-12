import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

const APP_DIR = path.join(projectRoot, 'src', 'app');
const OUTPUT_FILE = path.join(projectRoot, 'src', 'data', 'staticPagesIndex.json');

// Excluded folders or path patterns from search indexing
const EXCLUDE_PATHS = [
  '/api',
  '/admin',
  '/privacy-policy',
  '/terms-and-conditions'
];

function cleanJSXText(jsxContent) {
  // Remove imports, exports, styling props, comments, and style tags to leave clean text
  let cleaned = jsxContent
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove block comments
    .replace(/\/\/.*/g, '')           // Remove line comments
    .replace(/import\s+[\s\S]*?from\s+['"][^'"]+['"];?/g, '') // Remove imports
    .replace(/style=\{\{[\s\S]*?\}\}/g, '') // Remove inline style objects
    .replace(/className=['"][^'"]*['"]/g, ''); // Remove class names

  const matches = [];
  // Match text nodes between tags. e.g. >Some Text< but not inside braces {} or quotes
  // Regex looks for a closing tag angle bracket followed by non-tag, non-brace text, followed by an opening tag angle bracket
  const tagTextRegex = />\s*([^<>\n{}]+)\s*</g;
  let match;
  while ((match = tagTextRegex.exec(cleaned)) !== null) {
    const text = match[1].trim();
    if (text && text.length > 1 && !text.startsWith('export ') && !text.startsWith('const ') && !text.startsWith('return ')) {
      matches.push(text);
    }
  }

  // Fallback: if regex match is empty, try to fetch some strings
  return matches.join(' ').replace(/\s+/g, ' ').trim();
}

function extractMetadata(fileContent, folderName) {
  let title = '';
  let description = '';

  const titleMatch = /title:\s*['"`]([^'"`]+)['"`]/i.exec(fileContent);
  if (titleMatch) {
    title = titleMatch[1];
  } else {
    // Fallback title from folder name
    if (folderName === 'app') {
      title = 'Saarthi Organics';
    } else {
      title = folderName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ') + ' | Saarthi Organics';
    }
  }

  const descMatch = /description:\s*['"`]([^'"`]+)['"`]/i.exec(fileContent);
  if (descMatch) {
    description = descMatch[1];
  }

  return { title, description };
}

function walkDir(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath, fileList);
    } else if (file === 'page.tsx') {
      fileList.push(filePath);
    }
  }
  return fileList;
}

function runIndexer() {
  console.log('--- Generating Search Index for Saarthi Organics Static Pages ---');
  
  if (!fs.existsSync(APP_DIR)) {
    console.error(`App directory not found at: ${APP_DIR}`);
    process.exit(1);
  }

  const pages = walkDir(APP_DIR);
  const indexData = [];

  for (const pagePath of pages) {
    // Compute relative path from App Router root
    const relativePath = path.relative(APP_DIR, pagePath);
    const dirName = path.dirname(relativePath);
    
    // Map directory to route URL
    let url = '/' + (dirName === '.' ? '' : dirName);
    
    // Normalize path separators for URL
    url = url.replace(/\\/g, '/');

    // Skip excluded folders
    if (EXCLUDE_PATHS.some(exclude => url === exclude || url.startsWith(exclude + '/'))) {
      console.log(`Skipping excluded route: ${url}`);
      continue;
    }

    // Skip dynamic route folders containing brackets
    if (url.includes('[') || url.includes(']')) {
      console.log(`Skipping dynamic route template: ${url}`);
      continue;
    }

    try {
      const content = fs.readFileSync(pagePath, 'utf8');
      const folderName = dirName === '.' ? 'app' : path.basename(dirName);
      const { title, description } = extractMetadata(content, folderName);
      const cleanText = cleanJSXText(content);

      indexData.push({
        title,
        url,
        description,
        content: cleanText,
        type: 'page'
      });
      
      console.log(`Indexed route: ${url} (${title.slice(0, 30)}...)`);
    } catch (err) {
      console.error(`Error indexing page at ${pagePath}:`, err);
    }
  }

  // Ensure output directory exists
  const outDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(indexData, null, 2), 'utf8');
  console.log(`--- Search Index successfully written to: ${OUTPUT_FILE} (Indexed ${indexData.length} pages) ---`);
}

runIndexer();
