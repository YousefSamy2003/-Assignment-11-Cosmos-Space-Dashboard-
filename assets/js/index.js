const allSectionLink = document.querySelectorAll("nav a");
const allSection = document.querySelectorAll("section");
const sidebarBtn = document.getElementById("sidebar-toggle");

allSectionLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    for (let i = 0; i < allSectionLink.length; i++) {
      allSectionLink[i].classList.remove("bg-blue-500/10", "text-blue-400");
    }
    for (let j = 0; j < allSection.length; j++) {
      allSection[j].classList.add("hidden");
      if (
        allSection[j].getAttribute("data-section") ===
        link.getAttribute("data-section")
      ) {
        allSection[j].classList.remove("hidden");
      }
    }
    link.classList.add("bg-blue-500/10", "text-blue-400");
  });
});

sidebarBtn.addEventListener("click", function () {
  document.getElementById("sidebar").classList.toggle("sidebar-open");
});
