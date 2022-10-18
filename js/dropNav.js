const btnFirst = document.querySelector ("#firstNav")
const listFirsy = document.querySelector ("#firstNav-list")
const magnifyingGlass = document.querySelector ('#magnifyingGlass')
const searchBox = document.querySelector ('#searchBox')
const productsBtn = document.getElementById ("productsBtn")
const btn23 = document.getElementById("btn23")
  
btnFirst.addEventListener("click", ()=>{
    listFirsy.classList.toggle('hidden')
})

function showList(a) {
    console.log(a)
    document.getElementById(`product-list-${a}`).classList.toggle("hidden")
}
 
function showNav23() {
    document.getElementById("sm-nav23").classList.toggle("hidden")
}

btn23.addEventListener('click', ()=>{
    btn23.classList.toggle('text-gray-300')
    btn23.classList.toggle('text-violet-900')
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
function nav23products() {
    document.getElementById("cont23").classList.toggle("hidden")

}

