const hamburger = document.querySelector('.icon');
const navLeft = document.querySelector('.nav-left');
const navFolder = document.querySelector('.folder');
const navForms = document.querySelectorAll('.hforms');
const navTabs = document.querySelectorAll('.nav-left li');

if(hamburger){
    hamburger.addEventListener("click", () => {
        if(navLeft){
            navLeft.classList.toggle("open");
        } else if(navFolder){
            navFolder.classList.toggle("open");
        }

    });
}
