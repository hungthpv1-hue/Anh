onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  // icons raining like random emoji
  const emojis = ["❤️","😍","🌸","✨","😄"];
  function createRainIcon() {
    const icon = document.createElement("span");
    icon.className = "rain-icon";
    icon.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    icon.style.left = Math.random() * 100 + "vw";
    icon.style.animationDuration = 2 + Math.random() * 2 + "s";
    document.body.appendChild(icon);
    icon.addEventListener("animationend", () => icon.remove());
  }
  setInterval(createRainIcon, 150);
};