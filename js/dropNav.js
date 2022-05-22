const btnFirst = document.querySelector ("#firstNav")
const listFirsy = document.querySelector ("#firstNav-list")
const magnifyingGlass = document.querySelector ('#magnifyingGlass')
const searchBox = document.querySelector ('#searchBox')

btnFirst.addEventListener('click', ()=>{
    listFirsy.classList.toggle('hidden')
})

magnifyingGlass.addEventListener('click', ()=>{
    searchBox.classList.toggle('hidden')
})