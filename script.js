// ============ THEME TOGGLE ============
function toggleTheme() {
  document.body.classList.toggle("light");
  const btn = document.getElementById("themeToggle");
  if (document.body.classList.contains("light")) {
    btn.innerHTML = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    btn.innerHTML = "🌙";
    localStorage.setItem("theme", "dark");
  }
}

// ============ LOAD ============
window.onload = function () {
  const saved = localStorage.getItem("theme");
  const btn = document.getElementById("themeToggle");

  if (saved === "light") {
    document.body.classList.add("light");
    btn.innerHTML = "☀️";
  } else {
    btn.innerHTML = "🌙";
  }

  type();
  initScrollReveal();
};

// ============ MOBILE MENU ============
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}

// Close menu on nav link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('active');
  });
});

// ============ TYPING EFFECT ============
const text = "Software Engineer | Java | Spring Boot | Angular";
let i = 0;

function type() {
  if (i < text.length) {
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 55);
  }
}

// ============ SCROLL REVEAL ============
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, idx * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });

  // Also observe cards individually for stagger
  document.querySelectorAll('.card, .timeline-item, .contact-item').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.08}s`;
  });
}
