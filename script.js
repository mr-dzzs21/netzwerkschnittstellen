// Chatling Konfiguration
window.chtlConfig = { chatbotId: "8114517886" };

// Lightbox-Funktionen
function openLightbox(src) {
  document.getElementById("lightboxImg").src = src;
  document.getElementById("lightbox").classList.add("active");
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("active");
}
