let tchar = document.getElementById("total-char")
let rchar = document.getElementById("rem-char")
let textEl = document.getElementById("text-area")

let maxEl = textEl.getAttribute("maxlength")

updatechar()

textEl.addEventListener("keyup",()=>{
        
    updatechar()
})


function updatechar (){
    tchar.innerText = textEl.value.length
    rchar.innerText = maxEl -  tchar.innerText
}
// textEl.getAttribute("maxlength")