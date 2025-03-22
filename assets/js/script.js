
// Toggle Mobile Menu
document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});


document.addEventListener("DOMContentLoaded", function () {
    // Get current page URL
    const currentPage = window.location.pathname;

    // Select all navigation links
    const navLinks = document.querySelectorAll("#nav-links .nav-link");

    // Loop through links and add "active" class if URL matches
    navLinks.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("text-blue-600", "font-bold"); // Active link styles
      } else {
        link.classList.remove("text-blue-600"); // Remove active class if not active
      }
    });
  });


//   slider section
var swiper = new Swiper(".mySwiper", {
    loop: true,  
    centeredSlides: true, 
    slidesPerView: 1,
    spaceBetween: 15,
    slidesPerGroup: 1,
    loopedSlides: 5, // Ensures smooth looping
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        480: { slidesPerView: 1 },  // Mobile: 1 card
        768: { slidesPerView: 2 },  // Tablet: 2 cards
        1024: { slidesPerView: 3 }, // Small laptops: 3 cards
        1280: { slidesPerView: 5 }, // Larger screens: 5 cards
    }
});


// form section
function addStudentField() {
    let container = document.getElementById("student-container");
    let index = container.children.length;  

    // Limit to 10 entries
    if (index >= 10) {
        alert("You can only add up to 10 students.");
        return;
    }

    let div = document.createElement("div");
    div.classList.add("flex", "space-x-4", "mt-3", "items-center");

    div.innerHTML = `
        <input type="text" name="roll_no_${index}" placeholder="Roll No" class="w-1/4 px-4 py-2 border rounded-lg focus:outline-blue-500" required>
        <input type="text" name="name_${index}" placeholder="Name" class="w-1/3 px-4 py-2 border rounded-lg focus:outline-blue-500" required>
        <input type="number" name="age_${index}" placeholder="Age" class="w-1/4 px-4 py-2 border rounded-lg focus:outline-blue-500" required>
        <button type="button" onclick="removeStudentField(this)" class="text-red-500 hover:text-red-700">❌</button>
    `;
    container.appendChild(div);
}

function removeStudentField(button) {
    let container = document.getElementById("student-container");
    button.parentElement.remove();

    // Enable add button if limit is reached and an entry is removed
    if (container.children.length < 10) {
        document.querySelector("button[onclick='addStudentField()']").disabled = false;
    }
}
