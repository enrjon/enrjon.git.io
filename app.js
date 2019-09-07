const icon = document.querySelector('.icon');
const navLeft = document.querySelector('.nav-left');
const navTabs = document.querySelectorAll('.nav-tab a');

const navFolder = document.querySelector('.folder');
const navForms = document.querySelectorAll('.hforms');

if(icon){
    icon.addEventListener("click", () => {
        if(navLeft){
            navLeft.classList.toggle("open");
            var i;
            for (i = 0; i < navTabs.length; i++) {
              navTabs[i].classList.toggle("show");
            }

        } else if(navFolder){
            navFolder.classList.toggle("open");
        }

    });
}
