let random = document.getElementById("random")
let all = document.getElementById("all")
let dis = document.getElementById("display")
random.addEventListener("click", randomname)
all.addEventListener("click", allnames)

let nicknames = [" Twinkle Toes ", " Crusher ", " the Scientist ", " the Coder "," the Sloth "]
let asd = 0
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
    let randomnumber = Math.random();
    if (randomnumber <= 0.2){
        asd = 0
    }  else if (randomnumber <= 0.4){
        asd = 1
    }  else if (randomnumber <= 0.6){
        asd = 2
    }   else if (randomnumber <= 0.8){
        asd = 3
    }   else {
        asd = 4
    }
dis.innerHTML = first + nicknames[asd] + last
}