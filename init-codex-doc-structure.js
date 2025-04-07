// Codex Lumina Folder Structure Initialization Script
// Creates all documentation and development folders with README.md placeholders

const fs = require('fs');
const path = require('path');

// Define base path for documentation folders
const basePath = './docs';

// List of subfolders to create under /docs
const folders = [
  'core-docs',
  'architecture',
  'ai-logic',
  'ui-design',
  'user-guides',
  'spiritual-intelligence/religions',
  'spiritual-intelligence/metaphysics',
  'spiritual-intelligence/quantum-science',
  'spiritual-intelligence/cognitive-frameworks',
  'spiritual-intelligence/ancient-wisdom',
  'spiritual-intelligence/consciousness-studies',
  'context-core'
];

// List of root-level folders (outside /docs)
const rootFolders = [
  'datasets',
  'models',
  'tools',
  'guides',
  'assets',
  'release-notes',
  'src'
];

// Helper function to create folders and README.md files
function createFolders(base, list) {
  list.forEach(folder => {
    const fullPath = path.join(base, folder);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
      console.log(`✅ Created: ${fullPath}`);
    }
    const readmePath = path.join(fullPath, 'README.md');
    if (!fs.existsSync(readmePath)) {
      fs.writeFileSync(
        readmePath,
        `# ${folder.split('/').pop()}\n\n_This folder is part of the Codex Lumina documentation system._`
      );
      console.log(`📄 Added README.md to: ${fullPath}`);
    }
  });
}

// Ensure basePath exists before adding subfolders
if (!fs.existsSync(basePath)) {
  fs.mkdirSync(basePath);
  console.log(`✅ Created base folder: ${basePath}`);
}

// Execute structure creation
createFolders(basePath, folders);
createFolders('.', rootFolders);
