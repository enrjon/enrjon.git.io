const projTabs = document.querySelectorAll('.folder ul a');
const ss = document.querySelectorAll('.folder ul a')[0];
const qb = document.querySelectorAll('.folder ul a')[1];
const kg = document.querySelectorAll('.folder ul a')[2];
const np = document.querySelectorAll('.folder ul a')[3];

var showToggle = function(event){
    for(i of projTabs){

        i.classList.remove('active');
        var hide = document.getElementById(i.text);
        hide.classList.remove('active');
    }
}
ss.addEventListener("click", () => {
    showToggle();
    var show = document.getElementById(ss.text);
    show.classList.toggle('active');
    document.querySelectorAll('.folder ul a')[0].classList.toggle('active');
});
qb.addEventListener("click", () => {
    showToggle();
    var show = document.getElementById(qb.text);
    show.classList.toggle('active');
    document.querySelectorAll('.folder ul a')[1].classList.toggle('active');
});
kg.addEventListener("click", () => {
    showToggle();
    var show = document.getElementById(kg.text);
    show.classList.toggle('active');
    document.querySelectorAll('.folder ul a')[2].classList.toggle('active');
});
np.addEventListener("click", () => {
    showToggle();
    var show = document.getElementById(np.text);
    show.classList.toggle('active');
    document.querySelectorAll('.folder ul a')[3].classList.toggle('active');
});
