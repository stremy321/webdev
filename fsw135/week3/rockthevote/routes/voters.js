const express = require('express')
const votersRouter = express.Router()
const Voters = require('../models/issue.js')

votersRouter.get("/", (req, res, next) => {
    Voters.find((err, voters) => {
        if(err) {
            res.state(500)
            return next(err)
        }
        return res.status(200).send(voters)
    })
})

votersRouter.get("/:votersId", (req, res, next) => {
    Voters.findOne({_id: req.params.votesId}, (err, voters) => {
        if(err){
            res.status(500) 
            return next(err)
        }
        return res.status(200).send(voters)
    })
})

votersRouter.post("/", (req, res, next) => {
    const newVoters = new Voters(req.body)
    newVoters.save((err, savedVoters) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedVoters)
    })
})

votersRouter.delete("/:votersId", (req, res, next) => {
    Voters.findOneAndDelete({_id: req.params.votersId}, (err, deletedItem) => {
        if(err){
            res.status(500) 
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database`) 
    })
})

votersRouter.put("/:votersId", (req, res, next) => {
    Voters.findOneAndUpdate (
    {_id: req.params.votesId } ,
    req.body,
    { new: true } ,
    (err, updatedVoters) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedVoters)
    }  
    )
})

module.exports = votersRouter