const items = [
  {
    image: "images/zachTimmins.png",
    link: "https://www.instagram.com/zachtimmins/",
  },
  { image: "image2.jpg", link: "https://example.com/2" },
  { image: "image3.jpg", link: "https://example.com/3" },
];

function displayRandomItem() {
  const randomItem = items[Math.floor(Math.random() * items.length)];
  document.getElementById("randomImage").src = randomItem.image;
  document.getElementById("randomLink").href = randomItem.link;
  document.getElementById("randomLink").innerText = "See their work!";
}

// Refresh content on button click
document
  .getElementById("refreshButton")
  .addEventListener("click", displayRandomItem);

// Load a random item when the page first loads
window.onload = displayRandomItem;
