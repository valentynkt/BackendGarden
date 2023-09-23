import fs from 'fs';
import path from 'path';

// Define the paths to the input files
const basePath = path.join(process.cwd(), 'base_urls.txt');
const extraPath = path.join(process.cwd(), 'extra_urls.txt');

// Read the content of the base_urls.txt file and split it into an array of URLs
const baseUrls = fs.readFileSync(basePath, 'utf-8').split('\n').filter(Boolean);

// Read the content of the extra_urls.txt file
const extraContent = fs.readFileSync(extraPath, 'utf-8');

// Split the extra_urls.txt content by blank lines to group URLs by destination
const extraUrlGroups = extraContent.split('\n\n').filter(Boolean);

// Initialize the redirects array
const redirects = [];

// Process the base URLs
for (const url of baseUrls) {
  redirects.push({
    source: url,
    destination: `/blog${url}`,
    permanent: true,
  });
}

// Process the extra URL groups
for (const group of extraUrlGroups) {
  const urls = group.split('\n').filter(Boolean);
  const destination = `/blog${urls[0].replace(/^\/post\/\d+\/\d+\//, '/').replace(/\.aspx$/, '')}`;
  for (const url of urls) {
    redirects.push({
      source: url,
      destination,
      permanent: true,
    });
  }
}

// Create the output JSON object
const outputJson = {
  cleanUrls: true,
  redirects,
};

// Write the output JSON object to a file
fs.writeFileSync(path.join(process.cwd(), 'vercel.json'), JSON.stringify(outputJson, null, 2));

console.log('Output JSON has been written to vercel.json');
