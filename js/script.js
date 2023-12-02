let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.nclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("bx-x");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = window.offsetTop - 150;
    let height = window.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("bx-x");
};

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

const typed = new Typed(".multiple-text", {
  strings: ["FullStack Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const imageUrls = [
  "images/InternApp1.png",
  "images/InternApp2.jpeg",
  "images/InternApp3.png",
  "images/InternApp4.jpeg",
  "images/InternApp5.jpeg",
  "images/InternApp6.jpeg",
  "images/InternApp7.jpeg",
  "images/InternApp8.png",
];

const intervalTime = 1500; // 1.5 seconds
let currentImageIndex = 0;

function changeImage() {
  document.getElementById("portfolioImage_Intern").src =
    imageUrls[currentImageIndex];
  currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
}

// Initially set the first image
changeImage();

// Set an interval to change images
setInterval(changeImage, intervalTime);

// Initialize EmailJS with your Public Key
emailjs.init("UEXwGJPwfmtyk0Adv");
// Wait for the reCAPTCHA script to load
window.onload = function () {
  // Handle form submission
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Execute reCAPTCHA and handle its response
      grecaptcha
        .execute("6LcOTSQpAAAAAFgI40zTFvV4G6i4AXOvDsCsVgZ9", {
          action: "submit",
        })
        .then(function (token) {
          // Add the reCAPTCHA response to the form data
          document.getElementById("g-recaptcha-response").value = token;

          // Get form data
          const formData = {
            fullname: document.getElementById("fullname").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value,
            "g-recaptcha-response": token, // Include reCAPTCHA response in formData
          };

          // Send email using EmailJS
          emailjs
            .send("service_okwoja4", "template_69gyamz", formData)
            .then(function (response) {
              console.log("Email sent!", response.status, response.text);
              // Display a success message to the user
              displayMessage("Email sent successfully!", "success");
            })
            .catch(function (error) {
              console.error("Email failed to send:", error);
              // Display an error message to the user
              displayMessage(
                "Email failed to send. Please try again later.",
                "error"
              );
            });
        })
        .catch(function (error) {
          console.error("reCAPTCHA execution error:", error);
          // Display an error message to the user for reCAPTCHA execution error
          displayMessage(
            "Error verifying reCAPTCHA. Please try again.",
            "error"
          );
        });
    });
};
// Function to display a message to the user
function displayMessage(message, type) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", type);
  messageElement.textContent = message;

  // Display the message for a few seconds (e.g., 5 seconds)
  document.body.appendChild(messageElement);
  setTimeout(function () {
    messageElement.remove();
  }, 5000); // Remove the message after 5 seconds (adjust as needed)
}
