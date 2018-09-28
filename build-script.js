const fs = require("fs-extra");
const concat = require("concat");

(async function build() {
  const files = [
    "./dist/angularElementGeolocation/runtime.js",
    "./dist/angularElementGeolocation/polyfills.js",
    "./dist/angularElementGeolocation/main.js"
  ];

  await fs.ensureDir("elements");

  await concat(files, "elements/app-geolocator.js");
  console.info("Elements created successfully!");
})();
