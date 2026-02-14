import GLightbox from "glightbox";

export function initLightbox(selectorOrOptions = ".glightbox") {
  if (typeof document === "undefined") return null;

  const options =
    typeof selectorOrOptions === "string"
      ? { selector: selectorOrOptions }
      : selectorOrOptions ?? {};

  const selector =
    typeof options.selector === "string" && options.selector.length > 0
      ? options.selector
      : ".glightbox";

  if (!document.querySelector(selector)) return null;

  return GLightbox({
    selector,
    touchNavigation: true,
    zoomable: true,
    ...options,
  });
}
