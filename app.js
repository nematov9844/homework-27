

function darkTheme(){
    let element = document.body;
    element.classList.toggle("dark-mode");

}

function btn(){
    let element= document.querySelector(".nav-item")
    element.classList.toggle("btn")
}

let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("header__shrink");
  } else {
    header.classList.remove("header__shrink");
  }
});

function auth(){
  let element = document.querySelector(".nav-action");
  element.classList.toggle("auth")
}

function toggle(){
  let element = document.querySelector(".nav-item");
  element.classList.toggle("toggle")
}