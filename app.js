const figur = document.getElementById("figur");
const steg = 20;

let posX = 100;
let posY = 100;

let målX = posX;
let målY = posY;

document.addEventListener("keydown", (e) => {
  const maksBredde = window.innerWidth - figur.offsetWidth;
  const maksHoyde = window.innerHeight - figur.offsetHeight;

  switch (e.key) {
    case "ArrowUp":
      målY = Math.max(0, målY - steg);
      break;
    case "ArrowDown":
      målY = Math.min(maksHoyde, målY + steg);
      break;
    case "ArrowLeft":
      målX = Math.max(0, målX - steg);
      break;
    case "ArrowRight":
      målX = Math.min(maksBredde, målX + steg);
      break;
  }
});

document.addEventListener("click", (e) => {
  if (e.target === figur) return;

  const maksBredde = window.innerWidth - figur.offsetWidth;
  const maksHoyde = window.innerHeight - figur.offsetHeight;

  målX = Math.min(maksBredde, e.clientX);
  målY = Math.min(maksHoyde, e.clientY);
});

// Smooth animasjon
function oppdaterPosisjon() {
  const hastighet = 0.1;
  posX += (målX - posX) * hastighet;
  posY += (målY - posY) * hastighet;

  figur.style.left = posX + "px";
  figur.style.top = posY + "px";

  requestAnimationFrame(oppdaterPosisjon);
}

oppdaterPosisjon();
