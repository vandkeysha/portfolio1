// Toogle navbar

let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    // remove toogle icon
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}

// type js
const typed = new Typed('.multiple-text', {
    strings: ['Aspiring Software Engineer', 'UI UX Designer', 'Product Manager'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
  });


