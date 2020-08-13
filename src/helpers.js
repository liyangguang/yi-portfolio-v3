const DEFAULT_FADE_IN_RATIO = .7;

export function fadeInElement(element, ratio=DEFAULT_FADE_IN_RATIO) {
  element.classList.add('_fade-in');
  // Create checking points - .1, .2, .3, ...1
  const threshold = new Array(10).fill().map((_, i) => i / 10);
  let observer = new IntersectionObserver((entries) => {
    if (entries[0].boundingClientRect.height > window.innerHeight && entries[0].isIntersecting || entries[0].intersectionRatio > ratio) {
      element.classList.add('-active');
    } else {
      // element.classList.remove('-active');
    }
  }, {threshold});
  observer.observe(element);
}
