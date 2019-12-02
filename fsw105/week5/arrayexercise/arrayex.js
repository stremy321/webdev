const arr1 = [3, 6, 8, 2]
const result1 = arr1.filter(num => num > 5)      
console.log(result1)

const results = arr1.filter(num => num % 2 === 0)
console.log(results)


const red = ["dog", "wolf", "by", "family", "eaten", "camping"]
const result = red.filter(actors => actors.length < 5)
console.log(result)


const array = [
    {name: "Angelina Jolie", member: true },
    {name: "Eric Jones", member: false },
    {name: "Paris Hilton", member: true },
    {name: "Kanye West", member: false },
    {name: "Bob Ziroll", member: true }
]
const BelongToTheIlluminati= array.filter(celeb => celeb.member === true)
console.log(BelongToTheIlluminati)


const arr = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kanye West", age: 16 },
    { name: "Bob Ziroll", age: 100 },
]
const ofAge18 = arr.filter(seethemovie =>seethemovie.age >= 18)
console.log(ofAge18)


const num = [2, 5, 100]
const doubleNumbers = num.map(doubleNumbers => doubleNumbers * 2)
console.log(doubleNumbers)

const strings = num.map(num => String(num))
console.log(strings)


const name = ["john", "jacob", "jingleheimer", "schmidt"]
const capitalize = name.map(names => names.charAt(0).toUpperCase() + names.substr(1))
console.log(capitalize)


const celeb = [
    { name: "Angelina Jolie", age: 80},
    { name: "Eric Jones", age: 2},
    { name: "Paris Hilton", age: 5},
    { name: "Kanye West", age: 16},
    { name: "Bob Ziroll", age: 100}
]

const strings1 = celeb.map(names => String.name)
console.log(strings)

const people = celeb.map(function(old){
    if( old.age >= 18){
        return old.name + "can go to The Matrix"
    } else if(old.age < 18){
        return old.name + "is under age!!"
    }
})
console.log(people)



const PutInTheDOM = celeb.map(persons => "<h1>" + persons.name + "</h1>" + "<h2>" + persons.age + "<h2>")
console.log(PutInTheDOM)


const arrs = [1,2,3]
const total = arrs.reduce( (final, num) => final += num)
console.log(total)


const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age: 55, voted: true},
    {name:'Tami' , age: 54, voted: true},
    {name:'Mary' , age: 31, voted: false},
    {name:'Becky' , age: 43, voted: false},
    {name:'Joey' , age: 41, voted: true},
    {name:'Jeff' , age: 30, voted: true},
    {name:'Zack' , age: 19, voted: false},
]
const voteCounts = voters.reduce(function(final, voter){
    if(voter.voted){
        final++
    } 
    return final
}, 0)
console.log(voteCounts)



const List = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hack Sack", price: 5},
    { title: "Gold fidget spinner", price: 2000},
    { title: "A second Tesla Model S", price: 90000}
]

const shoppingSpree = List.reduce(function(acc, cost){
    return cost.title == "Tesla" ? acc : acc+ cost.price
}, 0)
console.log(shoppingSpree)


const single = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]
const flatten = single.reduce((a, b) => a.concat(b))
console.log(flatten)


const voter = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 33, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age: 55, voted: true},
    {name:'Tami' , age: 54, voted: true},
    {name:'Mary' , age: 31, voted: false},
    {name:'Becky' , age: 43, voted: false},
    {name:'Joey' , age: 41, voted: true},
    {name:'Jeff' , age: 30, voted: true},
    {name:'Zack' , age: 19, voted: false},
]

 const voterResults = voter.reduce(function(final, voter){
    if(voter.age <= 25 && voter.voted){
     } else {young 
     }
 console.log(voterResult) 

  
 const numbers = [1, 3, 5, 2, 90, 20]
const leastToGreatest =numbers.sort((a, b) => a - b)
console.log(leastToGreatest)

const greatestToLeast = numbers.sort((a, b) => b - a)
console.log(greatestToLeast)


const arr0 = ["dog", "wolf", "by", "family", "eaten"]
const lengthSort = arr0.sort((a, b) => a.length - b.length)
console.log(lengthSort)

const alphabetically = arr0.sort()
console.log(alphabetically)


const age = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambasssador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 },
]

const Age = age.sort((a, b) => a.age - b.age)

console.log(Age)