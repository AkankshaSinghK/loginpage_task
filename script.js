// Add event listeners to show/hide tooltip when hovering over the enroll button
const enrollBtn = document.getElementById("enroll-btn");
const tooltip = document.getElementById("tooltip");

enrollBtn.addEventListener("mouseenter", function () {
  tooltip.style.display = "block";
});

enrollBtn.addEventListener("mouseleave", function () {
  tooltip.style.display = "none";
});

function togglePassword() {
  const passwordField = document.getElementById("password");
  const passwordToggle = document.querySelector(".show-password");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    passwordToggle.textContent = "Hide";
  } else {
    passwordField.type = "password";
    passwordToggle.textContent = "Show";
  }
}

// Form validation: toggle submit button state based on input fields
const onlineIdInput = document.getElementById("online-id");
const passwordInput = document.getElementById("password");
const submitBtn = document.querySelector(".submit-btn");

function toggleButtonState() {
  if (onlineIdInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
    submitBtn.disabled = false;
    submitBtn.classList.add("active");
  } else {
    submitBtn.disabled = true;
    submitBtn.classList.remove("active");
  }
}

// Listen for changes in both input fields
onlineIdInput.addEventListener("input", toggleButtonState);
passwordInput.addEventListener("input", toggleButtonState);

// Login animation and loading logic
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("login-btn");
  const imageSection = document.querySelector(".image-section");
  const formSection = document.querySelector(".form-section");
  const loadingScreen = document.getElementById("loading-screen");
  const imageSectionImg = document.querySelector(".image-section img");

  // Event listener for the login button
  loginBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent form submission

    // Start the compress animation on the image section
    imageSection.classList.add("animate-compress");

    // After the compress animation, show the loading screen
    setTimeout(() => {
      loadingScreen.classList.add("show"); // Show the loading screen
      formSection.classList.add("loading-active");

      // Trigger image expansion after loading screen appears
      setTimeout(() => {
        imageSectionImg.classList.add("animate-expand"); // Trigger image expansion
      }, 500); // Adjust timing for expansion as per your preference

      // Redirect to the new login page after 2 seconds
      setTimeout(() => {
        window.location.href = "login.html"; // Adjust this path as per your new page
      }, 2000); // Redirect after expanding animation (adjust timing for loading)
    }, 500); 
  });
});

