// script.js

// Smooth scroll for internal links (like navigation)
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a[href^='#']");

  for (const link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});

// Show welcome message when the page loads
  window.addEventListener("load", function () {
    if (!sessionStorage.getItem("popupShown")) {
      alert("Welcome to CPS Lab Website! 🎉");
      sessionStorage.setItem("popupShown", "true");
    }
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
      }
    });
  });

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });

  document.getElementById("mobile-menu").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
});





