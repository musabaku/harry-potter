let num1 = Math.ceil(Math.random()*10)
let num2 = Math.ceil(Math.random()*10)
let corctans = num1 * num2

let inputEl = document.getElementById("input")
let formEl = document.getElementById("form")
let questionEl = document.getElementById("question")
let scoreEl = document.getElementById("score")

let score = JSON.parse(localStorage.getItem("score"))

if(!score){
    score = 0
}
questionEl.innerText = `What is ${num1} multiply by ${num2}`
scoreEl.innerText = `Score : ${score}`


formEl.addEventListener("submit",()=>{
    let userInput = +inputEl.value

    if(corctans === userInput){
        score++
        localstor()
    }
    else{
        score--
        localstor()
     }
})

function localstor(){
    localStorage.setItem("score",JSON.stringify(score))
}