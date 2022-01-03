var hamBurger = document.querySelector('.hamburger')
var navMenu = document.querySelector('.nav-menu')
var navLink = document.querySelectorAll('.nav-link')
hamBurger.addEventListener('click', function(){
    hamBurger.classList.toggle("active")
    navMenu.classList.toggle('active')
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
        const sectionTop = current.offsetTop - 50
        const sectionId = current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-item a[href*=' + sectionId + ']').classList.add('current')
        }
        else{
            document.querySelector('.nav-item a[href*=' + sectionId + ']').classList.remove('current')
        }
    })
}
scrollActive()

window.onscroll = ()=>{
    const nav = document.getElementById('navbar')
    if(this.scrollY >= 120) nav.classList.add('scroll-header');else nav.classList.remove('scroll-header')
}

