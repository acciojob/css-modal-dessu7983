const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close-modal");

// Open modal
openBtn.onclick = () => {
  modal.style.display = "block";
};

// Close with X
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// Close when clicking outside
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};