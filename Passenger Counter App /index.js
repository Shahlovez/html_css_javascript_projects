let countEl = document.getElementById("count-el")
let savelEl = document.getElementById("save-el")

// console.log(countEl)

let count = 0

function increment(){
    count += 1
    countEl.textContent = count
}
function save(){
    let countDash = count + " - "
    savelEl.textContent += countDash
    countEl.textContent = 0
    count = 0 
}
console.log(count)
