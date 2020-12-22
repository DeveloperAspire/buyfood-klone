let menuBar = document.querySelector('#menu');
let cancel = document.querySelector('#cancel');
let mobileNav = document.querySelector('.mobile-nav')

menuBar.addEventListener('click', () =>{
    mobileNav.classList.add('show')    
})

cancel.addEventListener('click', () =>{
    mobileNav.classList.remove('show')    
})

