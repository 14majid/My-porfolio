let prevScrollPos = window.pageYOffset;
let viewportHeight = window.innerHeight;

// Update viewport height on resize
window.addEventListener("resize", () => {
  viewportHeight = window.innerHeight;
});

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  const navbar = document.querySelector(".navbar");
  const after100vhLeft = document.getElementById("develope");

  if (!navbar || !after100vhLeft) return; // Prevent errors if elements are missing

  // Check if within the first 100vh
  const isWithinFirst100vh = currentScrollPos < viewportHeight;

  // Adjust #develope position based on scroll position
  after100vhLeft.style.left = isWithinFirst100vh ? "290px" : "0px";

  // Navbar visibility logic
  if (prevScrollPos > currentScrollPos && isWithinFirst100vh) {
    // Scrolling up - Show navbar
    navbar.classList.remove("hide-navbar");
  } else {
    // Scrolling down - Hide navbar
    navbar.classList.add("hide-navbar");
  }

  prevScrollPos = currentScrollPos;
};

// Navbar toggle button for mobile
const toggleButton = document.querySelector(".navbar-toggler");
const closeBtn = document.querySelector('.closeBtn');

toggleButton?.addEventListener("click", () => {
  document.querySelector(".navbar").style.display = "block";
});

closeBtn?.addEventListener("click", () => {
  document.querySelector(".navbar").style.display = "none";
});

// Update copyright year dynamically
document.querySelector('.date').textContent = new Date().getFullYear();
