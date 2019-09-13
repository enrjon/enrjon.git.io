const icon = document.querySelector('.icon');
const navLeft = document.querySelector('.nav-left');
const navTabs = document.querySelectorAll('.nav-tab a');

icon.addEventListener("click", () => {
    navLeft.classList.toggle("open");
    var i;
    for (i = 0; i < navTabs.length; i++) {
      navTabs[i].classList.toggle("show");
    }
});
