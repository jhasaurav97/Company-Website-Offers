
let customBtn = document.getElementById("contactForm");

const openFormBtn = document.querySelectorAll("#openFormBtn");
const popupFormContainer = document.getElementById("popupFormContainer");
const closeFormBtn = document.getElementById("closeFormBtn");

// Open the form
for (let i = 0; i < openFormBtn.length; i++) {
  openFormBtn[i].addEventListener("click", () => {
    popupFormContainer.style.display = "flex";
  });
}

// Close the form
closeFormBtn.addEventListener("click", () => {
  popupFormContainer.style.display = "none";
});

// Handle form submission
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission
  alert("Form submitted successfully!");
  popupFormContainer.style.display = "none"; // Close the form
});
