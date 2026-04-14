
 
// ------------------------------------------------------------
// 1. IMAGE PATHS HERE
// ------------------------------------------------------------
const images = [
  'baklava.png',
  'empanadillas.png',
  'falafal.png',
  'grapeleaves.png',
  'grill.png',
  'mofongo.png',
  'pie.png',
  'shawarma.png',
  'storefront.png'
];
 
 
// ------------------------------------------------------------
// 2. SETTINGS
// ------------------------------------------------------------
const FADE_DURATION_MS = 100;   // crossfade speed in milliseconds
const DEFAULT_IMAGE    = 0;     // index of the image shown on page load
const TRIGGER          = 'hover'; // 'hover' or 'click'
 
 
// ------------------------------------------------------------
// 3. ENGINE — no need to edit below this line
// ------------------------------------------------------------
(function () {
  const container = document.getElementById('logo-container');
  const bg        = document.getElementById('logo-bg');
 
  if (!container || !bg) {
    console.warn('logo-hover.js: Could not find #logo-container or #logo-bg. Check your HTML.');
    return;
  }
 
  if (images.length === 0) {
    console.warn('logo-hover.js: No images defined. Add your image paths to the images array.');
    return;
  }
 
  let current = DEFAULT_IMAGE;
 
  function setImage(index) {
    current = ((index % images.length) + images.length) % images.length;
    bg.classList.add('swapping');
    setTimeout(function () {
      bg.style.backgroundImage = 'url("' + images[current] + '")';
      bg.classList.remove('swapping');
    }, FADE_DURATION_MS);
  }
 
  function nextImage() {
    setImage(current + 1);
  }
 
  // Set the default image immediately (no fade on load)
  bg.style.backgroundImage = 'url("' + images[DEFAULT_IMAGE] + '")';
 
  // Attach the trigger
  if (TRIGGER === 'hover') {
    container.addEventListener('mouseenter', nextImage);
  } else {
    container.addEventListener('click', nextImage);
  }
})();