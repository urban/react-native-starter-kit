// @flow
/* eslint-env node */
/* eslint-disable no-console */
const globby = require("globby");
const fs = require("fs-extra");
const path = require("path");

const inputDir = process.argv[2];
const outputDir = process.argv[3];

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const removePrefix = prefix => filename => filename.replace(prefix, "");
const addPrefix = prefix => filename => path.join(prefix, filename);
const toRequire = x => `require("${x}");`;

const template = xs => {
  return `
// Auto-generated file created by prestoryboard
// Do not edit.
//
function loadStories() {
  ${xs.map(toRequire).join("\n  ")}
}

module.exports = loadStories
`;
};

(async (inputDir, outputDir) => {
  try {
    await fs.ensureDir(inputDir);
    await fs.ensureDir(outputDir);
  } catch (err) {
    console.error(err);
    return;
  }

  const filePath = path.join(outputDir, "loadStories.js");
  const relative = path.relative(outputDir, inputDir);
  const toPath = compose(addPrefix(relative), removePrefix(inputDir));

  const paths = await globby([`${inputDir}/**/*.stories.js`]);
  const stories = paths.map(toPath);

  try {
    await fs.writeFile(filePath, template(stories), { spaces: 2 });
    console.log("Success!");
  } catch (err) {
    console.error(err);
  }
})(inputDir, outputDir);
