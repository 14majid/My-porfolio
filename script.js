let prevScrollPos = window.pageYOffset;
let viewportHeight = window.innerHeight;

// Function to handle scroll behavior
function handleScroll() {
  const currentScrollPos = window.pageYOffset;
  const navbar = document.querySelector(".navbar");
  const after100vhLeft = document.getElementById("develope");

  if (!navbar || !after100vhLeft) return;

  const isWithinFirst100vh = currentScrollPos < viewportHeight;
  after100vhLeft.style.left = isWithinFirst100vh ? "290px" : "0px";

  if (prevScrollPos > currentScrollPos && isWithinFirst100vh) {
    navbar.classList.remove("hide-navbar");
  } else {
    navbar.classList.add("hide-navbar");
  }

  prevScrollPos = currentScrollPos;
}

// Function to toggle scroll event based on screen width
function checkScreenSize() {
  if (window.innerWidth < 1000) {
    window.removeEventListener("scroll", handleScroll);
  } else {
    window.addEventListener("scroll", handleScroll);
  }
}

// Initial check and add event listener
checkScreenSize();

// Listen for window resize
window.addEventListener("resize", checkScreenSize);




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
