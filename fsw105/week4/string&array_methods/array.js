var arrofFruit = ["banana" , "apple" , "orange " , "watermelon"];
var arrofVegetables = ["carrot" , "tomato" , "pepper" , "lettuce"];

arrofVegetables.pop()
console.log(arrofVegetables)

arrofFruit.shift()
console.log(arrofFruit)

var orangeIndex = arrofFruit.indexOf("orange")
console.log(orangeIndex)

arrofFruit.push("orange")
console.log(arrofFruit)

function myFunction() {
    var arrofVegetables = ["carrot" , "tomato" , "pepper" , "lettuce"];
}
arrofVegetables.push(" ")
 console.log(arrofVegetables)

var arrofFruit = ["banana" , "apple" , "orange " , "watermelon"]
var arrofVegetables = ["carrot" , "tomato" , "pepper" , "lettuce"]
var newArr = arrofFruit.concat(arrofVegetables)
console.log(newArr)

var newArr = newArr.slice(4, 2)
console.log(newArr)


var splitnewArr = newArr.split("")
var reversedArr = splitnewArr.reverse()
var reversednewArr = reversedArr.join("")

var allAtOnce = newArr.split("").reverse().join("")
console.log(allAtOnce)

var newArr = "newArr"
    var splitnewArr = newArr.split("")
    var joinednewArr = splitnewArr.join("")
    console.log(joinedName)
 


    