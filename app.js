document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".glow-card");
  const controlBtns = document.querySelectorAll(".control-btn");
  const demoContainer = document.querySelector(".magnetic-glow-demo");


  demoContainer.classList.add("magnetic-glow");


  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      if (!demoContainer.classList.contains("magnetic-glow")) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const xPercent = Math.max(0, Math.min(100, (x / rect.width) * 100));
      const yPercent = Math.max(0, Math.min(100, (y / rect.height) * 100));

      const glow = card.querySelector(".glow-effect");
      if (glow) {
        glow.style.setProperty("--x", `${xPercent}%`);
        glow.style.setProperty("--y", `${yPercent}%`);
      }
    });
  });


  controlBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      controlBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const effectType = btn.getAttribute("data-effect");
      demoContainer.classList.remove("magnetic-glow", "outline-glow", "pulse-glow");
      demoContainer.classList.add(`${effectType}-glow`);
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const stars = document.querySelectorAll('#card-rating .star');
  const ratingCount = document.getElementById('rating-count');
  let currentRating = 4.2; 

  stars.forEach(star => {
    star.addEventListener('click', function () {
      const rating = parseInt(this.getAttribute('data-value'));
      currentRating = rating;
      updateStars(rating);
      ratingCount.textContent = rating.toFixed(1);
    });
    star.addEventListener('mouseover', function () {
      updateStars(parseInt(this.getAttribute('data-value')));
    });
    star.addEventListener('mouseout', function () {
      updateStars(currentRating);
    });
  });

  function updateStars(rating) {
    stars.forEach(star => {
      if (parseInt(star.getAttribute('data-value')) <= rating) {
        star.style.color = '#FFD700'; 
      } else {
        star.style.color = '#ccc'; 
      }
    });
  }

  updateStars(currentRating);
});
