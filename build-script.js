const fs = require("fs-extra");
const concat = require("concat");

(async function build() {
  const files = [
    "./dist/AngularElementDemo/runtime.js",
    "./dist/AngularElementDemo/polyfills.js",
    "./dist/AngularElementDemo/main.js"
  ];

  await fs.ensureDir("elements");

  await concat(files, "elements/demo-counter.js");
  console.info("Elements created successfully!");
})();
