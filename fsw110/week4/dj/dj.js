var square = document.getElementById("square")
square.style.backgroundColor = "grey"

function blue() {
    square.style.background = "blue"
}
square.addEventListener("mouseover" , blue)

function red() {
    square.style.background = "red"
}
square.addEventListener("mousedown" , red)

function yellow() {
    square.style.background = "yellow"
}
square.addEventListener("mouseover")

function green() {
    square.style.background = "green"
}
square.addEventListener("dblclick" , green)

function orange() {
    document.body.style.backgroundColor = "orange"
}
document.body.addEventListener("scroll" , orange)

keypress = (e) => {
    if(e.which === 66) {
        square.style.backgroundColor = "blue"
    }
}
document.addEventListener("keydown", keypress);




