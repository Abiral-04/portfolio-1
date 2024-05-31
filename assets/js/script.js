'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



// cv    

document.addEventListener("DOMContentLoaded", function() {
  const downloadBtn = document.getElementById("download-cv-btn");
  const cvOptions = document.getElementById("cv-options");
  const viewBtn = document.getElementById("view-cv-btn");
  const downloadFileBtn = document.getElementById("download-cv-file-btn");

  downloadBtn.addEventListener("click", function(event) {
    event.preventDefault();
    cvOptions.style.display = "block";
    downloadBtn.style.display = "none"; // Hide the "Download CV" button
  });

  viewBtn.addEventListener("click", function(event) {
    // Implement logic to view the CV, such as opening it in a new tab
    // Replace "#" with the actual URL of the CV file
    window.open("path_to_cv_file.pdf", "_blank");
  });

  // No need for a separate event listener for the download button
  // The "download" attribute in the HTML takes care of the download behavior
});
