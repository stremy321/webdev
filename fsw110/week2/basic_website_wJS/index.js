document.createElement("h1")
newh1.textContent = "Jess Food Truck"
document.body.append(newh1)
newh1.style.textAlign = "center"

var newLi = document.createElement("li")
newLi.textContent = "Jamaican Jerk Chicken Pasta"
var menu = document.getElementById("menu")
menu.prepend(newLi)

var newLi = document.createElement("li")
newLi.textContent = "Shrimp Tacos"
var menu = document.getElementById("menu")
menu.prepend(newLi)

var newLi = document.createElement("li")
newLi.textContent = "Chicken and Waffle Egg Roll"
var menu = document.getElementById("menu")
menu.prepend(newLi)


var newP = document.createElement("p")
newP.textContent = "We offers you the best selection in gourmet street food. To name a few we have:"
document.body.append(newP)

document.createElement("footer")
newh1.textContent = "Enjoy!!!"
document.body.append(newh1)
newh1.style.textAlign = "center"