const express = require("express")
const app = express()

app.get("/movies", (req, res) => {
    res.send(
        [
            {name: "Love and Basketball", year: "2000"}, 
            {name: "The Wood", year: "1999"},
            {name: "The Notebook", year: "2004"},
            {name: "Moana", year: "2016"},
            {name: "Avengers:Endgame", year: "2019"},
        ])
})

app.get("/cars", (req, res) => {
    res.send(
        [
            {make: "Cadillac", model: "Escalade"},
            {make: "Chevy", model: "Impala"},
            {make: "Hummer", model: "H1"},
            {make: "Nissan", model: "Maxima"},
            {make: "Toyata", model: "Camry"},
        ]
    )
})

app.listen(9000), () => {
    console.log("this server is running")
}

