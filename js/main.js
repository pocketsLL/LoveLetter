const items = [
  {
    image: "images/zachTimmins.png",
    link: "https://www.instagram.com/zachtimmins/",
  },
  { image: "images/image2.jpg", link: "https://example.com/2" },
  { image: "images/image3.jpg", link: "https://example.com/3" },
];

function displayRandomItem() {
  const randomItem = items[Math.floor(Math.random() * items.length)];
  document.getElementById("randomImage").src = randomItem.image;
  document.getElementById("randomLink").href = randomItem.link;
  document.getElementById("randomLink").innerText = "See their work!";
}

// Attach event listener to refresh button
document.getElementById("refreshButton").addEventListener("click", displayRandomItem);

// Attach event listener to handle link clicks securely
document.getElementById("randomLink").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default behavior
  const url = event.target.href;
  window.open(url, "_blank", "noopener,noreferrer"); // Open the link securely
});

// Load a random item when the page first loads
window.onload = displayRandomItem;

