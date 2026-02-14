import { initLightbox } from "./glightbox-init.js";

function setupLightbox() {
  initLightbox({ selector: ".photo-page .glightbox" });
  initLightbox({ selector: ".disco-page .glightbox", captions: false });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupLightbox, { once: true });
} else {
  setupLightbox();
}
