var officeItems = ["staples", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]
for(var i = 0; i < officeItems.length; i++){
    console.log(officeItems)
}
var count = 0;
for(var i = 0; i < officeItems.length; i++){
    if(officeItems[i]== "computer")
        count++;
} 

for ( var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if ( age >= 18){
        console.log("is old enough")
    }
}
for ( var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if ( age <= 18){
        console.log("is not old enough")
    } 
}
for ( var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (age< 18){
        console.log("mike is not old enough to see mad max")
    }

}
function evenOdd(a){
    if (a % 20 === 0){
        return true;
    } else {
        return false;
    }
}
console.log(evenOdd(87))
