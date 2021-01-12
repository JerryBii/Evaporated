import React, { useState } from "react"


function Search() {
    const [steamID, setSteamID] = useState('')

    function handleSubmit(event) {
        fetch("http://localhost:3001/api/evaporated", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ steamID: steamID })
        })
        .then(id => {
            console.log(id.json())
        })


        event.preventDefault()
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <input
                type="test"
                value={steamID}
                placeholder="Enter your Steam ID..."
                onChange={(event) => {
                    console.log("it works")
                    setSteamID(event.target.value)
                }
                }
            />
            <button>Evaporate!</button>
        </form>
    );
}

export default Search