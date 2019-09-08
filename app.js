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

const hforms = document.querySelector('.tabs');

hforms.addEventListener("click", () => {
    var i, tabcontent, tablinks;
    tabcontent = document.querySelectorAll(".hforms form");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        console.log(tabcontent[i].id);
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabcontent[1].id).style.display = "block";
    event.currentTarget.className += " active";

});
