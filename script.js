const hamBtn = document.querySelector("#hamBtn")
const navBar = document.querySelector('.navbar ul')
const logo = document.querySelector('.logo')
const topBar = document.querySelector('.navbar')


hamBtn.addEventListener('click' , () =>{
    
    hamBtn.classList.toggle('close');

    navBar.classList.toggle('active');

    document.body.classList.toggle('overflow')

    logo.classList.toggle('change')

})

window.addEventListener("scroll", () => {
    topBar.classList.toggle("sticky", window.scrollY > 50);
})




const thumbnails = document.querySelectorAll('.thumbnails img')
var main = document.querySelectorAll('.main')

var i;


    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () =>{
            (main[0].src) = thumbnail.src;
        })
    })




