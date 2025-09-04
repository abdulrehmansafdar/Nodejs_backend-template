// setup.js
const fs = require("fs");
const path = require("path");

const packageJsonPath = path.join(__dirname, "package.json");
const readmePath = path.join(__dirname, "README.md");

const newName = process.argv[2];
if (!newName) {
  console.error("Usage: node setup.js <project-name>");
  process.exit(1);
}

// Update package.json
const pkg = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
pkg.name = newName;
fs.writeFileSync(packageJsonPath, JSON.stringify(pkg, null, 2));

// Update README.md (optional, replace old name)
let readme = fs.readFileSync(readmePath, "utf8");
readme = readme.replace(/Nodejs_backend-template/gi, newName);
fs.writeFileSync(readmePath, readme);

console.log(`Project renamed to "${newName}" in package.json and README.md`);