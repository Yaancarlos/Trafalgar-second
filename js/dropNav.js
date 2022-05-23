const btnFirst = document.querySelector ("#firstNav")
const listFirsy = document.querySelector ("#firstNav-list")
const magnifyingGlass = document.querySelector ('#magnifyingGlass')
const searchBox = document.querySelector ('#searchBox')
const productsBtn = document.getElementById ("productsBtn")

btnFirst.addEventListener('click', ()=>{
    listFirsy.classList.toggle('hidden')
})

magnifyingGlass.addEventListener('click', ()=>{
    searchBox.classList.toggle('hidden')
})

function productClick() {
    document.getElementById('productsList').classList.toggle('hidden')
    productsBtn.classList.toggle('opacity-50')
}

function phoneBtn() {
    document.getElementById("phoneList").classList.toggle("hidden")
}


