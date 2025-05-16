// Button that changes color on click
const colorBtn = document.getElementById("colorBtn");
colorBtn.addEventListener("click", () => {
  const colors = ["#f28b82", "#fbbc04", "#34a853", "#4285f4", "#9c27b0"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  colorBtn.style.backgroundColor = randomColor;
  colorBtn.textContent = "Color Changed!";
});

// Secret button double-click action
const secretBtn = document.getElementById("secretBtn");
secretBtn.addEventListener("dblclick", () => {
  alert("🎉 You found the secret! 🎉");
});

// Image gallery setup
const galleryImages = [
  "https://via.placeholder.com/300x200?text=Image+1",
  "https://via.placeholder.com/300x200?text=Image+2",
  "https://via.placeholder.com/300x200?text=Image+3",
];
let currentIndex = 0;
const galleryImage = document.getElementById("galleryImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

prevBtn.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  galleryImage.src = galleryImages[currentIndex];
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  galleryImage.src = galleryImages[currentIndex];
});

// Tabs functionality
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active from all buttons and contents
    tabButtons.forEach((b) => b.classList.remove("active"));
    tabContents.forEach((c) => c.classList.remove("active"));

    // Activate clicked tab and content
    btn.classList.add("active");
    const tabId = btn.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});

// Form validation
const form = document.getElementById("signupForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  // Email validation
  if (!emailInput.value.trim()) {
    emailError.textContent = "Email is required.";
    valid = false;
  } else if (!validateEmail(emailInput.value)) {
    emailError.textContent = "Invalid email format.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  if (!passwordInput.value) {
    passwordError.textContent = "Password is required.";
    valid = false;
  } else if (passwordInput.value.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  if (valid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});

// Real-time feedback
emailInput.addEventListener("input", () => {
  if (emailInput.value && !validateEmail(emailInput.value)) {
    emailError.textContent = "Invalid email format.";
  } else {
    emailError.textContent = "";
  }
});

passwordInput.addEventListener("input", () => {
  if (passwordInput.value.length > 0 && passwordInput.value.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters.";
  } else {
    passwordError.textContent = "";
  }
});

// Helper function to validate email
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}
