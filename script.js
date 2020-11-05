/* *****variables***** */
const bodyEl = document.querySelector("body");
const headerEl = document.querySelector("header");
const toggleSwitch = document.getElementById("toggle-switch");
const mainHeading = document.querySelector(".main-heading");
const cardEls = document.querySelectorAll(".card");
const followerCounts = document.querySelectorAll(".follower-count");
const sectionHeading = document.querySelector('.section-heading');
const dailyCounts = document.querySelectorAll(".count");

/* *****functions***** */
const toggleDarkMode = () => {
  // body
  bodyEl.classList.remove("body-light-mode");
  bodyEl.classList.add("body-dark-mode");
  // header
  headerEl.classList.remove("header-light-mode");
  headerEl.classList.add("header-dark-mode");
  // main heading
  mainHeading.classList.remove("main-heading-light-mode");
  mainHeading.classList.add("main-heading-dark-mode");
  // cards
  cardEls.forEach((cardEl) => {
    cardEl.classList.remove("card-light-mode");
    cardEl.classList.add("card-dark-mode");
  });
  // follower counts
  followerCounts.forEach((followerCount) => {
    followerCount.classList.remove("main-heading-light-mode");
    followerCount.classList.add("main-heading-dark-mode");
  });
  // section heading
  sectionHeading.classList.remove('main-heading-light-mode');
  sectionHeading.classList.add('main-heading-dark-mode');
  // daily counts
  dailyCounts.forEach((dailyCount) => {
    dailyCount.classList.remove("main-heading-light-mode");
    dailyCount.classList.add("main-heading-dark-mode");
  });
};

const toggleLightMode = () => {
  // body
  bodyEl.classList.remove("body-dark-mode");
  bodyEl.classList.add("body-light-mode");
  // header
  headerEl.classList.remove("header-dark-mode");
  headerEl.classList.add("header-light-mode");
  // main heading
  mainHeading.classList.remove("main-heading-dark-mode");
  mainHeading.classList.add("main-heading-light-mode");
  // cards
  cardEls.forEach((cardEl) => {
    cardEl.classList.remove("card-dark-mode");
    cardEl.classList.add("card-light-mode");
  });
  // follower counts
  followerCounts.forEach((followerCount) => {
    followerCount.classList.remove("main-heading-dark-mode");
    followerCount.classList.add("main-heading-light-mode");
  });
  // section heading
  sectionHeading.classList.remove('main-heading-dark-mode');
  sectionHeading.classList.add('main-heading-light-mode');
  // daily counts
  dailyCounts.forEach((dailyCount) => {
    dailyCount.classList.remove("main-heading-dark-mode");
    dailyCount.classList.add("main-heading-light-mode");
  });
};

/* *****event listeners***** */
toggleSwitch.addEventListener("change", () => {
  if (toggleSwitch.checked) {
    toggleLightMode();
  } else {
    toggleDarkMode();
  }
});
