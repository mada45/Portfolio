const burgerMenuDropdown = document.querySelector('.burger-menu-dropdown')
const burgerMenuDropdownChildren = document.querySelectorAll('.burger-menu-dropdown-link')
const burgerMenuOverlay = document.querySelector('.burger-menu-overlay')
const burgerMenu = document.querySelector('.burger-menu')
const body = document.querySelector('body')
let mediaWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width

const closeBurgerMenu = ()=>{
    burgerMenuDropdown.style.width = '0'
    burgerMenuDropdown.style.padding = '0'
    burgerMenuDropdownChildren.forEach(child => {
        child.style.display = 'none'
    })
    burgerMenuOverlay.style.display = 'none'
    body.style.overflow = 'auto'
}

burgerMenu.addEventListener('click', ()=>{
    if(burgerMenuDropdown.style.width === '50%' || burgerMenuDropdown.style.width === '33%'){
        closeBurgerMenu()
    }else if(mediaWidth<501){
        burgerMenuDropdown.style.padding = '2rem 1rem'
        burgerMenuDropdown.style.width = '50%'
        burgerMenuDropdownChildren.forEach(child => {
            child.style.display = 'block'
        })
        burgerMenuOverlay.style.display = 'block'
        burgerMenuOverlay.addEventListener('click', closeBurgerMenu)
        body.style.overflow = 'hidden'
    }else{
        burgerMenuDropdown.style.padding = '2rem 1rem'
        burgerMenuDropdown.style.width = '33%'
        burgerMenuDropdownChildren.forEach(child => {
            child.style.display = 'block'
        })
        burgerMenuOverlay.style.display = 'block'
        burgerMenuOverlay.addEventListener('click', closeBurgerMenu)
        body.style.overflow = 'hidden'
    }
})

