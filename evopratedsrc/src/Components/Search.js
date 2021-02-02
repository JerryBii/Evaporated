import React, { useState } from "react"
import "./ComponentCSS/SearchStyle.css"
import {withRouter } from "react-router-dom"

function Search(props) {
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
            .then(response => {
                if (response.responseText === "") {
                    props.history.push("/NotFound")
                } else {
                    let playtime = 0

                    for (let i = 0; i < response.responseText.length; i++) {
                        playtime += response.responseText[i].playTime
                    }
                    props.setPlayTime(playtime)
                    props.history.push("/Result")

                }


            })


        event.preventDefault()
    }

    return (
        <div>
            <h1 className="evaporate">EVAPORATE</h1>
                <form className="searchBar" onSubmit={(event) => handleSubmit(event)}>
                    <input
                        type="test"
                        value={steamID}
                        placeholder="Enter your Steam ID..."
                        onChange={(event) => {
                            setSteamID(event.target.value)
                        }
                        }
                    />
                    <button>🢂</button>
                </form>
        </div >
    );
}

export default withRouter(Search)