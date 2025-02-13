const menu = document.querySelector(".nav3");
const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", function () {
  if (menu.style.display === "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
});
