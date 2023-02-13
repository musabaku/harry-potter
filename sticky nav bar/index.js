let navbarEl = document.querySelector(".navbar")
let bottomEl = document.querySelector(".bottom-container")
window.addEventListener("scroll",()=>{
    if(window.scrollY > bottomEl.offsetTop - 50 - navbarEl.offsetHeight){
        navbarEl.classList.add("active")
    }
    else{
        navbarEl.classList.remove("active")

    }
})