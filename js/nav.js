const desktopNavWrapper = document.querySelector('.js-navigation')
const btnsNavContainer = document.querySelector('.btns-nav-container')
const mobileNavWrapper = document.querySelector('.mobile-nav-wrapper')
const pageDocument = document.querySelector('.hero-content-wrapper')
const nav = document.querySelector('header')
//Buttons
const hamburgerMenuBtn = document.querySelector('.hamburger-btn')
const navLinks = document.querySelectorAll('.nav-link')

const checkWidth = () => {
    const width = window.innerWidth

    if(width < 750){
        mobileNavWrapper.append(btnsNavContainer)
    }else{
        desktopNavWrapper.append(btnsNavContainer)
    }
}

// const hiddenNav = () => {
//     let topValue = scrollY
//     if(topValue >= 686){
//         nav.style.opacity = 0;
//     }else{
//         nav.style.opacity = 1;  
//     }
// }

checkWidth()
window.addEventListener('resize', checkWidth)
// window.addEventListener('scroll', hiddenNav)

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNavWrapper.classList.remove('showMobileNav')
    })
})

hamburgerMenuBtn.addEventListener('click', () => {
    mobileNavWrapper.classList.toggle('showMobileNav')
})

pageDocument.addEventListener('click', () => {
    if(mobileNavWrapper.classList.contains('showMobileNav')){
        mobileNavWrapper.classList.remove('showMobileNav')
    }
})