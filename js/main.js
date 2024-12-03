const items = [
  {
    image: "images/zachTimmins.png",
    link: "https://www.instagram.com/zachtimmins/",
  },
  { image: "images/image2.jpg", link: "https://example.com/2" },
  { image: "images/image3.jpg", link: "https://example.com/3" },
];

function displayRandomItem() {
  // Select a random item from the array
  const randomItem = items[Math.floor(Math.random() * items.length)];

  // Update the image and link dynamically
  document.getElementById("randomImage").src = randomItem.image;
  document.getElementById("randomLink").href = randomItem.link;
  document.getElementById("randomLink").innerText = "See their work!";
}

// Let the browser handle the app pop-up or fallback to the browser
document.getElementById("randomLink").addEventListener("click", () => {
  // No additional handling required; let the browser manage the behavior
});

// Refresh content when the refresh button is clicked
document.getElementById("refreshButton").addEventListener("click", displayRandomItem);

// Load a random item when the page first loads
window.onload = displayRandomItem;

