import React, { useState } from "react"

function Search({render}) {
    const [steamID, setSteamID] = useState('')

    function handleSubmit(event) {


        fetch("http://localhost:3001/api/evaporated", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ steamID: steamID })
        })
        .then(response => response.json())
        .then(response => console.log(response.responseText)
        )
        

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