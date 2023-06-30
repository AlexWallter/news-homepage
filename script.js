const bars = document.querySelector('#bars')
const closebtn = document.querySelector('#close')
const links = document.querySelector('#links')
const body = document.querySelector('body')

bars.addEventListener('click', ()=> {
    links.classList.add('visible')
})

closebtn.addEventListener('click', ()=> {
    links.classList.remove('visible')
})