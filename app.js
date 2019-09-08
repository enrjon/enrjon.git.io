const icon = document.querySelector('.icon');
const navLeft = document.querySelector('.nav-left');
const navTabs = document.querySelectorAll('.nav-tab a');

const navFolder = document.querySelector('.folder');
const navForms = document.querySelector('.hforms');

icon.addEventListener("click", () => {
    navLeft.classList.toggle("open");
    var i;
    for (i = 0; i < navTabs.length; i++) {
      navTabs[i].classList.toggle("show");
    }
});
navFolder.addEventListener("click", () => {
    navForms.classList.toggle("open");
    var i;
    for (i = 0; i < navForms.length; i++) {
      navForms[i].classList.toggle("show");
    }
});
// navigation form switching
const hforms = document.querySelector('.tabs');
var i=0, x , tabcontent, tablinks;
tabcontent = document.querySelectorAll(".hforms form");
tablinks = document.getElementsByClassName("tab");

tablinks[0].addEventListener("click", () => {
    console.log(tablinks[0].classList);
    tabcontent[0].style.display = "initial";
    tabcontent[1].style.display = "none";
});
tablinks[1].addEventListener("click", () => {
    console.log(tablinks[1].classList);
    tabcontent[0].style.display = "none";
    tabcontent[1].style.display = "initial";
});
/* for(i=0; i < tablinks.length; i++){
    x = i==!0 ? 1 : 0;
    console.log(x);
    tablinks[i].addEventListener("click", () => {
        tabcontent[i].style.display = "initial";
        tabcontent[x].style.display = "none";
    });
} */
