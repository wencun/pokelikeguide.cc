import { cp, mkdir, rm } from 'node:fs/promises';

const outputDirectory = new URL('../dist/', import.meta.url);
const projectDirectory = new URL('../', import.meta.url);
const publicFiles = [
  'index.html',
  'styles.css',
  'script.js',
  'robots.txt',
  'sitemap.xml',
];

await rm(outputDirectory, { force: true, recursive: true });
await mkdir(outputDirectory, { recursive: true });

await Promise.all(
  publicFiles.map((file) => cp(new URL(file, projectDirectory), new URL(file, outputDirectory))),
);

console.log(`Built ${publicFiles.length} static files in dist/`);
