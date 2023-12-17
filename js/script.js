let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Add this if you want to close the menu when a link is clicked
let navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});
let sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
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
});

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
window.addEventListener("scroll", () => {
  scrollFunction();
});

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

// Initialize EmailJS with your Public Key
emailjs.init("UEXwGJPwfmtyk0Adv");

// Function to display a toast message
function displayToast(message, type) {
  const toastElement = document.createElement("div");
  toastElement.classList.add("toast", type);
  toastElement.textContent = message;

  // Display the toast notification
  document.body.appendChild(toastElement);

  setTimeout(function () {
    toastElement.remove();
  }, 3000); // Remove the toast after 3 seconds (adjust as needed)
}

// Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", function () {
  // Handle form submission
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Get form data
      const formData = {
        fullname: document.getElementById("fullname").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };

      // Send email using EmailJS
      emailjs
        .send("service_okwoja4", "template_69gyamz", formData)
        .then(function (response) {
          // Display a success message to the user
          displayToast("Email sent successfully!", "success");
        })
        .catch(function (error) {
          console.error("Email failed to send:", error);
          // Display an error message to the user
          displayToast(
            "Email failed to send. Please try again later.",
            "error"
          );
        });
    });
});

// Array of different citations
const citations = [
  "Seamlessly Uniting Frontend Artistry with Backend Precision.",
  "Crafting Code, Fusing Innovation, Delivering Excellence.",
  "Elevating User Experiences through Full-Stack Wizardry.",
  "Coding the Future: Full-Stack Mastery in Motion.",
  "Architecting Dreams with Full-Stack Expertise.",
];

// Function to update the citation in the footer
function changeCitation() {
  const citationElement = document.getElementById("citation");
  const randomIndex = Math.floor(Math.random() * citations.length);
  citationElement.textContent = citations[randomIndex];
}

// Call the function to change citation on page load
changeCitation();

setInterval(changeCitation, 3000); // Change citation every 3 seconds
