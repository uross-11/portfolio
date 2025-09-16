const fs = require("fs");
const Critters = require("critters");

const critters = new Critters({
  path: ".next/static/css",
  publicPath: "/_next/static/css/",
  inlineFonts: true,
  preloadFonts: false, // next is already preloading them
});

async function editHome() {
  const inlined = await critters.process(
    fs.readFileSync(".next/server/app/index.html", "utf8"),
  );

  fs.writeFileSync(
    ".next/server/app/index.html",
    inlined.replace(/rel="stylesheet"/g, 'rel="stylesheet" defer=""'),
  );
}

new Promise(() => editHome());
