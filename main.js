let random = document.getElementById("random")
let all = document.getElementById("all")
let dis = document.getElementById("display")
random.addEventListener("click", randomname)
all.addEventListener("click", allnames)

let nicknames = [" Twinkle Toes ", " Crusher ", " the Scientist ", " the Coder "," the Sloth "]

function allnames(){
    let first = document.getElementById("firstname").value
    let last = document.getElementById("lastname").value
    let words = ""
    for (x = 0;x<5;x++){
        console.log(nicknames[x])
        words += first + nicknames[x] + last + "<br>"
        dis.innerHTML = words 
        }        
}

function randomname(){
    let first = document.getElementById("firstname").value
    let last = document.getElementById("lastname").value
    let randomnumber =  Math.round(Math.random() * (4))
    console.log(randomnumber)
    dis.innerHTML = first + nicknames[randomnumber] + last
}
