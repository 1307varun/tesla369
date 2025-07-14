const popup = document.getElementById('popup');
const popupImage = document.getElementById('popupImage');
const popupText = document.getElementById('popupText');

const descriptions = {
  "D1.jpg": "Tresneria® Customized Acrylic Desk Name Plate<br>| 23X6.5 CM | Acrylic<br>| Wooden Stand (Black)",
  "D2.jpg": "Back View – Sturdy wooden stand.",
  "D3.jpg": "Side View – Sleek edge profile."
};

// Open popup on image click
const productImages = document.querySelectorAll('.product-card img');
productImages.forEach(img => {
  img.addEventListener('click', () => {
    const src = img.getAttribute('src');
    popupImage.src = src;
    popupText.innerHTML = descriptions[src.split('/').pop()] || "Product Information";
    popup.style.display = 'flex';
  });
});

// Close popup
document.getElementById('closePopup').onclick = () => {
  popup.style.display = 'none';
};

// Close popup on outside click
window.onclick = (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
};

// Thumbnail switching
document.querySelectorAll('.thumb').forEach(thumb => {
  thumb.addEventListener('click', () => {
    popupImage.src = thumb.src;
    popupText.innerHTML = descriptions[thumb.src.split('/').pop()] || "Product Information";
  });
});