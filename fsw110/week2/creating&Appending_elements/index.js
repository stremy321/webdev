var newh1 = document.createElement("h1")
newh1.textContent = "Welcome to my JS site"
var newP = document.createElement("p")
newP.textContent = "All of this was created with Javascript"


document.body.append(newol)
var newLi = document.createElement("li")
newLi.textContent = "blue"
var myList = document.getElementById("colors")
myList.prepend(newLi)

document.body.append(newol)
var newLi = document.createElement("li")
newLi.textContent = "purple"
var myList = document.getElementById("colors")
myList.prepend(newLi)

document.body.append(newol)
var newLi = document.createElement("li")
newLi.textContent = "green"
var myList = document.getElementById("colors")
myList.prepend(newLi)



