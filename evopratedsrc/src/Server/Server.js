const express = require('express')
const cors = require('cors')
const bodyparser = require("body-parser")
const app = express();
const port = process.env.PORT || 3001

const SteamAPI = require('steamapi')
const steam = new SteamAPI('81AEBD367EF5879D939444C6B3386C25')

app.use(cors())
app.use(bodyparser())


app.post("/api/evaporated", async (req, res) => {

    steam.resolve('https://steamcommunity.com/id/' + req.body.steamID).then(id => {
        steam.getUserOwnedGames(id).then(summary => {
            console.log(summary);
            res.send({ responseText: summary, status: 200 })
        }).catch(() =>{
            res.send({ responseText: "", status: 200 })
        })
    }).catch(() =>{
        res.send({ responseText: "", status: 200 })
    })
})

app.listen(port, () => console.log(`Listening on port ${port}!`))