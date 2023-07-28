let toggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");
const changingName = document.querySelector(".change");
const slogan = document.querySelector(".slogan");
const circularNav = document.getElementsByClassName("circular-list");
const container5 = document.querySelector(".container5");
const blueAssets = document.querySelector(".blue-assets");
const redAssets = document.querySelector(".red-assets");
const greenAssets = document.querySelector(".green-assets");
// const containerFloat = document.querySelector(".floating-container");
// const seeMore = document.querySelector('.see-more');
const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = () => {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

// ==============NAVBAR HIDE SCROLL=================

let prevScrollpos = window.scrollY;
window.onscroll = () => {
  let currentScrollpos = window.scrollY;
  if (prevScrollpos > currentScrollpos) {
    document.querySelector(".navbar").style.top = "0";
    for (let i = 0; i < circularNav.length; i++) {
      circularNav[i].classList.remove("hide-opacity")
    }
    toggle.classList.remove("visibility-low");
  } else {
    const condition = dropDownMenu.classList.contains("open");
    if (condition) {
      dropDownMenu.classList.toggle("open");
      toggleBtnIcon.classList = condition
        ? "fa-solid fa-bars"
        : "fa-solid fa-xmark";
    }
    for (let i = 0; i < circularNav.length; i++) {
      circularNav[i].classList.add("hide-opacity")
    }
    document.querySelector(".navbar").style.top = "-60px";
    if(menu.classList.contains("active2")){
      menu.classList.remove("active2");
    }
    toggle.classList.add("visibility-low");
  }
  prevScrollpos = currentScrollpos;
};

// =====================================================
toggle.addEventListener('mouseover', ()=>{
  toggle.classList.remove("visibility-low");
  for (let i = 0; i < circularNav.length; i++) {
    circularNav[i].classList.remove("hide-opacity")
  }
})


toggle.addEventListener("click", () => {
  menu.classList.toggle("active2");
});

window.onload = () => {
  setTimeout(() => {
    slogan.classList.remove("hide");
  }, 80);

  setTimeout(() => {
    menu.classList.add("active2");
  }, 500);
};

const features = [
  "Blogs",
  "Poems",
  "College deals",
  "Current Affairs",
  "Questionnaire",
];
let i = 0;

const featureName = (array, num) => {
  return array[num];
};

setInterval(() => {
  changingName.classList.add("changingName-hidden");
  setTimeout(() => {
    changingName.classList.remove("changingName-hidden");
    if (i === 5) {
      i = 0;
    }
    const nextName = featureName(features, i);
    changingName.textContent = nextName;
    i++;
  }, 1000);
}, 1700);

for (let i = 0; i < circularNav.length; i++) {
  const circle = circularNav[i];

  if (circle === circularNav[0]) {
    circle.classList.add("active-circle-1");
  } else if (circle === circularNav[1]) {
    circle.classList.add("active-circle-2");
  } else if (circle === circularNav[2]) {
    circle.classList.add("active-circle-3");
  } else if (circle === circularNav[3]) {
    circle.classList.add("active-circle-4");
  } else if (circle === circularNav[4]) {
    circle.classList.add("active-circle-5");
  }
}
// =================================================
// sidebar
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();
});

function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
 }
}