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
        document.getElementById("sidebar").classList.remove("sidebar-open");
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
// async function getDataTodayInSpace() {
//   let data = await fetch(``);
// }

// let dateNow = new Date();
// const formatted = dateNow.toLocaleDateString("en-US", {
//   month: "short",
//   day: "2-digit",
//   year: "numeric",
// });

function getUpcoming() {
  fetch("https://lldev.thespacedevs.com/2.3.0/launches/upcoming/?limit=10")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let dataUpcoming = data.results;
      console.log(dataUpcoming[0]);
      let forData = handleData(dataUpcoming);
      displayMainCard(dataUpcoming, forData[0], forData[1], forData[2]);
    });
}
getUpcoming();

function displayMainCard(dataUpcoming, diffDays, datePart, timePart) {
  document.getElementById("featured-launch").innerHTML = `
   <div
              class="relative bg-slate-800/30 border border-slate-700 rounded-3xl overflow-hidden group hover:border-blue-500/50 transition-all"
            >
              <div
                class="absolute inset-0 bg-linear-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
              ></div>
              <div class="relative grid grid-cols-1 lg:grid-cols-2 gap-6 p-8">
                <div class="flex flex-col justify-between">
                  <div>
                    <div class="flex items-center gap-3 mb-4">
                      <span
                        class="px-4 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold flex items-center gap-2"
                      >
                        <i class="fas fa-star"></i>
                        Featured Launch
                      </span>
                      <span
                        class="px-4 py-1.5 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold"
                      >
                        Go
                      </span>
                    </div>
                    <h3 class="text-3xl font-bold mb-3 leading-tight">
                    ${dataUpcoming[0].name}
                    </h3>
                    <div
                      class="flex flex-col xl:flex-row xl:items-center gap-4 mb-6 text-slate-400"
                    >
                      <div class="flex items-center gap-2">
                        <i class="fas fa-building"></i>
                        <span> ${
                          dataUpcoming[0].launch_service_provider.name
                        }</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <i class="fas fa-rocket"></i>
                        <span> ${dataUpcoming[0].name.split(" ")[0]}</span>
                      </div>
                    </div>
                    <div
                      class="inline-flex items-center gap-3 px-6 py-3 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-xl mb-6"
                    >
                      <i class="fas fa-clock text-2xl text-blue-400"></i>
                      <div>
                        <p class="text-2xl font-bold text-blue-400">${diffDays}</p>
                        <p class="text-xs text-slate-400">Days Until Launch</p>
                      </div>
                    </div>
                    <div class="grid xl:grid-cols-2 gap-4 mb-6">
                      <div class="bg-slate-900/50 rounded-xl p-4">
                        <p
                          class="text-xs text-slate-400 mb-1 flex items-center gap-2"
                        >
                          <i class="fas fa-calendar"></i>
                          Launch Date
                        </p>
                        <p class="font-semibold"> ${datePart}</p>
                      </div>
                      <div class="bg-slate-900/50 rounded-xl p-4">
                        <p
                          class="text-xs text-slate-400 mb-1 flex items-center gap-2"
                        >
                          <i class="fas fa-clock"></i>
                          Launch Time
                        </p>
                        <p class="font-semibold">${timePart}  UTC</p>
                      </div>
                      <div class="bg-slate-900/50 rounded-xl p-4">
                        <p
                          class="text-xs text-slate-400 mb-1 flex items-center gap-2"
                        >
                          <i class="fas fa-map-marker-alt"></i>
                          Location
                        </p>
                        <p class="font-semibold text-sm">${
                          dataUpcoming[0].pad.location.name
                        } </p>
                      </div>
                      <div class="bg-slate-900/50 rounded-xl p-4">
                        <p
                          class="text-xs text-slate-400 mb-1 flex items-center gap-2"
                        >
                          <i class="fas fa-globe"></i>
                          Country
                        </p>
                        <p class="font-semibold">${
                          dataUpcoming[0].pad.country.name
                        }</p>
                      </div>
                    </div>
                    <p class="text-slate-300 leading-relaxed mb-6">
                    ${dataUpcoming[0].mission.description}
                    </p>
                  </div>
                  <div class="flex flex-col md:flex-row gap-3">
                    <button
                      class="flex-1 self-start md:self-center px-6 py-3 bg-blue-500 rounded-xl hover:bg-blue-600 transition-colors font-semibold flex items-center justify-center gap-2"
                    >
                      <i class="fas fa-info-circle"></i>
                      View Full Details
                    </button>
                    <div class="icons self-end md:self-center">
                      <button
                        class="px-4 py-3 bg-slate-700 rounded-xl hover:bg-slate-600 transition-colors"
                      >
                        <i class="far fa-heart"></i>
                      </button>
                      <button
                        class="px-4 py-3 bg-slate-700 rounded-xl hover:bg-slate-600 transition-colors"
                      >
                        <i class="fas fa-bell"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="relative">
                  <div
                    class="relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-slate-900/50"
                  >
                    <!-- Placeholder image/icon since we can't load external images reliably without correct URLs -->
<img
  /* يحاول تحميل الصورة من الـ API أولاً */
  src="${dataUpcoming[0].image?.url || dataUpcoming[0].image?.image_url || ""}" 
  class="h-full w-full object-cover"
  /* إذا الرابط مشغال أو فيه مشكلة، يغير المصدر فوراً لصورتك */
  onerror="this.onerror=null; this.src='https://images.indianexpress.com/2025/08/spacex-launch.jpg?w=1200';"
  alt="Launch Image"
/>
                  </div>
                </div>
              </div>
            </div>
  
  `;
}

function handleData(dataUpcoming) {
  let date = new Date(dataUpcoming[0].net);

  // التاريخ
  let datePart = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  // الوقت
  let timePart = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "UTC",
  });
  let targetDate = new Date(dataUpcoming[0].net);
  let today = new Date();

  // فرق الوقت بالمللي ثانية
  let diffTime = targetDate - today;

  // تحويله لأيام
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays == 0) {
    diffDays = "today";
  } else if (diffDays < 0) {
    diffDays = "past";
  } else {
    diffDays = diffDays;
  }

  return [diffDays, datePart, timePart];
}

