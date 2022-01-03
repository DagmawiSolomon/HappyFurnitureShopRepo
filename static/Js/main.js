var hamBurger = document.querySelector('.menu')
var navMenu = document.querySelector('.link-container')
var navLink = document.querySelectorAll('.nav-link')
hamBurger.addEventListener('click', function(){
    navMenu.classList.toggle("active")
    hamBurger.classList.toggle('active')
})
function linkAction(){
    navMenu.classList.remove("active")
    hamBurger.classList.remove("active")
}
navLink.forEach(n => n.addEventListener('click', linkAction));
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)
function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 20
        const sectionId = current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.link-container a[href*=' + sectionId + ']').classList.add('current-section')
        }
        else{
            document.querySelector('.link-container a[href*=' + sectionId + ']').classList.remove('current-section')
        }
    })
}
scrollActive()
window.onscroll = ()=>{
    const nav = document.getElementById('navbar')

    if(this.scrollY >= 200) nav.classList.add('scroll-header');else nav.classList.remove('scroll-header')
}