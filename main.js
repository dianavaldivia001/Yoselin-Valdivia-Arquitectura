
window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});
const cards = document.querySelectorAll(".project-card");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeBtn = document.querySelector(".close");

cards.forEach(card => {
    card.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = card.getAttribute("data-image");
        modalTitle.textContent = card.getAttribute("data-title");
        modalDescription.textContent = card.getAttribute("data-description");
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
const hiddenElements = document.querySelectorAll(".hidden");

function showOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    hiddenElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showOnScroll);