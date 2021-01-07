const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');
const bodyParser = require('body-parser')
const fetch = require('axios')
app.use(bodyParser());
app.use(cors());

app.get("/api/evaporated", async (req, res) => {
    console.log("hi")
    fetch.get('http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=81AEBD367EF5879D939444C6B3386C25&steamids=76561197960435530')
        .then(response => {
            console.log(response.data.response.players[0].steamid);
            res.send({responseText: response.data.response.players, status: 200});  
        })      
})

app.listen(port, () => console.log(`Listening on port ${port}!`))