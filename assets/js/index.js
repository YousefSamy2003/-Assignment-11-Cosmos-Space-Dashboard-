const allSectionLink = document.querySelectorAll("nav a");
const allSection = document.querySelectorAll("section");
const sidebarBtn = document.getElementById("sidebar-toggle");
const APIKey = "qMaKRr2Dmk9GuWw3ne35K4RN5a9ZvghH0kbh3iT6";

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

sidebarBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  document.getElementById("sidebar").classList.toggle("sidebar-open");
});
document.getElementById("sidebar").addEventListener("click", function (e) {
  e.stopPropagation();
});
document.body.addEventListener("click", function (e) {
  document.getElementById("sidebar").classList.remove("sidebar-open");
});
async function getDataTodayInSpace() {
  let data = await fetch(``);
}

// let dateNow = new Date();
// const formatted = dateNow.toLocaleDateString("en-US", {
//   month: "short",
//   day: "2-digit",
//   year: "numeric",
// });
