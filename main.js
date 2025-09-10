
let trilho = document.getElementById('trilho')

let body = document.querySelector('body')

let a = document.querySelectorAll('a')

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
    a.classList.toggle('dark')
})