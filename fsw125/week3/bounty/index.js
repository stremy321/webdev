const express = require("express");
const app = express()
const uuid = require("uuid/v4")

const bountyHunter = [
    {
        FirstName: "Thanos",
        LastName: "None",
        Living: "true",
        BountyAmount:"900000000",
        Type:"Villian",
        _id: uuid()
    },
    {
    FirstName: "Darth", 
    LastName: "Vader", 
    Living: "True", 
    BountyAmount: 5000, 
    Type: "Villian", 
    _id: uuid()
    }
]



app.get("/bounty", (req, res) => {
    res.send(bounty)
})


app.post("/bounty", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuid()
    bounty.push(newBounty)
    res.send(`Successfully added ${newBounty.FirstName} to the database`)
})



app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})

    


