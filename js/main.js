import { profile } from "./profile.js";
import { college, school } from "./education.js";

// Side Bar
const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

if (menuBtn && sidebar && overlay) {
  menuBtn.addEventListener("click", toggleSidebar);
  overlay.addEventListener("click", toggleSidebar);
}

function toggleSidebar() {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("show");
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    sidebar.classList.remove("active");
    overlay.classList.remove("show");
  }
});

// Content Botton
document.querySelectorAll(".content-btn a").forEach(link => {
    link.addEventListener("click", () => {
        // close sidebar
        sidebar.classList.remove("active");
        // close overlay
        overlay.classList.remove("show");
    });
});

// Profile Datas
document.querySelector(".name").textContent = profile.fullName;
document.querySelector(".nickname").textContent = profile.nickname;
document.querySelector(".age").textContent = profile.age;
document.querySelector(".birthDate").textContent = profile.birthDate;
document.querySelector(".nationality").textContent = profile.nationality;
document.querySelector(".race").textContent = profile.race;
document.querySelector(".religion").textContent = profile.religion;

// Pop up QR Line
const openBtn = document.getElementById("openLineQR");
const closeBtn = document.getElementById("closeLineQR");
const modal = document.getElementById("lineQR");

openBtn.addEventListener("click", e => {
  e.preventDefault();
  modal.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.querySelector(".qr-backdrop").addEventListener("click", () => {
  modal.classList.remove("active");
});

// Education Datas
document.querySelector(".college-timeline").textContent = college.timeline;
document.querySelector(".college-name").textContent = college.name;
document.querySelector(".college-faculty").textContent = college.faculty;
document.querySelector(".college-major").textContent = college.major;
document.querySelector(".college-gpa").textContent = `GPA: ${college.gpa}`;
document.querySelector(".college-year-complete").textContent = `Year of completion: ${college.year_of_completion}`;
document.querySelector(".school-timeline").textContent = school.timeline;
document.querySelector(".school-name").textContent = school.name;
document.querySelector(".school-plan").textContent = school.plan;
document.querySelector(".school-gpa").textContent = `GPA: ${school.gpa}`;
document.querySelector(".school-year-complete").textContent = `Year of completion: ${school.year_of_completion}`;

// Experience Box show detail
document.querySelectorAll(".exp-box").forEach(box => {
    const header = box.querySelector(".exp-header");
    const detail = box.querySelector(".exp-detail");
    const closeBtn = box.querySelector(".close-btn");
    // open / close
    header.addEventListener("click", () => {
        if (box.classList.contains("active")) {
            detail.style.height = detail.scrollHeight + "px";
            requestAnimationFrame(() => {
                detail.style.height = "0px";
            });
        } else {
            detail.style.height = detail.scrollHeight + "px";
        }
        box.classList.toggle("active");
    });
    // close botton
    closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        detail.style.height = detail.scrollHeight + "px";
        requestAnimationFrame(() => {
            detail.style.height = "0px";
        });
        box.classList.remove("active");
        // scroll back to header
        header.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});