const navMenu = document.getElementById('nav-menu')
const navClose = document.querySelector('.nav__close')
const navToggle = document.querySelector('.nav__toggle')
const nav = document.querySelector('.nav')
const navLinks = document.querySelectorAll('.nav_list')


navToggle.addEventListener('click', () => {
    nav.classList.add('show-menu')
})

navClose.addEventListener('click', closeMenu)

function closeMenu() {
    nav.classList.remove('show-menu')
}

navLinks.forEach((item) => {
    item.addEventListener('click', closeMenu)
})