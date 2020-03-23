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
    FirstName: "Lord", 
    LastName: "Voldemort", 
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

app.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty = bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedBounty)
})


app.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Successfully deleted bounty!")
})






app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})