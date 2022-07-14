
let countEl = document.getElementById("count-el")
let saveEl= document.getElementById("save-el")
let restart = document.getElementById("increment-btn")


let count = 0
function increment() {
    count = count + 1
    countEl.textContent = count
  
}

function save(){
    let countstr = count + "- "
    saveEl.textContent +=" " + countstr
    countEl.textContent = 0
    count = 0
}

