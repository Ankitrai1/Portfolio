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

// Load saved theme
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
};

// Mobile menu
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}

function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}

// typing effect
const text = "Software Engineer | Java | Spring Boot | Angular";
let i = 0;

function type() {
  if (i < text.length) {
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 50);
  }
}