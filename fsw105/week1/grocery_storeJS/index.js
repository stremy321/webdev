var shopper = {
  firstname: "Lenny",
  lastname: "Drayton",
  age: 19,
  ishealthy: false,
  department: ["meat", "bakery", "seafood", "grocery"],
  listofitems: {
    meat: chicken,
    bakery: muffins,
    seafood: shrimp,
    grocery: tea
    fullName : function() {
      console.log(this.firstName + "listofitems " + this.lastname)
      console.log(shopper)
      
    }
    
  }


}