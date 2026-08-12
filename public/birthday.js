const colors = ["#ff4b32", "#ffd84d", "#f7f1e3", "#74d6c5"];
const confetti = document.querySelector(".confetti");
const card = document.querySelector(".gift-card");
const closed = document.querySelector(".closed");
const message = document.querySelector(".message");

function celebrate() {
  confetti.innerHTML = "";
  for (let index = 0; index < 38; index += 1) {
    const piece = document.createElement("i");
    piece.style.left = `${(index * 37) % 100}%`;
    piece.style.animationDelay = `${(index % 9) * 0.08}s`;
    piece.style.background = colors[index % colors.length];
    confetti.appendChild(piece);
  }
  card.classList.add("is-open");
  closed.hidden = true;
  message.hidden = false;
}

document.querySelector(".open-gift").addEventListener("click", celebrate);
document.querySelector(".again").addEventListener("click", () => {
  card.classList.remove("is-open");
  confetti.innerHTML = "";
  message.hidden = true;
  closed.hidden = false;
});
