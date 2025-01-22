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
contactForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent default form submission
  
  const formData = new FormData(contactForm);
  const data = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phoneNumber: formData.get("phoneNumber"),
    message: formData.get("message")
  };

  try {
    const response = await fetch("http://localhost:3000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    alert(result.message);  // Show success message from backend

    popupFormContainer.style.display = "none"; // Close the form
  } catch (error) {
    alert("Error sending email. Please try again later.");
  }
});
